import { createAsyncThunk } from "@reduxjs/toolkit";

import { addDeveloper, deleteDeveloper, getDevelopersData } from "api";
import { IDevelopAdd } from "types";

export const getDevelopersAction = createAsyncThunk(
  "getDevelopersAction",
  async (_, thunkApi) => {
    try {
      const res = await getDevelopersData();
      const devs = res.data;
      return devs;
    } catch (e: any) {
      return thunkApi.rejectWithValue("Не удалось вывести данные дежурства");
    }
  }
);

export const addNewDeveloper = createAsyncThunk(
  "postDeveloperAction",
  async (newUser: IDevelopAdd, thunkAPI) => {
    try {
      const res = await addDeveloper(newUser);
      return res.data;
    } catch (err: any) {
      console.error(err.toJSON());
    }
  }
);

export const deleteDeveloperAction = createAsyncThunk(
  "deleteDeveloperAction",
  async (id: number, thunkAPI) => {
    try {
      const res = await deleteDeveloper(id);
      return res.data;
    } catch (err: any) {
      console.error(err.toJSON());
    }
  }
);
