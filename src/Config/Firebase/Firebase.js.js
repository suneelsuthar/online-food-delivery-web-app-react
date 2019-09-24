import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyCm2-mufNMOZe0eAW2jHPAGdLX6umcFdbU",
    authDomain: "fooddelivery-web-app.firebaseapp.com",
    databaseURL: "https://fooddelivery-web-app.firebaseio.com",
    projectId: "fooddelivery-web-app",
    storageBucket: "fooddelivery-web-app.appspot.com",
    messagingSenderId: "722409726741",
    appId: "1:722409726741:web:65acf4588093f9d4663f1c"
  };
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);

