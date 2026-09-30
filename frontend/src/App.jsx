import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import { useEffect } from 'react';
import getCurrentUser from './features/getCurrentUser';
import { useDispatch } from 'react-redux';
import { setUserData } from './redux/userSlice';
export default function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    const getUser = async () => {
      const data = await getCurrentUser()
      dispatch(setUserData(data))
    } 
    getUser()
  }, [])
  return (
    <>
   <div>
    <BrowserRouter>
    <Routes>
    <Route path='/home' element={<Home/>}> </Route>
    </Routes>
    </BrowserRouter>
   </div>
    </>
  )
}