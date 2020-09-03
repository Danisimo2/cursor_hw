const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1
function getMyTaxes(salary) {
  const myTax = this.tax * salary;
  return myTax;
}

//2
function getMiddleTaxes() {
  const middleTax = this.tax * this.middleSalary;
  return middleTax;
}

//3
function getTotalTaxes() {
  const totalTax = this.tax * this.middleSalary * this.vacancies;
  return totalTax;
}

//4
function getMySalary(country) {
  let taxes = country.tax;
  function randSalary() {
    let salary = Number(
      Math.floor(Math.random() * (2000 - 1500 + 1) + 1500).toFixed(2)
    );
    let profit = Number((salary - salary * taxes).toFixed(2));
    taxes = Number((taxes * salary).toFixed(2));
    answ4.innerHTML = `{tax: ${taxes}, salary: ${salary}, profit: ${profit}}`;
  }
  return randSalary();
}

const btn1_f1 = document.querySelector(".btn1_f1");
const btn2_f1 = document.querySelector(".btn2_f1");
const btn3_f1 = document.querySelector(".btn3_f1");
const answ1 = document.querySelector(".answer1");

btn1_f1.addEventListener("click", () => {
  answ1.innerHTML = `${getMyTaxes.call(ukraine, 20000)}`;
});

btn2_f1.addEventListener("click", () => {
  answ1.innerHTML = `${getMyTaxes.call(litva, 20000)}`;
});

btn3_f1.addEventListener("click", () => {
  answ1.innerHTML = `${getMyTaxes.call(latvia, 20000)}`;
});

const btn1_f2 = document.querySelector(".btn1_f2");
const btn2_f2 = document.querySelector(".btn2_f2");
const btn3_f2 = document.querySelector(".btn3_f2");
const answ2 = document.querySelector(".answer2");

btn1_f2.addEventListener("click", () => {
  answ2.innerHTML = `${Number(getMiddleTaxes.call(ukraine).toFixed(2))}`;
});

btn2_f2.addEventListener("click", () => {
  answ2.innerHTML = `${Number(getMiddleTaxes.call(litva).toFixed(2))}`;
});

btn3_f2.addEventListener("click", () => {
  answ2.innerHTML = `${Number(getMiddleTaxes.call(latvia).toFixed(2))}`;
});

const btn1_f3 = document.querySelector(".btn1_f3");
const btn2_f3 = document.querySelector(".btn2_f3");
const btn3_f3 = document.querySelector(".btn3_f3");
const answ3 = document.querySelector(".answer3");

btn1_f3.addEventListener("click", () => {
  answ3.innerHTML = `${Number(getTotalTaxes.call(ukraine).toFixed(2))}`;
});

btn2_f3.addEventListener("click", () => {
  answ3.innerHTML = `${Number(getTotalTaxes.call(litva).toFixed(2))}`;
});

btn3_f3.addEventListener("click", () => {
  answ3.innerHTML = `${Number(getTotalTaxes.call(latvia).toFixed(2))}`;
});

const btn1_f4 = document.querySelector(".btn1_f4");
const btn2_f4 = document.querySelector(".btn2_f4");
const btn3_f4 = document.querySelector(".btn3_f4");
const answ4 = document.querySelector(".answer4");
const stopInterval = document.querySelector(".stop");

stopInterval.addEventListener("click", () => {
  clearInterval(intervalId_ukr);
  clearInterval(intervalId_lit);
  clearInterval(intervalId_lat);
});

btn1_f4.addEventListener("click", () => {
  getMySalary(ukraine);
  intervalId_ukr = setInterval(() => console.log(getMySalary(ukraine)), 10000);
});

btn2_f4.addEventListener("click", () => {
  getMySalary(litva);
  intervalId_lit = setInterval(() => console.log(getMySalary(litva)), 10000);
});

btn3_f4.addEventListener("click", () => {
  getMySalary(latvia);
  intervalId_lat = setInterval(() => console.log(getMySalary(latvia)), 10000);
});

