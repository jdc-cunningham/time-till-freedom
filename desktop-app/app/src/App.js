import { useState, useEffect } from 'react';
import './App.scss';
import HeaderTabs from './components/header-tabs/HeaderTabs';
import ModalAddDebt from './components/modal-add-debt/ModalAddDebt';
import saveDebt from './services/save-debt';
import getDebts from './services/get-debts';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeModal, setActiveModal] = useState('');
  const [debts, setDebts] = useState([]);

  const renderDebts = () => (
    debts.map(debt => (
      <div className="DebtCard">
        <div className="DebtCard-text">
          {Object.keys(debt).map(key => (
            `${key}: ${debt[key]}\n`
          ))}
        </div>
      </div>
    ))
  );

  const renderBody = (activeTab) => {
    switch (activeTab) { // enum
      case 'home':
        return <div className="BodyHome">
          {renderDebts()}
        </div>;
      default:
        return <div className="BodyUnknown">
          <p>unknown body</p>
        </div>;
    }
  };

  const renderModal = (activeModal) => {
    switch (activeModal) {
      case 'add-debt':
        return <ModalAddDebt saveDebt={saveDebt}/>;
      default:
        return <div className="ModalUnknown">
          <p>unknown modal</p>
        </div>;
    }
  };

  useEffect(() => {
    setDebts(getDebts());
  }, []);

  return (
    <div className="App">
      {<HeaderTabs/>}
      {<div className="Body">
        {renderBody(activeTab)}
      </div>}
      {activeModal && renderModal(activeModal)}
    </div>
  );
}

export default App;
