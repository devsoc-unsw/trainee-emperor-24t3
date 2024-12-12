import { InputError, AccessError } from "./error";
import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    addDoc,
    setDoc,
    doc
  } from 'firebase/firestore';
import { readFileSync } from 'fs';
import { createUserWithEmailAndPassword, getAuth, initializeAuth, signInWithEmailAndPassword } from "firebase/auth"

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
    createUserWithEmailAndPassword(auth, email, password).then(() => {
        const user = auth.currentUser

        const user_data = {
            email: email,
            password: password,
            lastLogin: Date.now()
        }

        setDoc(doc(db, 'users/' + user?.uid), user_data);
    }).catch(() => {
        throw new AccessError('Invalid credentials')
    })
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
        signInWithEmailAndPassword(auth, email, password).then(() => {
            const user = auth.currentUser

            const user_data = {
                email: email,
                password: password,
                lastLogin: Date.now()
            }

            if (user_data.password !== password) {
                throw new InputError('Invalid password');
            }

            setDoc(doc(db, 'users/' + user?.uid), user_data);

        }).catch(() => {
            throw new AccessError('Invalid credentials')
        })
        // const res: {password: string} | null = await prisma.user.findUnique({
        //     where: {
        //         id: uId.id,
        //       },
        //       select: {
        //         password: true,
        //       },
        // })

        // if (res) {
        //     if (res.password !== password) {
        //         throw new InputError('Invalid password');
        //     } else {
        //         const token = jwt.sign({ uId }, JWT_SECRET, { algorithm: 'HS256', });
        //         return { token };
        //     }
        // } else {
        //     throw new Error('Login failed...');
        // }
    }
}

export { signup, login }