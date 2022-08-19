import {initializeApp} from 'firebase/app';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAo-7sJwTrQyzh0b5k2Mlva-2gcDpe8eW0",
    authDomain: "easy-3d-7e2a7.firebaseapp.com",
    projectId: "easy-3d-7e2a7",
    storageBucket: "easy-3d-7e2a7.appspot.com",
    messagingSenderId: "747242136443",
    appId: "1:747242136443:web:c98829fca6958e6ebe53de",
    measurementId: "G-FPJLJV6WZC"
  };

const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth,provider,db};
