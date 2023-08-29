import React, {useState, useEffect, useContext} from 'react'
import "./Admin.css"
import UserContext from '../../components/Context/UserContext';

export default function Admin() {

    const [dyr, setDyr] = useState(false);
    const [subscribers, setSubscribers] = useState(false);

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [adminData, setAdminData] = useState(false);

    const { userLogin, setUserLogin } = useContext(UserContext)

    const arrayFetch = ["http://localhost:4000/api/v1/animals", "http://localhost:4000/api/v1/subscribers"]


    const animalHandler = () => {
        if (dyr) {
            setDyr(false)
        }
        if (!dyr) {
            setDyr(true)
            setSubscribers(false)
        }
    }
    const subHandler = () => {
        if (subscribers) {
            setSubscribers(false)
        }
        if (!subscribers) {
            setSubscribers(true)
            setDyr(false)
        }
    }


    useEffect(() => {
        Promise.all(
            arrayFetch.map((url) => {
                return fetch(url, {
                    headers: { "Authorization": `Bearer ${userLogin.token}` }
                })
            })
        )
        .then((responses) => {
            return Promise.all(
                responses.map((response) => {
                    return response.json()
                })
            )
        })
        .then((data) => {
            console.log(data)
            setAdminData(data)
            setLoading(false)
        })
        .catch((err) => {
            setError(true)
            setLoading(false)
        })
    }, []);


    if (error) {
        return (
            <div className='admin'>
                <h1>Error...</h1>
            </div>
        )
    }
    if (loading) {
        return (
            <div className='admin'>
                <h1>Loading...</h1>
            </div>
        )
    }
    if (!error && !loading) {
        if (!dyr && !subscribers) {
            return (
                <main className='admin'>
                    <h1>Admin</h1>
                    <button onClick={animalHandler}>Dyr</button>
                    <button onClick={subHandler}>Subribers</button>
                </main>
            )
        }

        if (dyr) {
            return (
                <main className='admin'>
                    <h1>Admin</h1>
                    <div className="admin__wrapper">
                        <button className='admin__btn' onClick={animalHandler}>Dyr</button>
                        <button className='admin__btn' onClick={subHandler}>Subribers</button>
                    </div>

                    <div className="admin__dyr">
                        {adminData[0].map((dyr) => {
                            return (
                                <div key={dyr.id} className="dyrAdmin__card">
                                    <div className="dyrAdmin__card__img" style={{backgroundImage: `url(${dyr.asset.url})`}}>

                                    </div>
                                    <div className="dyrAdmin__card__text">
                                        <h2>Navn: {dyr.name}</h2>
                                        <button className='admin__delete__btn'>Slet</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </main>
            )
        }

        if (subscribers) {
            return (
                <main className='admin'>
                    <h1>Admin</h1>
                    <div className="admin__wrapper">
                        <button className='admin__btn' onClick={animalHandler}>Dyr</button>
                        <button className='admin__btn' onClick={subHandler}>Subribers</button>
                    </div>

                    <div className="admin__subs">
                        {adminData[1].map((sub) => {
                            return (
                                <div key={sub.id} className="subsAdmin__card">
                                    <h2>Navn: {sub.name}</h2>
                                </div>
                            )
                        })}
                    </div>
                </main>
            )
        }
    }

}