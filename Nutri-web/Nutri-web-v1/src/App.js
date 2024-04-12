import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import ListFoodHist from './Layouts/ListFoodHist';
import Home from './Layouts/Home';
import ListWaterHist from './Layouts/ListWaterHistory';
import ListPillHist from './Layouts/ListPillHistory';
import CreateFoodHist from './Layouts/createFoodHist';
import DispenseTimings from './Layouts/DispenseTimings';
import CreatePillTime from './Layouts/createPillTime';
import CreateWaterTime from './Layouts/createWaterTime';
import Login from './loginSystem/login';
import Register from './loginSystem/register';
import AccountConfirm from './loginSystem/confirm';
import ResetPassword from './loginSystem/reset';
import Profile from './loginSystem/profile';
import Logout from './loginSystem/logout';
import EditPillHist from './Layouts/editPillHist';
import PatientSelect from './Layouts/patientSelect';
import { PatientProvider } from './Layouts/patientID';
import { useState } from 'react';

function App() {

  return (
    <div className='App'>
      <PatientProvider>
        <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/ListFoodHistory" element={<ListFoodHist />} />
              <Route path="/ListWaterHistory" element={<ListWaterHist />} />
              <Route path="/ListPillHistory" element={<ListPillHist />} />
              <Route path="/CreateFoodHistory" element={<CreateFoodHist />} />
              <Route path="/DispenseTimings" element={<DispenseTimings />} />
              <Route path='/CreatePillTime' element={<CreatePillTime />} />
              <Route path='/CreateWaterTime' element={<CreateWaterTime />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/confirm" element={<AccountConfirm />} />
              <Route path="/reset" element={<ResetPassword />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/logout" element={<Logout />} />
              <Route path='/editPillHist' element={<EditPillHist />} />
              <Route path='/patientSelect' element={<PatientSelect />} />
          </Routes>
        </BrowserRouter>
        </div>
        </PatientProvider>
    </div>
  );
}

export default App;
