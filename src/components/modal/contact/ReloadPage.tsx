import React, { FC } from "react";
import ModalWrapper from "../wrapper/ModalWrapper";
import { Button, Typography } from "antd";

interface ReloadPageTypes {
  hideModal: Function;
  isModalOpened: boolean;
}

const ReloadPage: FC<ReloadPageTypes> = ({ hideModal, isModalOpened }) => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <ModalWrapper hideModal={hideModal} isModalOpened={isModalOpened}>
      <Typography.Title level={2}>Успех</Typography.Title>

      <p>
        Контакт удален. Пожалуйста, перезагрузите страницу для применения
        изменений!
      </p>

      <Button type={"primary"} onClick={handleClick}>
        Перезарузить
      </Button>
    </ModalWrapper>
  );
};

export default ReloadPage;
