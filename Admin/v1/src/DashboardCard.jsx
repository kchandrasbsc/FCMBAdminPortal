import React, { Component } from 'react'; 

class DashboardCard extends Component {
    render(){
  return (
    <div className="single-card">
            <div className="card-gray-slot">
                <div className="card-slot-col-1">
                    Pending Transactions
                </div>
                <div className="card-numbers">
                    10
                </div>
            </div>
            <a href="" className="view-request-1">
                View Request    
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.11692 0.625L12.8748 5L8.11692 9.375M11.9775 5.01984H0.833221" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </a>
    </div>
  );
};
}

export default DashboardCard;