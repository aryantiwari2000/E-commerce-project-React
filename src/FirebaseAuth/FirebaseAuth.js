import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfOfwPfroIStfVejR6hcwfYd3GCLY8pSk",
  authDomain: "mechshop-b139b.firebaseapp.com",
  projectId: "mechshop-b139b",
  storageBucket: "mechshop-b139b.appspot.com",
  messagingSenderId: "889102683835",
  appId: "1:889102683835:web:ac3ed2f3f4fb2e523da39e"
};
const app = initializeApp(firebaseConfig);

const auth= getAuth()

export{app , auth}