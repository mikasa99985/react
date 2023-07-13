import React, { useEffect } from 'react'
import { database, db } from '../../firebase.config';
import Nav from '../components/nav';


const Home = () => {
  useEffect(() => {

    database.ref('data/test').on("value", function (snapshot) {
      console.log(snapshot.val());
    });

    db.collection("test collection").doc("QJhUZNdQqoAu5I0Hahsw").onSnapshot((doc) => {
      var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      console.log(source, " data: ", doc.data());
    });

  }, []);

  return (
    <>
      <Nav/>
    </>
  )
}

export default Home
