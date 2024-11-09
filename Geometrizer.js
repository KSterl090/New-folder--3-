let circleProp = (radius) => {
  let circumfriance = Math.trunc(2 * Math.PI * radius);
  let area = Math.trunc(Math.PI * radius ** 2);

  document.write(`The circumferance is ${circumfriance}. `);
  document.write(`The area is ${area}`);
};

radius = Number(prompt("What is the Radius of the circle?"));

circleProp(radius);
