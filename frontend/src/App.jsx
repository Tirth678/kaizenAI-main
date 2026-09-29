import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import { useEffect } from 'react';
import getCurrentUser from './features/getCurrentUser';
export default function App () {
  useEffect(() => {
    const getUser = async () => {
      await getCurrentUser()
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