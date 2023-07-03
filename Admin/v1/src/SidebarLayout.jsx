import React, { Component } from 'react'
import LeftPanel from './LeftPanel';
import { Outlet } from 'react-router-dom';

class SidebarLayout extends Component{
render(){
  return (
    <>
      <LeftPanel />
      <Outlet />
    </>
  );
}
}
export default SidebarLayout;
