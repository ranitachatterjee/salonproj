// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "./Product.css";
// import { getAllProductList, deleteProduct, RedirectToProductlist,removeTitle,RedirectToProductlist1,removeDescription } from "../../Redux/CmsSlice";
// import { Link } from "react-router-dom";
// import { image } from "../../Helper";
// import SweetAlertComponent from "../SweetAlert/SweetAlert";
// import { Pagination } from "@mui/material";
// export default function Getproduct() {
//   const dispatch = useDispatch();
//   const [isDelete, setisDelete] = useState("");
//   const [Delete_id, setDelete_id] = useState("");
//   const [page, setPage] = useState("");

//   const { Data, totalPage,redirectToProductList,redirectToProductList1 } = useSelector((s) => s.Cms);
//   console.log(Data);

//   useEffect(() => {
//     dispatch(getAllProductList());
//   }, []);

//   const delete_funcc = () => {
//     if (Delete_id !== "") {
//       dispatch(deleteProduct({ id: Delete_id })).then(() => {
//         dispatch(getAllProductList());
//       });
//     }
//     setDelete_id("");
//     setisDelete(false);
//   };
//   const handleChange = (e, pageno) => {
//     console.log(pageno, "pageno");
//     setPage(pageno);
//     dispatch(
//       getAllProductList({
//         page: pageno,
//         perpage: 10,
//       })
//     );
//   };

//   useEffect(()=>{
//     dispatch(RedirectToProductlist(null))
//   },[redirectToProductList])

//   const RemoveTitle = () => {
//     dispatch(removeTitle () )
// }
// const RemoveDescription = () => {
//   dispatch( removeDescription () )
// }
// useEffect(()=>{
//   dispatch(RedirectToProductlist1(null))
// },[redirectToProductList1])

//   return (
//     <div style={{backgroundColor:'lightblue'}}>
//     <Link to ='/product' onClick={RemoveTitle} style={{fontSize:"30px",   padding:'10px'}} className="box">Add</Link>
//       <div className="container " >
//         <div className="row ml-5 pl-5 py-2" >

//         {Data.length!==0?
//     Data.map((i)=>{
//       return(
//         <>

//         <div className="col-lg-6 pb-3 px-5" >
//                 <div class="card" style={{ width: "18rem",border: "3px solid grey" }}>
//                   <img
//                     src={image(i?.image)}
//                     class="card-img-top"
//                     alt="..."
//                     style={{ width: "17.8rem", height: "180px" }}
//                   />
//                   <div class="card-body">
//                     <h5 class="card-title">{i?.title}</h5>
//                     <p class="card-text">{i?.description}</p>

//                     <div className="newCardBtn">
//                       <Link
//                         to={`/updateproduct/${i._id}`}
//                         className="cardBtn cardBtn1" onClick={RemoveDescription}
//                       >
//                         Edit
//                       </Link>
//                       <Link
//                         to=""
//                         onClick={() => {
//                           setDelete_id(i?._id);
//                           setisDelete(true);
//                         }}
//                         // class="btn btn-primary mr"
//                         className="cardBtn cardBtn1" style={{backgroundColor:'pink'}}
//                       >
//                         Delete
//                       </Link>

//                     </div>
//                   </div>
//                 </div>
//               </div>
//         </>
//       )
//     })
//     :"No Data Found"

//         }

//         </div>
//       </div>
//       {isDelete && (
//         <SweetAlertComponent
//           confirm={delete_funcc}
//           cancle={() => setisDelete(false)}
//           title={"Are you sure?"}
//           subtitle={"You will not be able to recover!"}
//         />
//       )}
//       {Data.length !== 0 ? (
//         <Pagination count={totalPage} onChange={handleChange} page={page} />
//       ) : (
//         <></>
//       )}
//     </div>
//   );
// }

//Ranita's final code

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "./Product.css";
// import {
//   getAllProductList,
//   deleteProduct,
//   RedirectToProductlist,
//   removeTitle,
//   RedirectToProductlist1,
//   removeDescription,
// } from "../../Redux/CmsSlice";
// import { Link } from "react-router-dom";
// import { image } from "../../Helper";
// import SweetAlertComponent from "../SweetAlert/SweetAlert";
// import { Pagination } from "@mui/material";
// export default function Getproduct() {
//   const dispatch = useDispatch();
//   const [isDelete, setisDelete] = useState("");
//   const [Delete_id, setDelete_id] = useState("");
//   const [page, setPage] = useState("");

//   const { Data, totalPage, redirectToProductList, redirectToProductList1 } =
//     useSelector((s) => s.Cms);
//   console.log(Data);

//   useEffect(() => {
//     dispatch(getAllProductList());
//   }, []);

