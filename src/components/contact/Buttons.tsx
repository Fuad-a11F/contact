import React, { FC } from "react";
import { Button } from "antd";

import { ContactApi } from "../../shared/api/contactApi";
import { useAppDispatch } from "../../shared/custom-hooks/redux";
import { deleteContact } from "../../redux/ContactSlice";
import { useModal } from "../../shared/custom-hooks/useModal";
import EditContact from "../modal/contact/EditContact";
import ReloadPage from "../modal/contact/ReloadPage";

const Buttons: FC<any> = (rec) => {
  const dispatch = useAppDispatch();
  const { isModalOpened, hideModal, openModal } = useModal();
  const {
    isModalOpened: deleteIsModalOpened,
    hideModal: deleteHideModal,
    openModal: deleteOpenModal,
  } = useModal();

  const handleDelete = async (rec: any) => {
    await ContactApi.deleteContact(rec.rec.id);

    deleteOpenModal();
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
        number={rec.rec.number}
        name={rec.rec.name}
        userId={rec.rec.userId}
        lastname={rec.rec.lastname}
        hideModal={hideModal}
        isModalOpened={isModalOpened}
        id={rec.rec.id}
      />

      <ReloadPage
        hideModal={deleteHideModal}
        isModalOpened={deleteIsModalOpened}
      />
    </>
  );
};

export default Buttons;
