import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();
connectDB()
const port = process.env.PORT;
const app = express();

app.get('/', async (req , res) => {
    res.json({message: "Hi from auth"})
})

app.listen(port, () => {
    console.log(`Auth active on port ${port}`);
})