//   const delete_funcc = () => {
//     if (Delete_id !== "") {
//       dispatch(deleteProduct({ id: Delete_id })).then(() => {
//         dispatch(getAllProductList());
//       });
//     }
//     setDelete_id("");
//     setisDelete(false);
//   };
//   const handleChange = (e, pageno) => {
//     console.log(pageno, "pageno");
//     setPage(pageno);
//     dispatch(
//       getAllProductList({
//         page: pageno,
//         perpage: 10,
//       })
//     );
//   };

//   useEffect(() => {
//     dispatch(RedirectToProductlist(null));
//   }, [redirectToProductList]);

//   const RemoveTitle = () => {
//     dispatch(removeTitle());
//   };
//   const RemoveDescription = () => {
//     dispatch(removeDescription());
//   };
//   useEffect(() => {
//     dispatch(RedirectToProductlist1(null));
//   }, [redirectToProductList1]);

//   return (
//     <div style={{ backgroundColor: "lightblue" }}>
//       <Link
//         to="/product"
//         onClick={RemoveTitle}
//         style={{ fontSize: "30px", padding: "10px" }}
//         className="box"
//       >
//         Add
//       </Link>
//       <div className="container ">
//         <div className="row ml-3 pl-5 py-2">
//           {Data.length !== 0
//             ? Data.map((i) => {
//                 return (
//                   <>
//                     <div className="col-lg-6 pb-3 px-5">
//                       <div
//                         class="card"
//                         style={{
//                           width: "18rem",
//                           border: "3px solid grey"
                          
//                         }}
//                       >
//                         <img
//                           src={image(i?.image)}
//                           class="card-img-top"
//                           alt="..."
//                           style={{ width: "17.8rem", height: "180px" }}
//                         />
//                         <div class="card-body">
//                           <h5 class="card-title">{i?.title}</h5>
//                           <p class="card-text">{i?.description}</p>

//                           <div className="newCardBtn">
//                             <Link
//                               to={`/updateproduct/${i._id}`}
//                               className="cardBtn cardBtn1"
//                               onClick={RemoveDescription}
//                             >
//                               Edit
//                             </Link>
//                             <Link
//                               to=""
//                               onClick={() => {
//                                 setDelete_id(i?._id);
//                                 setisDelete(true);
//                               }}
//                               // class="btn btn-primary mr"
//                               className="cardBtn cardBtn1"
//                               style={{ backgroundColor: "pink" }}
//                             >
//                               Delete
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 );
//               })
//             : "No Data Found"}
//         </div>
//       </div>
//       {isDelete && (
//         <SweetAlertComponent
//           confirm={delete_funcc}
//           cancle={() => setisDelete(false)}
//           title={"Are you sure?"}
//           subtitle={"You will not be able to recover!"}
//         />
//       )}
//       {Data.length !== 0 ? (
//         <Pagination  count={totalPage} onChange={handleChange} page={page} />
//       ) : (
//         <></>
//       )}
//      </div>
//    );
//  }

//Debu code

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "./GetProduct.css";
// import { getAllProductList, deleteProduct, RedirectToProductlist, removeTitle } from "../../Redux/CmsSlice";
// import { Link } from "react-router-dom";
// import { image } from "../../Helper";
// import SweetAlertComponent from "../SweetAlert/SweetAlert";
// import { Pagination } from "@mui/material";
// export default function Getproduct() {
//   const dispatch = useDispatch();
//   const [isDelete, setisDelete] = useState("");
//   const [Delete_id, setDelete_id] = useState("");
//   const [page, setPage] = useState("");

//   const { Data, totalPage, redirectToProductList } = useSelector((s) => s.Cms);
//   console.log(Data);

//   useEffect(() => {
//     dispatch(getAllProductList());
//   }, []);

//   const delete_funcc = () => {
//     if (Delete_id !== "") {
//       dispatch(deleteProduct({ id: Delete_id })).then(() => {
//         dispatch(getAllProductList());
//       });
//     }
//     setDelete_id("");
//     setisDelete(false);
//   };
//   const handleChange = (e, pageno) => {
//     console.log(pageno, "pageno");
//     setPage(pageno);
//     dispatch(
//       getAllProductList({
//         page: pageno,
//         perpage: 10,
//       })
//     );
//   };

//   useEffect(() => {
//     dispatch(RedirectToProductlist(null))
//   }, [redirectToProductList])

