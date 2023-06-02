import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgVRJIRYIb4ABNsom0efdWyfS_JjZdG70",
  authDomain: "react-native-firebase-aeeb5.firebaseapp.com",
  projectId: "react-native-firebase-aeeb5",
  storageBucket: "react-native-firebase-aeeb5.appspot.com",
  messagingSenderId: "2001725036",
  appId: "1:2001725036:web:b93125789b83a34a311a49"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db
