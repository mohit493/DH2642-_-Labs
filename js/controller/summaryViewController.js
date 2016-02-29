//SummaryGuestViewController Object constructor
var SummaryViewController = function (view, model) {

    var printBtn = document.getElementById("printRecipeBtn");


    printBtn.addEventListener("click", function () {
        $('#summaryView').hide();
        $('#dishDescriptionView').hide();
        $('#instructionsView').show();
    });
}