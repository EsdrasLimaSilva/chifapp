import { signInWithEmailAndPassword } from "firebase/auth";
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
        console.log(user);
    } catch (e) {
        const error = e as FirebaseError;
        console.log("Error while signin in: " + error.message);
    }
}
