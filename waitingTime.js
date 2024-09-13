function waitingTime(waitingTimes, serialNumber) {
  if (typeof waitingTimes === "object" && typeof serialNumber === "number") {
    let totalTimeConsumed = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
      totalTimeConsumed += waitingTimes[i];
    }
    const avgTimeOfProviousPersons = Math.round(
      totalTimeConsumed / waitingTimes.length
    );
    const personLeft = serialNumber - waitingTimes.length - 1;
    const timesNeedForIsrat = personLeft * avgTimeOfProviousPersons;
    return timesNeedForIsrat;
  }
  return "Invalid Input";
}

// console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime(1, "9"));
