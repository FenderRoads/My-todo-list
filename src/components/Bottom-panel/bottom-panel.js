import React from 'react';

import './bottom-panel.css'

function BottomPanel() {
  return (
    <div className="bottom-pannel">
      <AddCase />
      <div className="add-btn">Add</div>
    </div>
  );
};

function AddCase() {
  return (
    <input type="text" className="add-case" placeholder="case name"/>
  );
};

export default BottomPanel;