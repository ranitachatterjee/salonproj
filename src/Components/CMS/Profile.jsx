import React, { useEffect } from "react";
import "./Profile.css";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { Logout, userProfile } from "../../Redux/AuthSlice";
import { profile_pic } from "../../Helper";
import {Link} from 'react-router-dom'
export default function Profile() {
  const dispatch = useDispatch();
  const { Data,toggle } = useSelector((s) => s.Auth);
  console.log("Data", Data);
  useEffect(() => {
    dispatch(userProfile());
  }, []);

  return (
    //   <div
    //     style={{
    //       borderStyle: "solid", borderColor: "blue", borderWidth: '3px',
    //       width: "80%",
    //       height: "80%",
    //       margin: "auto",
    //       marginTop: "60px"
    //     }}
    //   >
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-md-6">
    //           {/* user profile details */}
    //           <form>
    //             <div className="form-group" style={{textAlign:"left", color: 'blue',fontSize:'24px'}}>
    //               <label  className="left-aligned-label">Email address:</label>
    //               <input
    //                 type="email"
    //                 className="form-control"

    //                 value={Data?.email}
    //                 aria-describedby="emailHelp"
    //               />
    //               <small id="emailHelp" className="form-text text-muted">
    //                 We'll never share your email with anyone else.
    //               </small>
    //             </div>
    //             <div className="form-group"  style={{textAlign:"left", color: 'blue',fontSize:'24px'}}>
    //               <label className="left-aligned-label" >First Name:
    //               </label>
    //               <input
    //                 type="text"
    //                 value={Data?.first_name}
    //                 className="form-control"

    //               />
    //             </div>
    //             <div className="form-group"  style={{textAlign:"left", color: 'blue',fontSize:'24px'}}>
    //               <label className="left-aligned-label">Last Name:</label>
    //               <input
    //                 type="text"
    //                 className="form-control"
    //                 value={Data?.last_name}

    //               />
    //             </div>
    //             {/*
    // <button type="submit" className="btn btn-primary">Submit</button> */}
    //           </form>
    //         </div>
    //         <div
    //           className="col-md-6"
    //           style={{
    //             display: "flex",
    //             alignItems: "center",
    //             justifyContent: "center",
    //           }}
    //         >
    //           {/* profile pic */}
    //           <img
    //             src={profile_pic(Data?.profile_pic)}
    //             alt="profile_pic"
    //             className="mx-3 px-3 img-fluid
    //           "
    //             width={"250px"}
    //             height={"250px"}
    //             style={{ borderRadius: "100%" }}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    <>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">
                        <img
                          src={profile_pic(Data?.profile_pic)}
                          className="img-radius"
                          alt="User-Profile-Image"
                        />
                      </div>
                      {toggle ? (
                        <h6 className="f-w-800">
                          Hi ! {Data.first_name}
                          <br />
                        </h6>
                      ) : (
                        " "
                      )}
                      {/* {/ <h6 className="f-w-600">{Data.first_name} {Data.last_name}</h6> /} */}
                      {/* <button>
                        {" "}
                        <Link to="/" onClick={signOut}>
                          Log Out
                        </Link>{" "}
                      </button> */}
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                        Information
                      </h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Email</p>
                          <h6 className="text-muted f-w-400">{Data?.email}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Phone</p>
                          <h6 className="text-muted f-w-400">XXX-XXX-XXXX</h6>
                        </div>
                      </div>
                      <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                        Projects
                      </h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Recent</p>
                          <h6 className="text-muted f-w-400">Sam Disuja</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Most Viewed</p>
                          <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                        </div>
                      </div>
                      <ul className="social-link list-unstyled m-t-40 m-b-10">
                        <li>
                          <a
                            href="#!"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="facebook"
                            data-abc="true"
                          >
                            <i
                              className="mdi mdi-facebook feather icon-facebook facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#!"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="twitter"
                            data-abc="true"
                          >
                            <i
                              className="mdi mdi-twitter feather icon-twitter twitter"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#!"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="instagram"
                            data-abc="true"
                          >
                            <i
                              className="mdi mdi-instagram feather icon-instagram instagram"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* <!-- Footer Start --> */}
    <div className="footer container-fluid position-relative bg-dark py-5" style={{marginTop: '90px'}}>
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
    </div>
    {/* <!-- Footer End --> */}

      
    </>
  );
}
