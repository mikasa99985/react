import React from "react";

const RightMessage = (props) => {
  return (
    <>
      <div className="message-outer-containerright">
        <div className="message-containerright">
          <div className="messageright">
            <p>
              {props.text}
            </p>
          </div>
          <div className="bottom-containerright">
            <p>{props.user}</p>
            <p>{props.time}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightMessage;
