import React from 'react'
import { useParams, useRouteMatch, useLocation } from 'react-router-dom'
import {useQuery} from '../utility/js/util'

const Demo = () => {
    const params = useParams();
    const router = useRouteMatch();
    const location = useLocation();
    const query = useQuery();

    console.log('params',params);
    console.log('router',router);
    console.log('location',location);
    console.log('query',query.get('n'));

    return (
        <>
            <h1>Demo Page</h1>
        </>
    )
}

export default Demo
