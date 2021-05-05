// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyByf8CCf1f7PdalTJW1Tvi1aF5JP1Vthj4",
  authDomain: "forms-90f49.firebaseapp.com",
  projectId: "forms-90f49",
  storageBucket: "forms-90f49.appspot.com",
  messagingSenderId: "302302134672",
  appId: "1:302302134672:web:8c23ce21432c9ecce9f315",
  measurementId: "G-NKYDN5YEK0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function login() {
  const textEmail = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(textEmail, password)
    .then((userCredential) => {
      var user = userCredential.user;
      window.location.assign("./html/hello.html");

      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Please Enter valid ID");
    });
}

function signout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.assign("../");
    })
    .catch((error) => {});
}
