import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useCheckAuth = (login: boolean = false) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (login) {
      if (localStorage.getItem("id")) {
        navigate("/contact");
      }
    } else {
      if (!localStorage.getItem("id")) {
        navigate("/");
      }
    }
  }, [navigate, login]);
};
