import { initializeApp } from "firebase/app"
import Config from "react-native-config"

import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"

// Initialize Firebase
const firebaseConfig = {
  apiKey: Config.FIREBASE_API_KEY,
  authDomain: Config.FIREBASE_AUTH_DOMAIN,
  databaseURL: Config.FIREBASE_DATABASE_URL,
  projectId: Config.FIREBASE_PROJECT_ID,
  storageBucket: Config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Config.FIREBASE_MESSAGING_SENDER_ID,
  appId: Config.FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const database = getDatabase(app)
