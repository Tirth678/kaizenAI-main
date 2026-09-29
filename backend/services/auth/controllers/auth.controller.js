import { getAuth } from 'firebase-admin/auth'
import { app } from '../config/firebase.js'
import redis from '../../../shared/redis/redis.js'
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

        const sessionId = crypto.randomUUID() // to persist login we store its id
        await redis.set(`session:${sessionId}`, JSON.stringify({
            userId:userExist._id,
            name: userExist.name,
            email: userExist.email,
            avatar: userExist.avatar
        }), "EX", 7*24*60*60) // setting sessionId in redis (expires after week)

        res.cookie("session", sessionId, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7*24*60*60*1000, // cookie expires after a week
        })

        return res.status(200).json({message: userExist})

    } catch (error) {
        return res.status(500).json({message: "Server internal error"})
    }
}

const logoutUser = async (req, res) => {
    try {
        const sessionId = req.cookies?.session
        await redis.del(`session:${sessionId}`);

        res.clearCookie("session") // clear the cookie named as 'sesion'
        return res.status(200).json({message: "logout successfull"});
    } catch (error) {
        return res.status(500).json({message: "internal error in logging out, try again later"});
    }
}

export {loginUser, logoutUser};