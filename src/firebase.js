import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";
// import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDd3PQBHDE_VT6HqUJ3ziaQ4N6ZCpGSxac",
  authDomain: "ists-app.firebaseapp.com",
  projectId: "ists-app",
  storageBucket: "ists-app.appspot.com",
  messagingSenderId: "390413786890",
  appId: "1:390413786890:web:cbabab838de19538cea4f3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// export const db = firebaseApp.firestore();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { provider, storage };

export default firebaseApp;
