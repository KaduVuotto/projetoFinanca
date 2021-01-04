import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyCSvFpHC76KTmeGGZJdGaFTU4llWOREtXo",
    authDomain: "projetofinancas-b83f4.firebaseapp.com",
    projectId: "projetofinancas-b83f4",
    storageBucket: "projetofinancas-b83f4.appspot.com",
    messagingSenderId: "870800474610",
    appId: "1:870800474610:web:4e8195a2faef1469f4ab6b",
    measurementId: "G-Q741E830R5"
};

if (!firebase.app.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

export default firebase;