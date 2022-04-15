import React, { FC } from "react";
import ModalWrapper from "../wrapper/ModalWrapper";
import { Button, Input, Typography } from "antd";
import { Controller, useForm } from "react-hook-form";

import styles from "./EditContact.module.css";
import { ContactApi } from "../../../shared/api/contactApi";
import { useAppDispatch } from "../../../shared/custom-hooks/redux";
import { updateContact } from "../../../redux/ContactSlice";
import { openNotification } from "../../Notifications";

interface AdEditContactProps {
  hideModal: Function;
  isModalOpened: boolean;
  number: string;
  id: string;
  name: string;
  lastname?: string;
  userId?: string;
}

const EditContact: FC<AdEditContactProps> = ({
  hideModal,
  isModalOpened,
  name,
  lastname,
  number,
  id,
  userId,
}) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      number,
      name,
      lastname,
      id,
      userId,
    },
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (data: any) => {
    const contact: any = await ContactApi.updateContact({ ...data, userId });

    dispatch(updateContact(contact.data));

    openNotification("Успех", "Контакт обновлен!");

    hideModal();
  };

  return (
    <ModalWrapper hideModal={hideModal} isModalOpened={isModalOpened}>
      <Typography.Title level={2}>Редактировать</Typography.Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.mb_15}>
          <Controller
            name="number"
            control={control}
            render={({ field }) => (
              <Input placeholder={"Введите номер *"} {...field} />
            )}
            rules={{ required: true }}
          />
        </div>

        <div className={styles.mb_15}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input placeholder={"Введите имя *"} {...field} />
            )}
            rules={{ required: true }}
          />
        </div>

        <div className={styles.mb_15}>
          <Controller
            name="lastname"
            control={control}
            render={({ field }) => (
              <Input placeholder={"Введите фамилию"} {...field} />
            )}
          />
        </div>

        <Button htmlType={"submit"} type="primary">
          Редактировать
        </Button>
      </form>
    </ModalWrapper>
  );
};

export default EditContact;
