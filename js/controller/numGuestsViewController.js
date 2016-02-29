//NumGuestViewController Object constructor

var NumGuestsViewController = function (view, model) {

    var backview = document.getElementById("backButton");

    backview.addEventListener("click", function () {
        $('#summaryView').hide();
        $('#numGuestsView').hide();
        $('#instructionsView').hide();
        $('#selectDishView').show();
        $('#sidebarView').show();
        $('#searchbar').show();
   });



}