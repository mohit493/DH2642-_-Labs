//View 7 by Giovanna and Mohit

var InstructionsView = function (container, model) {

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

    this.update = function (arg) {
        if (arg) {
            if (arg.type == "add") {

                for (var i = 0; i < model.getFullMenu().length; i++) {
                    var dish = model.getFullMenu()[i];

                    if (dish.Category == 'Appetizers') {

                        this.starterImage.attr('src', dish.ImageURL);
                        this.starterName.html(dish.Title);
                        this.starterPreparation.html(dish.Description);
                        this.starterIngredients.html(model.printIngredients2(dish));
                    } else if (dish.Category == 'Main Dish') {
                        this.mainImage.attr('src', dish.ImageURL);
                        this.mainName.html(dish.Title);
                        this.mainPreparation.html(dish.Description);
                        this.mainIngredients.html(model.printIngredients2(dish));
                    } else if (dish.Category == 'Desserts') {
                        this.dessertImage.attr('src', dish.ImageURL);
                        this.dessertName.html(dish.Title);
                        this.dessertPreparation.html(dish.Description);
                        this.dessertIngredients.html(model.printIngredients2(dish));
                    }
                }
            }
        }

    }

    this.update();


}