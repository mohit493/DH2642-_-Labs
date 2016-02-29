//View 7 by Giovanna and Mohit

var InstructionsView = function (container,model) {

	//update info from dishes
	this.starterImage = container.find("#starterImage");
	this.mainImage = container.find("#mainImage");
	this.dessertImage = container.find("#dessertImage");

	this.starterName = container.find("#starterName");
	this.mainName = container.find("#mainName");
	this.dessertName = container.find("#dessertName");

	this.starterIngredients = container.find("#starterIngredients");
	this.mainIngredients = container.find("#mainIngredients");
	this.dessertIngredients = container.find("#dessertIngredients");

	this.starterPreparation = container.find("#starterPreparation");
	this.mainPreparation = container.find("#mainPreparation");
	this.dessertPreparation = container.find("#dessertPreparation");

	model.addObserver(this);
			
	this.update = function(arg) {

		var menu = model.getFullMenu();

		var ingredientsList = "";
		for (var i=0; i<menu.length; i++) {
			var dish = menu[i];
			if (dish.type == 'starter') {
				this.starterImage.attr('src', 'images/' + dish.image);
				this.starterName.html(dish.name);
				this.starterPreparation.html(dish.description);
				this.starterIngredients.html(model.printIngredients(dish));
			}
			if (dish.type == 'main dish') {
				this.mainImage.attr('src', 'images/' + dish.image);
				this.mainName.html(dish.name);
				this.mainPreparation.html(dish.description);
				this.mainIngredients.html(model.printIngredients(dish));
			}
			if (dish.type == 'dessert') {
				this.dessertImage.attr('src', 'images/' + dish.image);
				this.dessertName.html(dish.name);
				this.dessertPreparation.html(dish.description);
				this.dessertIngredients.html(model.printIngredients(dish));
			}

		}

	}
	
	this.update();


}