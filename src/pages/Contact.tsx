import React, { FC, useEffect } from "react";

import Container from "../components/layout/Container";
import Header from "../components/contact/Header";
import ContactWrapper from "../components/contact/ContactWrapper";
import { useCheckAuth } from "../shared/custom-hooks/useCheckAuth";
import { AuthApi } from "../shared/api/authApi";
import { useAppDispatch } from "../shared/custom-hooks/redux";
import { getUser } from "../redux/AuthSlice";

const Contact: FC = () => {
  useCheckAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    AuthApi.getById(localStorage.getItem("id")!).then((user: any) => {
      dispatch(getUser(user));
    });
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
