import React from 'react'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <>
      {/* <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>SPA Center - Beauty & Spa HTML Template</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="Free HTML Templates" name="keywords">
    <meta content="Free HTML Templates" name="description">

    <!-- Favicon -->
    <link to="img/favicon.ico" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" to="https://fonts.gstatic.com">
    <link to="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Font Awesome -->
    <link to="https://cdnjs.cloudflare.com/Linkjax/libs/font-awesome/5.10.0/css/Linkll.min.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link to="lib/Linknimate/Linknimate.min.css" rel="stylesheet">
    <link to="lib/owlcarousel/Linkssets/owl.carousel.min.css" rel="stylesheet">
    <link to="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

    <!-- Customized Bootstrap Stylesheet -->
    <link to="css/style.css" rel="stylesheet">
</head> */}

{/* <body>
    <!-- Topbar Start -->
    <div className="container-fluid bg-light d-none d-lg-block">
        <div className="row py-2 px-lg-5">
            <div className="col-lg-6 text-left mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center">
                    <small><i className="fa fa-phone-alt mr-2"></i>+012 345 6789</small>
                    <small className="px-3">|</small>
                    <small><i className="fa fa-envelope mr-2"></i>info@example.com</small>
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
    <!-- Topbar End -->


    <!-- Navbar Start -->
    <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
            <Link to="index.html" className="navbar-brand ml-lg-3">
                <h1 className="m-0 text-primary"><span className="text-dark">SPA</span> Center</h1>
            </Link>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                <div className="navbar-nav m-auto py-0">
                    <Link to="index.html" className="nav-item nav-link">Home</Link>
                    <Link to="about.html" className="nav-item nav-link active">About</Link>
                    <Link to="service.html" className="nav-item nav-link">Services</Link>
                    <Link to="price.html" className="nav-item nav-link">Pricing</Link>
                    <div className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</Link>
                        <div className="dropdown-menu rounded-0 m-0">
                            <Link to="appointment.html" className="dropdown-item">Appointment</Link>
                            <Link to="opening.html" className="dropdown-item">Open Hours</Link>
                            <Link to="team.html" className="dropdown-item">Our Team</Link>
                            <Link to="testimonial.html" className="dropdown-item">Testimonial</Link>
                        </div>
                    </div>
                    <Link to="contact.html" className="nav-item nav-link">Contact</Link>
                </div>
                <Link to="" className="btn btn-primary d-none d-lg-block">Book Now</Link>
            </div>
        </nav>
    </div> */}
    {/* <!-- Navbar End --> */}


    {/* <!-- Header Start --> */}
    <div className="jumbotron jumbotron-fluid bg-jumbotron" style={{marginBottom: '90px'}}>
        <div className="container text-center py-5">
            <h3 className="text-white display-3 mb-4">About</h3>
            <div className="d-inline-flex align-items-center text-white">
                <p className="m-0"><Link className="text-white" to="">Home</Link></p>
                <i className="far fa-circle px-3"></i>
                <p className="m-0">About</p>
            </div>
        </div>
    </div>
    {/* <!-- Header End --> */}


    {/* <!-- About Start --> */}
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-6 pb-5 pb-lg-0">
                    <img className="img-fluid w-100" src="img/Linkbout.jpg" alt=""/>
                </div>
                <div className="col-lg-6">
                    <h6 className="d-inline-block text-primary text-uppercase bg-light py-1 px-2">About Us</h6>
                    <h1 className="mb-4">Your Best Spa, Beauty & Skin Care Center</h1>
                    <p className="pl-4 border-left border-primary">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd erat duo eos et erat</p>
                    <div className="row pt-3">
                        <div className="col-6">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}

{/* 
    <!-- Team Start --> */}
    <div className="container-fluid py-5">
        <div className="container pt-5">
            <div className="row justify-content-center text-center">
                <div className="col-lg-6">
                    <h6 className="d-inline-block bg-light text-primary text-uppercase py-1 px-2">Spa Specialist</h6>
                    <h1 className="mb-5">Spa & Beauty Specialist</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="team position-relative overflow-hidden mb-5">
                        <img className="img-fluid" src="img/team-1.jpg" alt=""/>
                        <div className="position-relative text-center">
                            <div className="team-text bg-primary text-white">
                                <h5 className="text-white text-uppercase">Olivia Mia</h5>
                                <p className="m-0">Spa & Beauty Expert</p>
                            </div>
                            <div className="team-social bg-dark text-center">
                                <Link className="btn btn-outline-primary btn-square mr-2" to="#"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-outline-primary btn-square mr-2" to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-outline-primary btn-square mr-2" to="#"><i className="fab fa-linkedin-in"></i></Link>
                                <Link className="btn btn-outline-primary btn-square" to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="team position-relative overflow-hidden mb-5">
                        <img className="img-fluid" src="img/team-2.jpg" alt=""/>
                        <div className="position-relative text-center">
                            <div className="team-text bg-primary text-white">
                                <h5 className="text-white text-uppercase">Cory Brown</h5>
                                <p className="m-0">Spa & Beauty Expert</p>
                            </div>
                            <div className="team-social bg-dark text-center">
                                <Link className="btn btn-outline-primary btn-square mr-2" to="#"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-outline-primary btn-square mr-2" to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-outline-primary btn-square mr-2" to="#"><i className="fab fa-linkedin-in"></i></Link>
                                <Link className="btn btn-outline-primary btn-square" to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="team position-relative overflow-hidden mb-5">
                        <img className="img-fluid" src="img/team-3.jpg" alt=""/>
                        <div className="position-relative text-center">
                            <div className="team-text bg-primary text-white">
                                <h5 className="text-white text-uppercase">Elizabeth Ross</h5>
                                <p className="m-0">Spa & Beauty Expert</p>
                            </div>
                            <div className="team-social bg-dark text-center">
                                <Link className="btn btn-outline-primary btn-square mr-2" to="#"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-outline-primary btn-square mr-2" to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-outline-primary btn-square mr-2" to="#"><i className="fab fa-linkedin-in"></i></Link>
                                <Link className="btn btn-outline-primary btn-square" to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="team position-relative overflow-hidden mb-5">
                        <img className="img-fluid" src="img/team-4.jpg" alt=""/>
                        <div className="position-relative text-center">
                            <div className="team-text bg-primary text-white">
                                <h5 className="text-white text-uppercase">Kelly Walke</h5>
                                <p className="m-0">Spa & Beauty Expert</p>
                            </div>
                            <div className="team-social bg-dark text-center">
                                <Link className="btn btn-outline-primary btn-square mr-2" to="#"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-outline-primary btn-square mr-2" to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-outline-primary btn-square mr-2" to="#"><i className="fab fa-linkedin-in"></i></Link>
                                <Link className="btn btn-outline-primary btn-square" to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Team End --> */}


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


    {/* <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/tempusdominus/js/moment.min.js"></script>
    <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
    <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

    <!-- Contact Javascript File -->
    <script src="mail/jqBootstrapValidation.min.js"></script>
    <script src="mail/contact.js"></script>

    <!-- Template Javascript -->
    <script src="js/main.js"></script> */}
{/* // </body>

// </html> */}
    </>
  )
}
