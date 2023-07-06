import React, { FC } from "react";
import { Control, Controller } from "react-hook-form";
import { Input } from "antd";

interface IProps {
  control: Control<any>;
  name: string;
  error?: string;
  title?: string;
}
const ControllerInput: FC<IProps> = ({ control, name, error, title }) => {
  return (
    <>
      <span>{title}</span>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input {...field} />}
      />
      <p className="text-danger">{error}</p>
    </>
  );
};

export default ControllerInput;
