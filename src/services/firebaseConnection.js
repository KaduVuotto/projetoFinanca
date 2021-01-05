import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

let firebaseConfig = {
    apiKey: "AIzaSyCSvFpHC76KTmeGGZJdGaFTU4llWOREtXo",
    authDomain: "projetofinancas-b83f4.firebaseapp.com",
    databaseURL: "https://projetofinancas-b83f4-default-rtdb.firebaseio.com",
    projectId: "projetofinancas-b83f4",
    storageBucket: "projetofinancas-b83f4.appspot.com",
    messagingSenderId: "870800474610",
    appId: "1:870800474610:web:dce4ee0e80b43b0ef4ab6b",
    measurementId: "G-G2B7M3RVNC"
};

if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);


export default firebase;