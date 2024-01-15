import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser } from "../features/auth/authOps";
import "../styles/Header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">Chat Magic App</Link>
        </div>
        <div className="nav-links">
          {isLoggedIn ? (
            <>
              <Link to="/">Home</Link>
              <Link to="/users">Users</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/login" onClick={() => dispatch(logOutUser())}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">LogIn</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
