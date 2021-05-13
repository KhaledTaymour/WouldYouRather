import React from "react";
import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";
// store
import { authedUser } from "redux/selectors/usersSelector";

function PrivateRoute({ children, ...rest }) {
  const currentUser = useSelector(authedUser);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: {
                from: location,
              },
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
