const saveDebt = (debtInfo) => {
  const debts = JSON.parse(localStorage.getItem('debts')) || [];

  if (debts.find(debt => debt.name === debtInfo.name)) {
    return {
      error: true,
      msg: 'already exists'
    };
  }

  debts.push(debtInfo);
  localStorage.setItem('debts', JSON.stringify(debts));

  return {
    error: false,
    msg: ""
  };
};

export default saveDebt;
