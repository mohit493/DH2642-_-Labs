//DinnerModel Object constructor
var DinnerModel = function () {



    //Each menu has only one dich of a type (starter, main dish and dessert)
    var numberOfGuests = 1;
    this.menuOptions = [];

    //store the dish that was clicked
    var selectedDish = 1;

    this.setNumberOfGuests = function (num) {
        numberOfGuests = num;
        notifyObservers();
    }

    // should return 
    this.getNumberOfGuests = function () {
        return numberOfGuests;
    }

    //create null menu for testing
    this.createMenu = function () {
        this.menuOptions['starter'] = 0;
        this.menuOptions['main dish'] = 0;
        this.menuOptions['dessert'] = 0;
    }

    this.createMenu();

    //Adds the passed dish number to the menu. If the dish of that type already exists on the menu
    //it is removed from the menu and the new one added.
    this.addDishToMenu = function (id) {
        //find type of dish
        var dishType;
        for (key in dishes) {
            if (dishes[key].id == id) {
                dishType = dishes[key].type;
            }
        }
        //replace in the manu the dish of this type
        this.menuOptions[dishType] = id;
        notifyObservers();
    }


    //Returns the dish number that is on the menu for selected type 
    this.getSelectedDish = function (type) {
        return this.menuOptions[type];
    }


    //Returns all the dishes on the menu.
    this.getFullMenu = function () {
        var fullMenu = [];
        for (key in this.menuOptions) {
            fullMenu.push(this.getDish(this.menuOptions[key]));
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

    this.printIngredients = function (dish) {
        var printf = '';
        for (var i = 0; i < dish.ingredients.length; i++) {
            var current = dish.ingredients[i];
            printf = printf + current.quantity + ' ' + current.unit + ' ' + current.name + ' ' + '</BR>';
        }
        return printf;
    }

    this.getDishPrice = function (dish) {
        var dishPrice = 0;
        for (var i = 0; i < dish.ingredients.length; i++) {
            var current = dish.ingredients[i];
            dishPrice += current.price;
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
        notifyObservers();

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
        notifyObservers();
    }

    //function that returns a dish of specific ID
    this.getDish = function (id) {
        for (key in dishes) {
            if (dishes[key].id == id) {
                return dishes[key];
            }
        }
    }

    var observers = [];

    this.addObserver = function (observer) {
        observers.push(observer);
    }

    var notifyObservers = function (arg) {
        for (var i = 0; i < observers.length; i++) {
            observers[i].update(arg);
        }
    }

    this.setClickedDish = function (id) {
        selectedDish = id;
        notifyObservers();
    }

    this.getClickedDish = function () {
        console.log("clicked on " + selectedDish);
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