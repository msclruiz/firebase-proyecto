import firebase from "firebase";
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBkp-7-PUIEFZDpqnIMgFS5aYDxrrVcAwU",
    authDomain: "react-native-firebase-b6227.firebaseapp.com",
    projectId: "react-native-firebase-b6227",
    storageBucket: "react-native-firebase-b6227.appspot.com",
    messagingSenderId: "69860403248",
    appId: "1:69860403248:web:49ab734c73fb7db439e5f5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

  export default {
      firebase,
      db,


  }