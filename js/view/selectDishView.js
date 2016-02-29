//View 3 by Giovanna and Mohit
var SelectDishView = function(container, model) {

    /*  *** This code is loading the dishes ***
     *** but shows only one at a time   *** */
    //  this.images = container.find("#images");
    this.starter = container.find("#starters");
    this.main = container.find("#main");
    this.dessert = container.find("#desserts");

    

    var sessionlist = "";
    for (var x = 0; x < model.getAllDishes("starter").length; x++) {
        sessionlist += '<li id=list style="display:inline-block;width:200px;height:200px;">' + '<div id=' + model.getAllDishes("starter")[x].id + '>' + '<img style="width:150px;height:150px;" src="' + 'images/' + model.getAllDishes("starter")[x].image + '" alt ="' + model.getAllDishes("starter")[x].image +
            '">' + '<br>' + model.getAllDishes("starter")[x].name + '</div>';
    }
    document.getElementById("starters").innerHTML = sessionlist;
    sessionlist = "";

    for (var x = 0; x < model.getAllDishes("main dish").length; x++) {
        sessionlist += '<li id=list style="display:inline-block;width:200px;height:200px;">' + '<div id=' + model.getAllDishes("main dish")[x].id + '>'

        + '<img style="width:150px;height:150px;" src="' + 'images/' + model.getAllDishes("main dish")[x].image + '" alt ="' + model.getAllDishes("main dish")[x].image +
            '">' + '<br>' + model.getAllDishes("main dish")[x].name + '</div>';
        sessionlist += '<br><br></li>';
    }
    document.getElementById("main").innerHTML = sessionlist;
    sessionlist = "";

    for (var x = 0; x < model.getAllDishes("dessert").length; x++) {
        sessionlist += '<li id=list style="display:inline-block;width:200px;height:200px;">' + '<div id=' + model.getAllDishes("dessert")[x].id + '>'

        + '<img style="width:150px;height:150px;" src="' + 'images/' + model.getAllDishes("dessert")[x].image + '" alt ="' + model.getAllDishes("dessert")[x].image +
            '">' + '<br>' + model.getAllDishes("dessert")[x].name + '</div>';
        sessionlist += '<br><br></li>';
    }


    document.getElementById("desserts").innerHTML = sessionlist;



    // Search functionality in the sidebar
    var sourceArr = [];

    $("#searchDish").typeahead({
        local: sourceArr
    });


    $("#searchDish").keyup(function() {
        var userInput = $(this).val();
        $("#selectDishView li").map(function(index, value) {
            $(value).toggle($(value).text().toLowerCase().indexOf(userInput) >= 0);
        });
    });

}