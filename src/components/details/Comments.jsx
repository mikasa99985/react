import React from "react";
// import "../../utility/css/commentcontainer.css";
import Niel from "../../assets/Niel.png";

const Comments = () => {
  return (
    <>



      <div className="commentcontainer">
        <div className="cardcustom">
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center">
              <h6
                className="card-title text-xl font-weight-bold text-gray-900 testsec"
                style={{ overflow: "hidden" }}
              >
                <b>Latest Customers</b>
              </h6>
              <a
                href="#"
                className="text-sm font-weight-medium text-primary viewallcustom"
                style={{ overflow: "hidden", fontWeight:"325" }}
                >
                View all
              </a>
            </div>
          </div>
        </div>
              

        <ul className="list-group list-group-flush">
          <li className="list-group-item py-3">
            <div className="d-flex ">
              <img
                src={Niel}
                style={{
                  height: "45px",
                  width: "45px",
                  borderRadius: "30px",
                  overflow: "hidden",
                }}
                alt=""
                />
              <div className="flex-grow-1 align-items-center commentname">
                <p
                  className="font-weight-medium text-gray-900"
                  style={{ fontWeight: "450" }}
                  >
                  Neil Sims
                </p>
                <p
                  className="text-gray-500"
                  style={{
                    fontWeight: "300",
                    
                    marginTop: "-22px",
                    
                    color: "grey",
                    fontSize: "small",
                    fontStyle: "italic",
                  }}
                >
                  email@windster.com
                </p>
              </div>
             
                  {/*     

              <div className="text-base font-weight-bold text-gray-900">$320</div>
            </div>
          </li>
          <li className="list-group-item py-3">
            <div className="d-flex align-items-center">
              <img
                className="w-8 h-8 rounded-circle"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie image"
                ></img>
              <div className="flex-grow-1">
                <p className="font-weight-medium text-gray-900">Bonnie Green</p>
                <p className="text-gray-500">email@windster.com</p>
              </div>
              <div className="text-base font-weight-bold text-gray-900">$3467</div>
            </div>
          </li>
          <li className="list-group-item py-3">
            <div className="d-flex align-items-center">
              <img
                className="w-8 h-8 rounded-circle"
                src="/docs/images/people/profile-picture-2.jpg"
                alt="Michael image"
              ></img>
              <div className="flex-grow-1">
                <p className="font-weight-medium text-gray-900">Michael Gough</p>
                <p className="text-gray-500">email@windster.com</p>
              </div>
              <div className="text-base font-weight-bold text-gray-900">$67</div>
            </div>
          </li>
          <li className="list-group-item py-3">
            <div className="d-flex align-items-center">
              <img
                className="w-8 h-8 rounded-circle"
                src="/docs/images/people/profile-picture-4.jpg"
                alt="Lana image"
              ></img>
              <div className="flex-grow-1">
                <p className="font-weight-medium text-gray-900">Lana Byrd</p>
                <p className="text-gray-500">email@windster.com</p>
              </div>

              
              <div className="text-base font-weight-bold text-gray-900">$367</div>
            </div>
          </li>
          <li className="list-group-item py-3">
            <div className="d-flex align-items-center">
              <img
                className="w-8 h-8 rounded-circle"
                src="/docs/images/people/profile-picture-5.jpg"
                alt="Thomas image"
              ></img>
              <div className="flex-grow-1">
                <p className="font-weight-medium text-gray-900">Thomes Lean</p>
                <p className="text-gray-500">email@windster.com</p>
              </div>
              <div className="text-base font-weight-bold text-gray-900">$2367</div> 
           
            */}


            </div>
          </li>
        </ul>
      </div>
      </>
  );
};

export default Comments;
