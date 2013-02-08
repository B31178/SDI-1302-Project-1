//	Travis J. Pochintesta
//	SDI 1302
//	Project 1
//	My First Program

//  My Variables
var wantPizza = true; /*Boolean Conditional*/
var numberToppings = 1; /*Number Conditional*/
var pizzaYuck = "I don't like pizza."; /*String Conditional*/

//  My Output
console.log("Do you guys want pizza?");

//	My Conditionals
if (wantPizza === true) {
	if (numberToppings >= 1) { 
		console.log("Let's order a large pepperoni.");	
	} else {
		console.log("Just order a large cheese pizza then.");
	}
} else {
	if (pizzaYuck === pizzaYuck) {
		console.log("Have a piece of celery.");
	} else {
		pizzaYuck = pizzaYuck + "  I may have a slice of plain cheese though.";
		console.log(pizzaYuck);
		}
}