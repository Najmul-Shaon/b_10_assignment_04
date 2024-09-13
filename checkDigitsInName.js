function checkDigitsInName(name) {
  if (typeof name === "object") {
    return "Invalid Input";
  }
  for (let i = 0; i <= name.length; i++) {
    if (
      name[i] === "0" ||
      name[i] === "1" ||
      name[i] === "2" ||
      name[i] === "3" ||
      name[i] === "4" ||
      name[i] === "5" ||
      name[i] === "6" ||
      name[i] === "7" ||
      name[i] === "8" ||
      name[i] === "9"
    ) {
      return true;
    }
  }
  return false;
}

const userName1 = "Raj123";
const userName2 = "n9ayeem";
const userName3 = "e1mu3";
const userName4 = "Suman";
const userName5 = "Name2024";
const userName6 = "!@#";
const userName7 = ["Raj"];
console.log(checkDigitsInName(userName1));
console.log(checkDigitsInName(userName2));
console.log(checkDigitsInName(userName3));
console.log(checkDigitsInName(userName4));
console.log(checkDigitsInName(userName5));
console.log(checkDigitsInName(userName6));
console.log(checkDigitsInName(userName7));
