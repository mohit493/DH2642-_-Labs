//ExampleView Object constructor

var ExampleView = function (container, model) {

    var changeview1 = document.getElementById("createDinner");

    changeview1.addEventListener("click", function () {


        $("#homeView").hide();
        $("#sidebarView").show();
        $("#searchbar").show();
        $("#selectDishView").show();


    });



}