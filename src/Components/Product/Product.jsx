// import React,{useState,useEffect} from 'react'
// import {Link,useNavigate} from 'react-router-dom'
// import {RedirectToProductlist, products} from '../../Redux/CmsSlice'
// import { useDispatch,useSelector } from 'react-redux'

// export default function Product() {
//     const dispatch = useDispatch()
//     const navigate = useNavigate();
//     const [product,setProduct] = useState({
//       title: "", description:""  
//     })
//     const [image,setImage] = useState()

//     const [error,setError] =useState({})
//     const { redirectToProductlist } = useSelector((s) => s?.Cms);

//     const validateProduct = ()=> {
//         let error = {};
//         if(!product.title){
//             error.title = ("product is required")
//         }
//         if(!product.description){
//             error.description= ("Description is required")
//         }
//         return error;
//     }

//     let name, value;
//     const postValidateProduct=(e)=>{
//        name = e.target.name;
//        value = e.target.value ;
//        if(name ==='title'){
//         if(value.length===0)
//         {
//             setError({...error, title: "title is required"})
//             setProduct({...product,title:" "})
//         }
//         else {
//             setError({ ...error, list: "" })
//                 setProduct({ ...product, title: value })
//         }
//        }
//        if(name ==='description'){
//         if(value.length===0)
//         {
//             setError({...error, description: "description is required"})
//             setProduct({...product, description:" "})
//         }
//         else {
//             setError({ ...error, description: "" })
//                 setProduct({ ...product, description: value })
//         }
//        }
//     }

//     let redirection1=()=>{
//       let title = localStorage.getItem("title");
//       let isInProductPage = window.location.pathname.toLowerCase() === "/product";
  
//       if (title !== null && title !== undefined && title !== "") {
//         // window.location.pathname = getPathname;
//         isInProductPage && navigate("/productlist");
//       }
  
//      }
//      useEffect(() => {
//       redirection1()
//     }, [redirectToProductlist])

//     // useEffect(()=>{
//     //   dispatch(RedirectToProductlist(null))
//     //  },[redirectToProductlist])

//     const submitUserData = async (e) => {
//         e.preventDefault();
//         setError(validateProduct());
//         let formData = new FormData();
//         formData.append("title", product.title);
//         formData.append("description", product.description);
    
//         formData.append("image", image);
//         dispatch(products(formData))
//     }

    

//   return (
//     <>
//         <form>
//   <div class="form-group">
//     <label for="exampleInputEmail1">Title</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" name="title" aria-describedby="emailHelp" value={product?.title} onChange={(e)=>postValidateProduct(e)}/>
//     <span style={{ color: "red", marginLeft: "24px" }}>
//                             {" "}
//                             {error?.title}{" "}
//                         </span>
//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Description</label>
//     <input type="text" class="form-control" id="exampleInputPassword1" name="description" value={product?.description} onChange={(e)=>postValidateProduct(e)}/>
 
//   <span style={{ color: "red", marginLeft: "24px" }}>
//                             {" "}
//                             {error?.description}{" "}
//                         </span>
//                         </div>
//                         <div>
//                         <label>Image </label>
//                             <input
//                               type="file"
//                               onChange={(e) => setImage(e.target.files[0])}
//                               name="img"
//                               accept="image/*"
//                               class="form-control"
//                             />
//                             {image !== "" && image !== undefined && image !== null ? (
//                     <img
//                       style={{ height: "180px" }}
//                       src={URL.createObjectURL(image)}
//                       alt=""
//                       className="upload-img"
//                     />
//                   ) : (
//                     <>{image === "" && <p>Drag or drop content here</p>}</>
//                   )}
//                         </div>
 
//   <button type="submit" class="btn btn-primary" onClick={submitUserData}>Submit</button>
// </form>
//     </>
//   )
// }

//D code
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RedirectToProductlist, products } from '../../Redux/CmsSlice'
import { useDispatch, useSelector } from 'react-redux'
import "./AddProduct.css"




