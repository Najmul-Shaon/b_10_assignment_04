function calculateFinalScore(obj) {
  if (
    typeof obj === "object" &&
    obj.testScore >= 0 &&
    obj.testScore <= 50 &&
    obj.schoolGrade >= 0 &&
    obj.schoolGrade <= 50
  ) {
    const testScore = obj.testScore;
    const schoolGrade = obj.schoolGrade;
    let isFFamily = obj.isFFamily;
    if (isFFamily === true) {
      isFFamily = 20;
    }
    const finalScore = testScore + schoolGrade + isFFamily;
    // console.log(testScore, schoolGrade, isFFamily, finalScore);
    if (finalScore >= 80) {
      return true;
    } else {
      return false;
    }
  }
  return "Invalid Input";
}

console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: true,
  })
);
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: false,
  })
);
console.log(calculateFinalScore("hello"));
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 15,
    schoolGrade: 25,
    isFFamily: true,
  })
);
