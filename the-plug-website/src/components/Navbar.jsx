import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // 👈 Place your logo image in src/assets/

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div className="container">
      {/* Logo and Brand */}
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img
          src={logo}
          alt="The Plug Logo"
          height="40"
          className="me-2"
        />
        <span>The Plug</span>
      </Link>

      {/* Toggler */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menu Items */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li> 
          <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/education">Education</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/sneaker-care">Sneaker Care</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/articles">Articles</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/pricing">Pricing</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
