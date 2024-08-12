import style from "./Login.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ isAuth, setIsAuth }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const postData = async () => {
    try {
      const data = await fetch("http://kmsi-b.get.kg:1337/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: login,
          password: password,
        }),
      });

      const response = await data.json();
      console.log("data:", response);

      if (data.status == "200") {
        isAuth = true;
      }

      if (isAuth === true) {
        navigate("/");
        console.log(isAuth);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.container}>
      <h1>Вход</h1>
      <div className={style.inputBox}>
        <input
          value={login}
          onChange={(e) => {
            setLogin(e.target.value);
          }}
          type="email"
          placeholder="Введите логин"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Введите пароль"
        />
        <button onClick={postData}>Войти</button>
      </div>
    </div>
  );
};

export default Login;
