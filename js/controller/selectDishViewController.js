//Controller 3 by Giovanna and Mohit
var SelectDishViewController = function (view, model) {


<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    $("#selectDishView").on("click", "li[data-dish-id]", function () {
        var dishId = $(this).attr("data-dish-id");
        $('#selectDishView').hide();
        $('#searchbar').hide();
        $('#dishDescriptionView').show();
        model.setClickedDish(dishId);
        model.getDish2(dishId);
    });


    $(document).on("change", "#option", function () {
        var selected = this.value;
        if (selected == "Starters") {
            model.getAllDishes2("Appetizers");
            $('#starters').show();
            $('#main').hide();
            $('#desserts').hide();
        } else if (selected == "Main course") {
            model.getAllDishes2("Main Dish");
            $('#starters').hide();
            $('#main').show();
            $('#desserts').hide();
        } else if (selected == "Desserts") {
            model.getAllDishes2("Desserts");
            $('#starters').hide();
            $('#main').hide();
            $('#desserts').show();
        } else if (selected == "All") {
            model.getAllDishes2("All");
            $('#starters').show();
            $('#main').show();
            $('#desserts').show();
        }
    });

}