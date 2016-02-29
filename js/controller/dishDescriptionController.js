//Controller 4 by Giovanna and Mohit
var DishDescriptionController = function(view, model) {

	var dishCost;

	$("#backToSelectDish").click(function(){
		$('#dishDescriptionView').hide();
		$('#selectDishView').show();
		$('#searchbar').show();
	});

	$("#confirmDish").click(function(){
		$('#dishDescriptionView').hide();
		$('#selectDishView').show();
		$('#searchbar').show();
		model.addDishToMenu(view.dish.id);
		if (view.dish.type == 'starter') {
			$('#starterRow').show();
			$('#starterItem').text(view.dish.name);
			$('#starterItemCost').text(model.getDishPrice(view.dish));
		}
		if (view.dish.type == 'main dish') {
			$('#mainRow').show();
			$('#mainItem').text(view.dish.name);
			$('#mainItemCost').text(model.getDishPrice(view.dish));
		}
		if (view.dish.type == 'dessert') {
			$('#dessertRow').show();
			$('#dessertItem').text(view.dish.name);
			$('#mainItemCost').text(model.getDishPrice(view.dish));
		}
	});

}
