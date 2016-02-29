//Controller 2 by Giovanna and Mohit
var SidebarController = function(view, model) {

	 // Set action form remove buttons
	 $("#removeStarterX").click(function(){
	 	$('#starterRow').hide();
		model.removeDishFromMenu(view.starter.id);
	 });
	 
	 $("#removeMainX").click(function(){
	 	$('#mainRow').hide();
		model.removeDishFromMenu(view.main.id);
	 });
	 
	 $("#removeDessertX").click(function(){
	 	$('#dessertRow').hide();
		model.removeDishFromMenu(view.dessert.id);
	 });

	//confirm button
	 $("#confirmButton").click(function(){
	 	$('#searchbar').hide();
		$('#sidebarView').hide();
		$('#dishDescriptionView').hide();
		$('#selectDishView').hide();
		$('#numGuestsView').show();
		$('#summaryView').show();
	 });

	 //change number if gests
	$('#setNumberOfGuests').bind('input', function() {
    	model.setNumberOfGuests($(this).val());
    	console.log("number of guests: " + $(this).val());
	});



}