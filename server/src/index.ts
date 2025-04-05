import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello from server!');
});

const startServer = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://lmssg_user:IZ7YJrRs59sT0Wsq@cluster0.8q04eah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );
    app.listen(5000, () => console.log('✅ Server running: http://localhost:5000'));
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error);
  }
};

startServer();
