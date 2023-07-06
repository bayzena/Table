import React, { FC } from "react";
import { Button } from "antd";
import Modal from "react-bootstrap/Modal";
import { Form } from "antd";

import styles from "components/Table/TableComponent.module.scss";
import ControllerInput from "shared/Input/Input";

interface IProps {
  handleShow: any;
  show: any;
  handleClose: any;
  handleSubmit: any;
  onSubmit: any;
  control: any;
  errors: any;
}
const ModalComponent: FC<IProps> = ({
  handleShow,
  show,
  handleSubmit,
  handleClose,
  onSubmit,
  control,
  errors,
}) => {
  return (
    <>
      <Button onClick={handleShow}>Добавить</Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Form onFinish={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Добавить дежурного</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={styles.inputSpace}>
              <ControllerInput
                control={control}
                name={"name"}
                error={errors.name?.message}
                title={"ФИО:"}
              />
            </div>
            <div className={styles.inputSpace}>
              <ControllerInput
                control={control}
                name={"job_title"}
                error={errors.job_title?.message}
                title={"Должность:"}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>Закрыть</Button>
            <Button htmlType={"submit"}>Сохранить</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ModalComponent;
