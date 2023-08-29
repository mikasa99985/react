import React, { useEffect, useState } from 'react'
import '../utility/my_card.css'
import { Link, useHistory } from 'react-router-dom'
import { db, database, auth } from '../../firebase.config'
import { urlEncode } from '../utility/js/util'

const MyCards = () => {
    const [isLogin, setLogin] = useState(false);
    const [imageUrl, setImageUrl] = useState('https://firebasestorage.googleapis.com/v0/b/online-app-a440d.appspot.com/o/empty-profile.png?alt=media&token=9d884c2e-e9ab-4ac0-9d28-cd7ec5ba917f');
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    const history = useHistory();

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
                setLoading(false)
            });
        } else {
        }
    }, [isLogin, remove]);

    function remove(key) {
        database.ref(`users/${auth.currentUser.uid}/my_cards/${key}`).remove().then(function () {
        }).catch(function (error) {
            console.log(error);
        });
    }

    function buy(id, name, img, price) {
        // console.log({id, name, img});
        localStorage.setItem('img', img);
        history.push(`/payment?id=${id}&price=${price}&name=${name}`);
    }

    return (
        <>

            <div className="container d-flex justify-content-center py-3">
                <div className="w-100 p-8">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5 className="h5 text-xl font-bold mb-0 text-gray-900 dark:text-white">My Card</h5>
                    </div>
                    <div className="flow-root">
                        <ul className="list-unstyled divide-y divide-gray-200 dark:divide-gray-700">

                            {
                                loading ?
                                    <div className=" d-flex justify-content-center align-items-center" style={{ height: 'calc(100vh - 100px)' }}>
                                        <div className="spinner-border" style={{ width: '70px', height: '70px', borderWidth: '8px' }} role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                    :
                                    list.length == 0 ?
                                        <div className="d-flex justify-content-center align-items-center" style={{height:'calc(100vh - 100px)'}}>
                                            <h1>No data found</h1>
                                        </div>
                                        :
                                        list.map((element, index) => {
                                            return (
                                                <li key={index} className="p-4 border rounded-lg shadow-sm mb-3">
                                                    <div className="d-flex flex-column flex-sm-row align-items-center space-x-4">
                                                        <div className="flex-shrink-0" >
                                                            <img className=" rounded" style={{ width: "110px", height: "110px" }} src={element.val().img} alt="Neil image" />
                                                        </div>
                                                        <div className="flex-grow-1 my-3 my-sm-0 ms-sm-3">
                                                            <p className="h6 mb-1 text-sm font-medium text-gray-900 truncate dark:text-white m-0 ">
                                                                {element.val().name}
                                                            </p>
                                                            <div className=" mt-3">
                                                                <Link to={`/shop/${urlEncode(element.val().name)}`} className="btn btn-warning me-3">
                                                                    more
                                                                </Link>
                                                                <button onClick={() => { remove(element.key) }} className='btn btn-danger'>remove</button>
                                                            </div>
                                                        </div>
                                                        <div className="d-inline-flex align-items-center h5 font-semibold text-gray-900 dark:text-white">
                                                            ₹{element.val().price}
                                                            <button onClick={() => { buy(element.key, element.val().name, element.val().img, element.val().price) }} className='btn btn-dark ms-4'>Buy</button>
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
