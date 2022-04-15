import React, { FC } from "react";
import { Button, Input, Typography } from "antd";
import { Controller, useForm } from "react-hook-form";

import styles from "./AddContact.module.css";
import ModalWrapper from "../wrapper/ModalWrapper";
import { Contact } from "../../../shared/types/contant";
import { ContactApi } from "../../../shared/api/contactApi";
import { useAppDispatch } from "../../../shared/custom-hooks/redux";
import { addContact } from "../../../redux/ContactSlice";
import { openNotification } from "../../Notifications";

interface AddContactProps {
  hideModal: Function;
  isModalOpened: boolean;
}

const AddContact: FC<AddContactProps> = ({ hideModal, isModalOpened }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      number: "",
      name: "",
      lastname: "",
    },
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (data: Contact) => {
    data.lastname = data.lastname ? data.lastname : "Не указано";

    const contact: any = await ContactApi.addContact(data);

    dispatch(addContact(contact.data));

    openNotification("Успех", "Контакт добавлен!");

    hideModal();
  };

  return (
    <ModalWrapper hideModal={hideModal} isModalOpened={isModalOpened}>
      <Typography.Title level={2}>Добавить</Typography.Title>

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
          Добавить
        </Button>
      </form>
    </ModalWrapper>
  );
};

export default AddContact;
