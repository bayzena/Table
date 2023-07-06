import React, { FC } from "react";
import { Tag } from "antd";

interface IProps {
  id?: string;
  color?: string;
  title?: string;
}
const TagAntd: FC<IProps> = ({ id, color, title }) => {
  return (
    <Tag color={color} key={id}>
      {title}
    </Tag>
  );
};

export default TagAntd;
