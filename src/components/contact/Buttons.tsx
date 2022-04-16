import React, { FC } from "react";
import { Button } from "antd";

import { ContactApi } from "../../shared/api/contactApi";
import { useAppDispatch } from "../../shared/custom-hooks/redux";
import { deleteContact } from "../../redux/ContactSlice";
import { useModal } from "../../shared/custom-hooks/useModal";
import EditContact from "../modal/contact/EditContact";
import { openNotification } from "../Notifications";

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
      <Button onClick={() => handleDelete(rec)} type={"dashed"}>
        Удалить
      </Button>
      <Button onClick={openModal} type={"dashed"}>
        Изменить
      </Button>

      <EditContact
        contact={rec.rec}
        hideModal={hideModal}
        isModalOpened={isModalOpened}
      />
    </>
  );
};

export default Buttons;
