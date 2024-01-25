import { useDispatch, useSelector } from "react-redux";
import logo from "./../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/LoginSlice";

function Navigation() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const { connected } = useSelector((state) => state.user);
  const {initialProfile } = useSelector((state) => state.profile);
  // deconnexion
  const handLogout = () => {
    dispatch(logout());
    dispatch(initialProfile());
  };
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
      {/* // no display login if not connected */}
      {connected ? null : (
        <Link className="main-nav-item" to="/SingIn">
          <i className="fa fa-user-circle"></i>
          Sig In
        </Link>
      )}

      {/* // display user */}
      {connected && (
        <Link className="main-nav-item" to="/User">
          <i className="fa fa-user-circle"></i>
          {profile.firstName}
        </Link>
      )}
      {connected && (
        <Link className="main-nav-item" to="/" onClick={handLogout}>
          <i className="fa fa-sign-out"></i>
          Sign-out
        </Link>
      )}
       </div>
    </nav>
   
  );
}

export default Navigation;
