export function filter(str) {
    str = str.replace('Firebase: ', '')
    str = str.replace('(auth/wrong-password).', '')
    str = str.replace('(auth/user-not-found).', '')
    str = str.replace('(auth/too-many-requests).', '')
    str = str.replace('(auth/weak-password).', '')
    str = str.replace('(auth/email-already-in-use).', '')
    return str;
}