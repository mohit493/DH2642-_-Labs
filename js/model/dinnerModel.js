//DinnerModel Object constructor
var DinnerModel = function () {

    this.apiKey = "66J8l00npnHHZcCNLRhxkfW1OHxbojy4";

    //Each menu has only one dich of a type (starter, main dish and dessert)
    var numberOfGuests = 1;
    this.menuOptions = [];

    //store the dish that was clicked
    var selectedDish = 1;

    this.setNumberOfGuests = function (num) {
        numberOfGuests = num;

        this.notifyObservers();
    }

    // should return 
    this.getNumberOfGuests = function () {
        return numberOfGuests;

    }

    //create null menu for testing
    this.createMenu = function () {
        this.menuOptions['Appetizers'] = 0;
        this.menuOptions['Main Dish'] = 0;
        this.menuOptions['Desserts'] = 0;
    }

    this.createMenu();

    //Adds the passed dish number to the menu. If the dish of that type already exists on the menu
    //it is removed from the menu and the new one added.
    this.addDishToMenu = function (dish) {
<<<<<<< Updated upstream
        //replace in the manu the dish of this type
        this.menuOptions[dish.Category] = dish.RecipeID;
        var args = {type:"item", content:dish}; 
        this.notifyObservers(dish);
=======
        console.log("Entered Add Dish to Menu");
        console.log("Dish Cateogory", dish.Category);
        //replace in the manu the dish of this type
        this.menuOptions[dish.Category] = dish.RecipeID;
        var args = {
            type: "add",
            content: dish
        };
        this.notifyObservers(args); //change dish ->args (because ifff)
>>>>>>> Stashed changes
    }



    //Returns the dish number that is on the menu for selected type 
    this.getSelectedDish = function (type) {
        return this.menuOptions[type];
    }


    //Returns all the dishes on the menu.
    this.getFullMenu = function () {
        var fullMenu = [];
        for (key in this.menuOptions) {
            fullMenu.push(this.getDish(this.menuOptions[key])); //getdish -- > getdish2
        }
        return fullMenu;
    }

    //Returns the ingredients of one dish id
    this.getIngredients = function (id) {
        var theIngredients = [];
        for (key in dishes) {
            if (dishes[key].id == id) {
                theIngredients = dishes[key].ingredients;
            }
        }
        return theIngredients;
    }

    /*  this.printIngredients = function (dish) {
          var printf = '';
          for (var i = 0; i < dish.ingredients.length; i++) {
              var current = dish.ingredients[i];
              printf = printf + current.quantity + ' ' + current.unit + ' ' + current.name + ' ' + '</BR>';
          }
          return printf;
      }
      */

    this.getDishPrice = function (dish) {
        var dishPrice = 0;
        for (var i = 0; i < dish.ingredients.length; i++) {
            var current = dish.ingredients[i];
            dishPrice += current.price;
        }
        return dishPrice;
    }
    this.getDishPrice = function (dish,price) {
        var dishPrice = 0;
        var current;
        for (var i = 0; i < dish.ingredients.length; i++) {
            current = dish.ingredients[i].quantity;
            dishPrice += current;
        }
        return dishPrice;
    }



    //Returns all ingredients for all the dishes on the menu.
    this.getAllIngredients = function () {
        var allIngredients = [];
        //for each menu option
        for (key in this.menuOptions) {
            var theIngredients = this.getIngredients(this.menuOptions[key]);
            //get ingredients
            for (var i = 0; i < theIngredients.length; i++) {
                allIngredients.push(theIngredients[i]);
            }
        }
        return allIngredients;
    }

    //Returns the total price of the menu (all the ingredients multiplied by number of guests).
    this.getTotalMenuPrice = function () {
        var totalMenuPrice = 0;
        var ingredientsList = this.getAllIngredients();
        for (key in ingredientsList) {
            totalMenuPrice += parseFloat(ingredientsList[key].price);
        }
        return totalMenuPrice * this.getNumberOfGuests();
    }


    //Removes dish from menu
    this.removeDishFromMenu = function (id) {
        for (key in this.menuOptions) {
            if (this.menuOptions[key] == id) {
                this.menuOptions[key] = 0;
            }


        }

        this.notifyObservers();

    }

    //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
    //you can use the filter argument to filter out the dish by name or ingredient (use for search)
    //if you don't pass any filter all the dishes will be returned
    this.getAllDishes = function (type, filter) {
        return $(dishes).filter(function (index, dish) {
            var found = true;
            if (filter) {
                found = false;
                $.each(dish.ingredients, function (index, ingredient) {
                    if (ingredient.name.indexOf(filter) != -1) {
                        found = true;
                    }
                });
                if (dish.name.indexOf(filter) != -1) {
                    found = true;
                }
            }
            return ((dish.type == type) && (found && dish.id != 0));
        });
        this.notifyObservers();
    }

    this.getAllDishes2 = function (type, filter) {
<<<<<<< Updated upstream

    var apiKey = "18f3cT02U9f6yRl3OKDpP8NA537kxYKu";
    var param = "pg=1&rpp=4";
    var url = "http://api.bigoven.com/recipes?" + param + "&any_kw=" + type + "&api_key=" + apiKey;
            
     var copy = this;
=======
        var param = "pg=1&rpp=4";
        var url = "http://api.bigoven.com/recipes?" + param + "&any_kw=" + type + "&api_key=" + this.apiKey;

        var copy = this;
>>>>>>> Stashed changes

        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
<<<<<<< Updated upstream
                var args = {type:"list", content: data};
                copy.notifyObservers(args);
=======
                var args = {
                    type: "list",
                    content: data
                };
                //copy.notifyObservers(args);
>>>>>>> Stashed changes
                return $(data.Results).filter(function (index, dish) {
                    var found = true;
                    if (filter) {
                        found = false;
                        $.each(dish.ingredients, function (index, ingredient) {
                            if (ingredient.Name.indexOf(filter) != -1) {
                                found = true;
                            }
                        });
                        if (dish.Title.indexOf(filter) != -1) {
                            found = true;
                        }
                    }
                    copy.notifyObservers(args);
<<<<<<< Updated upstream
                    console.log("data:" + data.ResultCount);
                    console.log("args:" + args.content.ResultCount);
=======

>>>>>>> Stashed changes
                    return ((dish.Category == type) && found);
                });

            }
        });


    }



    //function that returns a dish of specific ID
    this.getDish = function (id) {
        for (key in dishes) {
            if (dishes[key].id == id) {
                return dishes[key];
            }
        }
    }

    this.getDish2 = function (id) {

        var copy = this;

        //var apiKey = "18f3cT02U9f6yRl3OKDpP8NA537kxYKu";
        var recipeID = id; //id
        var url = "http://api.bigoven.com/recipe/" + recipeID + "?api_key=" + this.apiKey;
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
<<<<<<< Updated upstream
                var args = {type:"item", content:data};
=======
                var args = {
                    type: "item",
                    content: data
                };
>>>>>>> Stashed changes
                copy.notifyObservers(args);
            }

        });
    }

    this.observers = [];

    this.addObserver = function (observer) {
        this.observers.push(observer);
    }

    this.notifyObservers = function (arg) {
        for (var i = 0; i < this.observers.length; i++) {
            this.observers[i].update(arg);
        }
    }

    this.setClickedDish = function (id) {
        selectedDish = id;
    }

    this.getClickedDish = function () {
        return selectedDish;
    }

    // the dishes variable contains an array of all the 
    // dishes in the database. each dish has id, name, type,
    // image (name of the image file), description and
    // array of ingredients. Each ingredient has name, 
    // quantity (a number), price (a number) and unit (string 
    // defining the unit i.e. "g", "slices", "ml". Unit
    // can sometimes be empty like in the example of eggs where
    // you just say "5 eggs" and not "5 pieces of eggs" or anything else.
    var dishes = [{
            'id': 1,
            'name': 'French toast',
            'type': 'starter',
            'image': 'toast.jpg',
            'description': "In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
            'ingredients': [{
                'name': 'eggs',
                'quantity': 0.5,
                'unit': '',
                'price': 10
            }, {
                'name': 'milk',
                'quantity': 30,
                'unit': 'ml',
                'price': 6
            }, {
                'name': 'brown sugar',
                'quantity': 7,
                'unit': 'g',
                'price': 1
            }, {
                'name': 'ground nutmeg',
                'quantity': 0.5,
                'unit': 'g',
                'price': 12
            }, {
                'name': 'white bread',
                'quantity': 2,
                'unit': 'slices',
                'price': 2
            }]
        }, {
            'id': 2,
            'name': 'Sourdough Starter',
            'type': 'starter',
            'image': 'sourdough.jpg',
            'description': "The starter is mixed with flour and water to make a final dough of the desired consistency. The starter weight is usually 13 to 25% of the total flour weight, though formulas may vary. The dough is shaped into loaves, left to rise, and then baked.",
            'ingredients': [{
                'name': 'active dry yeast',
                'quantity': 0.5,
                'unit': 'g',
                'price': 4
            }, {
                'name': 'warm water',
                'quantity': 30,
                'unit': 'ml',
                'price': 0
            }, {
                'name': 'all-purpose flour',
                'quantity': 15,
                'unit': 'g',
                'price': 2
            }]
        }, {
            'id': 3,
            'name': 'Baked Brie with Peaches',
            'type': 'starter',
            'image': 'bakedbrie.jpg',
            'description': "Bake at 350° for 10 minutes. Spoon peach mixture over Brie, mounding slightly. Bake 5 minutes or until cheese is melted. Carefully transfer box to a platter, and serve immediately with crackers.",
            'ingredients': [{
                'name': 'round Brie cheese',
                'quantity': 10,
                'unit': 'g',
                'price': 8
            }, {
                'name': 'raspberry preserves',
                'quantity': 15,
                'unit': 'g',
                'price': 10
            }, {
                'name': 'peaches',
                'quantity': 1,
                'unit': '',
                'price': 4
            }]
        }, {
            'id': 100,
            'name': 'Meat balls',
            'type': 'main dish',
            'image': 'meatballs.jpg',
            'description': "Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
            'ingredients': [{
                'name': 'extra lean ground beef',
                'quantity': 115,
                'unit': 'g',
                'price': 20
            }, {
                'name': 'sea salt',
                'quantity': 0.7,
                'unit': 'g',
                'price': 3
            }, {
                'name': 'small onion, diced',
                'quantity': 0.25,
                'unit': '',
                'price': 2
            }, {
                'name': 'garlic salt',
                'quantity': 0.7,
                'unit': 'g',
                'price': 2
            }, {
                'name': 'Italian seasoning',
                'quantity': 0.6,
                'unit': 'g',
                'price': 3
            }, {
                'name': 'dried oregano',
                'quantity': 0.3,
                'unit': 'g',
                'price': 3
            }, {
                'name': 'crushed red pepper flakes',
                'quantity': 0.6,
                'unit': 'g',
                'price': 3
            }, {
                'name': 'Worcestershire sauce',
                'quantity': 6,
                'unit': 'ml',
                'price': 7
            }, {
                'name': 'milk',
                'quantity': 20,
                'unit': 'ml',
                'price': 4
            }, {
                'name': 'grated Parmesan cheese',
                'quantity': 5,
                'unit': 'g',
                'price': 8
            }, {
                'name': 'seasoned bread crumbs',
                'quantity': 15,
                'unit': 'g',
                'price': 4
            }]
        }, {
            'id': 102,
            'name': 'Indian Curry',
            'type': 'main dish',
            'image': 'curry.jpg',
            'description': "Place the garlic, chilli, bread and mint in a food processor and pulse until finely chopped. Tip into a bowl and mix with the lamb, egg and seasoning. using damp hands, shape into 16 small meatballs",
            'ingredients': [{
                'name': 'chicken',
                'quantity': 2,
                'unit': 'pieces',
                'price': 8
            }, {
                'name': 'vegetables',
                'quantity': 10,
                'unit': 'g',
                'price': 7
            }, {
                'name': 'spices',
                'quantity': 5,
                'unit': 'ml',
                'price': 4
            }]
        }, {
            'id': 103,
            'name': 'Lasagna',
            'type': 'main dish',
            'image': 'lasagna.jpg',
            'description': "n a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Season with sugar, basil, fennel seeds, Italian seasoning, 1 tablespoon salt, pepper, and 2 tablespoons parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally",
            'ingredients': [{
                'name': 'meat',
                'quantity': 1,
                'unit': 'pieces',
                'price': 4
            }, {
                'name': 'cheese',
                'quantity': 12,
                'unit': 'g',
                'price': 7
            }, {
                'name': 'tomato sauce',
                'quantity': 6,
                'unit': 'ml',
                'price': 4
            }]
        }, {
            'id': 200,
            'name': 'Chocolat Mousse',
            'type': 'dessert',
            'image': 'chocolate.jpg',
            'description': "Beat 1 1/2 cups whipping cream in chilled medium bowl with electric mixer on high speed until stiff. Fold chocolate mixture into whipped cream. Pipe or spoon mixture into serving bowls. Immediately refrigerate any remaining dessert after serving",
            'ingredients': [{
                'name': 'ice cream',
                'quantity': 100,
                'unit': 'ml',
                'price': 6
            }]
        }, {
            'id': 201,
            'name': 'Vanilla Ice cream',
            'type': 'dessert',
            'image': 'icecream.jpeg',
            'description': "Here is how you make it... Lore ipsum...",
            'ingredients': [{
                'name': 'ice cream',
                'quantity': 100,
                'unit': 'ml',
                'price': 6
            }]
        }, {
            'id': 202,
            'name': 'Strawberry Cake',
            'type': 'dessert',
            'image': 'strawberry.jpg',
            'description': "Here is how you make it... Lore ipsum...",
            'ingredients': [{
                'name': 'ice cream',
                'quantity': 100,
                'unit': 'ml',
                'price': 6
            }]
        }, {
            'id': 0,
            'name': ' ',
            'type': 'null',
            'image': 'white.jpg',
            'description': " ",
            'ingredients': [{
                'name': 'null',
                'quantity': 0,
                'unit': 'null',
                'price': 0
            }]
        }
    ];

}