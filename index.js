function findMatching(drivers, name) {
    const newDrivers = drivers.filter(function (drivers) { return drivers.toLowerCase() === name.toLowerCase() })
    return newDrivers;
}

function fuzzyMatch(drivers, string) {
    const letterDrivers = drivers.filter(function (drivers) { return drivers[0] === string[0] })
    return letterDrivers;

}

function matchName(drivers, name){
    return drivers.filter(function(driver){
      return driver.name === name
    })
  }