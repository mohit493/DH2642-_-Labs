//Controller 3 by Giovanna and Mohit
var SelectDishViewController = function(view, model) {

    $(document).on("change", "#option", function(){
        var selected = this.value;
        if(selected=="Starters") {
            $('#starters').show();
            $('#main').hide();
            $('#desserts').hide();
        }
        else if(selected=="Main course") {
            $('#starters').hide();
            $('#main').show();
            $('#desserts').hide();
        }
        else if(selected=="Desserts") {
            $('#starters').hide();
            $('#main').hide();
            $('#desserts').show();
        } else if(selected == "All") {
            $('#starters').show();
            $('#main').show();
            $('#desserts').show();
        }
    });

    for(var i = 0; i < $('#list div').length; i++) {
        var curr = $('#list div')[i];
        curr.onclick = function() {
            $('#selectDishView').hide();
            $('#searchbar').hide();
            $('#dishDescriptionView').show();
            model.setClickedDish(this.id);
            console.log("setClickedDish: " + this.id);
        }
    }
}
