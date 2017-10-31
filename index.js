// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
  newRay = [];
  newRay.push(array[0])
  newRay.push(array[1])
  return newRay
}

const returnLastTwoDrivers = function(array) {
  newRay = [];
  newRay.push(array[array.length -2])
  newRay.push(array[array.length -1])
  return newRay
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return multiplier * fare;
  };
};

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, func) {
  return func(array)
}
