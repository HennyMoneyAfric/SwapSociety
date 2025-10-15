import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCSSsNVclw16dcDwSctd-NpYfGhK74WCjk",
  authDomain: "swapsociety.firebaseapp.com",
  projectId: "swapsociety",
  storageBucket: "swapsociety.firebasestorage.app",
  messagingSenderId: "844684562393",
  appId: "1:844684562393:web:2af103618a3c6951ca13c8"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);