import React from "react";
import "/Users/Yuki_/Desktop/v/src/utility/css/CommentContainer.css";
import Niel from "/Users/Yuki_/Desktop/v/src/assets/Niel.png";

const Comments = () => {
  return (
    <>
      <div class="CommentContainer">
    {/*  ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss */}
        
            <div class="CardCustom">
              <div class="card-header">
             <div class="d-flex justify-content-between align-items-center">
               <h5 class="card-title text-xl font-weight-bold text-gray-900">
                Latest Customers
              </h5>
              <a
                href="#"
                class="text-sm font-weight-medium text-primary viewallcustom"
              >
                View all
              </a>
             </div>
             </div>
         </div>
             <ul class="list-group list-group-flush">
          <li class="list-group-item py-3">
            <div class="d-flex align-items-center">
            <img src={Niel} style={{height:"40px",width:"40px" , borderRadius:"20px" }}  alt="" />
                {/*          
              <div class="flex-grow-1">
                <p class="font-weight-medium text-gray-900">Neil Sims</p>
                <p class="text-gray-500">email@windster.com</p>
              </div>
              <div class="text-base font-weight-bold text-gray-900">$320</div>
            </div>
          </li>
          <li class="list-group-item py-3">
            <div class="d-flex align-items-center">
              <img
                class="w-8 h-8 rounded-circle"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie image"
              ></img>
              <div class="flex-grow-1">
                <p class="font-weight-medium text-gray-900">Bonnie Green</p>
                <p class="text-gray-500">email@windster.com</p>
              </div>
              <div class="text-base font-weight-bold text-gray-900">$3467</div>
            </div>
          </li>
          <li class="list-group-item py-3">
            <div class="d-flex align-items-center">
              <img
                class="w-8 h-8 rounded-circle"
                src="/docs/images/people/profile-picture-2.jpg"
                alt="Michael image"
              ></img>
              <div class="flex-grow-1">
                <p class="font-weight-medium text-gray-900">Michael Gough</p>
                <p class="text-gray-500">email@windster.com</p>
              </div>
              <div class="text-base font-weight-bold text-gray-900">$67</div>
            </div>
          </li>
          <li class="list-group-item py-3">
            <div class="d-flex align-items-center">
              <img
                class="w-8 h-8 rounded-circle"
                src="/docs/images/people/profile-picture-4.jpg"
                alt="Lana image"
              ></img>
              <div class="flex-grow-1">
                <p class="font-weight-medium text-gray-900">Lana Byrd</p>
                <p class="text-gray-500">email@windster.com</p>
              </div>
              <div class="text-base font-weight-bold text-gray-900">$367</div>
            </div>
          </li>
          <li class="list-group-item py-3">
            <div class="d-flex align-items-center">
              <img
                class="w-8 h-8 rounded-circle"
                src="/docs/images/people/profile-picture-5.jpg"
                alt="Thomas image"
              ></img>
              <div class="flex-grow-1">
                <p class="font-weight-medium text-gray-900">Thomes Lean</p>
                <p class="text-gray-500">email@windster.com</p>
              </div>
              <div class="text-base font-weight-bold text-gray-900">$2367</div>
            */}
            </div>
          </li>
             </ul> 
             
      
      </div>
    </>
  );
};

export default Comments;
