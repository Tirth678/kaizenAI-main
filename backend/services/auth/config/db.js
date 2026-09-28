import mongoose from 'mongoose';
export async function connectDB () {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to DB!`)
    } catch (error) {
        console.log(`Cannot connect to DB, error: ${error}`);
    }
}