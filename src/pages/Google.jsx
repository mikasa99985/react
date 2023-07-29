import React, { useEffect, useState } from "react";
import '../utility/css/Sign.css';
import { Link, useHistory } from "react-router-dom";
import '../utility/css/btn_glow.css';
import { filter } from '../utility/js/util.js'
import { db, auth } from '../../firebase.config';

const Google = () => {

    let history = useHistory();

    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState('');
    const [user, setUser] = useState({
        name: '',
        email: '',
        img: '',
        age: '',
        gender: 'male',
        phone: '',
        type: 'google'
    });

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUser((previousState) => {
                    return { ...previousState, name: user.displayName }
                });
                setUser((previousState) => {
                    return { ...previousState, email: user.email }
                });
                setUser((previousState) => {
                    return { ...previousState, img: user.photoURL }
                });
            } else {
                console.log("NO acc");
            }
        });
    }, []);

    let name, value;
    const getUserData = (even) => {
        name = even.target.name
        value = even.target.value

        setUser({ ...user, [name]: value })
    }

    function Continue(e) {
        e.preventDefault();
        setLoading(true);
        db.collection("users").doc(auth.currentUser.uid).set(user).then(() => {
            history.push('/');
            setLoading(false);
        }).catch((error) => {
            setAlert('Network ERROR!')
        });
    }

    return (
        <>
            <div className="container-sign">
                <img className="mb-3" style={{ width: '130px', borderRadius: '99px' }} src={user.img} alt="" />
                <h3 className="mb-4 text-uppercase fw-bolder">{user.name}</h3>
                <form onSubmit={(e) => { Continue(e) }} className="form-sign">

                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" value={user.age} onChange={getUserData} id="age" name="age" placeholder="0" required />
                        <label htmlFor="floatingInput">Age</label>
                    </div>

                    <div className="form-floating mb-3">
                        <select className="form-select" aria-label="Default select example" value={user.gender} onChange={getUserData} id="gender" name="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <label htmlFor="floatingInput">Gender</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" value={user.phone} onChange={getUserData} id="phone" name="phone" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Phone</label>
                    </div>

                    {
                        loading ?
                            <div className="m-auto">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            :
                            <button type="submit" className="btn-cus btn-pink-glow d-flex justify-content-center align-items-center">
                                continue
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </button>
                    }

                    {
                        alert != '' ?
                            <div className="alert alert-danger d-flex align-items-center mt-3" role="alert">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>
                                <div>
                                    <strong>ERROR!!!</strong> {alert}
                                </div>
                            </div>
                            :
                            <></>
                    }

                </form>
            </div>
        </>
    )
}

export default Google
