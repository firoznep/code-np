import express from 'express';
import path from 'path';

const app = express();

const port = process.env.port || 5000;

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
  res.send('app is running...');
});

app.get('/test', (req, res) => {
  res.send({ id: 1, address: 'Nepal' });
});

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index'));
});

app.listen(port, () => console.log(`App is running on port: ${port}`));
