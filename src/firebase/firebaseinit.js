import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBqfUBSvgW46n-j90eDnoxTIsVR7dZ27zM",
  authDomain: "weather-f0051.firebaseapp.com",
  projectId: "weather-f0051",
  storageBucket: "weather-f0051.appspot.com",
  messagingSenderId: "963098365249",
  appId: "1:963098365249:web:3930459e5a4e7ffc9065c0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
