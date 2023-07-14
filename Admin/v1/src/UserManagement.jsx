import React, { Component } from 'react'; 

class UserManagement extends Component {
    render(){
  return (
    <div>
        <h1>User Management</h1>
        <div className="table-structure">
            <div className="section-head">
                User List
            </div>
            <div className="table-filters">
                <div className="row">
                    <div className="col">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn active" aria-current="page" value={''}>All</button>
                        <button type="button" className="btn" value={'Active'}>Active</button>
                        <button type="button" className="btn">Inactive</button>
                    </div>
                    </div>
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
                                        <input type="date" className="form-control" placeholder="Select From Date"/>
                                    </div>
                                    <div className="col-6">
                                        <input type="date" className="form-control" placeholder="Select From Date"/>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <button type="submit" className="btn btn-primary btn-lg">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-light m-0" onclick="myFunction()">
                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3333 12.3332L9.99997 8.9999M9.99997 8.9999L6.66663 12.3332M9.99997 8.9999V16.4999M16.9916 14.3249C17.8044 13.8818 18.4465 13.1806 18.8165 12.3321C19.1866 11.4835 19.2635 10.5359 19.0351 9.63881C18.8068 8.7417 18.2862 7.94616 17.5555 7.37778C16.8248 6.80939 15.9257 6.50052 15 6.4999H13.95C13.6977 5.52427 13.2276 4.61852 12.5749 3.85073C11.9222 3.08295 11.104 2.47311 10.1817 2.06708C9.25943 1.66104 8.25709 1.46937 7.25006 1.50647C6.24304 1.54358 5.25752 1.80849 4.36761 2.28129C3.47771 2.7541 2.70656 3.42249 2.11215 4.23622C1.51774 5.04996 1.11554 5.98785 0.935783 6.9794C0.756025 7.97095 0.803388 8.99035 1.07431 9.96096C1.34523 10.9316 1.83267 11.8281 2.49997 12.5832" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                                                       
                                Export
                        </button>
                    </div>
                    <div className="col-auto">
                        <button type="button"  style={{float: "right"}} className="btn btn-primary m-0">Generate Report</button>
                    </div>
                </div>
            </div>
            <div className="data-table-area">
                <table className="table table-hover table-bordered mb-0">
                    <thead>
                        <tr>
                        <th>User Name</th>
                        <th>Role</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Active Since</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            <div className="ac-name">Kappa Corporation</div>
                        </td>
                        <td>Corporate</td>
                        <td>Kano</td>
                        <td>
                            24 May, 2023
                            <div className="ac-name">23:18:00</div>
                        </td>
                        <td>Mbah Jacob</td>
                        <td><span className="badge bg-inactive">Inactive</span></td>
                        </tr>
                        <tr>
                        <td>
                            <div className="ac-name">Kappa Corporation</div>
                        </td>
                        <td>Corporate</td>
                        <td>Kano</td>
                        <td>
                            24 May, 2023
                            <div className="ac-name">23:18:00</div>
                        </td>
                        <td>Mbah Jacob</td>
                        <td><span className="badge bg-active">Active</span></td>
                        </tr>
                        <tr>
                        <td>
                            <div className="ac-name">Kappa Corporation</div>
                        </td>
                        <td>Corporate</td>
                        <td>Kano</td>
                        <td>
                            24 May, 2023
                            <div className="ac-name">23:18:00</div>
                        </td>
                        <td>Mbah Jacob</td>
                        <td><span className="badge bg-active">Active</span></td>
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

export default UserManagement;