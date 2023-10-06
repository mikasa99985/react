import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { urlDecode } from '../utility/js/util'
import { db, storageRef, auth } from '../../firebase.config'
import { Link } from 'react-router-dom'
import { jsonConcat } from '../utility/js/util'

const Profile = () => {
    window.scrollTo(0, 0)
    const params = useParams();
    // console.log('params', params);

    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        age: '',
        img: 'https://firebasestorage.googleapis.com/v0/b/online-app-a440d.appspot.com/o/empty-profile.png?alt=media&token=9d884c2e-e9ab-4ac0-9d28-cd7ec5ba917f'
    });
    const [img, setImg] = useState();
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(false);
    const [isLogin, setLogin] = useState(false);

    let name, value;
    const getUserData = (even) => {
        name = even.target.name
        value = even.target.value

        setUser({ ...user, [name]: value })
    }

    useEffect(() => {
        db.collection("users").doc(params.id).get().then((doc) => {
            if (doc.exists) {
                setUser(doc.data());
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

        auth.onAuthStateChanged((user) => {
            if (user) {
                setLogin(true);
            } else {
                setLogin(false);
            }
        });
    }, []);

    function submit(e) {
        e.preventDefault();
        setLoading(true);
        if (img == undefined) {
            // console.log(user);
            db.collection("users").doc(params.id).update(user).then(() => {
                // console.log("Document successfully written!");
                setLoading(false);
                setAlert({ status: true, title: 'Successful!!!', sub_title: 'Document successfully written' });
            }).catch((error) => {
                // console.error("Error writing document: ", error);
                setLoading(false);
                setAlert({ status: false, title: 'ERROR!!!', sub_title: 'Some network problem' });
            });
        } else {
            // console.log(jsonConcat(user, {img: 'img'}));

            var uploadTask = storageRef.child('ProfileImg/' + Date.now()).put(img);

            uploadTask.on('state_changed',
                (snapshot) => {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    // document.getElementById('progressBar').style.width = progress+'%';
                    // console.log(progress, '%');
                },
                (error) => {
                    // Handle unsuccessful uploads
                    setLoading(false);
                    setAlert({ status: false, title: 'ERROR!!!', sub_title: 'upload failed' });
                },
                () => {
                    // document.getElementById('progress').style.display = 'none';
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        // console.log('File available at', downloadURL);
                        // console.log(downloadURL);
                        // console.log(jsonConcat(user, {img: downloadURL}));

                        db.collection("users").doc(params.id).update(jsonConcat(user, { img: downloadURL })).then(() => {
                            setLoading(false);
                            setAlert({ status: true, title: 'Successful!!!', sub_title: 'Document successfully written' });
                        }).catch((error) => {
                            setLoading(false);
                            setAlert({ status: false, title: 'ERROR!!!', sub_title: 'Some network problem' });
                        });
                    });
                }
            );
        }
    }

    return (
        <>
            {/* Do not remove */}
            {/* <h5>Profile Page <br /> Name: {urlDecode(params.name)} <br /> Id: {params.id}</h5> */}

            <div className=" d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="border rounded shadow-sm container">
                    {/* <div className="d-flex justify-content-end px-4 pt-4">
                        <button id="dropdownButton" data-bs-toggle="dropdown" className="btn btn-link text-gray-500">
                            <span className="visually-hidden">Open dropdown</span>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                        </button>

                        <div id="dropdown" className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item">Edit</a>
                            <a href="#" className="dropdown-item">Export Data</a>
                            <a href="#" className="dropdown-item text-danger">Delete</a>
                        </div>
                    </div> */}
                    <div className="d-flex flex-column align-items-center pb-6 py-5">
                        <img className="w-32 h-32 mb-2 rounded-full shadow-lg mb-5" src={user.img} width={220} height={220} alt="Bonnie image" />
                        <h1 className="mb-1 text-3xl font-semibold text-gray-900">{user.name}</h1>
                        <h4 className="mb-1 text-3xl font-semibold text-gray-900">{user.email}</h4>
                        <h4 className="mb-1 text-3xl font-semibold text-gray-900">{user.phone}</h4>
                        <div className="">
                            <span className="text-lg text-gray-500 me-2">{user.gender}</span>
                            <span className="text-lg text-gray-500">age : {user.age}</span>
                        </div>
                        <div className="mt-4 space-x-6 d-flex">
                            {
                                isLogin ?
                                    params.id == auth.currentUser.uid ?
                                        <button className="btn btn-dark text-lg me-2 d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#EditModal">
                                            Edit
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill ms-2" viewBox="0 0 16 16">
                                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                            </svg>
                                        </button>
                                        :
                                        <></>
                                    :
                                    <></>

                            }
                            <Link to="/" className="btn btn-secondary text-lg d-flex justify-content-center align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill me-1" viewBox="0 0 16 16">
                                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                                </svg>
                                Back
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="EditModal" tabIndex="-1" aria-labelledby="EditModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="EditModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={submit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">User Name</label>
                                    <input type="text" className="form-control" id="name" name='name' value={user.name} onChange={getUserData} aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="img" className="form-label">Default file input example</label>
                                    <input className="form-control" type="file" id="img" name='img' onChange={e => setImg(e.target.files[0])} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">User Email</label>
                                    <input type="email" className="form-control" id="email" name='email' value={user.email} onChange={getUserData} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">User Phone</label>
                                    <input type="text" className="form-control" id="phone" name='phone' value={user.phone} onChange={getUserData} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="gender" className="form-label">User Gender</label>
                                    <select className="form-select" id='gender' name='gender' value={user.gender} onChange={getUserData} aria-label="Default select example">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="others">Other</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="age" className="form-label">User Age</label>
                                    <input type="number" className="form-control" id="age" name='age' value={user.age} onChange={getUserData} />
                                </div>

                                {
                                    alert ?
                                        <div class={`alert ${alert ? 'alert-success' : 'alert-danger'} alert-dismissible fade show`} role="alert">
                                            <strong>{alert.title}</strong> {alert.sub_title}
                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>
                                        :
                                        <></>
                                }

                                <div className={`modal-footer d-flex ${loading ? 'justify-content-between' : 'justify-content-end'}`}>
                                    {
                                        loading ?
                                            <div className="spinner-border" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                            :
                                            <></>
                                    }
                                    <div>
                                        <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Profile
