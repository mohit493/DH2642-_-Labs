//Controller 4 by Giovanna and Mohit
var DishDescriptionController = function (view, model) {

    var dishCost;

    $("#backToSelectDish").click(function () {
        $('#dishDescriptionView').hide();
        $('#selectDishView').show();
        $('#searchbar').show();
    });

<<<<<<< Updated upstream
	$("#confirmDish").click(function(){
		$('#dishDescriptionView').hide();
		$('#selectDishView').show();
		$('#searchbar').show();
		model.addDishToMenu(view.dish);
		if (view.dish.Category == 'Appetizers') {
			$('#starterRow').show();
			$('#starterItem').text(view.dish.Title);
			//$('#starterItemCost').text(model.getDishPrice(view.dish));
		}
		if (view.dish.Category == 'Main Dish') {
			$('#mainRow').show();
			$('#mainItem').text(view.dish.Title);
			//$('#mainItemCost').text(model.getDishPrice(view.dish));
		}
		if (view.dish.Category == 'Desserts') {
			$('#dessertRow').show();
			$('#dessertItem').text(view.dish.Title);
			//$('#mainItemCost').text(model.getDishPrice(view.dish));
		}
	});
=======
    $("#confirmDish").click(function () {
        $('#dishDescriptionView').hide();
        $('#selectDishView').show();
        $('#searchbar').show();
        model.addDishToMenu(view.dish);
        if (view.dish.Category == 'Appetizers') {
            $('#starterRow').show();
            $('#starterItem').text(view.dish.Title);
            //$('#starterItemCost').text(model.getDishPrice(view.dish));
        }
        if (view.dish.Category == 'Main Dish') {
            $('#mainRow').show();
            $('#mainItem').text(view.dish.Title);
            //$('#mainItemCost').text(model.getDishPrice(view.dish));
        }
        if (view.dish.Category == 'Desserts') {
            $('#dessertRow').show();
            $('#dessertItem').text(view.dish.Title);
            //$('#mainItemCost').text(model.getDishPrice(view.dish));
        }
    });
>>>>>>> Stashed changes

}