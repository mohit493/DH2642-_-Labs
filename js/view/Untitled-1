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

    this.update = function (arg) {

        if (arg.type == "item") {

            //upload dish info
            this.dish = arg.content;

            this.dishName.html(arg.content.Title);
            this.dishImage.attr('src', arg.content.ImageURL);
            this.dishPreparation.html(arg.content.Description);

            var ingredientsList = "";
            var totalPrice = 0;

            for (var x = 0; x < arg.content.Ingredients.length; x++) {
            ingredientsList += ' ' +
                (model.getNumberOfGuests() * (arg.content.Ingredients[x].Quantity)) + ' ' +
                arg.content.Ingredients[x].Unit + ' ' +
                arg.content.Ingredients[x].Name + ' ' +
                'SEK ' + (arg.content.Ingredients[x].Quantity) + '</span><br>';
            totalPrice += (arg.content.Ingredients[x].Quantity);
        }

        this.ingredientsFor.html(model.getNumberOfGuests());
        document.getElementById("ingredientsList").innerHTML = ingredientsList;
        document.getElementById("dishCost").innerHTML = 'SEK ' + (totalPrice * (model.getNumberOfGuests()));
       }
        

        
    }

}