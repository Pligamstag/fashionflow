// --- GESTION DU CHOIX UTILISATEUR (Mobile/PC) ---
let userType = localStorage.getItem("userType") || null; // 'mobile' ou 'pc'

// Affiche overlay si choix non fait
function showUserTypeOverlay() {
  document.getElementById('user-type-overlay').style.display = userType ? "none" : "flex";
}
showUserTypeOverlay();

document.getElementById('choose-mobile').onclick = () => {
  userType = "mobile";
  localStorage.setItem("userType", userType);
  showUserTypeOverlay();
  adaptUI();
};
document.getElementById('choose-pc').onclick = () => {
  userType = "pc";
  localStorage.setItem("userType", userType);
  showUserTypeOverlay();
  adaptUI();
};

// --- UTILITAIRE : version mobile/pc contrôlée par userType ---
function isMobile() {
  return userType === "mobile";
}

// --- Adaptation de l'UI selon le device choisi ---
function adaptUI() {
  // Découverte
  if (!userType) return;

  // Tuto swipe
  if (isMobile()) {
    document.getElementById('swipe-btns').style.display = "none";
    document.getElementById('hint-mobile').style.display = "";
    document.getElementById('hint-pc').style.display = "none";
  } else {
    document.getElementById('swipe-btns').style.display = "flex";
    document.getElementById('hint-mobile').style.display = "none";
    document.getElementById('hint-pc').style.display = "";
  }
  // Tu peux adapter ici d'autres parties si besoin (profil, personnalisation, etc)
}

// --- Reste de TON CODE JS habituel, avec 'isMobile()' qui dépend du choix utilisateur ---

// ... (tout le JS que tu avais déjà, sans rien changer sauf la fonction isMobile() !)