import React, { FC } from "react";
import { Button, Popconfirm } from "antd";

import { cancel, ok } from "./constants";

interface IProps {
  title?: string;
  btnTitle?: string;
  onConfirm: any;
}
const PopconfirmAntd: FC<IProps> = ({ title, btnTitle, onConfirm }) => {
  return (
    <Popconfirm
      okText={ok}
      cancelText={cancel}
      title={title}
      onConfirm={onConfirm}
    >
      <Button>{btnTitle}</Button>
    </Popconfirm>
  );
};

export default PopconfirmAntd;
