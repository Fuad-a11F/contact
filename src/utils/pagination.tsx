import Buttons from "../components/contact/Buttons";
import { Contact } from "../shared/types/contant";

export const columns = [
  {
    title: "Номер",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "Имя",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Фамилия",
    dataIndex: "lastname",
    key: "lastname",
  },
  {
    title: "Дейстивя",
    key: "operation",
    width: "15%",
    render: (rec: Contact) => <Buttons rec={rec} />,
  },
];
