import React from 'react';

import BottomPanel from '../Bottom-panel/bottom-panel';
import TitleSection from '../Title-section/title-section';
import TodoList from '../Todo-list/todo-list';
import TopPanel from '../Top-panel/top-panel';

import './app.css'

function App() {
  return (
    <div className="app">
      <TitleSection />
      <TopPanel />
      <TodoList />
      <BottomPanel />
    </div>
  );
};

export default App;