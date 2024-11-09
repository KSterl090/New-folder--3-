let supply_Calc = (currentAge, maxAge, estimatedAmount) => {
  let Lifesupply = estimatedAmount * 365 * (maxAge - currentAge);

  document.write(
    `You will need ${Lifesupply} to last you at the ripe old age of ${maxAge}`
  );
};

currecntAge = Number(prompt("What is your current age?"));
maxAge = 100;
estimatedAmount = Number(prompt("How many units do you use per month?"));

supply_Calc(currecntAge, maxAge, estimatedAmount);
