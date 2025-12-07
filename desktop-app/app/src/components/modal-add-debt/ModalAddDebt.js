import { useState } from 'react';
import './ModalAddDebt.scss';

const ModalAddDebt = (props) => {
  const { saveDebt } = props;

  const [debtInfo, setDebtInfo] = useState({
    name: "",
    balance: "",
    apr: "",
    type: "",
    dueDate: "",
    minDue: ""
  });

  const updateData = (key, val) => {
    setDebtInfo(prevDebtInfo => ({
      ...prevDebtInfo,
      [key]: val
    }));
  };

  return <div className="ModalAddDebt">
    <input type="text" placeholder="debt name" value={debtInfo.name} onChange={(e) => updateData("name", e.target.value)}/>
    <input type="number" placeholder="balance" value={debtInfo.balance} onChange={(e) => updateData("balance", e.target.value)}/>
    <input type="number" placeholder="APR %" value={debtInfo.apr} onChange={(e) => updateData("apr", e.target.value)}/>
    <select name="debt-type" value={debtInfo.type} onChange={(e) => updateData("type", e.target.value)}>
      <option value="" disabled>debt type</option>
      <option>Credit Card</option>
      <option>Personal Loan</option>
      <option>Car Loan</option>
      <option>Student Loan</option>
    </select>
    <input type="number" placeholder="due date" value={debtInfo.dueDate} onChange={(e) => updateData("dueDate", e.target.value)}/>
    <input type="number" placeholder="min due" value={debtInfo.minDue} onChange={(e) => updateData("minDue", e.target.value)}/>
    <button
      type="button"
      onClick={() => {
        const debtSaveCall = saveDebt(debtInfo);

        if (!debtSaveCall.error) {
          alert('Saved!');
        } else {
          alert(`Failed to save: ${debtSaveCall.msg}`);
        }
      }}
    >Save</button>
  </div>
};

export default ModalAddDebt;
