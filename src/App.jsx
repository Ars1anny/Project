import Home from "./homeSection/Home";
import Login from "./auth/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  console.log(isAuth);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
