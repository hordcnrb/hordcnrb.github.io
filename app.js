// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

  // Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7XRIIWZaWoK1dNVtaaTBCna4nqDszW00",
  authDomain: "hord1-11455.firebaseapp.com",
  databaseURL: "https://hord1-11455-default-rtdb.firebaseio.com",
  projectId: "hord1-11455",
  storageBucket: "hord1-11455.appspot.com",
  messagingSenderId: "793882034504",
  appId: "1:793882034504:web:425d20c508ee426360f37d",
  measurementId: "G-YS99WT22ZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
console.log(app);

//----- Login code start
document.getElementById("login").addEventListener("click", function () {
  var email = document.getElementById("login_email").value;
  var password = document.getElementById("login_password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      alert(user.email + " Login successfully!!!");
      document.getElementById('logout').style.display = 'block';
      // Redirect to http://hord.tiiny.site/
      window.location.href = "https://hordcnrb.github.io/.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });
});
//----- End

//----- Logout code start
document.getElementById("logout").addEventListener("click", function () {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('Sign-out successful.');
    alert('Sign-out successful.');
    document.getElementById('logout').style.display = 'none';
  }).catch(() => {
    // An error happened.
    console.log('An error happened.');
  });
});
//----- End
