//View 3 by Giovanna and Mohit
var SelectDishView = function (container, model) {

    /*  *** This code is loading the dishes ***
     *** but shows only one at a time   *** */
    //  this.images = container.find("#images");
    this.starter = container.find("#starters");
    this.main = container.find("#main");
    this.dessert = container.find("#desserts");

    model.addObserver(this);



    this.update = function(arg, type) {

        var sessionlist = "";
        if(type == 2) {
            for (var x = 0; x < arg.Results.length; x++) {
            sessionlist += '<li class=list data-dish-id="' + arg.Results[x].RecipeID + '" style="display:inline-block;width:200px;height:200px;">' + '<div id=' + arg.Results[x].RecipeID + '>' + '<img style="width:150px;height:150px;" src="' + arg.Results[x].ImageURL + '" alt ="' + arg.Results[x].ImageURL +
                '">' + '<br>' + arg.Results[x].Title + '</div>';
            }
        document.getElementById("starters").innerHTML = sessionlist;
        //sessionlist = "";
        document.getElementById("main").innerHTML = sessionlist;
        //sessionlist = "";
        document.getElementById("desserts").innerHTML = sessionlist;
        //sessionlist = "";
        }
    }

    
    //this.update();

    // Search functionality in the sidebar
    var sourceArr = [];

    $("#searchDish").typeahead({
        local: sourceArr
    });


    $("#searchDish").keyup(function () {
        var userInput = $(this).val();
        $("#selectDishView li").map(function (index, value) {
            $(value).toggle($(value).text().toLowerCase().indexOf(userInput) >= 0);
        });
    });

}