import React from "react";
import { Button, Input, Typography } from "antd";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import styles from "./Login.module.css";
import { Auth } from "../../shared/types/auth";
import { AuthApi } from "../../shared/api/authApi";
import { ArrayUser } from "../../shared/types/user";
import { openNotification } from "../Notifications";
import { useAppDispatch } from "../../shared/custom-hooks/redux";
import { getUser } from "../../redux/AuthSlice";

const Login = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: Auth) => {
    const user: ArrayUser = await AuthApi.login(data);

    if (user.data.length !== 0) {
      localStorage.setItem("id", user.data[0].id.toString());

      navigate("/contact");

      dispatch(getUser(user));

      openNotification("Успех", "Вход успешен!");
    } else {
      openNotification("Ошибка", "Такой пользователь не найден!");
    }
  };

  return (
    <div className={styles.login}>
      <Typography.Title level={2}>Вход</Typography.Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.mb_15}>
          <Controller
            name="login"
            control={control}
            render={({ field }) => <Input placeholder={"Логин"} {...field} />}
            rules={{ required: true }}
          />
        </div>

        <div className={styles.mb_15}>
          <Controller
            name="password"
            control={control}
            render={({ field }) => <Input placeholder={"Пароль"} {...field} />}
            rules={{ required: true }}
          />
        </div>

        <Button htmlType={"submit"} type={"primary"}>
          Войти
        </Button>
      </form>
    </div>
  );
};

export default Login;
