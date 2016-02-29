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

    this.update = function(arg) {

        for (var i = 0; i < model.getFullMenu().length; i++) {
            var dish = model.getFullMenu()[i];

            if (dish.type == 'starter') {
                this.starter.attr('src', 'images/' + dish.image);
                this.starterName.html(dish.name);
                this.starterCost.html(model.getDishPrice(dish) + ' SEK');
            }
            if (dish.type == 'main dish') {
                this.main.attr('src', 'images/' + dish.image);
                this.mainName.html(dish.name);
                this.mainCost.html(model.getDishPrice(dish) + ' SEK');
            }
            if (dish.type == 'dessert') {
                this.dessert.attr('src', 'images/' + dish.image);
                this.dessertName.html(dish.name);
                this.dessertCost.html(model.getDishPrice(dish) + ' SEK');
            }
        }
        this.totalPrice.html(model.getTotalMenuPrice());
    }

    model.addObserver(this);

    this.update();

    





}