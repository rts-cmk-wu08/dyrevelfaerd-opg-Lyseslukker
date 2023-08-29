import React, {useState, useEffect} from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'
import Details from './pages/Details/Details'
import NavigationTop from './pages/Navigation/NavigationTop'
import Login from './pages/Login/Login'
import UserContext from './components/Context/UserContext'
import Cookies from 'js-cookie'


function App() {

  const [userLogin, setUserLogin] = useState({
    user: false,
    token: false
  });

  useEffect(() => {
    const adminToken = Cookies.get('token')
    const adminUser = Cookies.get('user')
    if (adminToken && adminUser) {
      setUserLogin({
        user: adminUser,
        token: adminToken
      })
    }
    else {
      setUserLogin({
        user: false,
        token: false
      })
    }
  }, []);

  return (
    <>
      <UserContext.Provider value={{userLogin, setUserLogin}}>
        <Routes>
          <Route path="/" element={<NavigationTop />}>
            <Route index element={<Home />} />
            <Route path="Admin" element={<Admin />} />
            <Route path="Login" element={<Login />} />
            <Route path="Details/:id" element={<Details />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </>
  )
}

export default App
