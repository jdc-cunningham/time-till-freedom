const saveDebt = (
  name,
  balance,
  apr,
  type,
  dueDate,
  minDue
) => {
  const debts = localStorage.getItem('debts') || [];

  if (name in debts) {
    return {
      error: true,
      msg: 'already exists'
    };
  } else {
    debts.push({
      name,
      balance,
      apr,
      type,
      dueDate,
      minDue
    });
  }

  localStorage.setItem('debts', JSON.stringify(debts));
};

export default saveDebt;
