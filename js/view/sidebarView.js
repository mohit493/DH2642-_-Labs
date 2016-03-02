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

        if(arg.type == "item") {
            if (arg.content.Category == "Appetizers"); {
                this.starter = arg.content;
            }
            if (arg.content.Category == "Main Dish"); {
                this.main = arg.content;
            }
            if (arg.content.Category == "Desserts"); {
                this.dessert = arg.content;
            }
                
        }

        //update dishes choices
        this.starter = model.getDish(model.getSelectedDish('starter'));
        this.main = model.getDish(model.getSelectedDish('main dish'));
        this.dessert = model.getDish(model.getSelectedDish('dessert'));

        //display dishes
        this.starterName.html(this.starter.Title);
        this.mainName.html(this.main.Title);
        this.dessertName.html(this.dessert.Title);

        //display total price
        this.totalPrice.html(model.getTotalMenuPrice());

    }

    this.update();
}