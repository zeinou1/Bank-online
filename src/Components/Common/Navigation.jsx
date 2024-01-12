import { useDispatch, useSelector } from "react-redux";
import logo from "./../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";

function Navigation() {
  const dispatch = useDispatch()
  const profile = useSelector((state)=> state.profile)
  const navigate = useNavigate();
  const handLogout = () => {
    localStorage.removeItem("user");
    navigate('/')
  };
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <div>
        {/* user */}
        {localStorage.getItem("user") ? (
          <Link className="main-nav-item">
            <i className="fa fa-user-circle"></i>
           {
              profile.firstName
           }
          </Link>
        ) : null}
        {/* deconnexion */}
        {localStorage.getItem("user") ? (
          <Link className="main-nav-item" to="/" onClick={handLogout}>
            <i className="fa fa-sign-out"></i>
            Sign-out
          </Link>
        ) : null}
        {/* connexion */}
        {localStorage.getItem("user") ? null : (
          <Link className="main-nav-item" to="/SingIn">
            <i className="fa fa-user-circle"></i>
            Sig In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
