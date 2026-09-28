import { signInWithCredential, signInWithPopup } from "firebase/auth"
import { googleProvider, auth } from "../utils/firebase"

export default function App () {
  const handleLogin = async (token) => {
    try {
      const { data } = await api.post('/auth/login', token)
    } catch (error) {
    }
  }
  const googleLoin = async () => {
    const data = await signInWithPopup(auth, googleProvider);
    const token = await data.user.getIdToken();
    await handleLogin(token) // returns jwt token
    console.log(token)
    console.log(data)
  }
  return (
    <>
    <div className="w-full h-screen bg-black flex items-center justify-center">
    <button className="w-50 h-24 bg-white" onClick={googleLoin}>Continue with Google</button>
    </div>
    </>
  )
}