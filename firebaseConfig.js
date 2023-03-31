import { initializeApp } from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'api-key',
  authDomain: 'real-chair.firebaseapp.com',
  databaseURL: 'https://real-chair.firebaseio.com',
  projectId: 'real-chair',
  storageBucket: 'real-chair.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'real-chair',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);

