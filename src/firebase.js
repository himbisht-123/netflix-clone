import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAHbtWSdFQL0OIWe7t1n6KkGdeq-FgdIhE",
    authDomain: "netflix-clone-da859.firebaseapp.com",
    projectId: "netflix-clone-da859",
    storageBucket: "netflix-clone-da859.appspot.com",
    messagingSenderId: "1027658584777",
    appId: "1:1027658584777:web:e41c002ad9bf3a63b2f318",
    measurementId: "G-ZEEG95RKBZ"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {auth}
export default db;