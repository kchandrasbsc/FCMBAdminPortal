// src/components/pagination.table.js
import React from "react";

import { useTable, usePagination, useSortBy, useFilters, useGlobalFilter, useAsyncDebounce  } from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';

// Define a default UI for filtering
function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <span>
            {/* Search:{' '} */}
            <input
                className="form-control search-icon"
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`Search Request`}
            />
        </span>
    )
}

function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
}) {
    const count = preFilteredRows.length

    return (
        <input
            className="form-control"
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined)
            }}
            // placeholder={`Search ${count} records...`}
        />
    )
}

function Table({ columns, data }) {

    const defaultColumn = React.useMemo(
        () => ({
            // Default Filter UI
            Filter: DefaultColumnFilter,
        }),
        []
    )

    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        preGlobalFilteredRows,
        setGlobalFilter,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            defaultColumn,
            initialState: { pageIndex: 1, pageSize: 5 },
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination
    )

    // Render the UI for your table
    return (
        <div>
            <h1>Data Table</h1>
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
                        <button type="button" className="btn btn-light m-0" onclick="myFunction()">
                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3333 12.3332L9.99997 8.9999M9.99997 8.9999L6.66663 12.3332M9.99997 8.9999V16.4999M16.9916 14.3249C17.8044 13.8818 18.4465 13.1806 18.8165 12.3321C19.1866 11.4835 19.2635 10.5359 19.0351 9.63881C18.8068 8.7417 18.2862 7.94616 17.5555 7.37778C16.8248 6.80939 15.9257 6.50052 15 6.4999H13.95C13.6977 5.52427 13.2276 4.61852 12.5749 3.85073C11.9222 3.08295 11.104 2.47311 10.1817 2.06708C9.25943 1.66104 8.25709 1.46937 7.25006 1.50647C6.24304 1.54358 5.25752 1.80849 4.36761 2.28129C3.47771 2.7541 2.70656 3.42249 2.11215 4.23622C1.51774 5.04996 1.11554 5.98785 0.935783 6.9794C0.756025 7.97095 0.803388 8.99035 1.07431 9.96096C1.34523 10.9316 1.83267 11.8281 2.49997 12.5832" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                                                       
                                Export
                        </button>
                    </div>
                    <div className="col-auto">
                    <GlobalFilter
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        // globalFilter={state.globalFilter}
                        setGlobalFilter={setGlobalFilter}
                    />
                    </div>
                </div>
            </div>
            
            <div className="data-table-area">
                <table className="table table-hover table-bordered mb-0" {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? '<span>'
                                                : ' 🔼'
                                            : ''}
                                        </span>    
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                
            </div>
            <div className="table-footer">
                <div className="row gx-2">
                    <div className="col-auto">
                        <button type="button" onClick={() => previousPage()} disabled={!canPreviousPage} className="btn btn-prev">
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
                        <button type="button"  onClick={() => nextPage()} disabled={!canNextPage} className="btn btn-nxt">Next 
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.16669 7.00008H12.8334M12.8334 7.00008L7.00002 1.16675M12.8334 7.00008L7.00002 12.8334" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                        
                        </button>
                    </div>
                </div>
            </div>
            </div>
            
            {/* 
                Pagination can be built however you'd like. 
                This is just a very basic UI implementation:
            */}
            {/* <ul className="pagination">
                <li className="page-item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    <a className="page-link">First</a>
                </li>
                <li className="page-item" onClick={() => previousPage()} disabled={!canPreviousPage}>
                    <a className="page-link">{'<'}</a>
                </li>
                <li className="page-item" onClick={() => nextPage()} disabled={!canNextPage}>
                    <a className="page-link">{'>'}</a>
                </li>
                <li className="page-item" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    <a className="page-link">Last</a>
                </li>
                <li>
                    <a className="page-link">
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </a>
                </li>
                <li>
                    <a className="page-link">
                        <input
                            className="form-control"
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(page)
                            }}
                            style={{ width: '100px', height: '20px' }}
                        />
                    </a>
                </li>{' '}
                <select
                    className="form-control"
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                    style={{ width: '120px', height: '38px' }}
                >
                    {[5, 10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </ul> */}
        </div >
    )
}

function PaginationTableComponent() {
    const columns = React.useMemo(
        () => [
            {
               
                Header: 'Info',
                columns: [
                    {
                        Header: 'Age',
                        accessor: 'age',
                    },
                    {
                        Header: 'Visits',
                        accessor: 'visits',
                    },
                    {
                        Header: 'Status',
                        accessor: 'status',
                    },
                    {
                        Header: 'Profile Progress',
                        accessor: 'progress',
                    },
                ],
            },
        ],
        []
    )

    const data = [
        {
            "firstName": "committee-c15dw",
            "lastName": "editor-ktsjo",
            "age": 3,
            "visits": 46,
            "progress": 75,
            "status": "relationship"
        },
        {
            "firstName": "midnight-wad0y",
            "lastName": "data-7h4xf",
            "age": 1,
            "visits": 56,
            "progress": 15,
            "status": "complicated"
        },
        {
            "firstName": "tree-sbdb0",
            "lastName": "friendship-w8535",
            "age": 1,
            "visits": 45,
            "progress": 66,
            "status": "single"
        },
        {
            "firstName": "chin-borr8",
            "lastName": "shirt-zox8m",
            "age": 0,
            "visits": 25,
            "progress": 67,
            "status": "complicated"
        },
        {
            "firstName": "women-83ef0",
            "lastName": "chalk-e8xbk",
            "age": 9,
            "visits": 28,
            "progress": 23,
            "status": "relationship"
        },
        {
            "firstName": "women-83ef0",
            "lastName": "chalk-e8xbk",
            "age": 9,
            "visits": 28,
            "progress": 23,
            "status": "relationship"
        },
        {
            "firstName": "women-83ef0",
            "lastName": "chalk-e8xbk",
            "age": 9,
            "visits": 28,
            "progress": 23,
            "status": "relationship"
        },
        {
            "firstName": "women-83ef0",
            "lastName": "chalk-e8xbk",
            "age": 9,
            "visits": 28,
            "progress": 23,
            "status": "relationship"
        }]
    console.log(JSON.stringify(data));


    return (
        <Table columns={columns} data={data} />
    )
}

export default PaginationTableComponent;