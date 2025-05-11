import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBC7_g1NrDY9sjRF8SP4szmI4_afunZMhA",
    authDomain: "getprojects-c64f4.firebaseapp.com",
    projectId: "getprojects-c64f4",
    storageBucket: "getprojects-c64f4.appspot.com",
    messagingSenderId: "245130790215",
    appId: "1:245130790215:web:4f30ed17e73b0c734e3862",
    measurementId: "G-CX88XJ1J6G"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);