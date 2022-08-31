import React from 'react';
import {Route, Routes} from "react-router-dom";
import { Login } from './pages/auth/Login';
import { PATH } from './utils/constants/constants';
import {Registration} from "./pages/registration/Registration";
import { Main } from './pages/main/Main';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={PATH.LOGIN} element={<Login/>}></Route>
        <Route path={PATH.REGISTRATION} element={<Registration/>}></Route>
        <Route path={PATH.MAIN} element={<Main/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
