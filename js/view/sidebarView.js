//View 2 by Giovanna and Mohit
var SidebarView = function(container,model) {

	//edit number of guests
	this.numberOfGuests = container.find("#numberOfGuests");
	this.setNumberOfGuests = container.find("#setNumberOfGuests");

	//get buttons
	this.confimButton = container.find("#confirmButton");

	//get the current view
	this.div = container.find("#sidebarView");

	//get all dishes
	this.starterName = container.find("#starterName");
	this.mainName = container.find("#mainName");
	this.dessertName = container.find("#dessertName");

	//get total price
	this.totalPrice = container.find("#totalPrice");

	//display number of guests
	this.numberOfGuests.html(model.getNumberOfGuests());
	model.addObserver(this);


	this.update = function(arg) {
		
		//display number of guests
		this.numberOfGuests.html(model.getNumberOfGuests());

		//update dishes choices
		this.starter = model.getDish(model.getSelectedDish('starter'));
		this.main = model.getDish(model.getSelectedDish('main dish'));
		this.dessert = model.getDish(model.getSelectedDish('dessert'));

		//display dishes
		this.starterName.html(this.starter.name);
		this.mainName.html(this.main.name);
		this.dessertName.html(this.dessert.name);

		//display total price
		this.totalPrice.html(model.getTotalMenuPrice());
	}

	this.update();
}