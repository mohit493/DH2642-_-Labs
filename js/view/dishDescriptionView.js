//View 4 by Giovanna and Mohit
var DishDescriptionView = function (container, model) {

    //add div buttons
    this.backToSelectDish = container.find("#backToSelectDish");
    this.confirmDish = container.find("#confirmDish");

    //add dish info
    this.dishName = container.find("#dishName");
    this.dishImage = container.find("#dishImage");
    this.dishPreparation = container.find("#dishPreparation");

    //number of guests
    this.ingredientsFor = container.find("#ingredientsFor");

    model.addObserver(this);

    this.update = function () {

        //upload dish info
        this.dish = model.getDish(model.getClickedDish());

        this.dishName.html(this.dish.name);
        this.dishImage.attr('src', 'images/' + this.dish.image);
        this.dishPreparation.html(this.dish.description);

        var ingredientsList = "";
        var totalPrice = 0;

        for (var x = 0; x < this.dish.ingredients.length; x++) {
            ingredientsList += ' ' +
                (model.getNumberOfGuests() * (this.dish.ingredients[x].quantity)) + ' ' +
                this.dish.ingredients[x].unit + ' ' +
                this.dish.ingredients[x].name + ' ' +
                'SEK ' + this.dish.ingredients[x].price + '</span><br>';
            totalPrice += this.dish.ingredients[x].price;
        }

        this.ingredientsFor.html(model.getNumberOfGuests());
        document.getElementById("ingredientsList").innerHTML = ingredientsList;
        document.getElementById("dishCost").innerHTML = 'SEK ' + (totalPrice * (model.getNumberOfGuests()));
    }


    this.update();


}