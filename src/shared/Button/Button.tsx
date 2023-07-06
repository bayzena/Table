import React, { FC, ReactNode } from "react";
import { Button as AntdButton } from "antd";

interface IProps {
  type?: "button" | "submit";
  className?: string;
  data_dismiss?: string;
  aria_label?: string;
  children?: ReactNode | string;
  data_toggle?: string;
  colorType?:
    | "link"
    | "text"
    | "ghost"
    | "default"
    | "primary"
    | "dashed"
    | undefined;
}
const Button: FC<IProps> = ({
  type,
  className,
  data_dismiss,
  aria_label,
  children,
  data_toggle,
  colorType,
}) => {
  return (
    <AntdButton
      htmlType={type}
      data-toggle={data_toggle}
      type={colorType}
      className={className}
      data-dismiss={data_dismiss}
      aria-label={aria_label}
    >
      {children}
    </AntdButton>
  );
};

export default Button;
