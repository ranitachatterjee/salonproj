import React, { useState, useEffect } from "react";
import TextContent from "./TextContent";
import { useDispatch, useSelector } from "react-redux";
import { Redirect_To } from "../../Redux/AuthSlice";
import SpaServices from "./SpaServices";
import { Link } from "react-router-dom";
import './Home.css'
export default function Home() {
  const longText =
    "Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd erat duo eos et erat";

  const { redirect } = useSelector((s) => s?.Auth);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(Redirect_To(null));
  }, [redirect]);
  return (
    <div>
      {/* <!-- Carousel Start --> */}
      <div className="container-fluid p-0 mb-5 pb-5">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#header-carousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#header-carousel" data-slide-to="1"></li>
            <li data-target="#header-carousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div
              className="carousel-item position-relative active"
              style={{ minHeight: "100vh" }}
            >
              <img
                className="position-absolute w-100 h-100"
                src="img/carousel-1.jpg"
                style={{ objectFit: "cover" }}
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h6
                    className="text-white text-uppercase mb-3 animate__animated animate__fadeInDown"
                    style={{ letterSpacing: "3px" }}
                  >
                    Spa & Beauty Center
                  </h6>
                  <h3 className="display-3 text-capitalize text-white mb-3">
                    Massage Treatment
                  </h3>
                  <p className="mx-md-5 px-5">
                    Lorem rebum magna dolore amet lorem eirmod magna erat diam
                    stet. Sadips duo stet amet amet ndiam elitr ipsum labore
                    diam
                  </p>
                  <Link
                    className="btn btn-outline-light py-3 px-4 mt-3 animate__animated animate__fadeInUp"
                    to="/reduxlogin"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="carousel-item position-relative"
              style={{ minHeight: "100vh" }}
            >
              <img
                className="position-absolute w-100 h-100"
                src="img/carousel-2.jpg"
                style={{ objectFit: "cover" }}
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h6
                    className="text-white text-uppercase mb-3 animate__animated animate__fadeInDown"
                    style={{ letterSpacing: "3px" }}
                  >
                    Spa & Beauty Center
                  </h6>
                  <h3 className="display-3 text-capitalize text-white mb-3">
                    Facial Treatment
                  </h3>
                  <p className="mx-md-5 px-5">
                    Lorem rebum magna dolore amet lorem eirmod magna erat diam
                    stet. Sadips duo stet amet amet ndiam elitr ipsum labore
                    diam
                  </p>
                  <a
                    className="btn btn-outline-light py-3 px-4 mt-3 animate__animated animate__fadeInUp"
                    href="#"
                  >
                    Make Appointment
                  </a>
                </div>
              </div>
            </div>
            <div
              className="carousel-item position-relative"
              style={{ minHeight: "100vh" }}
            >
              <img
                className="position-absolute w-100 h-100"
                src="img/carousel-3.jpg"
                style={{ objectFit: "cover" }}
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h6
                    className="text-white text-uppercase mb-3 animate__animated animate__fadeInDown"
                    style={{ letterSpacing: "3px" }}
                  >
                    Spa & Beauty Center
                  </h6>
                  <h3 className="display-3 text-capitalize text-white mb-3">
                    Cellulite Treatment
                  </h3>
                  <p className="mx-md-5 px-5">
                    Lorem rebum magna dolore amet lorem eirmod magna erat diam
                    stet. Sadips duo stet amet amet ndiam elitr ipsum labore
                    diam
                  </p>
                  <a
                    className="btn btn-outline-light py-3 px-4 mt-3 animate__animated animate__fadeInUp"
                    href="#"
                  >
                    Make Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Carousel End --> */}

      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 pb-5 pb-lg-0">
              <img className="img-fluid w-100" src="img/about.jpg " alt="" />
            </div>
            <div className="col-lg-6">
              <h6 className="d-inline-block text-primary text-uppercase bg-light py-1 px-2">
                About Us
              </h6>
              <h1 className="mb-4">Your Best Spa, Beauty & Skin Care Center</h1>
              <p className="pl-4 border-left border-primary">
                {/* Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd erat duo eos et erat */}
                <TextContent text={longText} />
              </p>
              <div className="row pt-3">
                {/* <div className="col-6">
                            <div className="bg-light text-center p-4">
                                <h3 className="display-4 text-primary" data-toggle="counter-up">99</h3>
                                <h6 className="text-uppercase">Spa Specialist</h6>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="bg-light text-center p-4">
                                <h3 className="display-4 text-primary" data-toggle="counter-up">999</h3>
                                <h6 className="text-uppercase">Happy Clients</h6>
                            </div>
                        </div> */}

                {/* <!-- Service Start --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <div className="container-fluid px-0 py-5 my-5">
        <div className="row mx-0 justify-content-center text-center">
            <div className="col-lg-6">
                <h6 className="d-inline-block bg-light text-primary text-uppercase py-1 px-2">Our Service</h6>
                <h1>Spa & Beauty Services</h1>
            </div>
        </div>
        <div className="owl-carousel service-carousel">
            <div className="service-item position-relative">
                <img className="img-fluid" src="img/service-1.jpg" alt=""/>
                <div className="service-text text-center">
                    <h4 className="text-white font-weight-medium px-3">Body Massage</h4>
                    <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                    <div className="w-100 bg-white text-center p-4" >
                        <a className="btn btn-primary" href="">Make Order</a>
                    </div>
                </div>
            </div>
            <div className="service-item position-relative">
                <img className="img-fluid" src="img/service-2.jpg" alt=""/>
                <div className="service-text text-center">
                    <h4 className="text-white font-weight-medium px-3">Stone Therapy</h4>
                    <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                    <div className="w-100 bg-white text-center p-4" >
                        <a className="btn btn-primary" href="">Make Order</a>
                    </div>
                </div>
            </div>
            <div className="service-item position-relative">
                <img className="img-fluid" src="img/service-3.jpg" alt=""/>
                <div className="service-text text-center">
                    <h4 className="text-white font-weight-medium px-3">Facial Therapy</h4>
                    <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                    <div className="w-100 bg-white text-center p-4" >
                        <a className="btn btn-primary" href="">Make Order</a>
                    </div>
                </div>
            </div>
            <div className="service-item position-relative">
                <img className="img-fluid" src="img/service-4.jpg" alt=""/>
                <div className="service-text text-center">
                    <h4 className="text-white font-weight-medium px-3">Skin Care</h4>
                    <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                    <div className="w-100 bg-white text-center p-4" >
                        <a className="btn btn-primary" href="">Make Order</a>
                    </div>
                </div>
            </div>
            <div className="service-item position-relative">
                <img className="img-fluid" src="img/service-5.jpg" alt=""/>
                <div className="service-text text-center">
                    <h4 className="text-white font-weight-medium px-3">Stream Bath</h4>
                    <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                    <div className="w-100 bg-white text-center p-4" >
                        <a className="btn btn-primary" href="">Make Order</a>
                    </div>
                </div>
            </div>
            <div className="service-item position-relative">
                <img className="img-fluid" src="img/service-6.jpg" alt=""/>
                <div className="service-text text-center">
                    <h4 className="text-white font-weight-medium px-3">Face Masking</h4>
                    <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                    <div className="w-100 bg-white text-center p-4" >
                        <a className="btn btn-primary" href="">Make Order</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="row justify-content-center bg-appointment mx-0">
            <div className="col-lg-6 py-5">
                <div className="p-5 my-5" style={{background: "rgba(33, 30, 28, 0.7)"}}>
                    <h1 className="text-white text-center mb-4">Make Appointment</h1>
                    <form>
                        <div className="form-row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input type="text" className="form-control bg-transparent p-4" placeholder="Your Name" required="required" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input type="email" className="form-control bg-transparent p-4" placeholder="Your Email" required="required" />
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <div className="date" id="date" data-target-input="nearest">
                                        <input type="text" className="form-control bg-transparent p-4 datetimepicker-input" placeholder="Select Date" data-target="#date" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <div className="time" id="time" data-target-input="nearest">
                                        <input type="text" className="form-control bg-transparent p-4 datetimepicker-input" placeholder="Select Time" data-target="#time" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <select className="custom-select bg-transparent px-4" style={{height: '47px'}}>
                                        <option selected>Select A Service</option>
                                        <option value="1">Service 1</option>
                                        <option value="2">Service 1</option>
                                        <option value="3">Service 1</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <button className="btn btn-primary btn-block" type="submit" style={{height: '47px'}}>Make Appointment</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- Service End --> */}

      {/* <!-- Service Start --> */}
      {/* <div className="container-fluid px-0 py-5 my-5">
        <div className="row mx-0 justify-content-center text-center">
            <div className="col-lg-6">
                <h6 className="d-inline-block bg-light text-primary text-uppercase py-1 px-2">Our Service</h6>
                <h1>Spa & Beauty Services</h1>
            </div>
        </div>
        <div className="owl-carousel service-carousel">
            <div className="service-item position-relative">
                <img className="img-fluid" src="img/service-1.jpg" alt=""/>
                <div className="service-text text-center">
                    <h4 className="text-white font-weight-medium px-3">Body Massage</h4>
                    <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                    <div className="w-100 bg-white text-center p-4" >
                        <a className="btn btn-primary" href="">Make Order</a>
                    </div>
                </div>
            </div>
            <div className="service-item position-relative">
                <img className="img-fluid" src="img/service-2.jpg" alt=""/>
                <div className="service-text text-center">
                    <h4 className="text-white font-weight-medium px-3">Stone Therapy</h4>
                    <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                    <div className="w-100 bg-white text-center p-4" >
                        <a className="btn btn-primary" href="">Make Order</a>
                    </div>
                </div>
            </div>
            <div className="service-item position-relative">
                <img className="img-fluid" src="img/service-3.jpg" alt=""/>
                <div className="service-text text-center">
                    <h4 className="text-white font-weight-medium px-3">Facial Therapy</h4>
                    <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                    <div className="w-100 bg-white text-center p-4" >
                        <a className="btn btn-primary" href="">Make Order</a>
                    </div>
                </div>
            </div>
            <div className="service-item position-relative">
                <img className="img-fluid" src="img/service-4.jpg" alt=""/>
                <div className="service-text text-center">
                    <h4 className="text-white font-weight-medium px-3">Skin Care</h4>
                    <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                    <div className="w-100 bg-white text-center p-4" >
                        <a className="btn btn-primary" href="">Make Order</a>
                    </div>
                </div>
            </div>
            <div className="service-item position-relative">
                <img className="img-fluid" src="img/service-5.jpg" alt=""/>
                <div className="service-text text-center">
                    <h4 className="text-white font-weight-medium px-3">Stream Bath</h4>
                    <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                    <div className="w-100 bg-white text-center p-4" >
                        <a className="btn btn-primary" href="">Make Order</a>
                    </div>
                </div>
            </div>
            <div className="service-item position-relative">
                <img className="img-fluid" src="img/service-6.jpg" alt=""/>
                <div className="service-text text-center">
                    <h4 className="text-white font-weight-medium px-3">Face Masking</h4>
                    <p className="text-white px-3 mb-3">Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum</p>
                    <div className="w-100 bg-white text-center p-4" >
                        <a className="btn btn-primary" href="">Make Order</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="row justify-content-center bg-appointment mx-0">
            <div className="col-lg-6 py-5">
                <div className="p-5 my-5" style={{background: "rgba(33, 30, 28, 0.7)"}}>
                    <h1 className="text-white text-center mb-4">Make Appointment</h1>
                    <form>
                        <div className="form-row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input type="text" className="form-control bg-transparent p-4" placeholder="Your Name" required="required" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input type="email" className="form-control bg-transparent p-4" placeholder="Your Email" required="required" />
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <div className="date" id="date" data-target-input="nearest">
                                        <input type="text" className="form-control bg-transparent p-4 datetimepicker-input" placeholder="Select Date" data-target="#date" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <div className="time" id="time" data-target-input="nearest">
                                        <input type="text" className="form-control bg-transparent p-4 datetimepicker-input" placeholder="Select Time" data-target="#time" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <select className="custom-select bg-transparent px-4" style={{height: '47px'}}>
                                        <option selected>Select A Service</option>
                                        <option value="1">Service 1</option>
                                        <option value="2">Service 1</option>
                                        <option value="3">Service 1</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <button className="btn btn-primary btn-block" type="submit" style={{height: "47px"}}>Make Appointment</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div> */}
      {/* <!-- Service End --> */}
      <SpaServices />

      {/* <!-- Open Hours Start --> */}
      {/* <div className="container-fluid py-5 mx-5">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6" style={{minHeight: '500px'}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src="img/opening.jpg" style={{objectFit: "cover"}}/>
                    </div>
                </div>
                <div className="col-lg-6 pt-5 pb-lg-5">
                    <div className="hours-text bg-light p-4 p-lg-5 my-lg-5">
                        <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Open Hours</h6>
                        <h1 className="mb-4">Best Relax And Spa Zone</h1>
                        <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                        <ul className="list-inline">
                            <li className="h6 py-1"><i className="far fa-circle text-primary mr-3"></i>Mon – Fri : 9:00 AM - 7:00 PM</li>
                            <li className="h6 py-1"><i className="far fa-circle text-primary mr-3"></i>Saturday : 9:00 AM - 6:00 PM</li>
                            <li className="h6 py-1"><i className="far fa-circle text-primary mr-3"></i>Sunday : Closed</li>
                        </ul>
                        <a href="" className="btn btn-primary mt-2">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
      {/* <!-- Open Hours End --> */}

      {/* <!-- Pricing Start --> */}
      {/* <div className="container-fluid bg-pricing" style={{margin: "90px 0"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-5" style={{minHeight: '500px'}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src="img/pricing.jpg" style={{objectFit: "cover"}}/>
                    </div>
                </div>
                <div className="col-lg-7 pt-5 pb-lg-5">
                    <div className="pricing-text bg-light p-4 p-lg-5 my-lg-5">
                        <div className="owl-carousel pricing-carousel">
                            <div className="bg-white">
                                <div className="d-flex align-items-center justify-content-between border-bottom border-primary p-4">
                                    <h1 className="display-4 mb-0">
                                        <small className="align-top text-muted font-weight-medium" style={{fontSize: '22px', lineHeight: "45px"}}>$</small>49<small className="align-bottom text-muted font-weight-medium" style={{fontSize: '16px', lineHeight: '40px'}}>/Mo</small>
                                    </h1>
                                    <h5 className="text-primary text-uppercase m-0">Basic Plan</h5>
                                </div>
                                <div className="p-4">
                                    <p><i className="fa fa-check text-success mr-2"></i>Full Body Massage</p>
                                    <p><i className="fa fa-check text-success mr-2"></i>Deep Tissue Massage</p>
                                    <p><i className="fa fa-check text-success mr-2"></i>Hot Stone Massage</p>
                                    <p><i className="fa fa-check text-success mr-2"></i>Tissue Body Polish</p>
                                    <p><i className="fa fa-check text-success mr-2"></i>Foot & Nail Care</p>
                                    <a href="" className="btn btn-primary my-2">Order Now</a>
                                </div>
                            </div>
                            <div className="bg-white">
                                <div className="d-flex align-items-center justify-content-between border-bottom border-primary p-4">
                                    <h1 className="display-4 mb-0">
                                        <small className="align-top text-muted font-weight-medium" style={{fontSize: '22px', lineHeight: '45px'}}>$</small>99<small className="align-bottom text-muted font-weight-medium" style={{fontSize: '16px', lineHeight: '40px'}}>/Mo</small>
                                    </h1>
                                    <h5 className="text-primary text-uppercase m-0">Family Plan</h5>
                                </div>
                                <div className="p-4">
                                    <p><i className="fa fa-check text-success mr-2"></i>Full Body Massage</p>
                                    <p><i className="fa fa-check text-success mr-2"></i>Deep Tissue Massage</p>
                                    <p><i className="fa fa-check text-success mr-2"></i>Hot Stone Massage</p>
                                    <p><i className="fa fa-check text-success mr-2"></i>Tissue Body Polish</p>
                                    <p><i className="fa fa-check text-success mr-2"></i>Foot & Nail Care</p>
                                    <a href="" className="btn btn-primary my-2">Order Now</a>
                                </div>
                            </div>
                            <div className="bg-white">
                                <div className="d-flex align-items-center justify-content-between border-bottom border-primary p-4">
                                    <h1 className="display-4 mb-0">
                                        <small className="align-top text-muted font-weight-medium" style={{fontSize: '22px', lineHeight: "45px"}}>$</small>149<small className="align-bottom text-muted font-weight-medium" style={{fontSize: '16px', lineHeight: "40px"}}>/Mo</small>
                                    </h1>
                                    <h5 className="text-primary text-uppercase m-0">VIP Plan</h5>
                                </div>
                                <div className="p-4">
                                    <p><i className="fa fa-check text-success mr-2"></i>Full Body Massage</p>
                                    <p><i className="fa fa-check text-success mr-2"></i>Deep Tissue Massage</p>
                                    <p><i className="fa fa-check text-success mr-2"></i>Hot Stone Massage</p>
                                    <p><i className="fa fa-check text-success mr-2"></i>Tissue Body Polish</p>
                                    <p><i className="fa fa-check text-success mr-2"></i>Foot & Nail Care</p>
                                    <a href="" className="btn btn-primary my-2">Order Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
      {/* <!-- Pricing End --> */}

      {/* <!-- Team Start --> */}
      <div className="container-fluid py-5">
        <div className="container pt-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <h6 className="d-inline-block bg-light text-primary text-uppercase py-1 px-2">
                Spa Specialist
              </h6>
              <h1 className="mb-5">Spa & Beauty Specialist</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team position-relative overflow-hidden mb-5">
                <img className="img-fluid" src="img/team-1.jpg" alt="" />
                <div className="position-relative text-center">
                  <div className="team-text bg-primary text-white">
                    <h5 className="text-white text-uppercase">Olivia Mia</h5>
                    <p className="m-0">Spa & Beauty Expert</p>
                  </div>
                  <div className="team-social bg-dark text-center">
                    <a
                      className="btn btn-outline-primary btn-square mr-2"
                      href="#"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-outline-primary btn-square mr-2"
                      href="#"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-outline-primary btn-square mr-2"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-outline-primary btn-square" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team position-relative overflow-hidden mb-5">
                <img className="img-fluid" src="img/team-2.jpg" alt="" />
                <div className="position-relative text-center">
                  <div className="team-text bg-primary text-white">
                    <h5 className="text-white text-uppercase">Cory Brown</h5>
                    <p className="m-0">Spa & Beauty Expert</p>
                  </div>
                  <div className="team-social bg-dark text-center">
                    <a
                      className="btn btn-outline-primary btn-square mr-2"
                      href="#"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-outline-primary btn-square mr-2"
                      href="#"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-outline-primary btn-square mr-2"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-outline-primary btn-square" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team position-relative overflow-hidden mb-5">
                <img className="img-fluid" src="img/team-3.jpg" alt="" />
                <div className="position-relative text-center">
                  <div className="team-text bg-primary text-white">
                    <h5 className="text-white text-uppercase">
                      Elizabeth Ross
                    </h5>
                    <p className="m-0">Spa & Beauty Expert</p>
                  </div>
                  <div className="team-social bg-dark text-center">
                    <a
                      className="btn btn-outline-primary btn-square mr-2"
                      href="#"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-outline-primary btn-square mr-2"
                      href="#"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-outline-primary btn-square mr-2"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-outline-primary btn-square" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team position-relative overflow-hidden mb-5">
                <img className="img-fluid" src="img/team-4.jpg" alt="" />
                <div className="position-relative text-center">
                  <div className="team-text bg-primary text-white">
                    <h5 className="text-white text-uppercase">Kelly Walke</h5>
                    <p className="m-0">Spa & Beauty Expert</p>
                  </div>
                  <div className="team-social bg-dark text-center">
                    <a
                      className="btn btn-outline-primary btn-square mr-2"
                      href="#"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-outline-primary btn-square mr-2"
                      href="#"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-outline-primary btn-square mr-2"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-outline-primary btn-square" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}

      {/* <!-- Testimonial Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 pb-5 pb-lg-0">
              <img
                className="img-fluid w-100"
                src="img/testimonial.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <h6 className="d-inline-block text-primary text-uppercase bg-light py-1 px-2">
                Testimonial
              </h6>
              <h1 className="mb-4">What Our Clients Say!</h1>
              <div className="owl-carousel testimonial-carousel">
                <div className="position-relative">
                  <i
                    className="fa fa-3x fa-quote-right text-primary position-absolute"
                    style={{ top: "-6px", right: "0" }}
                  ></i>
                  <div className="d-flex align-items-center mb-3">
                    <img
                      className="img-fluid rounded-circle"
                      src="img/testimonial-1.jpg"
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                    <div className="ml-3">
                      <h6 className="text-uppercase">Client Name</h6>
                      <span>Profession</span>
                    </div>
                  </div>
                  <p className="m-0">
                    Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos
                    lorem nonumy. Tempor sea ipsum diam sed clita dolore eos
                    dolores magna erat dolore sed stet justo et dolor.
                  </p>
                </div>
                <div className="position-relative">
                  <i
                    className="fa fa-3x fa-quote-right text-primary position-absolute"
                    style={{ top: "-6px", right: "0" }}
                  ></i>
                  <div className="d-flex align-items-center mb-3">
                    <img
                      className="img-fluid rounded-circle"
                      src="img/testimonial-2.jpg"
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                    <div className="ml-3">
                      <h6 className="text-uppercase">Client Name</h6>
                      <span>Profession</span>
                    </div>
                  </div>
                  <p className="m-0">
                    Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos
                    lorem nonumy. Tempor sea ipsum diam sed clita dolore eos
                    dolores magna erat dolore sed stet justo et dolor.
                  </p>
                </div>
                <div className="position-relative">
                  <i
                    className="fa fa-3x fa-quote-right text-primary position-absolute"
                    style={{ top: "-6px", right: "0" }}
                  ></i>
                  <div className="d-flex align-items-center mb-3">
                    <img
                      className="img-fluid rounded-circle"
                      src="img/testimonial-3.jpg"
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                    <div className="ml-3">
                      <h6 className="text-uppercase">Client Name</h6>
                      <span>Profession</span>
                    </div>
                  </div>
                  <p className="m-0">
                    Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos
                    lorem nonumy. Tempor sea ipsum diam sed clita dolore eos
                    dolores magna erat dolore sed stet justo et dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}

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

{/* 
    <!-- Back to Top --> */}
    <Link to="#" className="btn btn-lg btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></Link>

    </div>
  );
}
