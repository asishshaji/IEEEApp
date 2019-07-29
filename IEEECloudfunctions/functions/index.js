const admin = require("firebase-admin");
const functions = require("firebase-functions");
// initializes your application
admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.pushNotification = functions.firestore
  .document("Notifications/{doc}")
  .onCreate(event => {
    var data = [];

    admin
      .firestore()
      .collection("FCMTOKENS")
      .get()
      .then(snap => {
        for (let doc of snap.docs) {
          console.log("TOKENS :" + doc.data().token);
          data.push(doc.data().token);
          admin
            .messaging()
            .sendToDevice(doc.data().token, {
              notification: {
                title: event.data().Title,
                body: event.data().Body
              }
            })
            .then(res => {
              console.log(res + " send");
            });
        }
      });

    // console.log(data);
  });
