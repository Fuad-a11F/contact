import Buttons from "../components/contact/Buttons";

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
    render: (_: any, rec: any) => <Buttons rec={rec} />,
  },
];
