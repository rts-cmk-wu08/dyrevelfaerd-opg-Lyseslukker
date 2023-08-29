import React, {useState, useEffect, useContext} from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./NavigationTop.css"
import { AiOutlineMenu, AiFillSetting } from 'react-icons/ai';
import {RxCross1} from "react-icons/rx"
import UserContext from '../../components/Context/UserContext';
import Cookies from 'js-cookie';

export default function NavigationTop() {

    const { userLogin, setUserLogin } = useContext(UserContext)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // MOBILE
    const [burgermenu, setBurgermenu] = useState(false);


    const handleInnerWidth = () => {
        setWindowWidth(window.innerWidth)
    }


    const handleBurger = () => {
        if (burgermenu) {
            setBurgermenu(false)
        }
        if (!burgermenu) {
            setBurgermenu(true)
        }
    }


    const handleLogout = () => {
        Cookies.remove('token', userLogin.token)
        Cookies.remove('user', 'admin')
        setUserLogin({
            user: false,
            token: false
        })
    }


    useEffect(() => {
        window.addEventListener("resize", handleInnerWidth)
    }, []);


    // MOBILE
    if (windowWidth < 480) {
        // OPEN
        if (burgermenu) {
            // LOGGED IN
            if (userLogin.token && userLogin.user) {
                return (
                    <div className='app'>
                        <header className='open__mobile__topNav'>
                            <nav>
                                <Link to="/">Hjem</Link>
                                <Link to="/">Om os</Link>
                                <Link to="/">Bliv Frivillig</Link>
                                <Link to="/">Dyr i nød?</Link>
                                <Link to="/">Adopter et dyr</Link>
                                <Link to="/Admin"><AiFillSetting /></Link>
                                <Link onClick={handleLogout}>Logout</Link>
                            </nav>
                            <div onClick={handleBurger} className="topNav__burger">
                                <RxCross1 />
                            </div>
                        </header>
            
                        <Outlet />
                    </div>
                )
            }
            // LOGGED OUT
            if (!userLogin.token && !userLogin.user) {
                return (
                    <div className='app'>
                        <header className='open__mobile__topNav'>
                            <nav>
                                <Link to="/">Hjem</Link>
                                <Link to="/">Om os</Link>
                                <Link to="/">Bliv Frivillig</Link>
                                <Link to="/">Dyr i nød?</Link>
                                <Link to="/">Adopter et dyr</Link>
                                <Link to="/login">Login</Link>
                            </nav>
                            <div onClick={handleBurger} className="topNav__burger">
                                <RxCross1 />
                            </div>
                        </header>
            
                        <Outlet />
                    </div>
                )
            }
        }
        // CLOSED
        if (!burgermenu) {
            return (
                <div className='app'>
                    <header className='closed__mobile__topNav'>
                        <div className="logo">
                            <img src="logo.png" alt="logo" />
                            <p>Foreningen for Dyrevelfærd</p>
                        </div>
                        <nav className="links">
                            <div onClick={handleBurger} className="links__burger">
                                <AiOutlineMenu />
                            </div>
                        </nav>
                    </header>
        
                    <Outlet />
                </div>
            )
        }
    }


    // TABLET, LAPTOP, DESKTOP
    if (windowWidth > 480) {
        if (userLogin.token && userLogin.user) {
            return (
                <div className='app'>
                    <header className='topNav'>
                        <div className="logo">
                            <img src="logo.png" alt="logo" />
                            <p>Foreningen for Dyrevelfærd</p>
                        </div>
                        <nav className="links">
                            <Link to="/">Hjem</Link>
                            <Link to="/">Om os</Link>
                            <Link to="/">Bliv Frivillig</Link>
                            <Link to="/">Dyr i nød?</Link>
                            <Link to="/">Adopter et dyr</Link>
                            <Link to="/Admin"><AiFillSetting /></Link>
                            <Link onClick={handleLogout}>Logout</Link>
                        </nav>
                    </header>
    
                    <Outlet />
                </div>
            )
        }
        if (!userLogin.token && !userLogin.user) {
            return (
                <div className='app'>
                    <header className='topNav'>
                        <div className="logo">
                            <img src="logo.png" alt="logo" />
                            <p>Foreningen for Dyrevelfærd</p>
                        </div>
                        <nav className="links">
                            <Link to="/">Hjem</Link>
                            <Link to="/">Om os</Link>
                            <Link to="/">Bliv Frivillig</Link>
                            <Link to="/">Dyr i nød?</Link>
                            <Link to="/">Adopter et dyr</Link>
                            <Link to="/login">Login</Link>
                        </nav>
                    </header>
    
                    <Outlet />
                </div>
            )
        }
    }

    
}