import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PatientSelectPage from './pages/PatientSelectPage';
import DashboardPage from './pages/DashboardPage';
import StoreFoodPage from './pages/StoreFoodPage';
import DispenserConfigurePage from './pages/DispenseConfigurePage';
import HistoryListPage from './pages/HistoryListPage';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path='/PatientSelect' element={<PatientSelectPage />} />
          <Route path='/Dashboard' element={<DashboardPage />} />
          <Route path='/StoreFood' element={<StoreFoodPage />} />
          <Route path='/DispenseConfigure' element={<DispenserConfigurePage />} />
          <Route path='/HistoryList' element={<HistoryListPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
