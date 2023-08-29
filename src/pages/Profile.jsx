import React from 'react'
import { useParams } from 'react-router-dom'
import { urlDecode } from '../utility/js/util'

const Profile = () => {
    const params = useParams();
    console.log('params', params);

    return (
        <>
            {/* Do not remove */}
            <h5>Profile Page <br /> Name: {urlDecode(params.name)} <br /> Id: {params.id}</h5>
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
                <div class="d-flex justify-content-end px-4 pt-4">
                    <button id="dropdownButton" data-bs-toggle="dropdown" class="btn btn-link text-gray-500">
                        <span class="visually-hidden">Open dropdown</span>
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                    </button>

                    <div id="dropdown" class="dropdown-menu dropdown-menu-end">
                        <a href="#" class="dropdown-item">Edit</a>
                        <a href="#" class="dropdown-item">Export Data</a>
                        <a href="#" class="dropdown-item text-danger">Delete</a>
                    </div>
                </div>
                <div class="d-flex flex-column align-items-center pb-6">
                    <img class="w-32 h-32 mb-2 rounded-full shadow-lg" src="https://i.pinimg.com/236x/47/5a/86/475a86177aeedacf8dc7f5e2b4eff61f.jpg" alt="Bonnie image" />
                    <h1 class="mb-1 text-3xl font-semibold text-gray-900">Bonnie Green</h1>
                    <span class="text-lg text-gray-500">Visual Designer</span>
                    <div class="mt-4 space-x-6">
                        <a href="#" class="btn btn-primary text-lg">Add friend</a>
                        <a href="#" class="btn btn-secondary text-lg">Message</a>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Profile
