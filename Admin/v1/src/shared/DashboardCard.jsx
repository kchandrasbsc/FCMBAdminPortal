import React, { Component } from "react";

class DashboardCard extends Component {
  render() {
    return (
    <div>
        <div className="cards">
        <div className="row gx-3">
          <div className="col-3">
            <div className="single-card">
              <div className="card-gray-slot">
                <div className="card-slot-col-1">Pending Transactions</div>
                <div className="card-numbers">10</div>
              </div>
              <a href="" className="view-request-1">
                View Request
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.11692 0.625L12.8748 5L8.11692 9.375M11.9775 5.01984H0.833221"
                    stroke="#344054"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-3">
            <div className="single-card">
              <div className="card-gray-slot">
                <div className="card-slot-col-2">On Hold Transactions</div>
                <div className="card-numbers-2">10</div>
              </div>
              <a href="" className="view-request-2">
                View Request
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.11692 0.625L12.8748 5L8.11692 9.375M11.9775 5.01984H0.833221"
                    stroke="#344054"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-3">
            <div className="single-card">
              <div className="card-gray-slot">
                <div className="card-slot-col-3">Transactions With Issues</div>
                <div className="card-numbers-3">10</div>
              </div>
              <a href="" className="view-request-3">
                View Request
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.11692 0.625L12.8748 5L8.11692 9.375M11.9775 5.01984H0.833221"
                    stroke="#344054"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-3">
            <div className="single-card">
              <div className="card-gray-slot">
                <div className="card-slot-col-4">Cancelled Transactions</div>
                <div className="card-numbers-4">10</div>
              </div>
              <a href="" className="view-request-4">
                View Request
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.11692 0.625L12.8748 5L8.11692 9.375M11.9775 5.01984H0.833221"
                    stroke="#344054"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
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
                                            <path d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z" stroke="#101828" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                        
                                    </span>
                                    <input type="text" className="form-control" placeholder="Account name or number" />
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
                    <div className="table-footer">
                        <div className="row gx-2">
                            <div className="col-auto">
                                <button type="button" className="btn btn-prev">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.8333 7.00008H1.16666M1.16666 7.00008L6.99999 12.8334M1.16666 7.00008L6.99999 1.16675" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg> 
                                    Previous</button>
                            </div>
                            <div className="col page-nbrs">
                                <div className="" role="group" aria-label="First group">
                                    <button type="button" className="btn btn-outline-secondary active">1</button>
                                    <button type="button" className="btn btn-outline-secondary">2</button>
                                    <button type="button" className="btn btn-outline-secondary">3</button>
                                    <button type="button" className="btn btn-outline-secondary">4</button>
                                  </div>
                            </div>
                            <div className="col-auto">
                                <button type="button" className="btn btn-nxt">Next 
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.16669 7.00008H12.8334M12.8334 7.00008L7.00002 1.16675M12.8334 7.00008L7.00002 12.8334" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                                        
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
      
      
    );
  }
}

export default DashboardCard;
