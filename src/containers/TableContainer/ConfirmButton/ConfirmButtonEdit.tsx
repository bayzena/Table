import { FC } from "react";

import PopconfirmAntd from "shared/Popconfirm/Popconfirm";

interface IProps {
  index: number;
}
const ConfirmButtonEdit: FC<IProps> = ({ index }) => {
  const handleEdit = (index: number) => {
    console.log(index);
    index = index + 1;
    console.log(index);
  };

  return (
    <PopconfirmAntd
      onConfirm={() => handleEdit(index)}
      title={"Вы закончили дежурство?"}
      btnTitle={"Выполнил"}
    />
  );
};

export default ConfirmButtonEdit;
