let ageCalc = (year, currentYear) => {
  let birth1 = "I will be either " + (currentYear - year);
  let birth2 = " or " + (currentYear - year - 1) + " in " + currentYear;
  let ageStatement = `${birth1}${birth2}`;
  document.write(ageStatement);
};

let year = Number(prompt("Please enter the year of your birth"));
let currentYear = Number(prompt("What is the current year"));

ageCalc(year, currentYear);
