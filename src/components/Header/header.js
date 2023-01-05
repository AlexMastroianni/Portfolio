import React from 'react';
import NavBar from '../Navbar/Navbar';
export default function Header(props) {
  const { currentPage, handlePageChange } = props;
  return (
    <div className="header">
      <h1>TEstings</h1>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}
