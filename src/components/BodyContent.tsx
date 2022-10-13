import { Avatar } from "@mui/material";
import React from "react";
import TabSettings from "./Header/TabSettings";

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
      <div className="image overlay">
        <div style={{ height: "5rem" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "100%",
                height: "5rem",
                display: "flex",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 75, height: 75 }}
              />
              <div>Husain Ebrahim</div>
            </div>
            <div style={{ width: "40%" }}>
              <div
                style={{
                  background: "rgb(240, 242, 245)",
                  borderRadius: "0.75rem",
                  height: "40px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyContent;
