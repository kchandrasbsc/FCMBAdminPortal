import React, { Component } from 'react';
import RightPanel from './RightPanel'; 
import LeftPanel from './LeftPanel';

class Dashboard extends Component {
    render(){
  return (
    <div className="fluid-container dash-BG d-flex">
        <LeftPanel />
        {/* <RightPanel /> */}
    </div>
    
  );
};
}

export default Dashboard;