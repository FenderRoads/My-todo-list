import React from 'react';

import './top-panel.css'

function TopPanel() {
  return (
    <div className="top-pannel">
      <StatusFilter />
      <SearchFilter />
    </div>
  );
};


function SearchFilter() {
  return (
    <input type="text" className="search-filter" placeholder="type to search"/>
  );
};

function StatusFilter() {
  return (
    <div className="status-filter">
      <div className="toggle-tab-item toggle-tab-active">All</div>
      <div className="toggle-tab-item">Active</div>
      <div className="toggle-tab-item">Done</div>
    </div>
  );
};

export default TopPanel;