import { NavLink } from "react-router-dom";

import "./styles.scss";
import notFound from "../../assets/not-found.png";

const NotFound = () => {
  return (
    <div className="no-page">
      <img src={notFound} alt="No Found page" />
      <h2>404 · Page not found</h2>

      <NavLink to="" type="button">
        Back to Home
      </NavLink>
    </div>
  );
};

export default NotFound;
