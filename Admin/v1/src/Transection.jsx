import React, { Component } from "react";

class Transection extends Component{
    render(){
        return(
            <div className="page-content">
            <h1>Transactions</h1>
            <div className="table-structure">
                <div className="section-head">
                    Recent Transactions
                </div>
                <div className="table-filters">
                    <div className="row">
                        <div className="col">
                            <div className="btn-group">
                                <a href="#" className="btn active" aria-current="page">All Requests</a>
                                <a href="#" className="btn">Completed</a>
                                <a href="#" className="btn">Pending</a>
                                <a href="#" className="btn">Cancelled</a>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="input-group">
                                <span className="input-group-text">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z" stroke="#101828" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>                                        
                                </span>
                                <input type="text" className="form-control" placeholder="Account name or number"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="data-table-area">
                    <table className="table table-hover table-bordered mb-0">
                        <thead>
                          <tr>
                            <th>Account</th>
                            <th>Type</th>
                            <th>Location</th>
                            <th>Date</th>
                            <th>Initiator</th>
                            <th>Solicitor</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                                0324827323
                                <div className="ac-name">Kappa Corporation</div>
                            </td>
                            <td>Corporate</td>
                            <td>Kano</td>
                            <td>
                                24 May, 2023
                                <div className="ac-name">23:18:00</div>
                            </td>
                            <td>Mbah Jacob</td>
                            <td>Duff Deer</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                          <tr>
                            <td>
                                0324827323
                                <div className="ac-name">Kappa Corporation</div>
                            </td>
                            <td>Corporate</td>
                            <td>Kano</td>
                            <td>
                                24 May, 2023
                                <div className="ac-name">23:18:00</div>
                            </td>
                            <td>Mbah Jacob</td>
                            <td>Duff Deer</td>
                            <td><span className="badge bg-success">Completed</span></td>
                          </tr>
                          <tr>
                            <td>
                                0324827323
                                <div className="ac-name">Kappa Corporation</div>
                            </td>
                            <td>Corporate</td>
                            <td>Kano</td>
                            <td>
                                24 May, 2023
                                <div className="ac-name">23:18:00</div>
                            </td>
                            <td>Mbah Jacob</td>
                            <td>Duff Deer</td>
                            <td><span className="badge bg-dark">On Hold</span></td>
                          </tr>
                        </tbody>
                      </table>
                </div>
            </div>
        </div>
        );
    };
}

export default Transection;