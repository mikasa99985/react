import React, { useEffect, useState } from 'react'
import {database,auth} from '../../firebase.config'
import LibraryCard from '../components/LibraryCard';
import { urlEncode } from '../utility/js/util';

const Library = () => {

    const [list, setList] = useState([]);

    useEffect(()=>{
        let arr = [];
        auth.onAuthStateChanged((user) => {
            if (user) {
                database.ref(`users/${auth.currentUser.uid}/library`).once('value', (snapshot) => {
                    // console.log(snapshot);
                    snapshot.forEach(
                        function(Childsnapshot) {
                            arr.push(Childsnapshot)
                        });
                }).then(()=>{
                    setList(arr);
                });
            } else {
              console.log('not login');
            }
        });
        
    },[]);

  return (
    <>
        <h1 className='text-center my-4'>Library</h1>
      <div className="d-flex flex-wrap justify-content-center mx-auto w-res my-3">
                {
                    list.length == 0 ?
                        <div className=" d-flex justify-content-around align-items-center" style={{height:'calc(100vh - 88px)'}}>
                            <div className="spinner-border" style={{width:'70px',height:'70px', borderWidth:'8px'}} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
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
    </>
  )
}

export default Library
