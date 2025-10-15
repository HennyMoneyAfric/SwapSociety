// main.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Paste your Firebase config here
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "swapsociety.firebaseapp.com",
  projectId: "swapsociety",
  storageBucket: "swapsociety.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// --- Handle Swap Form ---
document.getElementById('swapForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const category = e.target.category.value;
  const description = e.target.description.value;
  const link = e.target.link.value;

  await addDoc(collection(db, "swaps"), { title, category, description, link, timestamp: new Date() });
  alert("Swap submitted successfully!");
  e.target.reset();
});

// --- Handle Event Form ---
document.getElementById('eventForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const description = e.target.description.value;
  const link = e.target.link.value;

  await addDoc(collection(db, "events"), { title, description, link, timestamp: new Date() });
  alert("Event submitted successfully!");
  e.target.reset();
});