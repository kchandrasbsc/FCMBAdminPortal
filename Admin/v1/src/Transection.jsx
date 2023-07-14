import React, { Component, useState,useEffect  } from "react";

// class Transection extends Component{
//     render(){
    const Transection = () => {
      const [data, setData] = useState([]);
      try {
        useEffect(() => {        
          const response = 'https://localhost:7139/api/StpRequests';    
                const requestData = fetch(response)    
                    .then(res => res.json()).then(data => setData(data))
                  },[])
            } catch (error) {
                if (error instanceof SyntaxError) {
                    // Unexpected token < in JSON
                    console.log('There was a SyntaxError', error);
                } else {
                    console.log('There was an error', error);
                }
            }
    
        const [searchTerm, setSearchTerm] = useState('');
        const [sortColumn, setSortColumn] = useState(null);
        const [sortDirection, setSortDirection] = useState('asc');
      
        const handleSearch = (e) => {
          setSearchTerm(e.target.value);
        };
      
        const handleSort = (column) => {
          if (sortColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
          } else {
            setSortColumn(column);
            setSortDirection('asc');
          }
        };
      
        const filteredData = data?.filter((item) =>
          Object.values(item).some((value) =>
            value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      
        const sortedData = sortColumn
          ? filteredData.sort((a, b) => {
              const aValue = a[sortColumn];
              const bValue = b[sortColumn];
      
              if (aValue < bValue) {
                return sortDirection === 'asc' ? -1 : 1;
              }
              if (aValue > bValue) {
                return sortDirection === 'asc' ? 1 : -1;
              }
              return 0;
            })
          : filteredData;
        return(
            <div>
              <h1>Transactions</h1>
            <div className="table-structure">
                <div className="section-head">
                    Recent Transactions
                </div>
                <div className="table-filters">
                    <div className="row">
                        <div className="col">
                            <div className="btn-group" role="group">
                                <button type="button" className="btn active" aria-current="page" value={''} onClick={handleSearch}>All Requests</button>
                                <button type="button" className="btn" value={'Active'} onClick={handleSearch}>Active</button>
                                <button type="button" className="btn" value={'Completed'} onClick={handleSearch}>Completed</button>
                                <button type="button" className="btn">Pending</button>
                                <button type="button" className="btn">Cancelled</button>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="input-group">
                                <span className="input-group-text">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z" stroke="#101828" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>                                        
                                </span>
                                <input type="text" className="form-control" placeholder="Account name or number" value={searchTerm}
                                    onChange={handleSearch}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="data-table-area table-responsive">
                      <table className="table table-hover table-bordered mb-0">
                            <thead>
                           {data.length>0 && <tr>
                                {Object.keys(data[0]).map((column) => (
                                <th 
                                         className={ sortDirection === 'asc' ? "asc" : "desc" } key={column} onClick={() => handleSort(column)} >
                                    {column}                    
                                </th>
                                ))}
                            </tr>}
                            </thead>
                            <tbody>
                            {sortedData.map((item, index) => (
                                <tr key={index}>
                                {Object.values(item).map((value, index) => (
                                    <td key={index}>{value}</td>
                                ))}
                                </tr>
                            ))}
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
// }

export default Transection;