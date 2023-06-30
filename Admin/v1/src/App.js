import React, { Component } from 'react';
import Head from './Head'
import DataGrid from './DataGrid';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Transection from './Transection';
import RightPanel from './RightPanel';
import LeftPanel from './LeftPanel';
const jsonData = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Bob', age: 35 },
  // ...
];

class App extends Component{
 render(){
  return (
    <Router>
    <div className='BG'>
      <Head/>
     <Routes>
          <Route path="/" element={<LoginPage />}>
            
          </Route>
          <Route  path="/Dashboard" element={<Dashboard />}></Route>          
          
                <Route  path="Dashboard/cards" element={<RightPanel />} />
                <Route  path="Dashboard/transection" element={<Transection />} />
          
          {/* <Route path="/Transection" element={<Transection />}> */}
          
          {/* </Route> */}
        </Routes>
    </div>
    </Router>
  );
};
}

export default App;
