import express from 'express';
import path from 'path';
import mongoDbConnect from './mongo-Database/db.js';
import userModel from './mongo-Database/model/userModel.js';
import cors from 'cors';

const app = express();

mongoDbConnect();

const port = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
  res.send('app is running...');
});

app.get;
app.get('/test', (req, res) => {
  res.send({ id: 1, address: 'Nepal' });
});

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index'));
});

app.listen(port, () => console.log(`App is running on port: ${port}`));
