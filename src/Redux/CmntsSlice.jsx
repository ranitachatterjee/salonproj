// import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'

// const initialState={
//     status: ""
// }

// const Url = "https://dummyjson.com/comments"
// //Create Comment
// export const CreateComment = createAsyncThunk(
//     "Add Comment",
//     async () => {
//         let res = await Url.post('/add' )
//         let resPonse = res?.data
//         return resPonse;
//     }
// );

// export const CmntsSlice = createSlice({
//    name: "Comments",
//    initialState ,
//    reducers:{

//    },
//    extraReducers:(builder)=>{
//     builder

//       //Add Comment
//       .addCase(CreateComment.pending, (state, action) => {
//         state.status = "loading";
//       })
//       .addCase(CreateComment.fulfilled, (state, { payload }) => {
//         state.status = "Data fetched successfully";

       
//       })
//       .addCase(CreateComment.rejected, (state, action) => {
//         state.status = "idle";
//       })
//    }
// })

// export const { } =
//   CmntsSlice.actions;