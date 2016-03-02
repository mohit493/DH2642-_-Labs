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

    this.update = function (arg, type) {

        if (type == "1") {

            this.dishName.html(arg.Title);
            this.dishImage.attr('src', 'images/' + arg.ImageURL);
            this.dishPreparation.html(arg.Description);

            var ingredientsList = "";
            var totalPrice = 0;
       }
        

        /*for (var x = 0; x < this.dish.ingredients.length; x++) {
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
        */
    }


    this.update();


}