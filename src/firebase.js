import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDDEwIPwbzvGx9RbKa1V3-C4fMDBKRYGEQ",
    authDomain: "clone-8402c.firebaseapp.com",
    databaseURL: "https://clone-8402c.firebaseio.com",
    projectId: "clone-8402c",
    storageBucket: "clone-8402c.appspot.com",
    messagingSenderId: "696478108439",
    appId: "1:696478108439:web:cbd7c5e5603664a48e0552",
    measurementId: "G-S49MJDLM41"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }