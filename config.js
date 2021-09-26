import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {

  apiKey: "AIzaSyBNM0lNvdjZeGAONi4l9KK2-NxrRRuRaWw",

  authDomain: "storyhub2-ea6b8.firebaseapp.com",

  projectId: "storyhub2-ea6b8",

  storageBucket: "storyhub2-ea6b8.appspot.com",

  messagingSenderId: "8557488763",

  appId: "1:8557488763:web:dfc87a12c982a1d49650de"
  }; 
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

