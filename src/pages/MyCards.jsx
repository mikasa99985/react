import React, { useState } from 'react'

const MyCards = () => {
const [imageUrl, setImageUrl] = useState('https://firebasestorage.googleapis.com/v0/b/online-app-a440d.appspot.com/o/empty-profile.png?alt=media&token=9d884c2e-e9ab-4ac0-9d28-cd7ec5ba917f');

  return (
    <>
      
      <div class="container">
    <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h5 class="h5 text-xl font-bold mb-0 text-gray-900 dark:text-white">Latest Customers</h5>
            <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                View all
            </a>
        </div>
        <div class="flow-root">
            <ul class="list-unstyled divide-y divide-gray-200 dark:divide-gray-700">
                <li class="py-3 sm:py-4">
                    <div class="d-flex align-items-center space-x-4">
                        <div class="flex-shrink-0" >
                            <img class="w-8 h-8 rounded-circle " style={{width:"60px"}} src={imageUrl} alt="Neil image"/>
                        </div>
                        <div class="flex-grow-1">
                            <p class="h6 text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                email@windster.com
                            </p>
                        </div>
                        <div class="d-inline-flex align-items-center h5 font-semibold text-gray-900 dark:text-white">
                            $320
                        </div>
                    </div>
                </li>
                <li class="py-3 sm:py-4">
                    <div class="d-flex align-items-center space-x-4">
                       
                    </div>
                </li>
                
                <li class="py-3 sm:py-4">
                    <div class="d-flex align-items-center space-x-4">
                        <div class="flex-shrink-0">
                            <img class="w-8 h-8 rounded-circle" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/>
                        </div>
                        <div class="flex-grow-1">
                            <p class="h6 text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                email@windster.com
                            </p>
                        </div>
                        <div class="d-inline-flex align-items-center h5 font-semibold text-gray-900 dark:text-white">
                            $320
                        </div>
                    </div>
                </li>
                <li class="py-3 sm:py-4">
                    <div class="d-flex align-items-center space-x-4">
                       
                    </div>
                </li>
                
                <li class="py-3 sm:py-4">
                    <div class="d-flex align-items-center space-x-4">
                        <div class="flex-shrink-0">
                            <img class="w-8 h-8 rounded-circle" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/>
                        </div>
                        <div class="flex-grow-1">
                            <p class="h6 text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                email@windster.com
                            </p>
                        </div>
                        <div class="d-inline-flex align-items-center h5 font-semibold text-gray-900 dark:text-white">
                            $320
                        </div>
                    </div>
                </li>
                <li class="py-3 sm:py-4">
                    <div class="d-flex align-items-center space-x-4">
                       
                    </div>
                </li>
                
                <li class="py-3 sm:py-4">
                    <div class="d-flex align-items-center space-x-4">
                        <div class="flex-shrink-0">
                            <img class="w-8 h-8 rounded-circle" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/>
                        </div>
                        <div class="flex-grow-1">
                            <p class="h6 text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                email@windster.com
                            </p>
                        </div>
                        <div class="d-inline-flex align-items-center h5 font-semibold text-gray-900 dark:text-white">
                            $320
                        </div>
                    </div>
                </li>
                <li class="py-3 sm:py-4">
                    <div class="d-flex align-items-center space-x-4">
                       
                    </div>
                </li>
                
                <li class="py-3 sm:py-4">
                    <div class="d-flex align-items-center space-x-4">
                        <div class="flex-shrink-0">
                            <img class="w-8 h-8 rounded-circle" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/>
                        </div>
                        <div class="flex-grow-1">
                            <p class="h6 text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                email@windster.com
                            </p>
                        </div>
                        <div class="d-inline-flex align-items-center h5 font-semibold text-gray-900 dark:text-white">
                            $320
                        </div>
                    </div>
                </li>
                <li class="py-3 sm:py-4">
                    <div class="d-flex align-items-center space-x-4">
                       
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>


    </>
  )
}

export default MyCards
