import React, { Component } from 'react'; 

class Reporting extends Component {
    render(){
  return (
    <div>
        <h1>Generate Reports</h1>
        <div className="table-structure">
            <div className="section-head">
                Generate Report
            </div>
            <div className="table-filters">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-6">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Report type</option>
                                    <option value="1">Pending requests</option>
                                    <option value="2">Completed requests</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="row">
                        <div className="col-auto">
                        <div>
                            <button type="button" className="btn btn-light m-0" onclick="myFunction()">
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3333 1.66669V5.00002M5.66667 1.66669V5.00002M1.5 8.33335H16.5M3.16667 3.33335H14.8333C15.7538 3.33335 16.5 4.07955 16.5 5.00002V16.6667C16.5 17.5872 15.7538 18.3334 14.8333 18.3334H3.16667C2.24619 18.3334 1.5 17.5872 1.5 16.6667V5.00002C1.5 4.07955 2.24619 3.33335 3.16667 3.33335Z" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                    
                                Select Dates
                            </button>
                            <div id="myDIV" style={{display: "none"}} className="select-dates">
                                <div className="row">
                                    <div className="col b5">Select Date Range</div>
                                    <div className="col-auto"><button type="button" className="btn-close" aria-label="Close" onclick="myFunction()"></button></div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-6">
                                        <input type="date" className="form-control" placeholder="Select From Date" />
                                    </div>
                                    <div className="col-6">
                                        <input type="date" className="form-control" placeholder="Select From Date" />
                                    </div>
                                    <div className="col-12 mt-3">
                                        <button type="submit" className="btn btn-primary btn-lg">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <button type="button"  style={{float: "right"}} className="btn btn-primary">Generate Report</button>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="data-table-area">
                <div className="gen-report">
                    <svg className="search-oval" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="4" width="48" height="48" rx="24" fill="#E3B1FF"/>
                        <path d="M37 37L32.65 32.65M35 27C35 31.4183 31.4183 35 27 35C22.5817 35 19 31.4183 19 27C19 22.5817 22.5817 19 27 19C31.4183 19 35 22.5817 35 27Z" stroke="#7D1AB5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        <rect x="4" y="4" width="48" height="48" rx="24" stroke="#EED0FF" stroke-width="8"/>
                    </svg>
                    <div className="gen-report-hding">Welcome to generate report</div>
                    <p>Please input parameters into one or more fields above to generate data</p>
                </div>
            </div>
        </div>
        <div className="table-structure">
            <div className="section-head">
                Generate Report
            </div>
            <div className="table-filters">
            <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-6">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Report type</option>
                                    <option value="1">Pending requests</option>
                                    <option value="2">Completed requests</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="row">
                        <div className="col-auto">
                        <div>
                            <button type="button" className="btn btn-light m-0" onclick="myFunction()">
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3333 1.66669V5.00002M5.66667 1.66669V5.00002M1.5 8.33335H16.5M3.16667 3.33335H14.8333C15.7538 3.33335 16.5 4.07955 16.5 5.00002V16.6667C16.5 17.5872 15.7538 18.3334 14.8333 18.3334H3.16667C2.24619 18.3334 1.5 17.5872 1.5 16.6667V5.00002C1.5 4.07955 2.24619 3.33335 3.16667 3.33335Z" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                    
                                Select Dates
                            </button>
                            <div id="myDIV" style={{display: "none"}} className="select-dates">
                                <div className="row">
                                    <div className="col b5">Select Date Range</div>
                                    <div className="col-auto"><button type="button" className="btn-close" aria-label="Close" onclick="myFunction()"></button></div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-6">
                                        <input type="date" className="form-control" placeholder="Select From Date" />
                                    </div>
                                    <div className="col-6">
                                        <input type="date" className="form-control" placeholder="Select From Date" />
                                    </div>
                                    <div className="col-12 mt-3">
                                        <button type="submit" className="btn btn-primary btn-lg">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <button type="button"  style={{float: "right"}} className="btn btn-primary">Generate Report</button>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="table-detailed-bar">
                <div className="row align-items-center justify-content-between">
                    <div className="col-auto">
                        <div className="bold">System Report (Jan 6, 2022 to Jan 31, 2022)</div>
                        <p className="mb-0 sub-text">The report generated below shows all your system report for the set parameters.</p>
                    </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-light m-0" onclick="myFunction()">
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3333 12.3332L9.99997 8.9999M9.99997 8.9999L6.66663 12.3332M9.99997 8.9999V16.4999M16.9916 14.3249C17.8044 13.8818 18.4465 13.1806 18.8165 12.3321C19.1866 11.4835 19.2635 10.5359 19.0351 9.63881C18.8068 8.7417 18.2862 7.94616 17.5555 7.37778C16.8248 6.80939 15.9257 6.50052 15 6.4999H13.95C13.6977 5.52427 13.2276 4.61852 12.5749 3.85073C11.9222 3.08295 11.104 2.47311 10.1817 2.06708C9.25943 1.66104 8.25709 1.46937 7.25006 1.50647C6.24304 1.54358 5.25752 1.80849 4.36761 2.28129C3.47771 2.7541 2.70656 3.42249 2.11215 4.23622C1.51774 5.04996 1.11554 5.98785 0.935783 6.9794C0.756025 7.97095 0.803388 8.99035 1.07431 9.96096C1.34523 10.9316 1.83267 11.8281 2.49997 12.5832" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                                                       
                            Export
                        </button>
                    </div>
                </div>
            </div>
            <div className="table-filters">
                <div className="row align-items-center">
                    <div className="col">
                        <div className="bold">Completed Requests (900)</div>
                    </div>
                    <div className="col-4">
                        <div className="input-group">
                            <span className="input-group-text">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z" stroke="#101828" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
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
};
}

export default Reporting;