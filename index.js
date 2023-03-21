// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(drivers.length - 2)
}

const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function (fare){return fare*integer}
}

//const x = function (fare){return fare*integer}

function fareDoubler(fare){return fare*2}
function fareTripler(fare){return fare*3}

function selectDifferentDrivers(drivers, choice){
    return choice(drivers)
}