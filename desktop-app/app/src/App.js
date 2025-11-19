import React, { useState } from 'react';
import './App.css';
import HeaderTabs from './components/header-tabs/HeaderTabs';
import ModalAddDebt from './components/modal-add-debt/ModalAddDebt';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeModal, setActiveModal] = useState('');

  const renderBody = (activeTab) => {
    switch (activeTab) { // enum
      case 'home':
        return <div className="Body-home">

        </div>;
      default:
        return <div className="Body-unknown">
          <p>unknown body</p>
        </div>;
    }
  };

  const renderModal = (activeModal) => {
    switch (activeModal) {
      case 'add-debt':
        return <ModalAddDebt/>;
      default:
        return <div className="ModalUnknown">
          <p>unknown modal</p>
        </div>;
    }
  };

  return (
    <div className="App">
      {!activeModal && <HeaderTabs/>}
      {!activeModal && <div className="Body">
        {renderBody(activeTab)}
      </div>}
      {activeModal && renderModal(activeModal)}
    </div>
  );
}

export default App;
