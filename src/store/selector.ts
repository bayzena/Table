import { RootState } from "./index";

export const selectDevelopers = (state: RootState) =>
  state.developerStore.developers;
