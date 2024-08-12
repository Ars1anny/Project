import React from "react";

const data = [
  {
    id: 5,
    attributes: {
      name: "Асранов Максат Саламович",
      inn: "22302298900345",
      ls: null,
      resident: "KGZ",
      tel: "0772152246",
      email: "asranov.maksat@gmail.com",
      address: "Чуйская обл., г. Кара-Балта, ул. Т. Кожомбердиева, 14",
      comment: null,
      createdAt: "2024-07-18T03:12:19.869Z",
      updatedAt: "2024-07-18T12:38:34.969Z",
      type: null,
    },
  },
  {
    id: 8,
    attributes: {
      name: "Иванов Иван Иванович",
      inn: "22302298900345",
      ls: "1300011",
      resident: "KGZ",
      tel: "0772152246",
      email: "ivanov@gmail.com",
      address: "Чуйская обл., г. Бишкек, ул. Чехова, 31",
      comment: null,
      createdAt: "2024-07-23T11:18:27.791Z",
      updatedAt: "2024-07-23T12:17:48.727Z",
      type: "person",
    },
  },
  {
    id: 9,
    attributes: {
      name: "Jon Stewart Doe",
      inn: "22302298900345",
      ls: "1300012",
      resident: "KGZ",
      tel: "6019521325",
      email: "teste@exemplo.us",
      address: "Av. dos Andradas, 3000",
      comment: null,
      createdAt: "2024-08-05T08:50:58.233Z",
      updatedAt: "2024-08-05T09:53:28.421Z",
      type: null,
    },
  },
  {
    id: 3,
    attributes: {
      name: "Aziret Kubanychbekov",
      inn: "12345678909876",
      ls: null,
      resident: "KGZ",
      tel: "0501723732",
      email: "vvaa9829@gmail.com",
      address: "Биримдик 10",
      comment: null,
      createdAt: "2024-07-15T07:11:33.260Z",
      updatedAt: "2024-07-18T02:50:00.433Z",
      type: null,
    },
  },
  {
    id: 4,
    attributes: {
      name: "aziret kubanychbekov",
      inn: "12345678909876",
      ls: null,
      resident: "KGZ",
      tel: "0501723732",
      email: "vvaa9829@gmail.com",
      address: "Al",
      comment: null,
      createdAt: "2024-07-18T02:50:20.201Z",
      updatedAt: "2024-07-18T02:50:20.201Z",
      type: null,
    },
  },
  {
    id: 1,
    attributes: {
      name: "Омуралиев Максатбек Сабатарович",
      inn: "21910198700477",
      ls: "1100477",
      resident: "KGS",
      tel: "0708462241",
      email: "bilalimus@gmail.com",
      address: 'г. Бишкек мкр "Тунгуч" дом 6\\2',
      comment: "Первый контрагент",
      createdAt: "2024-07-11T05:56:51.848Z",
      updatedAt: "2024-07-18T03:06:07.592Z",
      type: null,
    },
  },
  {
    id: 10,
    attributes: {
      name: "João Souza Silva",
      inn: "22302298900345",
      ls: "1300013",
      resident: "KGZ",
      tel: "3121286800",
      email: "test@example.us",
      address: "1600 Amphitheatre Parkway",
      comment: null,
      createdAt: "2024-08-05T10:08:56.786Z",
      updatedAt: "2024-08-05T10:10:02.597Z",
      type: null,
    },
  },
];

const Home = () => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.attributes.name}</h1>
          <p>{item.attributes.inn}</p>
          <p>{item.attributes.ls}</p>
          <span>{item.attributes.resident}</span>
          <p>{item.attributes.tel}</p>
          <span>{item.attributes.email}</span>
          <span>{item.attributes.address}</span>
          <p>{item.attributes.createdAt}</p>
          <p>{item.attributes.updatedAt}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
