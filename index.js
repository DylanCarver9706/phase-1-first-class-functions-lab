//const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function(drivers) {
        return (drivers.slice(0, 2))
    }

    const returnLastTwoDrivers = function(drivers) {
        return (drivers.slice(2, 4))
    }

    //selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
    const selectingDrivers = function(drivers) {
        return returnFirstTwoDrivers.drivers.slice(0,2)
    }