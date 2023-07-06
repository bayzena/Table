import axios from "axios";

import { api } from "./endpoint";
import { IDevelopAdd } from "types";

export const getDevelopersData = () => axios.get(api);

export const addDeveloper = (newUser: IDevelopAdd) => axios.post(api, newUser);

export const deleteDeveloper = (id: number) => axios.delete(`${api}/${id}`);
