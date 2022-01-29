import { Link } from "react-router-dom";
import logo from "../images/logoHeader.svg";
import Login from "./login";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-end">
          <Link className="navbar-item header-link" to="/news">
            Новости
          </Link>
          <Login className="navbar-item header-link" />
        </div>
      </nav>
    </header>
  );
};
export default Header;
