// Code your solution here:
function driversWithRevenueOver(drivers, amount) { 
	return drivers.filter(function(driver) {
  	return driver.revenue >= amount });
}

	function driverNamesWithRevenueOver(drivers, amount) {
  	return driversWithRevenueOver(drivers, amount).map( driver => driver.name )
  };

function exactMatch(drivers, attribute) {
	return drivers.filter(function (driver) {
		let match = false; 
		for (let key in attribute) {
			match = driver[key] === attribute[key]
		}
		return match;
	}); 
}
function exactMatchToList(drivers, attribute) { 
	return exactMatch(drivers, attribute).map ( driver => driver.name );
}