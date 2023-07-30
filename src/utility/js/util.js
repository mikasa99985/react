import { useEffect } from "react"
import { useRef } from "react"

export function filter(str) {
    str = str.replace('Firebase: ', '')
    str = str.replace('(auth/wrong-password).', '')
    str = str.replace('(auth/user-not-found).', '')
    str = str.replace('(auth/too-many-requests).', '')
    str = str.replace('(auth/weak-password).', '')
    str = str.replace('(auth/email-already-in-use).', '')
    return str;
}

export const useEffectOnce = ( effect => {

    const destroyFunc = useRef();
    const calledOnce = useRef(false);
    const renderAfterCalled = useRef(false);

    if (calledOnce.current) {
        renderAfterCalled.current = true;
    }

    useEffect( () => {
        if (calledOnce.current) { 
            return; 
        }

        calledOnce.current = true;
        destroyFunc.current = effect();

        return ()=> {
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

Object.defineProperty(String.prototype, 'capitalize', {
    value: function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
});