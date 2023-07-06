import { FC, useCallback, useState } from "react";
import { useAppDispatch } from "store";
import { useForm } from "react-hook-form";
import { TInputs } from "types";
import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "schema/schema";
import { addNewDeveloper } from "store/actions";
import ModalComponent from "components/ModalComponent/ModalComponent";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "services/firebase";

const AddModalContainer: FC = () => {
  const [show, setShow] = useState(false);

  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TInputs>({
    defaultValues: {
      name: "",
      job_title: "",
    },
    resolver: yupResolver(schema),
    mode: "all",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = useCallback(
    ({ name, job_title }: TInputs) => {
      handleClose();
      createUserWithEmailAndPassword(
        firebaseAuth,
        "erkinaynti@gmail.com",
        "nemnogoslojnii"
      ).then((res) => {
        console.log(res);
      });
      // firebaseAuth.dispatch(addNewDeveloper({ name, job_title }));
    },
    [dispatch]
  );

  return (
    <ModalComponent
      handleShow={handleShow}
      show={show}
      handleClose={handleClose}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      control={control}
      errors={errors}
    />
  );
};

export default AddModalContainer;
