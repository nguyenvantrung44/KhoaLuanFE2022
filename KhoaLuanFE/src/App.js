import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import CustomizedSnackbars from "./common/CustomizedSnackbars";
import LoadingComponent from "./component/GlobalSettings/LoadingComponent";
import Login from "./containers/login/Login";
import PageNotFound from "./containers/pageNotFound";
import { LayoutMain } from "./routers";
export default function App() {
  return (
    <div style={{ backgroundColor: 'rgba(0,0,0, .3)', minHeight: '100%'}}>
      <BrowserRouter>
        <LoadingComponent />
        <Suspense fallback={LoadingComponent}>
          <CustomizedSnackbars />
          {/* <Notify /> */}
          <Switch>
            <Route exact path="/login" component={Login} />
            {LayoutMain.map((layout, index) => {
              return (
                <Route
                  key={index}
                  exact
                  path={layout.path}
                  component={layout.component}
                />
              );
            })}
            <Redirect from="/" to="/login" />

            <Route path="*" component={PageNotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
