import { ColumnsType } from "antd/es/table";
import React from "react";

import { IDevelop } from "types";
import styles from "components/Table/TableComponent.module.scss";
import TagAntd from "shared/Tag/Tag";
import ConfirmButtonDelete from "./ConfirmButton/ConfirmButtonDelete";
import ConfirmButtonEdit from "./ConfirmButton/ConfirmButtonEdit";

export const columns: ColumnsType<IDevelop> = [
  {
    className: styles.name,
    title: "ФИО",
    dataIndex: "name",
    sortDirections: ["descend", "ascend"],
    key: "name",
    fixed: "left",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    className: styles.job,
    title: "Должность",
    dataIndex: "job_title",
    key: "job_title",
    fixed: "left",
  },
  {
    className: styles.date,
    title: "Дата",
    dataIndex: "date",
    key: "date",
    fixed: "left",
  },
  {
    className: styles.btn,
    title: "Дежурство",
    dataIndex: "tags",
    key: "tags",
    fixed: "left",
    render: (_, record, index) => (
      <>
        {index === 0 ? (
          <TagAntd color={"green"} title={"Дежурит"} key={record.id} />
        ) : (
          <TagAntd color={"red"} title={"Не дежурит"} key={record.id} />
        )}
      </>
    ),
  },
  {
    className: styles.btn,
    title: "Отметиться",
    dataIndex: "click",
    key: "click",
    fixed: "left",
    render: (_, record, index) => (
      <>
        {index === 0 ? (
          <TagAntd color={"green"} key={record.id} title={"В процессе"} />
        ) : (
          <TagAntd color={"red"} key={record.id} />
        )}
      </>
    ),
  },
  {
    className: styles.btn,
    title: "Действие",
    key: "action",
    fixed: "right",
    render: (_, record, index) => (
      <>
        {index === 0 ? (
          <ConfirmButtonEdit index={index} key={record.id} />
        ) : (
          <ConfirmButtonDelete id={record.id} key={record.id} />
        )}
      </>
    ),
  },
];
