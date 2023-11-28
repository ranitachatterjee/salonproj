import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "../../Redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let Name = localStorage.getItem("user_name");
  const { toggle } = useSelector((s) => s.Auth);
  const logout = () => {
    dispatch(Logout());
    navigate("/");
  };
  return (
    <div>
      {/* <!-- Topbar Start --> */}
      <div className="container-fluid bg-light d-none d-lg-block">
        <div className="row py-2 px-lg-5">
          <div className="col-lg-6 text-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <small>
                <i className="fa fa-phone-alt mr-2"></i>+012 345 6789
              </small>
              <small className="px-3">|</small>
              <small>
                <i className="fa fa-envelope mr-2"></i>info@example.com
              </small>
            </div>
          </div>
          <div className="col-lg-6 text-right">
            <div className="d-inline-flex align-items-center">
              <Link className="text-primary px-2" to="">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link className="text-primary px-2" to="">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link className="text-primary px-2" to="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link className="text-primary px-2" to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link className="text-primary pl-2" to="">
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}

      {/* 
    <!-- Navbar Start --> */}
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
          <Link to="/" className="navbar-brand ml-lg-3">
            <h1 className="m-0 text-primary">
              <span className="text-dark">SPA</span> Center
            </h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between px-lg-3"
            id="navbarCollapse"
          >
            <div className="navbar-nav m-auto py-0">
              <Link to="/" className="nav-item nav-link ">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <Link to="/service" className="nav-item nav-link">
                Services
              </Link>
              {/* <Link to="/price" className="nav-item nav-link">
                Pricing
              </Link> */}
              {/* <div className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Pages
                </Link>
                <div className="dropdown-menu rounded-0 m-0">
                  <Link to="/appointment" className="dropdown-item">
                    Appointment
                  </Link>
                  <Link to="/opening" className="dropdown-item">
                    Open Hours
                  </Link>
                  <Link to="/team" className="dropdown-item">
                    Our Team
                  </Link>
                  <Link to="/testimonial" className="dropdown-item">
                    Testimonial
                  </Link>
                </div>
              </div> */}
              <Link to="/productlist" className="nav-item nav-link">Products</Link>
              <Link to="/user_profile" className="nav-item nav-link">
                Profile
              </Link>

            </div>
            {/* <Link to="" className="btn btn-primary d-none d-lg-block">
              Book Now
            </Link> */}
            {/* <button onClick={logout}>Logout</button> */}
            {toggle ? (
              <Link className="nav-item nav-link" to="/reduxlogin" onClick={logout}>
                Logout
              </Link>
            ) : (
              " "
            )}
            {toggle ? <Link className="  btn btn-primary py-2 px-4 toggltUserName">{Name}</Link> : ""}
          </div>
        </nav>
      </div>
      {/* <!-- Navbar End --> */}
    </div>
  );
}
