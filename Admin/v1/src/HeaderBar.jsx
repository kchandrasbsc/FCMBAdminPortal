import React, { Component } from 'react';

class HeaderBar extends Component {
    render(){
  return (
    <div className="row">
    <div className="col-6">
        <div className="btn-group">
            <a href="#" className="btn active" aria-current="page">24 Hours</a>
            <a href="#" className="btn">7 Days</a>
            <a href="#" className="btn">30 Days</a>
            <a href="#" className="btn">12 Months</a>
        </div>
    </div>
    <div className="col">
        <div className="d-flex">
            <button type="button" className="btn btn-light">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3333 1.66669V5.00002M5.66667 1.66669V5.00002M1.5 8.33335H16.5M3.16667 3.33335H14.8333C15.7538 3.33335 16.5 4.07955 16.5 5.00002V16.6667C16.5 17.5872 15.7538 18.3334 14.8333 18.3334H3.16667C2.24619 18.3334 1.5 17.5872 1.5 16.6667V5.00002C1.5 4.07955 2.24619 3.33335 3.16667 3.33335Z" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>                                    
                Select Dates
            </button>
            <div className="input-group">
                <span className="input-group-text">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z" stroke="#101828" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>                                        
                </span>
                <input type="text" className="form-control" placeholder="Account name or number">
            </input></div>
        </div>
        
    </div>
</div>
  );
};
}

export default HeaderBar;