import React, { FC } from "react";
import ModalWrapper from "../wrapper/ModalWrapper";
import { Button, Input, Typography } from "antd";
import { Controller, useForm } from "react-hook-form";

import styles from "./EditContact.module.css";
import { ContactApi } from "../../../shared/api/contactApi";
import { useAppDispatch } from "../../../shared/custom-hooks/redux";
import { updateContact } from "../../../redux/ContactSlice";
import { openNotification } from "../../Notifications";
import { ContactData, ContactTypes } from "../../../shared/types/contant";

interface AdEditContactProps {
  hideModal: Function;
  isModalOpened: boolean;
  contact: ContactTypes;
}

const EditContact: FC<AdEditContactProps> = ({
  hideModal,
  isModalOpened,
  contact,
}) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      number: contact.number,
      name: contact.name,
      lastname: contact.lastname,
      id: contact.id,
      userId: contact.userId,
      key: contact.key,
    },
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (data: ContactTypes) => {
    const updated_contact: ContactData | undefined =
      await ContactApi.updateContact({
        ...data,
        userId: contact.userId,
        key: contact.key,
      });

    if (updated_contact) {
      dispatch(updateContact(updated_contact.data));

      openNotification("Успех", "Контакт обновлен!");

      hideModal();
    }
  };

  return (
    <ModalWrapper
      hideModal={hideModal}
      isModalOpened={isModalOpened}
      reset={reset}
    >
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
