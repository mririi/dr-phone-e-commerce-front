import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DashboardSideBar from "./DashboardSideBar";
import DashboardContainer from "./DashboardContainer";
import NotAuthorized from "../others/NotAuthorized";

const Dashboard = () => {
  const { token } = useParams();
  const [container, setContainer] = useState("home");
  const containerChanged = (container) => {
    setContainer(container);
  };
  return (
    <>
      {token === "-1" ? (
        <div>
          <DashboardSideBar onContainerChange={containerChanged} />
          <DashboardContainer
            container={container}
            containerChanged={containerChanged}
          />
        </div>
      ) : (
        <div>
          <NotAuthorized />
        </div>
      )}
    </>
  );
};

export default Dashboard;
