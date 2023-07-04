import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDevelopersData } from "../api";

export const getDevelopersAction = createAsyncThunk(
  "getDevelopersAction",
  async (_, thunkApi) => {
    try {
      const res = await getDevelopersData();
      const devs = res.data;
      console.log({ devs });
      return devs;
    } catch (e: any) {
      return thunkApi.rejectWithValue("Не удалось вывести данные дежурства");
    }
  }
);
