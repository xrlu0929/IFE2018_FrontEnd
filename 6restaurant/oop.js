function Restaurant(input) {
	/**
	 * two ways to find it
	 */
// 	let obj = {}
// 	obj.cash = input.cash;
// 	obj.seats = input.seats;
// 	obj.staff = input.staff;
// 	return obj;
	this.cash = input.cash;
	this.seats = input.seats;
	this.staff = input.staff;
	// this.hire()
}
Restaurant.prototype.hire = function(e){
	this.staff.push(e)
	this.cash = this.cash - e.salary
}

function Cook(name, salary){
	this.name = name;
	this.salary = salary;
}

// make a waiter class
function Waiter(name, salary, experienced){
	Cook.call(this, name, salary)
	
	this.experienced = experienced
	console.log(this)
}


var ifeRestaurant = new Restaurant({
    cash: 1000000,
    seats: 20,
    staff: []
});
console.log(ifeRestaurant)

var newCook = new Cook("Tony", 10000);
var cook1 = new Cook("Yunlei", 90000)

var waiter0 = new Waiter('Taoer', 10000, true);

ifeRestaurant.hire(newCook);
ifeRestaurant.hire(cook1);
ifeRestaurant.hire(waiter0);


console.log(ifeRestaurant)
