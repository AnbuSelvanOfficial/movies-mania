import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { ReactNativeAsyncStorage } from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCs12F6AHJEWnluVPrCX39C0r6jzoZjkyA",
  authDomain: "moviesmania-32d75.firebaseapp.com",
  projectId: "moviesmania-32d75",
  storageBucket: "moviesmania-32d75.appspot.com",
  messagingSenderId: "986170698149",
  appId: "1:986170698149:web:1f08c97160482fde29e04c"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app,
    {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    })
const db = getFirestore();

export {
    app,
    auth,
    db
}