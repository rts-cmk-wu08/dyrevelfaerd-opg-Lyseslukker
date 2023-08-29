import React, {useContext} from 'react'
import UserContext from '../../components/Context/UserContext';
import Cookies from 'js-cookie';

export default function Login() {

    const { userLogin, setUserLogin } = useContext(UserContext)


    const handleLogin = (e) => {
        e.preventDefault()

        const tempBody = {
            username: e.target.user.value,
            password: e.target.password.value
        }

        fetch("http://localhost:4000/auth/token", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tempBody)
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            // API UNIX TIMESTAMP
            const validUntil = data.validUntil
            // CURRENT TIME IN MILLIsecs
            const currentTime = new Date().getTime()
            const diff = validUntil - currentTime
            // 1000 milliseconds in a second
            // 60 seconds in a minute
            // 60 minutes in an hour
            // 24 hours in a day
            // -> = Millisec til dage until expire
            const tokenExpiration = diff / (1000 * 60 * 60 * 24)
            Cookies.set('token', data.token, { expires: tokenExpiration })
            Cookies.set('user', "admin", { expires: tokenExpiration })
            setUserLogin({
                user: "admin",
                token: data.token
            })
        })
        .catch(err => console.error(err));
    }

    


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="text" name="user" id="user" />
                <input type="password" name="password" id="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
