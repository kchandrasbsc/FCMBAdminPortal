import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';

const ITEMS_PER_PAGE = 10; // Number of items to show per page
const PAGES_TO_SHOW = 3; // Number of pages to show in pagination (excluding first and last)

const DataGrid = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch('https://localhost:7139/api/StpRequests');
      const data = await response.json();
      setData(data);
      setSortedData([...data]); // Create a copy of data to sort
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const filtered = data.filter((item) => {
      return Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredData(filtered);
  }, [data, searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };


  // Sorting function
  const sortBy = (key) => {
    const sortOrderToggle = sortedData[0][key] < sortedData[1][key] ? 1 : -1;

    // Sort the data based on the clicked column and sorting order
    const sorted = [...sortedData].sort((a, b) => {
      if (a[key] < b[key]) return sortOrderToggle;
      if (a[key] > b[key]) return -sortOrderToggle;
      return 0;
    });

    setSortedData(sorted);
  };

  // Filter function
  // const handleFilter = (searchTerm) => {
  //   setSearchTerm(searchTerm);
  // };
  // const handleFilter = (e) => {
  //   setSearchTerm(e.target.value);
  // };
  // const filteredData = data?.filter((item) =>
  // Object.values(item).some((value) =>
  //   value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
  // )
// );
  // Calculate the total number of pages based on the number of items and items per page
  const totalPages = Math.ceil(sortedData.length / ITEMS_PER_PAGE);

  // Get the current page's items based on the current page and items per page
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return sortedData.slice(startIndex, endIndex);
  };

  // Get the array of page numbers to show in pagination
  const getPageNumbers = () => {
    const totalPagesToShow = Math.min(PAGES_TO_SHOW, totalPages);
    const pageNumbers = [];

    if (currentPage <= Math.ceil(PAGES_TO_SHOW / 2)) {
      for (let i = 1; i <= totalPagesToShow; i++) {
        pageNumbers.push(i);
      }
    } else if (currentPage >= totalPages - Math.floor(PAGES_TO_SHOW / 2)) {
      for (let i = totalPagesToShow; i > 0; i--) {
        pageNumbers.push(totalPages - i + 1);
      }
    } else {
      const startPage = currentPage - Math.floor(PAGES_TO_SHOW / 2);
      for (let i = 0; i < totalPagesToShow; i++) {
        pageNumbers.push(startPage + i);
      }
    }

    return pageNumbers;
  };

  // Handle pagination button clicks
  const handlePaginationClick = (page) => {
    setCurrentPage(page);
  };

  return (
    
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
                      {/* <input
                          type="text" className="form-control" placeholder="Search..."
                          value={searchTerm}
                          onChange={ handleFilter}
                          
                        /> */}
              </div>
          </div>
      </div>
  </div>
  <div className="data-table-area table-responsive">
        <table className="table table-hover table-bordered mb-0">
              <thead>
              <tr>
                {data.length > 0 &&
                  Object.keys(data[0]).map((header, index) => (
                    <th key={index} onClick={() => sortBy(header)}>
                      {header}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                  {getCurrentPageItems().map((item, index) => (
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
              <div>
                <button onClick={() => handlePaginationClick(1)} disabled={currentPage === 1}>
                  First
                </button>
                <button onClick={() => handlePaginationClick(currentPage - 1)} disabled={currentPage === 1}>
                  Previous
                </button>
                {/* Render page numbers */}
                {getPageNumbers().map((pageNumber) => (
                  <button key={pageNumber} onClick={() => handlePaginationClick(pageNumber)} disabled={currentPage === pageNumber}>
                    {pageNumber}
                  </button>
                ))}
                <button onClick={() => handlePaginationClick(currentPage + 1)} disabled={currentPage === totalPages}>
                  Next
                </button>
                <button onClick={() => handlePaginationClick(totalPages)} disabled={currentPage === totalPages}>
                  Last
                </button>
              </div>
</div>
</div>
</div>  
  );
};

export default DataGrid;
