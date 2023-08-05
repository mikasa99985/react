import React, { useEffect, useState } from 'react'
import Tabcard from './Tabcard'
import '../../utility/css/btn_glow.css'
import { db, database } from '../../../firebase.config';

const Tab = () => {

    // let arr = ['fps', 'action', 'adventure', 'open world'];
    
    const [list, setList] = useState([]);
    const [tab, setTab] = useState('');

    useEffect(()=>{
        let arr = [];
        database.ref('tab').once('value', (snapshot) => {
            snapshot.forEach(
                function (Childsnapshot) {
                    arr.push(Childsnapshot.val())
                });
        }).then(() => {
            setList(arr);
            setTab(arr[0])
        });
    },[]);
    
    function setTabState(type) {
        // console.log(type)
        setTab(type);
    }

    return (
        <>
            <div className="mx-auto mb-4" style={{ width: '95%' }}>
                <h3 className='fw-bolder text-center mb-4'>LATEST NEWS</h3>
                <ul className="nav nav-pills flex-column flex-sm-row text-sm font-medium text-center text-gray-500 justify-content-center align-items-center">
                    {
                        list.map((element, index) => {
                            return (
                                <li key={index} className="nav-item mr-2">
                                    <button onClick={() => { setTab(element) }} className={tab == element ? "nav-link text-dark bg-light" : "nav-link text-dark"}>{element}</button>
                                </li>
                            )
                        })
                    }
                </ul>

                {
                    list.map((element, index) => {
                        return (<div key={index}>{tab == element ? <Tabcard type={element} /> : <></>}</div>)
                    })
                }

                <div className="d-flex justify-content-center mb-5" >
                    <button className="btn-cus btn-radius btn-blue-glow" >ALL NEWS</button>
                </div>
            </div>
        </>
    )
}

export default Tab
