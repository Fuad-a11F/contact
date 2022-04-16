import React from "react";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";

import styles from "./Header.module.css";
import {
  useAppDispatch,
  useAppSelector,
} from "../../shared/custom-hooks/redux";
import { clearSearchContact, searchContact } from "../../redux/ContactSlice";
import { LogoutOutlined } from "@ant-design/icons";

const Header = () => {
  const contact = useAppSelector((state) => state.ContactReducer.contact);
  const user = useAppSelector((state) => state.AuthReducer.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSearch = (value: string) => {
    if (value === "") {
      dispatch(clearSearchContact());
    } else {
      dispatch(searchContact(value));
    }
  };

  const handleClick = () => {
    localStorage.removeItem("id");

    navigate("/");
  };

  return (
    <div className={styles.header}>
      <div className={styles.count}>
        <span>Общее количество: </span>

        {contact && <span>{contact?.length ?? "0"}</span>}
      </div>

      <div className={styles.input}>
        <Input
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Поиск по имени..."
        />
      </div>

      {user && <div>Добро пожаловать, {user.login}</div>}

      <LogoutOutlined className={styles.logout} onClick={handleClick} />
    </div>
  );
};

export default Header;
