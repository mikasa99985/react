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

export function urlEncode(url) {
    return url.replaceAll(" ", "_");
}

export function urlDecode(url) {
    return url.replaceAll("_", " ");
}

export function calculateMean(numbers) {
    
    if (numbers.length === 0) {
        return 0; // Return 0 for an empty array, you can customize this behavior
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const mean = sum / numbers.length;
    return mean;
}

export function jsonConcat(o1, o2) {
    for (var key in o2) {
        o1[key] = o2[key];
    }
    return o1;
}

export function GenerateOTP(){
    return Math.floor(100000 + Math.random() * 900000);
}

// Function to calculate the final price after a percentage discount
export function calculateDiscountedPrice(originalPrice, discountPercentage) {
    if (originalPrice < 0 || discountPercentage < 0 || discountPercentage > 100) {
      return "Invalid input";
    }
  
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;
  
    return discountedPrice;
  }
  
  // Example usage
//   const originalPrice = 100;
//   const discountPercentage = 20;
  
//   const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage);
  
//   console.log(`Original Price: $${originalPrice}`);
//   console.log(`Discount Percentage: ${discountPercentage}%`);
//   console.log(`Final Price after Discount: $${finalPrice}`);

export function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
export function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
export function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}