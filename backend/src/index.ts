import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors'
import { InputError, AccessError } from './error';
import firebaseConfig from '../fireBaseConfig.json';
import {
  initializeApp
} from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc
} from 'firebase/firestore';
import {
  readFileSync
} from 'fs';
import { login, signup } from './server';

const PORT = 5000;

const app = express();

// Setting up database
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

const db = getFirestore(firebaseApp);

app.use(cors({
    origin: (origin, callback) => {
        callback(null, true);
    },
    credentials: true
}));
app.use(express.json());

const errorHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      if (error instanceof InputError) {
        res.status(400).send({ error: error.message });
      } else if (error instanceof AccessError) {
        res.status(403).send({ error: error.message });
      } else {
        console.log(error);
        res.status(500).send({ error: 'Internal Server Error' });
      }
    }
  };

// Test route
app.get('/echo', (req, res) => {
  res.json('Hello world');
})

// Subscribe email
app.post('/subscribe', async (req, res) => {
  // put email in database
  const email = req.body.email;
  console.log(email)

  // Add to database
  const newCollect = collection(db, 'subscribers');
  await addDoc(newCollect, {email: email});

  // send back "OK"
  res.status(200);
  res.json("OK");
})


// auth functions
app.post('/auth/register', errorHandler(async (req, res) => {
  const { user, password } = req.body
  const token = await signup(user, password)
  res.json(token)
}))

app.post('/auth/login', errorHandler(async (req, res) => {
  const { user, password } = req.body
  const token = await login(user, password)
  res.json(token)
}))

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})