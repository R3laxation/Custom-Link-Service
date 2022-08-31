import React from 'react';
import {Route, Routes} from "react-router-dom";
import { AuthPage } from './pages/auth/AuthPage';
import { PATH } from './utils/constants/constants';
import {Registration} from "./pages/auth/registration/Registration";
import { Main } from './pages/main/Main';
import {Login} from "./pages/auth/login/Login";


function App() {
  return (
    <>
      <Routes>
        <Route path={PATH.AUTH} element={<AuthPage/>}></Route>
        <Route path={PATH.LOGIN} element={<Login/>}></Route>
        <Route path={PATH.REGISTRATION} element={<Registration/>}></Route>
        <Route path={PATH.MAIN} element={<Main/>}></Route>
      </Routes>
    </>
  );
}

export default App;
