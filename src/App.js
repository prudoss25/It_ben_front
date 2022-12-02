import React, { Component, useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import { useSelector } from "react-redux";
import Unauthorized from "./Unauthorized";
import getRoutes from "./NavigationRoute";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>

          {
            getRoutes().map((route, index) => {
              return <CustomRoute exact {...route} key={index} />
            })
          }
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

const CustomRoute = ({ component: Component, roles, path }) => {
  roles = roles || [];
  const [isAuth,setIsAuth] = useState(false) 
  const role = useSelector((state) => state.auth.userInfos.role)
  const token = useSelector((state) => state.auth.token)
  useEffect(() => {
    setIsAuth(token != null)
  },[token])
  const hasRoles = () => {
    return [...roles].includes(role) || [...roles].includes('All')
  }
  return (
      <Route
          path={path}
          exact={true}
          render={(props) => 
              hasRoles(roles) ? (
                  <Component {...props} />
              ) : (
                  isAuth ? (
                      <Unauthorized />
                  ) : (
                      <Redirect to="/auth" />
                  )
              )
          }
      />
  );
}
