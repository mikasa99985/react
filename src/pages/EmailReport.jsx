import React, { useEffect, useState } from 'react'
import '../utility/css/btn_glow.css'
import { database, auth } from '../../firebase.config'
import { jsonConcat } from '../utility/js/util'

const EmailReport = () => {

    const [report, setReport] = useState({
        name: '',
        email: '',
        desc: ''
    });
    const [isLogin, setLogin] = useState(false);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(false);

    let name, value;
    const getData = (even) => {
        name = even.target.name
        value = even.target.value;

        setReport({ ...report, [name]: value });
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setLogin(true);
            } else {
                setLogin(false);
            }
        });
    }, []);

    function submit(e) {
        e.preventDefault();
        setLoading(true);
        if (isLogin) {
            let report_json = jsonConcat({ userId: auth.currentUser.uid }, report);
    
            database.ref('reports/email').push().set(report_json).then(() => {
                setTimeout(() => {
                    setLoading(false);
                    setReport({
                        name: '',
                        email: '',
                        desc: ''
                    });
                    setAlert({status: true, message:'Successfully send this form'});
                }, 100);
    
            }).catch(() => {
                setLoading(false);
                setAlert({status: true, message:'This Form is not able to send'});
            });
        }else{
            setLoading(false);
            setAlert({status: false, message:'You are not login'})
        }
    }

    return (
        <>
            {
                alert ?
                    <div className={`alert ${alert.status?'alert-success':'alert-danger'} alert-dismissible fade show`} role="alert">
                        <strong>{alert.status?'Success !!!':'ERROR !!!'}</strong> {alert.message}
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    :
                    <></>
            
            }

            <div className="container my-5">
                <h1 className='text-center'>Email Report</h1>
                <form className="report-form mt-5" onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Your Name</label>
                        <input type="text" className="form-control" id="name" name='name' value={report.name} onChange={getData} placeholder="name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name='email' value={report.email} onChange={getData} placeholder="name@example.com" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Report Description</label>
                        <textarea className="form-control" id="desc" name='desc' value={report.desc} onChange={getData} rows="10" placeholder="Enter report description" required></textarea>
                    </div>
                    <div className="d-flex align-items-center">
                        <button type="submit" className="btn-cus btn-blue-glow" style={{ fontSize: "14px", padding: "14px 40px", borderRadius: "7px" }}>Submit Report</button>
                        {
                            loading ?
                                <div className="spinner-border ms-4" style={{ width: "45px", height: "45px" }} role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                :
                                <></>
                        }
                    </div>
                </form>
            </div>


        </>
    )
}

export default EmailReport
