


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

const addNewUserDetails = () => {
    const db = firebase.firestore();
    db.collection("Users").add({
        "age":  age,
        "email": email,
        "lastname": lastname,
        "location": location,
        "name": name,
        "password": password,
        "preference": preference,
        "username": username,
    }).then(() => {
        console.log("New user added successfully");
    }).catch((err) => {
        console.log("error occurred while adding new user");
    });
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


