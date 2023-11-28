import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  status: "",
  Data: [{}],
  Edit: [{}],
  //  redirection:null,
  redirectToProductlist: null,
  redirectToProductlist1: null,
  toggle: false,
  totalPage: "",
};
//create products
export const products = createAsyncThunk("product", async (productData) => {
  let res = await axiosInstance.post("/product/create", productData);
  let responseData = res?.data;
  return responseData;
});

//Get product list
export const getAllProductList = createAsyncThunk(
  "Get all Products",
  async (formdata) => {
    let res = await axiosInstance.post("/product/list", formdata);
    let resPonse = res?.data;

    return resPonse;
  }
);

//Delete product
export const deleteProduct = createAsyncThunk(
  "Delete Product",
  async (formdata) => {
    let res = await axiosInstance.post(`/product/remove/`, formdata);
    let resPonse = res?.data;
    return resPonse;
  }
);

// Edit Product
export const editProduct = createAsyncThunk("Edit Product", async (id) => {
  let res = await axiosInstance.get(`/product/detail/${id}`);
  let editData = res?.data;
  return editData;
});

// update product
export const updateProduct = createAsyncThunk(
  "Update-Student",
  async (updateData) => {
    let res = await axiosInstance.post(`/product/update`, updateData);
    let resData = res?.data;
    return resData;
  }
);

export const CmsSlice = createSlice({
  name: "Add Product",
  initialState,
  reducers: {
    // RedirectTo: (state, { payload }) => {
    //     state.redirection = payload;
    //   },

    RedirectToProductlist: (state, { payload }) => {
      state.redirectToProductlist = payload;
    },
    removeTitle: (state, { payload }) => {
      localStorage.removeItem("title");
    },
    removeDescription: (state, { payload }) => {
      localStorage.removeItem("description");
    },
    RedirectToProductlist1: (state, { payload }) => {
      state.redirectToProductlist1 = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //create Product
      .addCase(products.pending, (state, action) => {
        state.status = "fetching data... ";
      })

      .addCase(products.fulfilled, (state, { payload }) => {
        state.status = "fetched data successfully... ";
        if (payload.status == 200) {
          localStorage.setItem("title", payload.data.title);
          state.redirectToProductlist = "/productlist";

          toast(payload?.message);
        }
      })

      .addCase(products.rejected, (state, action) => {
        state.status = "idle...";
      })

      //Get all ProductList
      .addCase(getAllProductList.pending, (state, action) => {
        state.status = "Loading.. ";
      })
      .addCase(getAllProductList.fulfilled, (state, { payload }) => {
        state.status = "fetching data successfully... ";
        state.Data = payload?.data;
        state.totalPage = payload.totalPages;
      })
      .addCase(getAllProductList.rejected, (state, action) => {
        state.status = "Loading...";
      })

      //Delete Product
      .addCase(deleteProduct.pending, (state, action) => {
        state.status = "Loading.. ";
      })
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        if (payload.status === 200) {
          state.status = "data deleted successfully... ";
          toast(payload?.message);
        }
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "Loading...";
      })

      // Edit Product
      .addCase(editProduct.pending, (state, action) => {
        state.status = "fetching product data... ";
      })
      .addCase(editProduct.fulfilled, (state, { payload }) => {
        state.status = "product edited successfully... ";
        state.Edit = payload.data;
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.status = "idle...";
      })

      // Update Product
      .addCase(updateProduct.pending, (state, action) => {
        state.status = "updating student data..!";
      })
      .addCase(updateProduct.fulfilled, (state, { payload }) => {
        state.status = "student update successfully..!";
        if (payload.status == 200) {
          localStorage.setItem("description", payload.data.description);
          state.redirectToProductlist1 = "/productlist";
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = "idle...";
      });
  },
});

export const {
  RedirectToProductlist,
  removeTitle,
  RedirectToProductlist1,
  removeDescription,
} = CmsSlice.actions;
