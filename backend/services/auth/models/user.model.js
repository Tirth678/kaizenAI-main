import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firebaseUid: {
        type: String,
        unique: true
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    avatar: {
        type: String
    }
}, {timestamps: true})

export const userModel = mongoose.model('users', userSchema);