import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeTLU0hd-xiho-FvUQJpxZ38ugaqp8HxU",
  authDomain: "astro-bot-3be80.firebaseapp.com",
  projectId: "astro-bot-3be80",
  storageBucket: "astro-bot-3be80.firebasestorage.app",
  messagingSenderId: "313828672190",
  appId: "1:313828672190:web:5fc116355550a7012a14ef",
  measurementId: "G-48PZYRLZC9",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("email");
googleProvider.addScope("profile");
googleProvider.setCustomParameters({ prompt: "select_account" });

export const githubProvider = new GithubAuthProvider();
githubProvider.addScope("user:email");

export function getDeviceId(): string {
  if (typeof window === "undefined") return "ssr";
  let id = localStorage.getItem("apilage_device_id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("apilage_device_id", id);
  }
  return id;
}
