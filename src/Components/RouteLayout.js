import React from "react";
import { Outlet } from "react-router-dom";
import NavBarPanel from "./NavBarPanel";
import { Provider } from "react-redux";
import store from "../Store/Store";

const RouteLayout = () => {
  return (
    <div>
      <Provider store={store}>
        <NavBarPanel />
        <main>
          <Outlet />
        </main>
      </Provider>
    </div>
  );
};

export default RouteLayout;
