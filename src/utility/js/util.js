import React from 'react'
import { useEffect } from "react"
import { useRef } from "react"
import { useParams, useRouteMatch, useLocation } from 'react-router-dom'

export function filter(str) {
    str = str.replace('Firebase: ', '')
    str = str.replace('(auth/wrong-password).', '')
    str = str.replace('(auth/user-not-found).', '')
    str = str.replace('(auth/too-many-requests).', '')
    str = str.replace('(auth/weak-password).', '')
    str = str.replace('(auth/email-already-in-use).', '')
    return str;
}

export const useEffectOnce = (effect => {

    const destroyFunc = useRef();
    const calledOnce = useRef(false);
    const renderAfterCalled = useRef(false);

    if (calledOnce.current) {
        renderAfterCalled.current = true;
    }

    useEffect(() => {
        if (calledOnce.current) {
            return;
        }

        calledOnce.current = true;
        destroyFunc.current = effect();

        return () => {
            if (!renderAfterCalled.current) {
                return;
            }

            if (destroyFunc.current) {
                destroyFunc.current();
            }
        };
    }, []);
});

export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function parseTime(UNIX_timestamp, format) {
    let a = new Date(UNIX_timestamp);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = '';
    switch (format) {
        case 'full':
            time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
            break;

        case 'date':
            time = date + ' ' + month + ' ' + year;
            break;

        case 'time':
            time = hour + ':' + min + ':' + sec;
            break;

        default:
            break;
    }

    return time;
}

export function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

Object.defineProperty(String.prototype, 'capitalize', {
    value: function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
});