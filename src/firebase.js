import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAPLdwZ4rdcbzzVni9aQgRV8SrN_WwlMHU",
  authDomain: "disney-clone-29273.firebaseapp.com",
  projectId: "disney-clone-29273",
  storageBucket: "disney-clone-29273.appspot.com",
  messagingSenderId: "265375203824",
  appId: "1:265375203824:web:effd741632d011e975dd35",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export { auth, provider, storage };
export default db;
