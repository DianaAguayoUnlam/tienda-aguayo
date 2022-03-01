// Inicializamos Firebase para comenzar a usar los SDK de los productos.
// Este código nos permite autenticarnos en firebase.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbW_hfGLBfuPKrtCRNy4IcRB083UUCr_A",
  authDomain: "fb-tienda-a3a5f.firebaseapp.com",
  projectId: "fb-tienda-a3a5f",
  storageBucket: "fb-tienda-a3a5f.appspot.com",
  messagingSenderId: "193532425614",
  appId: "1:193532425614:web:3008f93037a445f60160df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportamos esta variable para utilizarla en todos los componentes que requieran de algún servicio de firebase.
export const db = getFirestore(app); 
