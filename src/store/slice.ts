import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialState } from "./initialState";
import {
  addNewDeveloper,
  deleteDeveloperAction,
  getDevelopersAction,
} from "./actions";
import { IDevelop } from "types";

export const DevelopersSlice = createSlice({
  name: "DevelopersSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getDevelopersAction.pending.type]: (state) => {
      state.developers.loading = true;
    },
    [getDevelopersAction.fulfilled.type]: (
      state,
      action: PayloadAction<IDevelop[]>
    ) => {
      state.developers.loading = false;
      state.developers.data = action.payload;
      state.developers.error = "";
    },
    [getDevelopersAction.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.developers.error = "";
      state.developers.loading = false;
    },
    [addNewDeveloper.pending.type]: (state) => {
      state.developers.loading = true;
    },
    [addNewDeveloper.fulfilled.type]: (
      state,
      action: PayloadAction<IDevelop>
    ) => {
      state.developers.loading = false;
      state.developers.data.push(action.payload);
      state.developers.error = "";
    },
    [addNewDeveloper.rejected.type]: (state, action: PayloadAction<string>) => {
      state.developers.error = "";
      state.developers.loading = false;
    },
    [deleteDeveloperAction.pending.type]: (state) => {
      state.developers.loading = true;
    },
    [deleteDeveloperAction.fulfilled.type]: (
      state,
      action: PayloadAction<IDevelop>
    ) => {
      state.developers.loading = false;
      state.developers.data.filter(
        (item: IDevelop) => item.id !== action.payload.id
      );
      state.developers.error = "";
    },
    [deleteDeveloperAction.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.developers.error = "";
      state.developers.loading = false;
    },
  },
});
