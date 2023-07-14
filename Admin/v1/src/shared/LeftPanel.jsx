import React, { Component ,useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

class LeftPanel extends Component {
    render(){
  return (
    <div className="left-nav-panel">
    <div className="logo-bar">
        <img src={require("../assets/images/Logo2.png")} alt="FCMB NAPS INWARD"></img>
    </div>
    <div className="navigation">
        <ul className="nav flex-column">
            <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/Dashboard/cards"> 
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 20V10M12 20V4M6 20V14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Dashboard</Link>
            </li>
            <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/Dashboard/transection">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01" stroke="#FCFCFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Transactions</Link>
            </li>
            <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/Dashboard/reporting">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#D0D5DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                    Reporting</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Dashboard/user-management">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="#D0D5DD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    User Management
                </a>
            </li>
        </ul>
    </div>
    <div className="navigation-bottom">
        <nav className="nav flex-column mb-5">
            <a className="nav-link" href="/">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9M16 17L21 12M21 12L16 7M21 12H9" stroke="#D0D5DD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Log Out
            </a>
        </nav>
        <div className="avatar-bar d-flex">
            <div><img src={require("../assets/images/Avatar.png")}></img></div>
            <div>
                <div>Olivia Rhye</div>
                <div>SOL ID: 22334</div>
            </div>
        </div>
        <div className="last-login">
            <div>Last Login:</div>
            <div>24 MAY, 2023, 23:18:33</div>
        </div>
    </div>
</div>
  );
};
}

export default LeftPanel;