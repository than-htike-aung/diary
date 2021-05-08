 
 import firebase from 'firebase'
 
 // Your web app's Firebase configuration
 var config = {
    apiKey: "AIzaSyCsUx88knVAuR1_1vv2Nb4yaqc5f6LJt5M",
    authDomain: "diary-3a8a7.firebaseapp.com",
    projectId: "diary-3a8a7",
    storageBucket: "diary-3a8a7.appspot.com",
    messagingSenderId: "273240272433",
    appId: "1:273240272433:web:ddc50e2eee08927a64af10"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export const database = firebase.database().ref('/notes')