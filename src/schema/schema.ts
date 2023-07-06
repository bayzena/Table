import * as yup from "yup";
export const schema = yup.object().shape({
  name: yup.string().required("Заполните ФИО"),
  job_title: yup.string().required("Напишите должность"),
});
