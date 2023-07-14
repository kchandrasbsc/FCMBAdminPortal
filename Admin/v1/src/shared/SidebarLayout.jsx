import React, { Component } from 'react'
import LeftPanel from './LeftPanel';
import { Outlet } from 'react-router-dom';

class SidebarLayout extends Component{
render(){
  return (
    <>
      <LeftPanel />
      <div className="right-panel">
            <div className="page-content">
              <Outlet />
            </div>
      </div>
    </>
  );
}
}
export default SidebarLayout;
