import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../../../assets/kodespot_logo.png";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={Logo} alt="logo" />
        </Link>
        <nav className={styles.nav}>
          <Link to="#">About</Link>
          <Link to="#">Services</Link>
          <Link to="/courses">Learning Hub</Link>
          <Link to="#">Blog</Link>
        </nav>
        <div className={styles.actions}>
          <Search />
          <Link to="/signin" className={styles.signin}>
            Sign in
          </Link>
          <Link to="/signup" className={styles.cta}>
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
