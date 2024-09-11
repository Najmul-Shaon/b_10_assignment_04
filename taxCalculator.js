function calculateTax(income, cost) {
  if (
    isNaN(income) ||
    isNaN(cost) ||
    0 >= income ||
    0 >= cost ||
    cost > income
  ) {
    return "Invalid String";
  } else {
    const diff = income - cost;
      const taxOfTweentyPercent = (diff * .20);
    return taxOfTweentyPercent;
  }
}

const monthly_income = 5000;
const monthly_cost = -2000;
const result = calculateTax(monthly_income, monthly_cost);
console.log(result);
