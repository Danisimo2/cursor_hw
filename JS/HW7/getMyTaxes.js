const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

function getMyTaxes(salary) {
  let myTax = this.tax * salary;
  return myTax;
}

export function getMyTaxesExp(){
	console.log(getMyTaxes.call(ukraine, 10000));
}