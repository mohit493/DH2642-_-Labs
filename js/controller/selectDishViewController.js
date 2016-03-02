//Controller 3 by Giovanna and Mohit
var SelectDishViewController = function (view, model) {


    $("#selectDishView").on("click", "li[data-dish-id]", function () {
        var dishId = $(this).attr("data-dish-id");
        console.log("List id", dishId);
        $('#selectDishView').hide();
        $('#searchbar').hide();
        $('#dishDescriptionView').show();
        model.setClickedDish(dishId);
        model.getDish2(dishId);
        //console.log("setClickedDish", $(this).attr("id"));
    });


    $(document).on("change", "#option", function () {
        var selected = this.value;
        if (selected == "Starters") {
            model.getAllDishes2("Appetizers");
            $('#starters').show();
            $('#main').hide();
            $('#desserts').hide();
            console.log("entered on change");
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

    /*console.log("list div" + $('#list div').length);
    for (var i = 0; i < $('#list div').length; i++) {
        console.log("after for");
        var curr = $('#list div')[i];
        curr.onclick = function () {
            $('#selectDishView').hide();
            $('#searchbar').hide();
            $('#dishDescriptionView').show();
            model.setClickedDish(this.id);
            console.log("setClickedDish: " + this.id);
        }
    }*/
}