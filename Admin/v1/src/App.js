import React from 'react';
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
const jsonData = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Bob', age: 35 },
  // ...
];

const App = () => {
  return (
    <Router>
    <div>
      <Head/>
     <Routes>
          <Route path="/" element={<LoginPage />}>
            
          </Route>
          <Route path="/Dashboard" element={<Dashboard />}>
            
          </Route>
        </Routes>
    </div>
    </Router>
  );
};

export default App;
