import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    
    <Menu>
      <a className="menu-item" href="/Home">
        Home
      </a>
      <a className="menu-item" href="/ListFoodHistory">
        Food History
      </a>
      <a className="menu-item" href="/ListWaterHistory">
        Water History
      </a>
      <a className="menu-item" href="/ListPillHistory">
        Pill History
      </a>
      <a className="menu-item" href="/CreateFoodHistory">
        Create Food
      </a>
      <a className="menu-item" href="/DispenseTimings">
        Dispense timings
      </a>
      <a className="menu-item" href="/CreatePillTime">
        Create Pill Time
      </a>
      <a className="menu-item" href="/CreateWaterTime">
        Create Water Time
      </a>
      <a className="menu-item" href="/">
        Logout
      </a>
    </Menu>
    
   /*
    <BrowserRouter>
   <Menu>
    
    <nav>
      <ul>
        <li>
          <Link to="eNutri/ListFoodHistory">List Food History</Link>
        </li>
        <li>
          <Link to="eNutri/ListWaterHistory">List Water History</Link>
        </li>
        <li>
          <Link to="eNutri/ListPillHistory">List Pill History</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="eNutri/CreateFoodHistory">Create Food History</Link>
        </li>
      </ul>
    </nav>
  </Menu>
  <Routes>
          <Route index element={<Home />} />
          <Route path="eNutri/ListFoodHistory" element={<ListFoodHist />} />
          <Route path="eNutri/ListWaterHistory" element={<ListWaterHist />} />
          <Route path="eNutri/ListPillHistory" element={<ListPillHist />} />
          <Route path="eNutri/CreateFoodHistory" element={<CreateFoodHist />} />
        </Routes>
  </BrowserRouter>
  */
  );
};