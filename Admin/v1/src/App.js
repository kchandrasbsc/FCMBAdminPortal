import React, { Component } from 'react';
import Head from './shared/Head'
import Dashboard from './dashboard/Dashboard';
import LoginPage from './authetication/LoginPage'
import SidebarLayout from './shared/SidebarLayout';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Transection from './transactions/Transection';
import RightPanel from './shared/RightPanel';
import Reporting from './reportings/Reporting';
import LeftPanel from './shared/LeftPanel';
const jsonData = [
  // { id: 1, name: 'John', age: 25 },
  // { id: 2, name: 'Jane', age: 30 },
  // { id: 3, name: 'Bob', age: 35 },
  // {id:1, Account: 123, Type: '', Location: '', Date: '24 May, 2023  23:18:00' , Initiator: '', Solicitor: '', Status: 'Active'},
  // {id:2, Account: 345, Type: '', Location: '', Date: '24 May, 2023  23:18:00' , Initiator: '', Solicitor: '', Status: 'Pending'},
  // {id:3, Account: 567, Type: '', Location: '', Date: '24 May, 2023  23:18:00' , Initiator: '', Solicitor: '', Status: 'Active'},
  // {id:4, Account: 789, Type: '', Location: '', Date: '24 May, 2023  23:18:00' , Initiator: '', Solicitor: '', Status: 'Completed'},

  {  RefNos: '1' ,  BankId: '212112' ,  BatchReference: 'sas' ,  DestinationAccount: '87878877878' ,  EntityCode: 'AS8889' ,  EntityReference: 'G34334' ,  HostResponse: 'Sucess' ,  Remarks: 'asaxssa dadad ddd' ,  SourceAccount: '' ,  Status: 'Completed' ,  StatusFlag: 'A' ,  TransDate: '' ,  TransactionAmount: '' ,  TransactionHandle: '' ,  OriginalDebitHandle:''},
  {  RefNos: '2' ,  BankId: '323232' ,  BatchReference: 'dsds' ,  DestinationAccount: '66767767676' ,  EntityCode: 'FD45454' ,  EntityReference: 'J565565' ,  HostResponse: 'Failed' ,  Remarks: 'gffgd jkkjjk ddd' ,  SourceAccount: '' ,  Status: 'Pending' ,  StatusFlag: 'D' ,  TransDate: '' ,  TransactionAmount: '' ,  TransactionHandle: '' ,  OriginalDebitHandle:''},
  {  RefNos: '3' ,  BankId: '44343' ,  BatchReference: 'rrr' ,  DestinationAccount: '65656565655' ,  EntityCode: 'YY56565' ,  EntityReference: 'J7676776' ,  HostResponse: 'Failed' ,  Remarks: 'wdww swqwdsa wwww ' ,  SourceAccount: '' ,  Status: 'Active' ,  StatusFlag: 'E' ,  TransDate: '' ,  TransactionAmount: '' ,  TransactionHandle: '' ,  OriginalDebitHandle:''},
  {  RefNos: '4' ,  BankId: '45454' ,  BatchReference: 'hgg' ,  DestinationAccount: '434343434343' ,  EntityCode: 'HJ676776' ,  EntityReference: 'LTRR55445' ,  HostResponse: 'Sucess' ,  Remarks: 'dvdfdsfqqw wddwd ' ,  SourceAccount: '' ,  Status: 'Closed' ,  StatusFlag: 'C' ,  TransDate: '' ,  TransactionAmount: '' ,  TransactionHandle: '' ,  OriginalDebitHandle:''},
  
  
  // ...
];

class App extends Component{
 render(){
  return (
    <Router>
      <Head/>
    <div className='BG'>
      
     <Routes>
          <Route path="/" element={<LoginPage />}>
            
          </Route>
          {/* <Route  path="/Dashboard" element={<Dashboard />}></Route>          
          
                <Route  path="Dashboard/cards" element={<RightPanel />} />
                <Route  path="Dashboard/transection" element={<Transection />} />
           */}
          {/* <Route path="/Transection" element={<Transection />}> */}
          
          {/* </Route> */}
            <Route path="/dashboard" element={<SidebarLayout />}>

            <Route path="cards" element={<RightPanel />} />

            <Route path="transection" element={<Transection/>} />
            <Route path="reporting" element={<Reporting data={jsonData} />} />
            <Route path="user-management" element={<UserManagement data={jsonData} />} />

            </Route>
        </Routes>
    </div>
    </Router>
  );
};
}

export default App;