export default function Product() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "", description: ""
  })
  const [image, setImage] = useState()
  const [error, setError] = useState({})
  const [changeTitle,setChangeTitle] = useState()
  const [changeDescription,setChangeDescription] = useState()

  const { redirectToProductlist } = useSelector((s) => s?.Cms);


  const getInputTitle = (e) => {
    setChangeTitle(e.target.value)
  }
  
  const getInputDescription = (e) => {
    setChangeDescription(e.target.value)
  }


  const validateProduct = () => {
    let error = {};
    if (!product.title) {
      error.title = ("product is required")
    }
    if (!product.description) {
      error.description = ("Description is required")
    }
    return error;
  }

  let name, value;
  const postValidateProduct1 = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === 'title') {
      if (value.length === 0) {
        setError({ ...error, title: "title is required" })
        setProduct({ ...product, title: " " })
      }
      else {
        setError({ ...error, list: "" })
        setProduct({ ...product, title: value })
      }
    }
    if (name === 'description') {
      if (value.length === 0) {
        setError({ ...error, description: "description is required" })
        setProduct({ ...product, description: " " })
      }
      else {
        setError({ ...error, description: "" })
        setProduct({ ...product, description: value })
      }
    }
    getInputTitle(e)
  }

  const postValidateProduct2 = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === 'title') {
      if (value.length === 0) {
        setError({ ...error, title: "title is required" })
        setProduct({ ...product, title: " " })
      }
      else {
        setError({ ...error, list: "" })
        setProduct({ ...product, title: value })
      }
    }
    if (name === 'description') {
      if (value.length === 0) {
        setError({ ...error, description: "description is required" })
        setProduct({ ...product, description: " " })
      }
      else {
        setError({ ...error, description: "" })
        setProduct({ ...product, description: value })
      }
    }
    getInputDescription(e)
  }


  let redirection1 = () => {
    let title = localStorage.getItem("title");
    let isInProductPage = window.location.pathname.toLowerCase() === "/product";

    if (title !== null && title !== undefined && title !== "") {
      // window.location.pathname = getPathname;
      isInProductPage && navigate("/productlist");
    }

  }
  useEffect(() => {
    redirection1()
  }, [redirectToProductlist])

  // useEffect(()=>{
  //   dispatch(RedirectToProductlist(null))
  //  },[redirectToProductlist])

  const submitUserData = async (e) => {
    e.preventDefault();
    setError(validateProduct());
    let formData = new FormData();
    formData.append("title", product.title);
    formData.append("description", product.description);

    formData.append("image", image);
    dispatch(products(formData))
  }



  return (
    <>


      <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div class="card card0 border-0">
          <div class="row d-flex">


            {/* input part */}

            <div class="col-lg-6">
              <div class="card2 card border-0 px-4 py-5">
                <div class="row mb-4 px-3">


                </div>
                <div class="row px-3 mb-4">
                  <div class="line"></div>

                  <div class="line"></div>
                </div>

                <div>
                  <label>Image </label>
                  <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    name="img"
                    accept="image/*"
                    class="form-control"
                  />
                </div>


                <div class="row px-3">

                  <label for="exampleInputEmail1">Title</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" name="title" placeholder="Enter a Title of Product" aria-describedby="emailHelp" value={product?.title} onChange={(e) => postValidateProduct1(e)} />
                  <span style={{ color: "red", marginLeft: "24px" }}>
                    {" "}
                    {error?.title}{" "}
                  </span>
                </div>
                <div class="row px-3">

                  <label for="exampleInputPassword1">Description</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" name="description" placeholder="Enter a Description of Product" value={product?.description} onChange={(e) => postValidateProduct2(e)} />
                  <span style={{ color: "red", marginLeft: "24px" }}>
                    {" "}
                    {error?.description}{" "}
                  </span>
                </div>


                <div class="row mb-3 px-3">
                  <button type="submit" class="btn btn-primary" onClick={submitUserData}>Submit</button>
                </div>
              </div>
            </div>



            <div class="col-lg-6">
              <div class="card1 pb-5">
                <div class="row px-3 justify-content-center mt-4 mb-5 border-line">

                  {/* Input Image  */}

                  <article class="cards">
                    {image !== "" && image !== undefined && image !== null ? (
                      <img
                      className="card-backgrounds"
                        src={URL.createObjectURL(image)}
                        alt=""
                        width="1920"
                        height="2193"
                      />
                    ) : (
                      <>{image === "" && <p>Drag or drop content here</p>}</>
                    )}



                    <div class="card__contents | flow">
                      <div class="card__content--containers | flow">
                        <h2 class="card__titles">{changeTitle}</h2>
                        <p class="card__descriptions"> {changeDescription}

                        </p>
                      </div>
                      <span> <Link
                        to=""
                        className="cardBtn cardBtn1"
                      >
                        <button class="card__buttons">Edit</button>
                      </Link>
                        <Link
                          to=""

                        // class="btn btn-primary mr"

                        >
                          <button class="card__buttons">Delete</button>
                        </Link></span>

                    </div>
                  </article>

                </div>
              </div>
            </div>

           
          </div>
          <div class="bg-blue py-4">
            <div class="row px-3">
              
              <div class="social-contact ml-4 ml-sm-auto">               
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
  )
}


