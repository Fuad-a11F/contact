import React, { FC, useEffect } from "react";

import Container from "../components/layout/Container";
import Header from "../components/contact/Header";
import ContactWrapper from "../components/contact/ContactWrapper";
import { useCheckAuth } from "../shared/custom-hooks/useCheckAuth";
import { useAppDispatch } from "../shared/custom-hooks/redux";
import { sagaActions } from "../redux/saga/sagaAction";

const Contact: FC = () => {
  useCheckAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_USER_BY_ID });
  }, [dispatch]);

  return (
    <Container>
      <Header />

      <hr />

      <ContactWrapper />
    </Container>
  );
};

export default Contact;
