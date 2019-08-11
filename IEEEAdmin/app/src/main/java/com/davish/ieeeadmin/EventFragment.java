package com.davish.ieeeadmin;


import android.app.ProgressDialog;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.support.annotation.NonNull;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Spinner;
import android.widget.Toast;

import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.storage.FirebaseStorage;
import com.google.firebase.storage.OnProgressListener;
import com.google.firebase.storage.StorageReference;
import com.google.firebase.storage.UploadTask;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import static android.app.Activity.RESULT_OK;


public class EventFragment extends Fragment implements View.OnClickListener {

    EditText content,date,title,venue;
    Button submit;
    ImageView imageView;
    String url;
    Uri filePath;
    String docname;
    final int PICK_IMAGE_REQUEST = 71;
    StorageReference ref;
    FirebaseStorage storage;


    public EventFragment() {
    }


    public static EventFragment newInstance(String param1, String param2) {
        EventFragment fragment = new EventFragment();
        Bundle args = new Bundle();

        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {


        // Inflate the layout for this fragment
        View view =  inflater.inflate(R.layout.fragment_event, container, false);
        //Initialize Views
        docname="123";
        imageView = view.findViewById(R.id.imgView);
        imageView.setOnClickListener(this);
        submit = view.findViewById(R.id.submit);
        submit.setOnClickListener(this);

        content = view.findViewById(R.id.conText);
        date = view.findViewById(R.id.dateText);
        title = view.findViewById(R.id.titleText);
        venue = view.findViewById(R.id.venueText);

        storage = FirebaseStorage.getInstance();

        String [] values =
                {"IEEE SB NSSCE","CS","PES","IAS","PELS","WIE","RAS",};
        Spinner spinner = view.findViewById(R.id.spinner);
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this.getActivity(), android.R.layout.simple_spinner_item, values);
        adapter.setDropDownViewResource(android.R.layout.simple_dropdown_item_1line);
        spinner.setAdapter(adapter);


        spinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            public void onItemSelected(AdapterView<?> parent, View view,
                                       int position, long id) {
                Object item = parent.getItemAtPosition(position);
                docname=item.toString();
            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {

            }
        });

        //Toast.makeText(getActivity(),content.getText().toString() , Toast.LENGTH_SHORT).show();

        return view;
    }

    @Override
    public void onClick(View view)
    {

        switch (view.getId()) {
            case R.id.submit:
                if(content.getText().toString().length()!=0&& date.getText().toString().length()!=0&&
                title.getText().toString().length()!=0&& venue.getText().toString().length()!=0&&
                filePath != null) {
                    final ProgressDialog progressDialog = new ProgressDialog(getActivity());
                    progressDialog.setTitle("Uploading...");
                    progressDialog.show();

                    ref = storage.getReference().child("images/"+ UUID.randomUUID().toString());
                    ref.putFile(filePath)
                            .addOnSuccessListener(new OnSuccessListener<UploadTask.TaskSnapshot>() {
                                @Override
                                public void onSuccess(UploadTask.TaskSnapshot taskSnapshot) {
                                    progressDialog.dismiss();
                                    ref.getDownloadUrl().addOnSuccessListener(new OnSuccessListener<Uri>() {
                                        @Override
                                        public void onSuccess(Uri uri) {
                                            url=uri.toString();
                                            Toast.makeText(getActivity(), "1", Toast.LENGTH_SHORT).show();
                                            Toast.makeText(getActivity(), "2", Toast.LENGTH_SHORT).show();
                                            FirebaseFirestore db = FirebaseFirestore.getInstance();
                                            // Create a new user with a first and last name
                                            Map<String, Object> user = new HashMap<>();
                                            user.put("Content",content.getText().toString() );
                                            user.put("Date",date.getText().toString());
                                            user.put("ImageUrl",url);
                                            user.put("Title",title.getText().toString());
                                            user.put("Venue",venue.getText().toString());
// Add a new document with a generated ID
                                            db.collection("UpcomingEvents").document(docname).collection("Events")
                                                    .add(user)
                                                    .addOnSuccessListener(new OnSuccessListener<DocumentReference>() {
                                                        @Override
                                                        public void onSuccess(DocumentReference documentReference) {
                                                            Log.d("123", "DocumentSnapshot added with ID: " + documentReference.getId());
                                                        }
                                                    })
                                                    .addOnFailureListener(new OnFailureListener() {
                                                        @Override
                                                        public void onFailure(@NonNull Exception e) {
                                                            Log.w("123", "Error adding document", e);
                                                        }
                                                    });




                                            content.setText("");
                                            title.setText("");
                                            date.setText("");
                                            imageView.setImageDrawable(getResources().getDrawable(R.drawable.ic_person_add_black_24dp));
                                            venue.setText("");

                                            //Handle whatever you're going to do with the URL here
                                        }
                                    });


                                }
                            })
                            .addOnFailureListener(new OnFailureListener() {
                                @Override
                                public void onFailure(@NonNull Exception e) {
                                    progressDialog.dismiss();
                                    Toast.makeText(getActivity(), "Failed "+e.getMessage(), Toast.LENGTH_SHORT).show();
                                }
                            })
                            .addOnProgressListener(new OnProgressListener<UploadTask.TaskSnapshot>() {
                                @Override
                                public void onProgress(UploadTask.TaskSnapshot taskSnapshot) {
                                    double progress = (100.0*taskSnapshot.getBytesTransferred()/taskSnapshot
                                            .getTotalByteCount());
                                    progressDialog.setMessage("Uploaded "+(int)progress+"%");
                                }
                            });



                }
                else if(filePath==null)
                    Toast.makeText(getActivity(), "Please add an image", Toast.LENGTH_SHORT).show();
                else
                    Toast.makeText(getActivity(), "Please enter all details", Toast.LENGTH_SHORT).show();
                break;
            case R.id.imgView:
                Intent intent = new Intent();
// Show only images, no videos or anything else
                intent.setType("image/*");
                intent.setAction(Intent.ACTION_GET_CONTENT);
// Always show the chooser (if there are multiple options available)
                startActivityForResult(Intent.createChooser(intent, "Select Picture"), PICK_IMAGE_REQUEST);
                break;

                // Do something
        }
    }

    public void image(){

    }


    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if(requestCode == PICK_IMAGE_REQUEST && resultCode == RESULT_OK
                && data != null && data.getData() != null )
        {
            filePath = data.getData();
            try {
                Bitmap bitmap = MediaStore.Images.Media.getBitmap(getActivity().getContentResolver(), filePath);
                imageView.setImageBitmap(bitmap);
            }
            catch (IOException e)
            {
                e.printStackTrace();
            }
        }
    }


    @Override
    public void onAttach(Context context) {
        super.onAttach(context);

      //  Toast.makeText(getActivity(),"4" , Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onDetach() {
        super.onDetach();
    //    Toast.makeText(getActivity(),"5" , Toast.LENGTH_SHORT).show();
    }

}
