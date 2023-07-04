export interface IDevelop {
  id: number;
  name: string;
  job_title: string;
}
export interface TInitialState {
  developers: {
    data: IDevelop[];
    loading: boolean;
    error: "";
  };
}
