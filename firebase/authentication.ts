import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { FirebaseError } from "firebase/app";

export async function login(email: string, password: string) {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password,
        );

        const user = userCredential.user;
        return user;
    } catch (e) {
        const error = e as FirebaseError;
        console.log("Error while signin in: " + error.message);
    }
}

export async function logout() {
    try {
        await signOut(auth);
    } catch (e) {
        const error = e as FirebaseError;
        console.log("Error while loggin out: " + error.message);
    }
}
