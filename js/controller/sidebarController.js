//Controller 2 by Giovanna and Mohit
var SidebarController = function (view, model) {

    // Set action form remove buttons
    $("#removeStarterX").click(function () {
        $('#starterRow').hide();
        model.removeDishFromMenu2("Appetizers");
    });

    $("#removeMainX").click(function () {
        $('#mainRow').hide();
        model.removeDishFromMenu2("Main Dish");
    });

    $("#removeDessertX").click(function () {
        $('#dessertRow').hide();
        model.removeDishFromMenu2("Desserts");
    });

    //confirm button
    $("#confirmButton").click(function () {
        $('#searchbar').hide();
        $('#sidebarView').hide();
        $('#dishDescriptionView').hide();
        $('#selectDishView').hide();
        $('#numGuestsView').show();
        $('#summaryView').show();
    });

    //change number if gests
    $('#setNumberOfGuests').bind('input', function () {
        model.setNumberOfGuests($(this).val());
    });



}