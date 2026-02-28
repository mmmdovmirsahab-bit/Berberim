import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
apiKey:"BURAYA",
authDomain:"BURAYA",
projectId:"BURAYA"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);