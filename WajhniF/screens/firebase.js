import * as firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAg5Ju2dt15ajLkQr9dHbCUdcgHXUEnuys",
    authDomain: "wajehni1.firebaseapp.com",
    databaseURL: "https://wajehni1.firebaseio.com",
    projectId: "wajehni1",
    storageBucket: "wajehni1.appspot.com",
    messagingSenderId: "980496026224",
    appId: "1:980496026224:web:135da467f5270001"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;