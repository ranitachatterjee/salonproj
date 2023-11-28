import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  status: "",
  redirect: null,
  redirectToSignup: null,
  Data: [{}],
  toggle: false,
};

export const register = createAsyncThunk(
  "register",

  async (formData) => {
    let res = await axiosInstance.post(`/user/signup`, formData);

    let resData = res?.data;

    return resData;
  }
);

export const reduxLogin = createAsyncThunk(
  "Login",

  async (logData) => {
    let response = await axiosInstance.post(`/user/signin`, logData);

    let responseData = response?.data;

    return responseData;
  }
);

export const userProfile = createAsyncThunk(
  "Profile", 
  async () => {
  let res = await axiosInstance.get(`/user/profile-details`);
  let response = res?.data;
  return response;
});

export const AuthSlice = createSlice({
  name: "registrationlogin",
  initialState,
  reducers: {
    Logout: (state, { payload }) => {
      toast("Logout successfully");
      localStorage.removeItem("token");
      localStorage.removeItem("user_name");
      state.toggle = false;
    },

    Redirect_To: (state, { payload }) => {
    
      state.redirect = payload;
    },

    RedirectToSignup: (state, { payload }) => {
      
      state.redirectToSignup = payload;
      
    },

    Check_Token: (state, { payload }) => {
      let token = localStorage.getItem("token");
      if (token !== null && token !== undefined) {
        state.toggle = true;
      }
    },
  },

  extraReducers: (builder) => {
    builder

      //Register
      .addCase(register.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.status = "Data fetched successfully";
        if (payload.status == 200) {
          localStorage.setItem("user_name", payload.data.first_name);
          state.redirectToSignup = "/reduxlogin";
          
        }
        //for redirection from register to login page
       
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "idle";
      })

      //Login
      .addCase(reduxLogin.pending, (state, action) => {
        state.status = "Loading...";
      })

      .addCase(reduxLogin.fulfilled, (state, { payload }) => {
        state.status = "Data fetched Successfully";
        if (payload.status == 200) {
          localStorage.setItem("token", payload.token);
          localStorage.setItem("user_name", payload.data.first_name);
          state.redirect = "/";
          toast(payload?.message);
          state.toggle = true;
        }else{
          toast(payload?.message);
        }
      })

      .addCase(reduxLogin.rejected, (state, action) => {
        state.status = "Abort";
      })

      //Profile Data
      .addCase(userProfile.pending, (state, action) => {
        state.status = "Loading Data...";
      })
      .addCase(userProfile.fulfilled, (state, { payload }) => {
        state.status = "Data Fetch Successfully";

        state.Data = payload?.data;
      })
      .addCase(userProfile.rejected, (state, action) => {
        state.status = " Can't Fetch Data...";
      });
  },
});

export const { Logout, Redirect_To, RedirectToSignup, Check_Token } =
  AuthSlice.actions;
