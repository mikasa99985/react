import React from 'react'
import { useParams } from 'react-router-dom'
import {useQuery} from '../utility/js/util'

const Profile = () => {
    const params = useParams();
    const query = useQuery();

    console.log('params',params);
    console.log('query',query.get('id'));

    return (
        <>
            <h1>Profile Page <br /> Name {params.name}</h1>
        </>
    )
}

export default Profile
