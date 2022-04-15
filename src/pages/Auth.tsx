import { FC } from "react";

import Container from "../components/layout/Container";
import styles from "../styles/Auth.module.css";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import { useCheckAuth } from "../shared/custom-hooks/useCheckAuth";

const Auth: FC = () => {
  useCheckAuth(true);

  return (
    <Container>
      <div className={styles.row}>
        <Login />

        <Register />
      </div>
    </Container>
  );
};

export default Auth;
