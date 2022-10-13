import React from "react";
import ContentStack from "./ContentStack";

type Props = {};

function Layout({}: Props) {
  return (
    <div className="container">
      <div className="sideNav">
        <div className="sideNavCard" />
      </div>
      <div className="content">
        <ContentStack />
      </div>
    </div>
  );
}

export default Layout;
