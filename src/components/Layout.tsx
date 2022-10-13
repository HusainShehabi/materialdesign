import ContentStack from "./ContentStack";

import SideNavCard from "./SideNavCard";

type Props = {};

function Layout({}: Props) {
  return (
    <div className="container">
      <div className="sideNav">
        <SideNavCard />
      </div>
      <div className="content">
        <ContentStack />
      </div>
    </div>
  );
}

export default Layout;
