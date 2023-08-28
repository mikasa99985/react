import React, { useEffect, useState } from 'react'
import '../utility/my_card.css'
import { Link } from 'react-router-dom'
import { db, database, auth } from '../../firebase.config'
import {urlEncode} from '../utility/js/util'

const MyCards = () => {
    const [isLogin, setLogin] = useState(false);
    const [imageUrl, setImageUrl] = useState('https://firebasestorage.googleapis.com/v0/b/online-app-a440d.appspot.com/o/empty-profile.png?alt=media&token=9d884c2e-e9ab-4ac0-9d28-cd7ec5ba917f');
    const [list, setList] = useState([]);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setLogin(true);
            } else {
                setLogin(false);
            }
        });
    })

    useEffect(() => {
        let arr = [];
        if (isLogin) {
            database.ref(`users/${auth.currentUser.uid}/my_cards`).once('value', (snapshot) => {
                // console.log(snapshot.val());
                snapshot.forEach(
                    function (Childsnapshot) {
                        arr.push(Childsnapshot);
                    });
            }).then(() => {
                setList(arr);
            });
        } else {
        }
    }, [isLogin]);

    return (
        <>

            <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="w-100 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm p-8 dark:bg-gray-800 dark:border-gray-700 w-card">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5 className="h5 text-xl font-bold mb-0 text-gray-900 dark:text-white">Latest Customers</h5>
                        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                            View all
                        </a>
                    </div>
                    <div className="flow-root">
                        <ul className="list-unstyled divide-y divide-gray-200 dark:divide-gray-700">

                            {
                                list.map((element, index) => {
                                    return (
                                        <li key={index} className="py-3 sm:py-4 ">
                                            <div className="d-flex flex-column flex-sm-row align-items-center space-x-4">
                                                <div className="flex-shrink-0" >
                                                    <img className=" rounded" style={{ width: "110px", height: "110px" }} src={element.val().img} alt="Neil image" />
                                                </div>
                                                <div className="flex-grow-1 my-3 my-sm-0 ms-sm-3">
                                                    <p className="h6 mb-1 text-sm font-medium text-gray-900 truncate dark:text-white m-0 ">
                                                        {element.val().name}
                                                    </p>
                                                    <Link to={`/shop/${urlEncode(element.val().name)}`} className="text-sm text-gray-500 truncate dark:text-gray-400 m-0">
                                                        Link
                                                    </Link>
                                                </div>
                                                <div className="d-inline-flex align-items-center h5 font-semibold text-gray-900 dark:text-white">
                                                    ₹{element.val().price}
                                                    <button className='btn btn-dark ms-4'>Buy</button>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }



                        </ul>
                    </div>
                </div>
            </div>


        </>
    )
}

export default MyCards
