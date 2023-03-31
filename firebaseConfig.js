import { initializeApp } from 'firebase/app'
import Config from "react-native-config"

// Initialize Firebase
const firebaseConfig = {
  apiKey: Config.FIREBASE_API_KEY,
  authDomain: 'real-chair.firebaseapp.com',
  databaseURL: 'https://real-chair.firebaseio.com',
  projectId: 'real-chair',
  storageBucket: 'real-chair.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'real-chair',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);

