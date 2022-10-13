import React from "react";

type Props = {};

function BodyContent({}: Props) {
  return (
    <div>
      <div className="imageContainer">
        <img
          className="image cover"
          style={{ borderRadius: "12px" }}
          src={
            "https://photographylife.com/wp-content/uploads/2016/06/Mass.jpg"
          }
        />
      </div>
      <div className="image overlay"></div>
    </div>
  );
}

export default BodyContent;
