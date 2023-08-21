import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const params = useParams();
    console.log('params',params);

    return (
        <>
            <h1>Profile Page <br /> Name: {params.name} <br /> Id: {params.id}</h1>
        </>
    )
}

export default Profile
