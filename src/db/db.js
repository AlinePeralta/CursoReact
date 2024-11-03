import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDySdARIu9qz8MEVOR9W1q9QaFECg_bm7E",
  authDomain: "ecommerce-ce56e.firebaseapp.com",
  projectId: "ecommerce-ce56e",
  storageBucket: "ecommerce-ce56e.appspot.com",
  messagingSenderId: "415771759034",
  appId: "1:415771759034:web:baabee548d7808a91a0d83"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
export default db;
