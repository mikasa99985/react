import React from 'react'
import { useParams } from 'react-router-dom'
import {urlDecode} from '../utility/js/util'

const Profile = () => {
    const params = useParams();
    console.log('params',params);

    return (
        <>
            {/* Do not remove */}
            <h5>Profile Page <br /> Name: {urlDecode(params.name)} <br /> Id: {params.id}</h5>

            {/* write code here */}
            {/* ===> */}
        </>
    )
}

export default Profile
