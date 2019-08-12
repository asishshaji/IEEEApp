package com.davish.ieeeadmin;

import android.content.Context;
import android.net.Uri;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.FirebaseFirestore;

import java.util.HashMap;
import java.util.Map;


public class NotFragment extends Fragment implements View.OnClickListener{

    EditText body,title;
    Button submit;
    public NotFragment() {
        // Required empty public constructor
    }


    public static NotFragment newInstance(String param1, String param2) {
        NotFragment fragment = new NotFragment();
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
        View view = inflater.inflate(R.layout.fragment_not, container, false);
        submit = view.findViewById(R.id.submit);
        submit.setOnClickListener(this);
        title = view.findViewById(R.id.titleText);
        body = view.findViewById(R.id.bodyText);
        return view;

    }


    @Override
    public void onClick(View view)
    {
        switch (view.getId()) {
            case R.id.submit:
                if(title.getText().toString().length()!=0&&body.getText().toString().length()!=0) {
                    FirebaseFirestore db = FirebaseFirestore.getInstance();
                    // Create a new user with a first and last name
                    Map<String, Object> user = new HashMap<>();
                    user.put("Body",body.getText().toString() );
                    user.put("Title",title.getText().toString());
// Add a new document with a generated ID
                    db.collection("Notifications")
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




                    body.setText("");
                    title.setText("");

                }
                else
                    Toast.makeText(getActivity(), "Please enter all details", Toast.LENGTH_SHORT).show();
                break;

                // Do something
        }
    }



    // TODO: Rename method, update argument and hook method into UI event
    public void onButtonPressed(Uri uri) {

    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);

    }

    @Override
    public void onDetach() {
        super.onDetach();
    }


}