//   const RemoveTitle = () => {
//     dispatch(removeTitle())
//   }
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./GetProduct.css";
import {
  getAllProductList,
  deleteProduct,
  RedirectToProductlist,
  removeTitle,
  RedirectToProductlist1,
  removeDescription,
} from "../../Redux/CmsSlice";
import { Link } from "react-router-dom";
import { image } from "../../Helper";
import SweetAlertComponent from "../SweetAlert/SweetAlert";
import { Pagination } from "@mui/material";
export default function Getproduct() {
  const dispatch = useDispatch();
  const [isDelete, setisDelete] = useState("");
  const [Delete_id, setDelete_id] = useState("");
  const [page, setPage] = useState("");

  const { Data, totalPage, redirectToProductList, redirectToProductList1 } =
    useSelector((s) => s.Cms);
  console.log(Data);

  useEffect(() => {
    dispatch(getAllProductList());
  }, []);

  const delete_funcc = () => {
    if (Delete_id !== "") {
      dispatch(deleteProduct({ id: Delete_id })).then(() => {
        dispatch(getAllProductList());
      });
    }
    setDelete_id("");
    setisDelete(false);
  };
  const handleChange = (e, pageno) => {
    console.log(pageno, "pageno");
    setPage(pageno);
    dispatch(
      getAllProductList({
        page: pageno,
        perpage: 10,
      })
    );
  };

  useEffect(() => {
    dispatch(RedirectToProductlist(null));
  }, [redirectToProductList]);

  const RemoveTitle = () => {
    dispatch(removeTitle());
  };
  const RemoveDescription = () => {
    dispatch(removeDescription());
  };
  useEffect(() => {
    dispatch(RedirectToProductlist1(null));
  }, [redirectToProductList1]);


  return (
    <>
      <Link to='/product' onClick={RemoveTitle} style={{ fontSize: "30px", padding: "10px" }} className="box">Add</Link>
      <div className="containers">
        <div className="row">
{/* 
          {
            Data.map((i) => {
              return (
                <>





                  <article class="cards">
                    <img
                      class="card__backgrounds"
                      src={image(i?.image)}
                      alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                      width="1920"
                      height="2193"
                    />
                    <div class="card__contents | flow">
                      <div class="card__content--containers | flow">
                        <h2 class="card__titles">{i?.title}</h2>
                        <p class="card__descriptions"> {i?.description}

                        </p>
                      </div>
                      <span> <Link
                        to={`/updateproduct/${i._id}`}
                        className="cardBtn cardBtn1" onClick={RemoveDescription}
                      >
                        <button class="card__buttons">Edit</button>
                      </Link>
                        <Link
                          to=""
                          onClick={() => {
                            setDelete_id(i?._id);
                            setisDelete(true);
                          }}
                        // class="btn btn-primary mr"

                        >
                          <button class="card__buttons">Delete</button>
                        </Link></span>

                    </div>
                  </article>




                </>
              )
            })
          } */}

          { Data.length !== 0
           ? Data.map((i) => {
              return (
                <>





                  <article class="cards">
                    <img
                      class="card__backgrounds"
                      src={image(i?.image)}
                      alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                      width="1920"
                      height="2193"
                    />
                    <div class="card__contents | flow">
                      <div class="card__content--containers | flow">
                        <h2 class="card__titles">{i?.title}</h2>
                        <p class="card__descriptions"> {i?.description}

                        </p>
                      </div>
                      <span> <Link
                        to={`/updateproduct/${i._id}`}
                        className="cardBtn cardBtn1" onClick={RemoveDescription}
                      >
                        <button class="card__buttons">Edit</button>
                      </Link>
                        <Link
                          to=""
                          onClick={() => {
                            setDelete_id(i?._id);
                            setisDelete(true);
                          }}
                        // class="btn btn-primary mr"

                        >
                          <button class="card__buttons">Delete</button>
                        </Link></span>

                    </div>
                  </article>




                </>
              )
            }): <h2 style={{textAlign:'center', color:'red'}}>"No Data found"</h2>
          }


        </div>
      </div>
      {isDelete && (
        <SweetAlertComponent
          confirm={delete_funcc}
          cancle={() => setisDelete(false)}
          title={"Are you sure?"}
          subtitle={"You will not be able to recover!"}
        />
      )}
      {Data.length !== 0 ? (
        <Pagination count={totalPage} onChange={handleChange} page={page} />
      ) : (
        <></>
      )}
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
    </>
  );
}
































































{/* <article class="cards">
<img
  class="card__backgrounds"
  src={image(i?.image)}
  alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
  width="1920"
  height="2193"
/>
<div class="card__contents | flow">
  <div class="card__content--containers | flow">
    <h2 class="card__titles">{i?.title}</h2>
    <p class="card__descriptions"> {i?.description}
     
    </p>
  </div>
  <span> <Link
    to={`/updateproduct/${i._id}`}
        className="cardBtn cardBtn1" onClick={RemoveDescription}
      >
        Edit
  </Link>
    <Link
      to=""
      onClick={() => {
        setDelete_id(i?._id);
        setisDelete(true);
      }}
    // class="btn btn-primary mr"

    >
      <button class="card__buttons">Delete</button>
    </Link></span>

</div>
</article> */}


