import React from "react";
import "../../utility/css/CommentContainer.css";
import Niel from "../../assets/Niel.png";
import Rating from "../Rating";

const Comments = (props) => {
  return (
    <>
    {console.log(props.comments)}
      <div className="commentcontainer">
        <div className="cardcustom border-bottom">
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center">
              <h6
                className="card-title text-xl font-weight-bold text-gray-900 testsec"
                style={{ overflow: "hidden" }}
              >
                <b>Latest Comments</b>
              </h6>
            </div>
          </div>
        </div>


        <ul className="list-group list-group-flush comm-scroll">
          {
            props.comments.map((element, index) =>
              <li key={index} className="list-group-item py-3">
                <div className="d-flex ">
                  <img
                    src={element.user.img}
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
                      {element.user.name}
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
                      {element.comment.comment}
                    </p>
                  </div>



                  <div className="text-base font-weight-bold text-gray-900"><Rating rate={parseInt(element.comment.rate)} /></div>
                </div>
              </li>
            )
          }


          {/* <li className="list-group-item py-3">
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



              <div className="text-base font-weight-bold text-gray-900"><Rating rate={3} /></div>
            </div>
          </li>
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



              <div className="text-base font-weight-bold text-gray-900"><Rating rate={2} /></div>
            </div>
          </li>
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



              <div className="text-base font-weight-bold text-gray-900"><Rating rate={5} /></div>
            </div>
          </li>
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



              <div className="text-base font-weight-bold text-gray-900"><Rating rate={4} /></div>
            </div>
          </li>
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



              <div className="text-base font-weight-bold text-gray-900"><Rating rate={1} /></div>
            </div>
          </li>
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



              <div className="text-base font-weight-bold text-gray-900"><Rating rate={3} /></div>
            </div>
          </li> */}



        </ul>
      </div>
    </>
  );
};

export default Comments;
