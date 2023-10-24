import React from "react";
import "../../utility/css/commentcontainer.css";
import Niel from "../../assets/Niel.png";

const Comments = () => {
  return (
    <>
      <div class="commentcontainer">
        <div class="cardcustom">
          <div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
              <h6
                class="card-title text-xl font-weight-bold text-gray-900 testsec"
                style={{ overflow: "hidden" }}
              >
                <b>Latest Customers</b>
              </h6>
              <a
                href="#"
                class="text-sm font-weight-medium text-primary viewallcustom"
                style={{ overflow: "hidden", fontWeight: "325" }}
              >
                View all
              </a>
            </div>
          </div>
        </div>

        <ul class="list-group list-group-flush">
          <li class="list-group-item py-3">
            <div class="d-flex commentsection">
              <div class="customdiv">
                <img
                  src={Niel}
                  style={{
                    paddingRight: "2px",
                    height: "40px",
                    width: "40px",
                    borderRadius: "30px",
                    overflow: "hidden",
                  }}
                  alt=""
                />
                <div class="commentname">
                  <p
                    class="font-weight-medium text-gray-900"
                    style={{ fontWeight: "450", fontSize: "smaller" }}
                  >
                    Neil Sims
                  </p>
                  <p
                    class="text-gray-500"
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
              </div>

              <div class="text-base font-weight-bold text-gray-900 commentprice">
                $320
              </div>
            </div>
          </li>



          <li class="list-group-item py-3">
            <div class="d-flex commentsection">
              <div class="customdiv">
                <img
                  src={Niel}
                  style={{
                    paddingRight: "2px",
                    height: "40px",
                    width: "40px",
                    borderRadius: "30px",
                    overflow: "hidden",
                  }}
                  alt=""
                />
                <div class="commentname">
                  <p
                    class="font-weight-medium text-gray-900"
                    style={{ fontWeight: "450", fontSize: "smaller" }}
                  >
                    Neil Sims
                  </p>
                  <p
                    class="text-gray-500"
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
              </div>

              <div class="text-base font-weight-bold text-gray-900 commentprice">
                $320
              </div>
            </div>
          </li>



          <li class="list-group-item py-3">
            <div class="d-flex commentsection">
              <div class="customdiv">
                <img
                  src={Niel}
                  style={{
                    paddingRight: "2px",
                    height: "40px",
                    width: "40px",
                    borderRadius: "30px",
                    overflow: "hidden",
                  }}
                  alt=""
                />
                <div class="commentname">
                  <p
                    class="font-weight-medium text-gray-900"
                    style={{ fontWeight: "450", fontSize: "smaller" }}
                  >
                    Neil Sims
                  </p>
                  <p
                    class="text-gray-500"
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
              </div>
              <div class="text-base font-weight-bold text-gray-900 commentprice">
                $320
              </div>
            </div>
          </li>



          <li class="list-group-item py-3">
            <div class="d-flex commentsection">
              <div class="customdiv">
                <img
                  src={Niel}
                  style={{
                    paddingRight: "2px",
                    height: "40px",
                    width: "40px",
                    borderRadius: "30px",
                    overflow: "hidden",
                  }}
                  alt=""
                />
                <div class="commentname">
                  <p
                    class="font-weight-medium text-gray-900"
                    style={{ fontWeight: "450", fontSize: "smaller" }}
                  >
                    Neil Sims
                  </p>
                  <p
                    class="text-gray-500"
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
              </div>

              <div class="text-base font-weight-bold text-gray-900 commentprice">
                $320
              </div>
            </div>
          </li>



          {/* <li class="list-group-item py-3">
            <div class="d-flex commentsection">
              <div class="customdiv">
                <img
                  src={Niel}
                  style={{
                    paddingRight: "2px",
                    height: "40px",
                    width: "40px",
                    borderRadius: "30px",
                    overflow: "hidden",
                  }}
                  alt=""
                />
                <div class="commentname">
                  <p
                    class="font-weight-medium text-gray-900"
                    style={{ fontWeight: "450", fontSize: "smaller" }}
                  >
                    Neil Sims
                  </p>
                  <p
                    class="text-gray-500"
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
              </div>

              <div class="text-base font-weight-bold text-gray-900 commentprice">
                $320
              </div>
            </div>
          </li> */}



          
        </ul>
      </div>
    </>
  );
};

export default Comments;
