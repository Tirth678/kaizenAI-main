import redis from "../../shared/redis/redis.js"

const auth = async (req , res, next) => {
    try {
        const sessionId = req.cookies?.session 
        if(!sessionId){
            res.status(400).json({message: "Unauthorized"})
        }
        const session = await redis.get(`session-${sessionId}`)
        if(!session){
            res.status(400).json({message: "Session expired"})
        }
        req.user = JSON.parse(session) // parse it into JSON
        next()
    } catch (error) {
        res.status(500).json({message: "Error in authenticating session"})
    }
}
export default auth;
