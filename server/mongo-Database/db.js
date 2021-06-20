import mongoose from 'mongoose';

const mongoDbConnect = () => {
  mongoose
    .connect(
      'mongodb+srv://mern-project-user:Firoz@6611@cluster0.nftrx.mongodb.net/mern-project?retryWrites=true&w=majority',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    )
    .then(() =>
      console.log(`Mongoose is connected ${mongoose.connection.host}`)
    )
    .catch((e) => console.log(`Error from: ${e}`));
};

export default mongoDbConnect;
