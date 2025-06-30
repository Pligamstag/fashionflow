// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
 apiKey: "AIzaSyAtjlyHBlRQy_C3HomDXLB39j9lGbLAY_Q",
    authDomain: "fashionflow-3db6b.firebaseapp.com",
    projectId: "fashionflow-3db6b",
    storageBucket: "fashionflow-3db6b.appspot.com",
    messagingSenderId: "1073693995934",
    appId: "1:1073693995934:web:9eb28e8f5176faf41edc8f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
