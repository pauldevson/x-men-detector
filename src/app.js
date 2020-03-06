import express from 'express';
// import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mutationsRouter from './routes/mutationsRouter';

dotenv.config();

const app = express();

// const { DBConnectionString } = process.env;

// mongoose.connect(DBConnectionString, {
//   useNewUrlParser: true,
// });

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', mutationsRouter);

app.get('/', (req, res) => {
  res.json({
    books: `http${req.secure ? 's' : ''}://${req.headers.host}/api/stats`,
  });
});

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

export default app;
