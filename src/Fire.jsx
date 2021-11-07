import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDzPpbMmZaxE_tNrUbaNGBQtxqEHhNwsFI",
    authDomain: "user-register-e6f74.firebaseapp.com",
    databaseURL: "https://user-register-e6f74-default-rtdb.firebaseio.com",
    projectId: "user-register-e6f74",
    storageBucket: "user-register-e6f74.appspot.com",
    messagingSenderId: "132543795830",
    appId: "1:132543795830:web:ae096cdf446aefe76f8557"
  };
  
 
 export const Fire = firebase.initializeApp(firebaseConfig);

