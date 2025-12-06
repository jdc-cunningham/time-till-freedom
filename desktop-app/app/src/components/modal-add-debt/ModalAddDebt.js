import './ModalAddDebt.scss';

const ModalAddDebt = (props) => {
  const { saveDebt } = props;

  return <div className="ModalAddDebt">
    <input type="text" placeholder="debt name" />
    <input type="number" placeholder="balance"/>
    <input type="number" placeholder="APR %"/>
    <select name="debt-type">
      <option value="" disabled selected>debt type</option>
      <option value="credit card">Credit Card</option>
      <option type="personal loan">Personal Loan</option>
      <option type="car loan">Car Loan</option>
      <option type="student loan">Student Loan</option>
    </select>
    <input type="number" placeholder="due date"/>
    <input type="number" placeholder="min due"/>
    <button
      type="button"
      onClick={() => {
        saveDebt();
      }}
    >Save</button>
  </div>
};

export default ModalAddDebt;
