import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzGVimwtqaFAU_GZKPjPSd0kFwDoajMa8",

  authDomain: "dutytable-56582.firebaseapp.com",

  databaseURL:
    "https://dutytable-56582-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "dutytable-56582",

  storageBucket: "dutytable-56582.appspot.com",

  messagingSenderId: "646854519827",

  appId: "1:646854519827:web:5876d3b53b601e7aa1e3e6",
};

const firebaseApi = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApi);

export { firebaseApi, firebaseAuth };
