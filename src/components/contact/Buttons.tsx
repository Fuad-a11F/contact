import React, { FC } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import { ContactApi } from "../../shared/api/contactApi";
import { useAppDispatch } from "../../shared/custom-hooks/redux";
import { deleteContact } from "../../redux/ContactSlice";
import { useModal } from "../../shared/custom-hooks/useModal";
import { openNotification } from "../Notifications";
import EditContact from "../modal/contact/EditContact";
import styles from "./Buttons.module.css";

const Buttons: FC<any> = (rec) => {
  const dispatch = useAppDispatch();
  const { isModalOpened, hideModal, openModal } = useModal();

  const handleDelete = async (rec: any) => {
    await ContactApi.deleteContact(rec.rec.id);

    dispatch(deleteContact(rec.rec.id));

    openNotification("Успех", "Контакт удален!");
  };

  return (
    <>
      <DeleteOutlined
        className={styles.delete}
        onClick={() => handleDelete(rec)}
      />

      <EditOutlined onClick={openModal} className={styles.edit} />

      <EditContact
        contact={rec.rec}
        hideModal={hideModal}
        isModalOpened={isModalOpened}
      />
    </>
  );
};

export default Buttons;
