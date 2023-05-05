import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAjFhUEMfPd5rSfObOIJ5eUN9QweGXIXYk",
    authDomain: "chatapp-f7805.firebaseapp.com",
    projectId: "chatapp-f7805",
    storageBucket: "chatapp-f7805.appspot.com",
    messagingSenderId: "623109922858",
    appId: "1:623109922858:web:3f4d8c9db7d79fbb986353"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);