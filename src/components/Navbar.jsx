import React from 'react';
import './Navbar.css';

const NavBar = ({ totalCardCount, totalAmount, handleRefreshPage }) => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <button className="btn btn-primary" onClick={handleRefreshPage}>Reload All Cards</button>
                <div className="navbar-info">
                <button className="btn btn-primary">Total Products: {totalCardCount} </button>
                <button className="btn btn-primary">Total Amount: ${totalAmount.toFixed(2)}</button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
