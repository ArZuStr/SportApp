
import { getStorage, ref} from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    "apiKey": "AIzaSyAOhBJU3TOaW67Pt5O0hdqmWvQSWAUkdWo",
    "authDomain": "sparts-app-website.firebaseapp.com",
    "projectId": "sparts-app-website",
    "storageBucket": "sparts-app-website.appspot.com",
    "messagingSenderId": "232067063522",
    "appId": "1:232067063522:web:5987ed8977ebe75e2cc8bb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const storage = getStorage(app);
