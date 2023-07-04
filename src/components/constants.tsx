import { ColumnsType } from "antd/es/table";
import React from "react";
import { NavLink } from "react-router-dom";
import { IDevelop } from "../types";

export const columns: ColumnsType<IDevelop> = [
  {
    title: "ФИО",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Должность",
    width: 100,
    dataIndex: "job_title",
    key: "job_title",
    fixed: "left",
  },
  {
    title: "Действие",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <NavLink to="/">удалить</NavLink>,
  },
];
