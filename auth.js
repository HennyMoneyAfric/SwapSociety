import { auth } from "./firebase.js";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// Sign Up
export async function registerUser(email, password) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    alert("✅ Account created: " + user.user.email);
  } catch (err) {
    alert("❌ " + err.message);
  }
}

// Login
export async function loginUser(email, password) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    alert("✅ Logged in as: " + user.user.email);
  } catch (err) {
    alert("❌ " + err.message);
  }
}

// Logout
export async function logoutUser() {
  await signOut(auth);
  alert("👋 Logged out");
}