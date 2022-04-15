import React from "react";
import { Button, Input, Typography } from "antd";
import { Controller, useForm } from "react-hook-form";

import styles from "./Register.module.css";
import { Auth } from "../../shared/types/auth";
import { AuthApi } from "../../shared/api/authApi";
import { useNavigate } from "react-router-dom";
import { User } from "../../shared/types/user";
import { openNotification } from "../Notifications";
import { useAppDispatch } from "../../shared/custom-hooks/redux";
import { getUser } from "../../redux/AuthSlice";

const Register = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onSubmit = async (data: Auth) => {
    if (data.password.length < 8) {
      openNotification(
        "Ошибка",
        "Пароль должен состоять минимум из 8 символов!"
      );

      return;
    }

    const user: User = await AuthApi.register(data);

    localStorage.setItem("id", user.data.id.toString());

    dispatch(getUser(user.data));

    openNotification("Успех", "Пользователь успешно зарегистрирован!");

    navigate("/contact");
  };

  return (
    <div className={styles.register}>
      <Typography.Title level={2}>Регистрация</Typography.Title>

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
          Зарегистрироваться и войти
        </Button>
      </form>
    </div>
  );
};

export default Register;
