import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: 'AIzaSyA9CbJcHUY4sKzSG3Zv4AiTofuojY9S4jY', // This is an identification key, not a secret.
    authDomain: 'angmerica-marioplan.firebaseapp.com',
    databaseURL: 'https://angmerica-marioplan.firebaseio.com',
    projectId: 'angmerica-marioplan',
    storageBucket: 'angmerica-marioplan.appspot.com',
    messagingSenderId: '585094868304',
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
