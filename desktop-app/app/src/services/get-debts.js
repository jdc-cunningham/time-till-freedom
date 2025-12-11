const getDebts = () => {
  return JSON.parse(localStorage.getItem('debts')) || [];
};

export default getDebts;
