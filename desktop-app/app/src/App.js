import React, { useState } from 'react';
import './App.css';
import HeaderTabs from './components/header-tabs/HeaderTabs';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderBody = (activeTab) => {
    switch (activeTab) { // enum
      case 'alt':
        return <div className="Body-alt">

        </div>;
      default:
        return <div className="Body-home">

        </div>;
    }
  }

  return (
    <div className="App">
      <HeaderTabs/>
      <div className="Body">
        { renderBody(activeTab) }
      </div>
    </div>
  );
}

export default App;
