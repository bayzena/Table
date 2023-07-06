export interface IDevelop {
  id: number;
  name: string;
  job_title: string;
  tags: string[];
  date: any;
}

export type IDevelopAdd = Pick<IDevelop, "name" | "job_title">;

export interface TInitialState {
  developers: {
    data: IDevelop[];
    loading: boolean;
    error: "";
  };
}
export type TInputs = {
  name: string;
  job_title: string;
};
