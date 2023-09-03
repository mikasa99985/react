import firebase from 'firebase/compat/app';
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDstASGDfqZArOjSq1kJWOfnl1AVqxkDxo",
    authDomain: "vibrant-games.firebaseapp.com",
    databaseURL: "https://vibrant-games-default-rtdb.firebaseio.com",
    projectId: "vibrant-games",
    storageBucket: "vibrant-games.appspot.com",
    messagingSenderId: "623292021746",
    appId: "1:623292021746:web:c65b90afdc2911f426496b",
    measurementId: "G-3V86NLXYW5"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = firebase.database();
export const auth = firebase.auth();
export const db = firebase.firestore();

export var storageRef = firebase.storage().ref();
export var provider = new firebase.auth.GoogleAuthProvider();
export var providerface = new firebase.auth.FacebookAuthProvider();