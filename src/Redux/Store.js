import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./AuthSlice";
import { CmsSlice } from "./CmsSlice";
export const store = configureStore({
  reducer: {
    Auth:AuthSlice.reducer,
    Cms: CmsSlice.reducer
  },
});
