//Summary View
var SummaryView = function (container, model) {

    //upload dishes
    this.starter = container.find("#starter");
    this.main = container.find("#main");
    this.dessert = container.find("#dessert");

    this.starterName = container.find("#starterName");
    this.mainName = container.find("#mainName");
    this.dessertName = container.find("#dessertName");

    this.starterCost = container.find("#starterCost");
    this.mainCost = container.find("#mainCost");
    this.dessertCost = container.find("#dessertCost");

    this.totalPrice = container.find("#totalPrice");

    this.printRecipeBtn = container.find("#printRecipeBtn");

    model.addObserver(this);


    this.update = function (arg) {
        if (arg) {
            if (arg.type == "add") {

                for (var i = 0; i < model.getFullMenu().length; i++) {
                    var dish = model.getFullMenu()[i];

                    if (dish.Category == 'Appetizers') {
                        this.starter.attr('src', dish.ImageURL);
                        this.starterName.html(dish.Title);
                        this.starterCost.html(model.getDishPrice2(dish.Category) + ' SEK/pc');
                    }
                    if (dish.Category == 'Main Dish') {
                        this.main.attr('src', dish.ImageURL);
                        this.mainName.html(dish.Title);
                        this.mainCost.html(model.getDishPrice2(dish.Category) + ' SEK/pc');
                    }
                    if (dish.Category == 'Desserts') {
                        this.dessert.attr('src', dish.ImageURL);
                        this.dessertName.html(dish.Title);
                        this.dessertCost.html(model.getDishPrice2(dish.Category) + ' SEK/pc');
                    }
                }
            }
        }
        this.totalPrice.html(model.getTotalMenuPrice());
    }

    this.update();


}