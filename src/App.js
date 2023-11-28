import logo from "./logo.svg";
import {Suspense,lazy} from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
//import Home from "./Components/CMS/Home";
//import About from "./Components/CMS/About";
import Appointment from "./Components/CMS/Appointment";
import Opening from "./Components/CMS/Opening";
import Price from "./Components/CMS/Price";
import Service from "./Components/CMS/Service";
import Team from "./Components/CMS/Team";
import Testimonial from "./Components/CMS/Testimonial";
import Header from "./Components/SharedModule/Header";
import Footer from "./Components/SharedModule/Footer";
import Error from "./Components/CMS/Error";
//import Register from "./Components/Auth/Register";
//import Login from "./Components/Auth/Login";
//import Profile from "./Components/CMS/Profile";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { Check_Token } from "./Redux/AuthSlice";
import { useDispatch } from "react-redux";
//import Product from "./Components/Product/Product"; 
//import Getproduct from "./Components/Product/Getproduct";
//import Edit_Update from "./Components/Product/Edit_Update";
const Home = lazy(()=>import("./Components/CMS/Home"))
const About = lazy(()=>import("./Components/CMS/About"))
const Register = lazy(()=>import("./Components/Auth/Register"))
const Login = lazy(()=>import('./Components/Auth/Login'))
const Profile = lazy(()=>import('./Components/CMS/Profile'))
const Product = lazy(()=>import("./Components/Product/Product"))
const Getproduct = lazy(()=>import("./Components/Product/Getproduct"))
const Edit_Update = lazy(()=>import("./Components/Product/Edit_Update"))
function App() {
  const dispatch = useDispatch()
  function PrivateRoute({ children }) {
    console.log(children, "children");
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    // useEffect(() => {
    //   localStorage.setItem("pathname", location?.pathname);
    // }, [location]);

    return token !== null && token !== undefined ? (
      children
    ) : (
      <>
        <Navigate to="/" />
        {/* {alert("Please go for login page.to access other pages")} */}
        {token ? "": toast("Please login first")}
      </>
    );
  }

  const PublicRouteNames = [
    {
      path: "/reduxregister",
      Component: <Register />,
    },
    {
      path: "/reduxlogin",
      Component: <Login />,
    },
    {
      path: "/",
      Component: <Home />,
    },
  ];

  const PrivateRouteNames = [
    {
      path: "/about",
      Component: <About />,
    },
    {
      path: "/service",
      Component: <Service />,
    },

    {
      path: "/user_profile",
      Component: <Profile />,
    },

    {
      path: "*",
      Component: <Error />,
    },

    {
      path:"/product",
      Component: <Product />
    },
   

    {
      path:"/productlist",
      Component: <Getproduct/>
    },
    {
      path: "/updateproduct/:id",
      Component: <Edit_Update />,
    }
  ];

  useEffect(()=>{dispatch(Check_Token())},[])

  return (
    <Suspense fallback={<h2 style={{textAlign:'center'}}>Loading...</h2>}>
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/opening" element={<Opening />} />
          <Route path="/price" element={<Price />} />
          <Route path="/service" element={<Service />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/reduxregister" element={<ReduxRegister />} />
          <Route path="/reduxlogin" element={<ReduxLogin />} /> */}
          {PublicRouteNames?.map((route, index) => {
            return <Route exact path={route.path} element={route.Component} />;
          })}

          {PrivateRouteNames?.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={<PrivateRoute>{route.Component}</PrivateRoute>}
              />
            );
          })}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
    </Suspense>
  );
}

export default App;
