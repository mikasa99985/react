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
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
    <div class="d-flex justify-content-end px-4 pt-4">
        <button id="dropdownButton" data-bs-toggle="dropdown" class="btn btn-link text-gray-500">
            <span class="visually-hidden">Open dropdown</span>
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
        </button>
        {/* Dropdown menu */} 
        <div id="dropdown" class="dropdown-menu dropdown-menu-end">
            <a href="#" class="dropdown-item">Edit</a>
            <a href="#" class="dropdown-item">Export Data</a>
            <a href="#" class="dropdown-item text-danger">Delete</a>
        </div>
    </div>
    <div class="d-flex flex-column align-items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-circle shadow-sm" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900">Bonnie Green</h5>
        <span class="text-sm text-gray-500">Visual Designer</span>
        <div class="mt-4">
            <a href="#" class="btn btn-primary">Add friend</a>
            <a href="#" class="btn btn-secondary">Message</a>
        </div>
    </div>
</div>


            
        </>
    )
}

export default Profile
