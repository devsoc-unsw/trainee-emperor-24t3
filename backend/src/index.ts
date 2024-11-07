import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors'
import { InputError, AccessError } from './error';

const PORT = 5000;

// const express = require('express')
const app = express();

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
app.post('/subscribe', (req, res) => {
  // put email in database
  const email = req.body.email;
  console.log(email)

  // send back "OK"
  res.status(200);
  res.json("OK");
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})