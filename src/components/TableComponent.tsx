import React, { FC, useEffect } from "react";
import { Button, Table } from "antd";

import { RootState, useAppDispatch, useAppSelector } from "store";
import { selectDevelopers } from "store/selector";
import { getDevelopersAction } from "store/actions";
import { columns } from "./constants";

const TableComponent: FC = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(selectDevelopers);

  useEffect(() => {
    dispatch(getDevelopersAction());
  }, [dispatch]);

  console.log({ data });

  return (
    <>
      <Table
        columns={columns}
        dataSource={data.map((dev, key) => ({ ...dev, key }))}
      />
      <Button>Добавить</Button>
    </>
  );
};
export default TableComponent;
