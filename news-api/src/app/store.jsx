import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/news/indonesia/newsSliceIndonesia";
import logger from "redux-logger";
import React from "react";

export const store = configureStore({
  reducer: {
    articles: newsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
