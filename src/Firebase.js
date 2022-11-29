// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCNevygL1j_gTc_rvEaDosPHxK9Hncy2QA',
  authDomain: 'where-is-it-9d2a3.firebaseapp.com',
  projectId: 'where-is-it-9d2a3',
  storageBucket: 'where-is-it-9d2a3.appspot.com',
  messagingSenderId: '143162163257',
  appId: '1:143162163257:web:a6704f57b66e2cc1864de8',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
