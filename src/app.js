import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes';

dotenv.config();

const app = express();

const { XMenDBConnectionString, PORT } = process.env;

mongoose.connect(XMenDBConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);

app.get('/', (req, res) => {
  res.json({
    stats: `http${req.secure ? 's' : ''}://${req.headers.host}/api/stats`,
  });
});

const port = PORT || 8080;
app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

export default app;
