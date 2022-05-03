// import firebase from "firebase/app";
// import 'firebase/analytics';
// import 'firebase/auth';
// import 'firebase/firestore'

// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBroJMcePzDlDTZWkdFU1v5QkQHWU9EGN0",
//   authDomain: "chat-app-5637f.firebaseapp.com",
//   projectId: "chat-app-5637f",
//   storageBucket: "chat-app-5637f.appspot.com",
//   messagingSenderId: "674967413093",
//   appId: "1:674967413093:web:9f24696a462e8cb7ad818c",
//   measurementId: "G-7WYT67N1WC"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// const auth = firebase.auth();
// const db    = firebase.firestore();

// auth.useEmulator('http://localhost:9099');
// if(window.location.hostname === 'localhost'){
//   db.useEmulator('localhost', '8080');
// }

// export {auth, db};
// export default firebase;
import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBroJMcePzDlDTZWkdFU1v5QkQHWU9EGN0",
  authDomain: "chat-app-5637f.firebaseapp.com",
  projectId: "chat-app-5637f",
  storageBucket: "chat-app-5637f.appspot.com",
  messagingSenderId: "674967413093",
  appId: "1:674967413093:web:9f24696a462e8cb7ad818c",
  measurementId: "G-7WYT67N1WC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
