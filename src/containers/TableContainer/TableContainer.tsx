import { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "store";
import { selectDevelopers } from "store/selector";
import { getDevelopersAction } from "store/actions";
import TableComponent from "components/Table/TableComponent";
import { columns } from "containers/TableContainer/constants";

const TableContainer: FC = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(selectDevelopers);

  const dataDevelopers = data?.map((dev, key) => ({
    ...dev,
    key: dev.id,
  }));

  useEffect(() => {
    dispatch(getDevelopersAction());
  }, [dispatch]);
  return (
    <>
      {dataDevelopers ? (
        <TableComponent
          dataDevelopers={dataDevelopers}
          columns={columns}
          title={"График дежурства"}
        />
      ) : null}
    </>
  );
};

export default TableContainer;
