import React from 'react';

import './title-section.css'

function TitleSection() {
  return (
    <div className="title-section">
      <h1>Tatar to-do list</h1>
      <div className="statistics">
        <span className="to-do">1</span> more to do, <span className="done">3</span> done
      </div>
    </div>
  )
}

export default TitleSection;