import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import Unauthorized from "./Unauthorized";
import getRoutes from "./NavigationRoute";
import ChangePassword from "./containers/Auth/ChangePassword";
import Aux from "./hoc/_Aux/_Aux";
import { useJwt } from "react-jwt";
import { disconnectUser } from "./services/actions/Auth/AuthActions";

const App = () => {
  const firstAuthentication = useSelector((state) => state.auth.firstAuthentication)
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.auth.authenticated)
  const tokenGetting = localStorage.getItem("access_token");
  const { isExpired } = useJwt(tokenGetting);
  const [isAuth,setIsAuth] = useState(false) 
  useEffect(() => {
    if(isExpired)
    {
      dispatch(disconnectUser());
    }
  },[isExpired])
  
  useEffect(() => {
    setIsAuth(authenticated)
  },[authenticated])
    return (
      <div>
        <Layout>
          <Switch>
          {
            (isAuth && firstAuthentication) ?
            (
              <Aux>
                <Route path="/changepassword">
                  <ChangePassword />
                </Route>
                <Route >
                  <Redirect to={{pathname:"/changepassword"}} />
                </Route>
              </Aux>
            )
            :
            getRoutes().map((route) => {
              return <CustomRoute exact {...route} key={route.path} isAuth />
            })
          }
          </Switch>
        </Layout>
      </div>
    );
}

export default App;

const CustomRoute = ({ component: Component, roles, path,exact, isAuth }) => {
  roles = roles || [];
  
  const role = useSelector((state) => state.auth.userInfos.role)

  
  const hasRoles = () => {
    return [...roles].includes(role) || [...roles].includes('All')
  }
  return (
      <Route
          path={path}
          exact={exact}
          render={(props) => 
              (
                hasRoles() ? (
                    <Component {...props} />
                ) : (
                  isAuth ? (
                        <Unauthorized />
                    ) : (
                        <Redirect to={
                          {
                            pathname:"/auth",
                            state: { from: props.location } 
                          }
                        } />
                    )
                )
              )
          }
      />
  );
}
