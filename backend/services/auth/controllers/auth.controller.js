import { getAuth } from 'firebase-admin/auth'
import { app } from '../config/firebase.js'
const loginUser = async (req, res) => {
    try {
        const { token } = req.body
        const decoded = getAuth(app).verifyIdToken(token)

        const userExist = await userModel.findOne({
            firebaseUid: decoded.uid
        })

        if(!userExist) {
            userExist = await userModel.create({
                firebaseUid: decoded.uid,
                name: decoded.name,
                email: decoded.email,
                avatar: decoded.picture
            })
        }

        const sessionId = crypto.randomUUID() // to persist login

        res.cookie("session", sessionId, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7*24*60*60*1000, // cookie expires after a week
        })

        return res.status(200).json({message: userExist})

    } catch (error) {
        return res.status(500).json({message: "locho che bhai"})
    }
}
export {loginUser};