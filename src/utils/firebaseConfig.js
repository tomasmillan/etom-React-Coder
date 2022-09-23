// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, query, where } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGhDcdNA3gwGsq2aTPyhlROoJXzze1U14",
  authDomain: "tom-tech.firebaseapp.com",
  projectId: "tom-tech",
  storageBucket: "tom-tech.appspot.com",
  messagingSenderId: "120839204951",
  appId: "1:120839204951:web:d03475a2f3eedcf7ca7312",
  measurementId: "G-C9V5Q5QD50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firestoreFetch = async (id) => {
  let q;
  if (id) {
    q = query(collection(db, "products"), where("category", "==", id));
  } else {
    q = query(collection(db, "products"));
  }
  const querySnapshot = await getDocs(q);
  const dataFromFirebase = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return dataFromFirebase;
};

export const firestoreFetchOne = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: id,
      ...docSnap.data(),
    };
  } else {
    console.log("No such document!");
  }
};
