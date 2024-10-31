import express, {Request, Response, NextFunction} from 'express'
import cors from 'cors'
import { InputError, AccessError } from './error';

const PORT = 5000;

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

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})