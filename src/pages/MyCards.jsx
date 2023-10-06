import React, { useEffect, useState } from 'react'
import '../utility/my_card.css'
import { Link, useHistory } from 'react-router-dom'
import { db, database, auth } from '../../firebase.config'
import { urlEncode } from '../utility/js/util'
import Banner from '../components/banner'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const MyCards = () => {
    window.scrollTo(0, 0)
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
            <Nav/>
            <Banner height='400px' img='https://indiater.com/wp-content/uploads/2021/06/fortnite-chapter-2-game-banner-free-photoshop-template-scaled.jpg'>
                <h1 className="fw-bolder">MY CARDS</h1>
            </Banner>

            <div className="container d-flex justify-content-center py-3">
                <div className="w-100 p-8">
                    <div className="flow-root">
                        <ul className="list-unstyled divide-y divide-gray-200 dark:divide-gray-700">

                            {
                                loading ?
                                    <div className=" d-flex justify-content-center align-items-center" style={{ height: 'calc(100vh - 552px)' }}>
                                        <div className="spinner-border" style={{ width: '70px', height: '70px', borderWidth: '8px' }} role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                    :
                                    list.length == 0 ?
                                        <div className="d-flex justify-content-center align-items-center" style={{ height: 'calc(100vh - 100px)' }}>
                                            <h1>No data found</h1>
                                        </div>
                                        :
                                        list.map((element, index) => {
                                            return (
                                                <li className="p-4 border rounded-lg shadow-sm mb-3 d-flex flex-column flex-md-row justify-content-between w-card">
                                                    <img className='my-card-img' src={element.val().img} alt="" />
                                                    <div className="d-flex flex-column justify-content-between w-card-my mt-5 mt-md-0">
                                                        <div className="text-my-card">
                                                            <h1>{element.val().name}</h1>
                                                            <h3>₹{element.val().price}</h3>
                                                        </div>
                                                        <div className="btn-my-card d-flex flex-column">
                                                            <button type="button" onClick={() => { buy(element.key, element.val().name, element.val().img, element.val().price) }} className="btn btn-dark d-flex justify-content-center align-items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-fill me-2" viewBox="0 0 16 16">
                                                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                                                                </svg>
                                                                BUY NOW
                                                            </button>
                                                            <Link to={`/shop/${urlEncode(element.val().name)}`} className="btn btn-warning d-flex justify-content-center align-items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-info-circle-fill me-2" viewBox="0 0 16 16">
                                                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                                                </svg>
                                                                MORE INFO
                                                            </Link>
                                                            <button type="button" onClick={() => { remove(element.key) }} className="btn btn-danger d-flex justify-content-center align-items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3-fill me-2" viewBox="0 0 16 16">
                                                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                                                </svg>
                                                                REMOVE
                                                            </button>
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
            <Footer/>
        </>
    )
}

export default MyCards



