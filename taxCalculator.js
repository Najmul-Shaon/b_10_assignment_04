function calculateTax(income, expenses) {
  if (
    isNaN(income) ||
    isNaN(expenses) ||
    0 >= income ||
    0 >= expenses ||
    expenses > income
  ) {
    return "Invalid Input";
  } else {
    const diff = income - expenses;
      const taxOfTweentyPercent = (diff * .20);
    return taxOfTweentyPercent;
  }
}

const monthly_income = 5000;
const monthly_cost = -2000;
const result = calculateTax(monthly_income, monthly_cost);
console.log(result);
