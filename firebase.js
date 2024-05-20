// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence, inMemoryPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyA-NrF1FyrV-iGbC6mCD8BwZYK4vrCWq24",
  authDomain: "reactnativetest-af749.firebaseapp.com",
  projectId: "reactnativetest-af749",
  storageBucket: "reactnativetest-af749.appspot.com",
  messagingSenderId: "238997644023",
  appId: "1:238997644023:web:8b84b73a1b002ea1b1a9f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with in-memory persistence (no persistence)
const auth = initializeAuth(app, {
  persistence: inMemoryPersistence
});

// Initialize Firestore
const db = getFirestore(app);

export { auth, db };
