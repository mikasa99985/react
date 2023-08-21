import React from 'react'
import { useParams } from 'react-router-dom'
import {urlDecode} from '../utility/js/util'

const Profile = () => {
    const params = useParams();
    console.log('params',params);

    return (
        <>
            <h1>Profile Page <br /> Name: {urlDecode(params.name)} <br /> Id: {params.id}</h1>
        </>
    )
}

export default Profile
