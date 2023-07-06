import React, { FC, useEffect } from "react";

import { useAppDispatch } from "store";
import { deleteDeveloperAction } from "store/actions";
import PopconfirmAntd from "shared/Popconfirm/Popconfirm";

interface IProps {
  id: number;
}

const ConfirmButtonDelete: FC<IProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  const onConfirm = (id: number) => {
    dispatch(deleteDeveloperAction(id));
  };

  return (
    <PopconfirmAntd
      onConfirm={() => onConfirm(id)}
      title={"Вы действительно желаете удалить?"}
      btnTitle={"Удалить"}
    />
  );
};

export default ConfirmButtonDelete;
