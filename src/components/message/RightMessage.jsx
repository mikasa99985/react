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
            <p>admin</p>
            <p>1234567890</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightMessage;
