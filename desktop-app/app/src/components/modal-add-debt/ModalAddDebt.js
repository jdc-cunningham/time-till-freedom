const ModalAddDebt = (props) => {
  return <div className="ModalAddDebt">
    <input type="text" placeholder="Debt Name" />
    <select name="debt-type">
      <option value="credit card">Credit Card</option>
      <option type="personal loan">Personal Loan</option>
      <option type="car loan">Car Loan</option>
      <option type="student loan">Student Loan</option>
    </select>
    <input type="number" placeholder="13"/>
    <input type="number" placeholder="min due"/>
    <button type="button">Save</button>
  </div>
};

export default ModalAddDebt;
