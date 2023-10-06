import React, { useEffect, useState } from 'react'
import { database, auth } from '../../firebase.config'
import LibraryCard from '../components/LibraryCard';
import { urlEncode } from '../utility/js/util';
import Nav from '../components/Nav';
import Banner from '../components/banner'
import Footer from '../components/Footer';

const Library = () => {
    window. scrollTo(0, 0)

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let arr = [];
        auth.onAuthStateChanged((user) => {
            if (user) {
                database.ref(`users/${auth.currentUser.uid}/library`).once('value', (snapshot) => {
                    snapshot.forEach(
                        function (Childsnapshot) {
                            arr.push(Childsnapshot)
                        });
                }).then(() => {
                    setList(arr);
                    setLoading(false);
                });
            } else {
                console.log('not login');
            }
        });

    }, []);

    return (
        <>
            <Nav library={true}/>
            {/* <h1 className='text-center my-4'>Library</h1> */}
            <Banner height='400px' img='https://indiater.com/wp-content/uploads/2021/06/fortnite-chapter-2-game-banner-free-photoshop-template-scaled.jpg'>
                <h1 className="fw-bolder">LIBRARY</h1>
            </Banner>
            <div className="d-flex flex-wrap justify-content-center mx-auto w-res my-3">
                {
                    loading ?
                        <div className=" d-flex justify-content-around align-items-center" style={{ height: 'calc(100vh - 88px)' }}>
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
                                    <LibraryCard
                                        key={index}
                                        img={element.val().img}
                                        title={element.val().name.length >= 25 ? element.val().name.slice(0, 25) + '...' : element.val().name}
                                        link={`/shop/${urlEncode(element.val().name)}`}
                                    />
                                )
                            })
                }
            </div>
            <Footer/>
        </>
    )
}

export default Library
