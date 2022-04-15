import { notification } from "antd";

export const openNotification = (message: string, description: string) => {
  const args = {
    message,
    description,
    duration: 3,
  };

  notification.open(args);
};
