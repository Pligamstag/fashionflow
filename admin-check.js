// admin-check.js

// === CONFIG FIREBASE ===
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

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

// === Vérifie si l'utilisateur est admin ===
export async function checkIfAdmin() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const role = userDoc.data().role;
          resolve(role === "admin");
        } else {
          resolve(false);
        }
      } else {
        resolve(false);
      }
    }, reject);
  });
}

// === Redirige si admin ===
export async function redirectIfAdmin(url) {
  const isAdmin = await checkIfAdmin();
  if (isAdmin) {
    window.location.href = url;
  } else {
    alert("Accès refusé : vous n'êtes pas admin.");
  }
}
