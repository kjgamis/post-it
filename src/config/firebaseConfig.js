import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDtGMRkLgyz0vcqpZn_YdWQJs7xC_-B7Xc",
    authDomain: "post-it-2d806.firebaseapp.com",
    databaseURL: "https://post-it-2d806.firebaseio.com",
    projectId: "post-it-2d806",
    storageBucket: "post-it-2d806.appspot.com",
    messagingSenderId: "729363831463"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase