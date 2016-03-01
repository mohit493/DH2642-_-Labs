//Controller 3 by Giovanna and Mohit
var SelectDishViewController = function (view, model) {

    /*  $('#searchDish').bind("enterKey", function () {
        console.log("Entered Enter key");
        $('#searchDish').bind('input', function () {
            console.log("Entered Input")
            var dishtype = this.value;
            model.getAllDishes2(dishtype);
            console.log("Dish : " + dishtype);
        });
    });
*/



    $(document).on("change", "#option", function () {
        var selected = this.value;
        if (selected == "Starters") {
            model.getAllDishes2("Appetizers");
            $('#starters').show();
            $('#main').hide();
            $('#desserts').hide();
            console.log("Entered Appetizers");
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
            $('#starters').show();
            $('#main').show();
            $('#desserts').show();
        }
    });

    for (var i = 0; i < $('#list div').length; i++) {
        var curr = $('#list div')[i];
        curr.onclick = function () {
            $('#selectDishView').hide();
            $('#searchbar').hide();
            $('#dishDescriptionView').show();
            model.setClickedDish(this.id);
            console.log("setClickedDish: " + this.id);
        }
    }
}