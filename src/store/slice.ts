import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialState } from "./initialState";
import { getDevelopersAction } from "./actions";
import { IDevelop } from "../types";

export const DevelopersSlice = createSlice({
  name: "DevelopersSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getDevelopersAction.pending.type]: (state) => {
      state.developers.loading = true;
    },
    [getDevelopersAction.fulfilled.type]: (
      state: any,
      action: PayloadAction<IDevelop[]>
    ) => {
      state.developers.loading = false;
      state.developers.data = action.payload;
      state.developers.error = "";
    },
    [getDevelopersAction.rejected.type]: (
      state: any,
      action: PayloadAction<string>
    ) => {
      state.developers.error = action.payload;
      state.developers.loading = false;
    },
  },
});
