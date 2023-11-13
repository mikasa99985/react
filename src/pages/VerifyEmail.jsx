import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase.config'
import { Link, useHistory } from 'react-router-dom'

export default function VerifyEmail() {
    let history = useHistory();
    const [isLogin, setLogin] = useState(false);
    // const [alert, setAlert] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            // console.log(user);
            if (user) {
                setLogin(true)
                if (auth.currentUser.emailVerified) {
                    history.push('/')
                }
                // console.log(auth.currentUser.uid);
            } else {
                console.log("NO acc");
                setLogin(false);
            }
        });
    }, [])

    function verify(){
        location.reload();
    }

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
                <h2>Verify your email</h2>
                <h3>{isLogin ? auth.currentUser.email : 'No ac'}</h3>
                <p>Verification link send to your email </p>
                <button onClick={verify} className='btn btn-dark my-4'>Continue</button>
                {/* {alert?<p className='text-danger'>email not verified</p>:<></>} */}
            </div>
        </>
    )
}
