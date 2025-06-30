// admin-check.js
import { auth, db } from './firebase-config.js'; // adapte le chemin selon ta structure
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

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

export async function redirectIfAdmin(url) {
  const isAdmin = await checkIfAdmin();
  if (isAdmin) {
    window.location.href = url;
  } else {
    alert("Accès refusé : vous n'êtes pas admin.");
  }
}
