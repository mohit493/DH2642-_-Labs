//View 2 by Giovanna and Mohit
var SidebarView = function (container, model) {

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


    this.update = function (arg) {

        //display number of guests
        this.numberOfGuests.html(model.getNumberOfGuests());
        if (arg) {

            if (arg.type == "add") {



                console.log("Dish type ", arg.content.Category)
                if (arg.content.Category == "Appetizers") {
                    this.starterName.html(arg.content.Title);
                } else if (arg.content.Category == "Main Dish") {
                    this.mainName.html(arg.content.Title);
                } else if (arg.content.Category == "Desserts") {
                    this.dessertName.html(arg.content.Title);
                }

            }


        }
        this.totalPrice.html(model.getTotalMenuPrice());

    }

    this.update();
}