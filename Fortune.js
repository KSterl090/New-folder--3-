let FortuneTeller = (numChild, partName, town, title) => {
  let fortune =
    "You will be a " +
    title +
    " in " +
    town +
    " , and married to " +
    partName +
    " with " +
    numChild +
    " kids.";

  document.write(fortune);
};

let numChild = 2;
let partName = "Mary";
let town = "Starkville";
let title = "Software Developer";

FortuneTeller(numChild, partName, town, title);
