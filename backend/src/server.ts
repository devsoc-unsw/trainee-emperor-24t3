import { InputError, AccessError } from "./error";
import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    addDoc,
    setDoc,
    doc,
    updateDoc
  } from 'firebase/firestore';
import { readFileSync } from 'fs';
import { AuthErrorCodes, createUserWithEmailAndPassword, getAuth, initializeAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"

const {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
} = JSON.parse(readFileSync('./fireBaseConfig.json', 'utf-8'));

const firebaseApp = initializeApp({
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
  });

let auth = initializeAuth(firebaseApp);
auth = getAuth()

const db = getFirestore(firebaseApp);

const signup = async(email:string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
    
        const user_data = {
          email: email,
          password: password,
          lastLogin: Date.now()
        };
    
        // Store user data in Firestore (using `setDoc` since it's a new user)
        await setDoc(doc(db, 'users', user.uid), user_data);
    
      } catch (error: any) {
        if (error.code === AuthErrorCodes.INVALID_EMAIL) {
          throw new InputError('Invalid email format.');
        } else if (error.code === AuthErrorCodes.WEAK_PASSWORD) {
          throw new InputError('Password is too weak.');
        } else {
          throw new AccessError('Unable to create user.');
        }
      }
}

const login = async(email:string, password:string) => {
    if (!email) {
        throw new InputError('Must provide an email for user login');
    } else if (!password) {
        throw new InputError('Must provide a password for user login');
    }

    // const uId = await getUserIdFromEmail(email);
    if (!email === null) {
        throw new InputError('Invalid email');
    } else {
        try {
            const userCreds = await signInWithEmailAndPassword(auth, email, password)
            
            const user = userCreds.user
    
            const user_data = {
                lastLogin: Date.now()
            }

            await updateDoc(doc(db, 'users/' + user?.uid), user_data);
        }
        catch {
            if (password !== AuthErrorCodes.INVALID_PASSWORD) {
                throw new InputError('Invalid password');
            } else {
                throw new AccessError('Invalid credentials')
            }
        }
    }
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(`User ${user.email} has logged in`)
    } else {
        console.log('User has logged out')
    }
})

export { signup, login }