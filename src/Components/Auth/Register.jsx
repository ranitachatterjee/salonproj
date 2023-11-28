import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../Redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate() 
  const [ loading,setLoading] = useState(false)
  const {redirectToSignup} = useSelector((s)=>s?.Auth)
  const [user, setUser] = useState({
    first_name: "",
    email: "",
    last_name: "",
    password: "",
  });

  const [image, setImage] = useState();
  const [error, setError] = useState({});
  const [profile_pic, setProfile_pic] = useState() 

  const RedirectUser = () => {
    let userName = localStorage.getItem("user_name");
    console.log(userName,"userName")
    let isInRegisterPage = window.location.pathname.toLowerCase() === "/reduxregister";

    if (userName !== null && userName !== undefined && userName !== "") {
      // window.location.pathname = getPathname;
      isInRegisterPage && navigate("/reduxlogin");
    }
  };

  useEffect(() => {
    RedirectUser()
  }, [redirectToSignup])

  const validateUser = () => {
    let error = {};

    if (!user.email) {
      error.email = "email is required *";
    }
    if (!user.password) {
      error.password = "Password is required *";
    }
    if (!user.first_name) {
      error.first_name = "first_name is required *";
    }
    if (!user.last_name) {
      error.last_name = "last_name is required *";
    }
    return error;
  };

  let name, value;
  const postValidateUser = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "first_name") {
      if (value.length === 0) {
        setError({ ...error, first_name: "first_name is required *" });
        setUser({ ...user, first_name: " " });
      } else {
        setError({ ...error, first_name: "" });
        setUser({ ...user, first_name: value });
      }
    }

    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "email is required *" });
        setUser({ ...user, email: " " });
      } else {
        setError({ ...error, email: "" });
        setUser({ ...user, email: value });
      }
    }
    if (name === "password") {
      if (value.length === 0) {
        setError({ ...error, password: "password is required *" });
        setUser({ ...user, password: " " });
      } else {
        setError({ ...error, password: "" });
        setUser({ ...user, password: value });
      }
    }

    if (name === "last_name") {
      if (value.length === 0) {
        setError({ ...error, last_name: "last_name is required *" });
        setUser({ ...user, last_name: " " });
      } else {
        setError({ ...error, last_name: "" });
        setUser({ ...user, last_name: value });
      }
    }
  };

  const submitUserData = async (e) => {
    e.preventDefault();
    setLoading(true)
    setTimeout(()=>{
    setLoading(false)
    },2000)
    setError(validateUser());
    let formData = new FormData();
    formData.append("first_name", user.first_name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("last_name", user.last_name);
    formData.append("profile_pic",profile_pic);
    dispatch(register(formData));
    console.log(user);
  };
  return (
    <div>
      <form>
        <section className="vh-200" style={{ backgroundColor: "#eee" }}>
          <div className="container h-200">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div
                  className="card text-black"
                  style={{ borderRadius: "25px" }}
                >
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Sign up
                        </p>

                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                name="first_name"
                                value={user.name}
                                onChange={(e) => postValidateUser(e)}
                              />
                              <span
                                style={{ color: "red", marginLeft: "24px" }}
                              >
                                {" "}
                                {error?.first_name}{" "}
                              </span>

                              <label
                                className="form-label"
                                for="form3Example1c"
                              >
                                Your First_Name
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                name="email"
                                value={user?.email}
                                // id="form3Example3c"
                                className="form-control"
                                onChange={(e) => postValidateUser(e)}
                              />
                              <span
                                style={{ color: "red", marginLeft: "24px" }}
                              >
                                {" "}
                                {error?.email}{" "}
                              </span>
                              <label
                                className="form-label"
                                // for="form3Example3c"
                              >
                                Your Email
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                name="password"
                                value={user?.password}
                                onChange={(e) => postValidateUser(e)}
                                id="form3Example4c"
                                className="form-control"
                              />
                              <span
                                style={{ color: "red", marginLeft: "24px" }}
                              >
                                {" "}
                                {error?.password}{" "}
                              </span>

                              <label
                                className="form-label"
                                for="form3Example4c"
                              >
                                Password
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example4cd"
                                className="form-control"
                                name="last_name"
                                value={user?.last_name}
                                onChange={(e) => postValidateUser(e)}
                              />
                              <span
                                style={{ color: "red", marginLeft: "24px" }}
                              >
                                {" "}
                                {error?.last_name}{" "}
                              </span>

                              <label
                                className="form-label"
                                for="form3Example4cd"
                              >
                                Last Name
                              </label>
                            </div>
                          </div>

                          <div className="form-check d-flex justify-content-center mb-5">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="form2Example3c"
                            />
                            <label
                              className="form-check-label"
                              for="form2Example3"
                            >
                              I agree all statements in{" "}
                              <a href="#!">Terms of service</a>
                            </label>
                          </div>
                          <div>
                            <label>Image </label>
                            <input
                              type="file"
                              onChange={(e) => setProfile_pic(e.target.files[0])}
                              name="img"
                              accept="image/*"
                              class="form-control"
                            />
                            {profile_pic !== "" && profile_pic !== undefined && profile_pic !== null ? (
                    <img
                      style={{ height: "180px" }}
                      src={URL.createObjectURL(profile_pic)}
                      alt=""
                      className="upload-img"
                    />
                  ) : (
                    <>{profile_pic === "" && <p>Drag or drop content here</p>}</>
                  )}

                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          {loading ? (
                            <Link >Loading...</Link>
                          ) : (
                            <Link
                              type="submit"
                              className="btn btn-primary btn-lg"
                              onClick={submitUserData}
                            >
                              Register
                            </Link> 
                          )}


                            {/* <button
                              type="submit"
                              className="btn btn-primary btn-lg"
                              onClick={submitUserData}
                            >
                              Register
                            </button> */}
                            <Link to="/reduxlogin" className="btn btn-primary mx-2 py-2">
                              Go to login
                            </Link>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          className="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
        {/* <!-- Footer Start --> */}
    {/* <div className="footer container-fluid position-relative bg-dark py-5" style={{marginTop: '90px'}}>
        <div className="container pt-5">
            <div className="row">
                <div className="col-lg-6 pr-lg-5 mb-5">
                    <Link to="index.html" className="navbar-brand">
                        <h1 className="mb-3 text-white"><span className="text-primary">SPA</span> Center</h1>
                    </Link>
                    <p>Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy. Tempor sea ipsum diam  sed clita dolore eos dolores magna erat dolore sed stet justo et dolor.</p>
                    <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                    <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                    <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
                    <div className="d-flex justify-content-start mt-4">
                        <Link className="btn btn-lg btn-primary btn-lg-square mr-2" to="#"><i className="fab fa-twitter"></i></Link>
                        <Link className="btn btn-lg btn-primary btn-lg-square mr-2" to="#"><i className="fab fa-facebook-f"></i></Link>
                        <Link className="btn btn-lg btn-primary btn-lg-square mr-2" to="#"><i className="fab fa-linkedin-in"></i></Link>
                        <Link className="btn btn-lg btn-primary btn-lg-square" to="#"><i className="fab fa-instagram"></i></Link>
                    </div>
                </div>
                <div className="col-lg-6 pl-lg-5">
                    <div className="row">
                        <div className="col-sm-6 mb-5">
                            <h5 className="text-white text-uppercase mb-4">Quick Links</h5>
                            <div className="d-flex flex-column justify-content-start">
                                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Home</Link>
                                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>About Us</Link>
                                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Our Services</Link>
                                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Pricing Plan</Link>
                                <Link className="text-white-50" to="#"><i className="fa fa-angle-right mr-2"></i>Contact Us</Link>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-5">
                            <h5 className="text-white text-uppercase mb-4">Our Services</h5>
                            <div className="d-flex flex-column justify-content-start">
                                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Body Massage</Link>
                                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Stone Therapy</Link>
                                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Facial Therapy</Link>
                                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Skin Care</Link>
                                <Link className="text-white-50" to="#"><i className="fa fa-angle-right mr-2"></i>Nail Care</Link>
                            </div>
                        </div>
                        <div className="col-sm-12 mb-5">
                            <h5 className="text-white text-uppercase mb-4">Newsletter</h5>
                            <div className="w-100">
                                <div className="input-group">
                                    <input type="text" className="form-control border-light" style={{padding: '30px'}} placeholder="Your Email Address"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary px-4">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark text-light border-top py-4" style={{borderColor: 'rgba(256, 256, 256, .15) !important'}}>
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                    <p className="m-0 text-white">&copy; <Link to="#">Your Site Name</Link>. All Rights Reserved.</p>
                </div>
                <div className="col-md-6 text-center text-md-right">
                    <p className="m-0 text-white">Designed by <Link to="https://htmlcodex.com">HTML Codex</Link></p>
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- Footer End --> */}

    </div>
  );
}
