import React, { useEffect } from "react";
import { Button, Table } from "antd";

import styles from "./ContactWrapper.module.css";
import { columns } from "../../utils/pagination";
import { useModal } from "../../shared/custom-hooks/useModal";
import AddContact from "../modal/contact/AddContact";
import {
  useAppDispatch,
  useAppSelector,
} from "../../shared/custom-hooks/redux";
import { sagaActions } from "../../redux/saga/sagaAction";

const ContactWrapper = () => {
  const { isModalOpened, hideModal, openModal } = useModal();
  const contact = useAppSelector((state) => state.ContactReducer.contact);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_CONTACT });
  }, [dispatch]);

  return (
    <>
      {contact && (
        <>
          <Table dataSource={contact} columns={columns} />

          <Button className={styles.btn} type={"primary"} onClick={openModal}>
            +
          </Button>

          <AddContact isModalOpened={isModalOpened} hideModal={hideModal} />
        </>
      )}
    </>
  );
};

export default ContactWrapper;
