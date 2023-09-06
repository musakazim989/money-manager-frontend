import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBrIyfCioXAt0cAi1I8SCrCKZagxKONLmQ",
  authDomain: "money-manager-b08c0.firebaseapp.com",
  projectId: "money-manager-b08c0",
  storageBucket: "money-manager-b08c0.appspot.com",
  messagingSenderId: "406493640384",
  appId: "1:406493640384:web:f6941bad64f03005e5df25",
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }
