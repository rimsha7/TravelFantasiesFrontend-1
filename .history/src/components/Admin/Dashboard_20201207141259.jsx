// import { CssBaseline, Grid } from "@material-ui/core";
import React from "react";
// import AppBarComponenet from "./fragments/AppBar";
import HomeFragment from "./fragments/Home";
// import SideBarComponent from "./fragments/SidebarComponent";
import Navbar from "./fragments/Navbar";
import AllHotelsFragment from "./fragments/AllHotelsFragment";
import AllBlogs from "./fragments/AllBlogs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function ClippedDrawer() {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            component={HomeFragment}
            onClick={() => {
              setOpen(true);
            }}
          />
          <Route
            path="/reports"
            component={AllHotelsFragment}
            onClick={() => {
              setOpen(false);
            }}
          />
          <Route
            path="/products"
            component={AllBlogs}
            onClick={() => {
              setOpen(false);
            }}
          />
        </Switch>
      </Router>
      {open && <HomeFragment />}
    </>
  );
}
//   <div>
//     {/* <CssBaseline /> */}
//     {/* <AppBarComponenet /> */}
//     {/* {home ? <HomeFragment /> : null}   */}
//     <SideBarComponent />
//   </div>
// );
// }
