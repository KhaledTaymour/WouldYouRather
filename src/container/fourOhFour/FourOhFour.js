import React from "react";
import { useLocation, Link } from "react-router-dom";

function FourOhFour() {
  let location = useLocation();

  return (
    <div>
      <h3>
        Sorry no page matches this path <code>{location?.pathname}</code>
      </h3>
      <Link to="/signin"> Sign In</Link>
    </div>
  );
}

export default FourOhFour;
