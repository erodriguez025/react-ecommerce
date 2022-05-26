import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCYuRR1EFhe_VAn2tgRbOHf_kHngtzltpY",
  authDomain: "ebooks-5ce25.firebaseapp.com",
  projectId: "ebooks-5ce25",
  storageBucket: "ebooks-5ce25.appspot.com",
  messagingSenderId: "1043143579738",
  appId: "1:1043143579738:web:6dcdc9c7742191cc95e063"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
