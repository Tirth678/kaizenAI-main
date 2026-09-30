import express from 'express';
import dotenv from 'dotenv';
import proxy from 'express-http-proxy';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import auth from './middleware/auth.middleware.js';
import getCurrentUser from './controller/user.controller.js'
dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

app.use(cookieParser())
app.use('/api/auth', proxy(process.env.AUTH_SERVICE))
app.get('/api/me', auth, getCurrentUser)
app.get('/', async (req, res) => {
    res.json({message: "Gateway active."})
})

app.listen(port, () => {
    console.log(`Gateway active on port ${port}`);
})