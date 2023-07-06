import React, { FC } from "react";
import { Table } from "antd";

import styles from "./TableComponent.module.scss";
import AddModalContainer from "containers/AddModalContainer/AddModalContainer";
import { IDevelop } from "types";

interface IProps {
  dataDevelopers: IDevelop[];
  columns: any;
  title: string;
}

const TableComponent: FC<IProps> = ({ dataDevelopers, columns, title }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <Table columns={columns} dataSource={dataDevelopers} />
      <div>
        <AddModalContainer />
      </div>
    </div>
  );
};
export default TableComponent;
