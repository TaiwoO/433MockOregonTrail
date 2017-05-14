"use strict"

/**
 * SUMMARY: 
 *      Handels the flow of the application
 * 
 * OVERVIEW: 
 *      The flow of the application can be thought of as interacting 
 *      with the displays and asking for somthing to happen.
 *      If I click on the "buy oxen"" button on the display then I want to trigger an action for buying oxen.
 *      i.e this is basically just an interacting between the Displayer.js and Events.js
 * 
 * FUNCTIONALITY:
 *      - Controls the app logic
 *      - Communicate with Displayer.js by asking for views.
 *      - Communicate with Event.js to ask for events to happen based on user choices
 *      - Communicate with State.js to ask for state changes based on user choices
 *      - etc....  
 */


App.Game = {}

App.Game.init = function () {

    // Shopping cart used at stores
    this.shoppingCart = {
        oxen: 0,
        food: 0,
        cloths: 0,
        bait: 0,
        axle: 0,
        tongue: 0,
        wheel: 0
    }

    // for keeping track of a journey from one landmark to the other
    // this.

    // Initialize the default state of of the app.
    App.State.init({})
    // Initialize the default state of the animation.
    App.Animation.init()

    // Start the game off with the first display and everything show
    // flow from then on
    App.Game.handleActionBasedOnDisplayNum(App.Displayer.CHOOSE_PROFESSION)

}

// Handles what to display and the action that should
// occur based on the display number requested
App.Game.handleActionBasedOnDisplayNum = function (displayNum) {

    switch (displayNum) {

        /** 
         * Part 1: Setting up character
         * */
        case App.Displayer.CHOOSE_PROFESSION:
            // Show the Choose Profession display
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_ChooseProfession();
            break;
        case App.Displayer.CHOOSE_LEADER_NAME:
            // Show the Choose Leader Name 
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_ChooseLeaderName();
            break;
        case App.Displayer.CHOOSE_PARTY_NAMES:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_ChoosePartyName();
            break;
        case App.Displayer.PROFESSION_DIFFERENCES:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_ProfessionDifferences();
            break;
        case App.Displayer.CHOOSE_MONTH:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_ChooseMonth();
            break;
        case App.Displayer.MONTH_ADVICE:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_MonthAdvice();
            break;
        case App.Displayer.INTERMEDIATE_1:
            // Intermediate step between months and matts store
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_Intermediate1();
            break;
        case App.Displayer.INTERMEDIATE_2:
            // Intermediate step between months and matts store
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_Intermediate2();
            break;

        /** 
         * Part 2: Matt's store 
         * */
        case App.Displayer.GENERAL_STORE:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_GeneralStore();
            break;
        case App.Displayer.GENERAL_STORE_OXEN:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_GeneralStoreOxen();
            break;
        case App.Displayer.GENERAL_STORE_FOOD:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_GeneralStoreFood();
            break;
        case App.Displayer.GENERAL_STORE_CLOTHING:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_GeneralStoreClothing();
            break;
        case App.Displayer.GENERAL_STORE_BAIT:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_GeneralStoreBait();
            break;
        case App.Displayer.GENERAL_STORE_WHEEL:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_GeneralStoreWheel();
            break;
        case App.Displayer.GENERAL_STORE_AXLE:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_GeneralStoreAxle();
            break;
        case App.Displayer.GENERAL_STORE_TONGUE:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_GeneralStoreTongue();
            break;

        /** 
         * Part 3: Beginning Journey 
         * */
        case App.Displayer.INTERMEDIATE_3:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_Intermediate3();
            break;
        case App.Displayer.INTERMEDIATE_4:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_Intermediate4();
            break;

        case App.Displayer.MAIN_DISPLAY:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_MainDisplay();
            break;
        case App.Displayer.MAIN_DISPLAY_TRAVEL:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_MainDisplayTravel();
            break;
        case App.Displayer.MAIN_DISPLAY_SUPPLIES:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_MainDisplaySupplies();
            break;
        case App.Displayer.MAIN_DISPLAY_MAP:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_MainDisplayMap();
            break;
        case App.Displayer.MAIN_DISPLAY_CHANGE_PACE:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_MainDisplayChangePace();
            break;
        case App.Displayer.MAIN_DISPLAY_CHANGE_RATION:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_MainDisplayChangeRation();
            break;
        case App.Displayer.MAIN_DISPLAY_REST:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_MainDisplayRest();
            break;
        case App.Displayer.MAIN_DISPLAY_TRADE:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_MainDisplayTrade();
            break;
        case App.Displayer.MAIN_DISPLAY_TALK:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_MainDisplayTalk();
            break;
        case App.Displayer.MAIN_DISPLAY_PURCHASE:
            App.Displayer.showDisplayNum(displayNum);
            App.Game.actionFor_MainDisplayPurchase();
            break;


        default:
            console.log(" >>POSSIBLE ERROR in GAME.js<< \n\t-No Display Number:", displayNum)
    }
}

// ================================ ALL ACTIONS FOR THE DISPLAYS ============================

/**================================================================
 * PART 1: Setting up character and getting to Matt's store
 * ================================================================*/

// Profession selection (CHOOSE_PROFESSION)
App.Game.actionFor_ChooseProfession = function () {

    // Handle choices after DOM has loaded
    $(function () { // Shorthand for $( document ).ready()

        $("#input").focus()
        $("#input").keyup(function (keypressed) {
            //13 is the Enter key
            if (keypressed.which === 13) {

                // set job based on the inputted value. 
                // Note: First parse the string input to integer
                switch (parseInt($("#input").val())) {
                    case 1:
                        App.State.setJob(App.State.BANKER);
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.CHOOSE_LEADER_NAME)
                        break;
                    case 2:
                        App.State.setJob(App.State.CARPENTER)
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.CHOOSE_LEADER_NAME)

                        break;
                    case 3:
                        App.State.setJob(App.State.FARMER)
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.CHOOSE_LEADER_NAME)

                        break;
                    case 4: // difference in jobs     
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.PROFESSION_DIFFERENCES)
                        break;
                    default:
                        console.log(" >>ERROR in GAME.js<<: \n\t-No profession number:", parseInt($("#input").val()), "\n\t-Profession was not set")
                }
                //turn off  handler
                // $("#input").off("keyup");
            }
        });
    });
}

// Differences between professions (PROFESSION_DIFFERENCES)
App.Game.actionFor_ProfessionDifferences = function () {
    // Go back to previous page after space bar
    App.Game.afterSpaceBar(App.Displayer.CHOOSE_PROFESSION)
}

// Leader Name selection (CHOOSE_LEADER_NAME)
App.Game.actionFor_ChooseLeaderName = function () {

    // Handle choices after DOM has loaded
    $(function () { // Shorthand for $( document ).ready()

        $("#input").focus();
        $("#input").keyup(function (keypressed) {
            if (keypressed.which === 13) {
                if ($("#input").val() != "") {
                    App.State.setLeader($("#input").val())
                }
                $("#input").off("keyup");

                // Now Handle for the next screen after this one
                App.Game.handleActionBasedOnDisplayNum(App.Displayer.CHOOSE_PARTY_NAMES)
                $("#input").off("keyup");
            }
        });
    });
}

// Party Name selection (CHOOSE_PARTY_NAMES)
App.Game.actionFor_ChoosePartyName = function () {

    // Handle choices after DOM has loaded
    $(function () {
        var partyMemb = [];

        $("#partyLead").text(App.State.getLeader())

        // Party member 2
        $("#input1").focus();
        $("#input1").keyup(function (keypressed) {
            if (keypressed.which === 13) {
                partyMemb.push($("#input1").val())
                $("#input1").off("keyup");
                $("#input2").focus(); // Focus on next
            }

        });
        // Party member 3
        $("#input2").keyup(function (keypressed) {
            if (keypressed.which === 13) {
                partyMemb.push($("#input2").val())
                $("#input2").off("keyup");
                $("#input3").focus();
            }
        });
        // Party member 4
        $("#input3").keyup(function (keypressed) {
            if (keypressed.which === 13) {
                partyMemb.push($("#input3").val())
                $("#input3").off("keyup");
                $("#input4").focus();
            }
        });
        // Party member 5
        $("#input4").keyup(function (keypressed) {
            if (keypressed.which === 13) {
                partyMemb.push($("#input4").val())
                $("#input4").off("keyup");

                // TODO: Allow for correction
                // Add new members to the party
                App.State.addParty(partyMemb)

                // Now Handle for the next screen after this last party member 
                App.Game.handleActionBasedOnDisplayNum(App.Displayer.CHOOSE_MONTH)
            }
        });
    });
}

// Month selection (CHOOSE_MONTH)
App.Game.actionFor_ChooseMonth = function () {

    $(function () {

        $("#input").focus()
        $("#input").keyup(function (keypressed) {
            //13 is the Enter key
            if (keypressed.which === 13) {

                // Set Month 
                switch (parseInt($("#input").val())) {
                    case 1:
                        App.State.setMonth(App.State.MARCH);
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.INTERMEDIATE_1)
                        break;
                    case 2:
                        App.State.setMonth(App.State.APRIL)
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.INTERMEDIATE_1)
                        break;
                    case 3:
                        App.State.setMonth(App.State.MAY)
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.INTERMEDIATE_1)
                        break;
                    case 4:
                        App.State.setMonth(App.State.JUNE)
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.INTERMEDIATE_1)
                        break;
                    case 5:
                        App.State.setMonth(App.State.JULY)
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.INTERMEDIATE_1)
                        break;
                    case 6:
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.MONTH_ADVICE)
                        break;
                    default:
                        console.log(" >>ERROR in GAME.js<<: \n\t-No month number:", parseInt($("#input").val()), "\n\t-month was not set")
                }
            }
        });
    });
}

// Advice on chooseing a month (MONTH_ADVICE)
App.Game.actionFor_MonthAdvice = function () {
    // Go back to choose month section
    App.Game.afterSpaceBar(App.Displayer.CHOOSE_MONTH)
}

// First Intermediate step between months and matts store (INTERMEDIATE_1)
App.Game.actionFor_Intermediate1 = function () {

    $(function () {
        // Set the money for this display
        $("#money").text(App.State.getMoney())
        App.Game.afterSpaceBar(App.Displayer.INTERMEDIATE_2)
    });
}

// Second Intermediate step between months and matts store (INTERMEDIATE_2)
App.Game.actionFor_Intermediate2 = function () {
    // Go to Matt's store
    App.Game.afterSpaceBar(App.Displayer.GENERAL_STORE)
}


/**================================================================
 * PART 2: At Matt's store
 * ================================================================*/

// Matt's General Store (GENERALSTORE)
App.Game.actionFor_GeneralStore = function () {
    $(function () {

        // Display prices based on amount in shoppingcart and price
        //
        $("#currentDate").text(App.State.getPrettyDate())
        $("#priceOxen").text(App.Game.shoppingCart.oxen * App.State.getPriceOxen())
        $("#priceFood").text((App.Game.shoppingCart.food * App.State.getPriceFood()).toFixed(2))
        $("#priceClothing").text(App.Game.shoppingCart.cloths * App.State.getPriceCloths())
        $("#priceBait").text(App.Game.shoppingCart.bait * App.State.getPriceBait())
        $("#priceWheel").text(App.Game.shoppingCart.wheel * App.State.getPriceWheel())
        $("#priceAxle").text(App.Game.shoppingCart.axle * App.State.getPriceAxle())
        $("#priceTongue").text(App.Game.shoppingCart.tongue * App.State.getPriceTongue())
        $("#totalPrice").text(App.Game.getshoppingCartTotal())
        $("#money").text(App.State.getMoney())

        // Handle Choices
        //
        $("#input").focus()
        $("#input").keyup(function (keypressed) {
            if (keypressed.which === 13) {

                switch (parseInt($("#input").val())) {
                    case 1:
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.GENERAL_STORE_OXEN)
                        break;
                    case 2:
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.GENERAL_STORE_FOOD)
                        break;
                    case 3:
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.GENERAL_STORE_CLOTHING)
                        break;
                    case 4:
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.GENERAL_STORE_BAIT)
                        break;
                    case 5:
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.GENERAL_STORE_WHEEL)
                        break;
                    case 6:
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.GENERAL_STORE_AXLE)
                        break;
                    case 7:
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.GENERAL_STORE_TONGUE)
                        break;
                    default:
                        console.log(" >>ERROR in GAME.js<<: \n\t-No item number:", parseInt($("#input").val()))
                }
            }
        });

        $("#storeMenuDisplay").keyup(function (keypressed) {
            // User wants to leave the store
            if (keypressed.which === 32) {

                var shoppingCart = App.Game.shoppingCart;
                var oxenTotal = shoppingCart["oxen"];
                var shoppingCartTotal = App.Game.getshoppingCartTotal()
                var purchaseLimit = App.State.getMoney();

                // Ensure qualifications are met
                if (oxenTotal === 0 || shoppingCartTotal > purchaseLimit) {
                    $("#warning").show()
                }
                // Make purchase of items in the shopping cart and update states
                else {
                    App.State.setMoney((App.State.getMoney() - shoppingCartTotal).toFixed(2));
                    App.State.setOxen(shoppingCart["oxen"]);
                    App.State.setFood(shoppingCart["food"]);
                    App.State.setCloths(shoppingCart["cloths"]);
                    App.State.setBait(shoppingCart["bait"]);
                    App.State.setWheels(shoppingCart["wheel"]);
                    App.State.setAxles(shoppingCart["axle"]);
                    App.State.setTongues(shoppingCart["tongue"]);

                    App.Game.clearShoppingCart();
                    // Continue 
                    App.Game.handleActionBasedOnDisplayNum(App.Displayer.INTERMEDIATE_3)
                }
                $("#storeMenuDisplay").off("keyup");
            }

        });
    });
}

// Matt's General Store (GENERALSTORE_OXEN)
App.Game.actionFor_GeneralStoreOxen = function () {

    $(function () {
        $("#bill").text(App.Game.getshoppingCartTotal())

        $("#input").focus()
        $("#input").keyup(function (keypressed) {
            if (keypressed.which === 13) {
                var yoke = parseInt($("#input").val());

                // Two Oxen in a yoke
                App.Game.shoppingCart["oxen"] = yoke * 2;

                // Go back to the general store
                App.Game.handleActionBasedOnDisplayNum(App.Displayer.GENERAL_STORE)
                $("#input").off("keyup");
            }
        });
    });
}

// Matt's general store (GENERALSTORE_FOOD)
App.Game.actionFor_GeneralStoreFood = function () {

    $(function () {
        $("#bill").text(App.Game.getshoppingCartTotal())

        $("#input").focus()
        $("#input").keyup(function (keypressed) {
            if (keypressed.which === 13) {
                var food = parseInt($("#input").val());
                App.Game.shoppingCart["food"] = food;

                // Go back to the general store
                App.Game.handleActionBasedOnDisplayNum(App.Displayer.GENERAL_STORE)
                $("#input").off("keyup");
            }
        });
    });
}
// Matt's general store (GENERALSTORE_CLOTHING)
App.Game.actionFor_GeneralStoreClothing = function () {

    $(function () {
        $("#bill").text(App.Game.getshoppingCartTotal())

        $("#input").focus()
        $("#input").keyup(function (keypressed) {
            if (keypressed.which === 13) {
                var cloths = parseInt($("#input").val());
                App.Game.shoppingCart["cloths"] = cloths;

                // Go back to the general store
                App.Game.handleActionBasedOnDisplayNum(App.Displayer.GENERAL_STORE)
                $("#input").off("keyup");
            }
        });
    });
}

// Matt's general store (GENERALSTORE_BAIT)
App.Game.actionFor_GeneralStoreBait = function () {

    $(function () {
        $("#bill").text(App.Game.getshoppingCartTotal())

        $("#input").focus()
        $("#input").keyup(function (keypressed) {
            if (keypressed.which === 13) {
                var bait = parseInt($("#input").val());
                App.Game.shoppingCart["bait"] = bait;

                // Go back to the general store
                App.Game.handleActionBasedOnDisplayNum(App.Displayer.GENERAL_STORE)
                $("#input").off("keyup");
            }
        });
    });
}

// Matt's general store (GENERALSTORE_WHEEL)
App.Game.actionFor_GeneralStoreWheel = function () {

    $(function () {
        $("#bill").text(App.Game.getshoppingCartTotal())

        $("#input").focus()
        $("#input").keyup(function (keypressed) {
            if (keypressed.which === 13) {
                var wheel = parseInt($("#input").val());
                App.Game.shoppingCart["wheel"] = wheel;

                // Go back to the general store
                App.Game.handleActionBasedOnDisplayNum(App.Displayer.GENERAL_STORE)
                $("#input").off("keyup");
            }
        });
    });
}

// Matt's general store (GENERALSTORE_AXLE)
App.Game.actionFor_GeneralStoreAxle = function () {

    $(function () {
        $("#bill").text(App.Game.getshoppingCartTotal())

        $("#input").focus()
        $("#input").keyup(function (keypressed) {
            if (keypressed.which === 13) {
                var axle = parseInt($("#input").val());
                App.Game.shoppingCart["axle"] = axle;

                // Go back to the general store
                App.Game.handleActionBasedOnDisplayNum(App.Displayer.GENERAL_STORE)
                $("#input").off("keyup");
            }
        });
    });
}

// Matt's general store (GENERALSTORE_TONGUE)
App.Game.actionFor_GeneralStoreTongue = function () {

    $(function () {
        $("#bill").text(App.Game.getshoppingCartTotal())

        $("#input").focus()
        $("#input").keyup(function (keypressed) {
            if (keypressed.which === 13) {
                var tonge = parseInt($("#input").val());
                App.Game.shoppingCart["tongue"] = tonge;

                // Go back to the general store
                App.Game.handleActionBasedOnDisplayNum(App.Displayer.GENERAL_STORE)
                $("#input").off("keyup");
            }
        });
    });
}

/**================================================================
 * PART 3: Primary display of the game
 * ================================================================*/

// Text directly after making purchases at Matt's store (INTERMEDIATE_3)
App.Game.actionFor_Intermediate3 = function () {

    App.Game.StringifyPlayerData()

    App.Game.afterSpaceBar(App.Displayer.INTERMEDIATE_4)
}

App.Game.actionFor_Intermediate4 = function () {

    $(function () {
        $("#date").text(App.State.getPrettyDate());
    })

    App.Game.afterSpaceBar(App.Displayer.MAIN_DISPLAY)
}

// (MAIN_DISPLAY)
App.Game.actionFor_MainDisplay = function () {

    var condition = App.State.getCondition();

    $(function () {
        $("#location").text(App.State.getLocation().name)
        $("#date").text(App.State.getPrettyDate())
        $("#weather").text(condition.weather);
        $("#health").text(condition.health);
        $("#pace").text(condition.pace);
        $("#ration").text(condition.ration);

        $("#input").focus()
        $("#input").keyup(function (keypressed) {
            if (keypressed.which === 13) {
                switch (parseInt($("#input").val())) {
                    case 1:
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY_TRAVEL);
                        break;
                    case 2:
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY_SUPPLIES);
                        break;
                    case 3:
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY_MAP);
                        break;
                    case 4:
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY_CHANGE_PACE);
                        break;
                    case 5:
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY_CHANGE_RATION);
                        break;
                    case 6:
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY_REST);
                        break;
                    case 7:
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY_TRADE);
                        break;
                    case 8:
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY_TALK);
                        break;
                    case 9:
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY_PURCHASE);
                        break;

                }
            }

        });

    })
}

//(MAIN_DISPLAY_TRAVEL)
App.Game.actionFor_MainDisplayTravel = function () {

    // Display appropriate landmark object according to next location
    let currentLocation = App.State.getLocation(); // a location object
    let nextLocationObject = App.Game.getNextLocationObject(currentLocation);

    // var distanceToTravel = App.Game.getDistanceToNextLocation();


    $(function () {

        // display the landmark object. This is the place we are headed to
        $("#object").attr("src", nextLocationObject)

        let pace = App.State.getPaceDistance();


        // step
        // consume food
        // increase day
        // trigger event
        // update status box
        let travelCycle = setInterval(function () {
            if (App.Animation.isAtDestination()) // at next landmark
                clearInterval(travelCycle)
            else {
                App.Animation.step(pace);
                App.State.eatFood();
                App.State.addDay();
            }

            updateStatusBox();
        }, 700);

        // user leaves the journey before reaching destination
        $(document).keyup(function (keypressed) {
            // 32 is Space bar
            if (keypressed.which == 32) {
                // Stop the travel cycle
                clearInterval(travelCycle)
                $(document).off("keyup");

                App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY)
            }
        })

        function updateStatusBox() {
            // $("#nextLandmark").text(App.Animation.);

            $("#currentDate").text(App.State.getPrettyDate());
            $("#currentWeather").text(App.State.getWeather());
            $("#currentHealth").text(App.State.getHealth());
            $("#currentFood").text(App.State.getFood());
            $("#nextLandmark").text(App.Game.getDistanceToNextLocation());
            $("#totalMiles").text(App.State.getMilesTraveled());
        }
    });

}

//(MAIN_DISPLAY_SUPPLIES)
App.Game.actionFor_MainDisplaySupplies = function () {
    let supplies = App.State.getInventory();
    $(function () {

        $("#oxen").text(supplies.oxen);
        $("#cloths").text(supplies.cloths);
        $("#bait").text(supplies.bait);
        $("#wheel").text(supplies.wheels);
        $("#axle").text(supplies.axles);
        $("#tongue").text(supplies.tongues);
        $("#food").text(supplies.food);
        $("#money").text(supplies.money);

        App.Game.afterSpaceBar(App.Displayer.MAIN_DISPLAY);
    })
}

App.Game.actionFor_MainDisplayMap = function () {
    // For testing purposes remember to remove
    App.Game.afterSpaceBar(App.Displayer.MAIN_DISPLAY)
}

App.Game.actionFor_MainDisplayChangePace = function () {

    $(function () {
        $("#pace").text(App.State.getPace())

        $("#input").focus()
        $("#input").keyup(function (keypressed) {

            if (keypressed.which === 13) {
                switch (parseInt($("#input").val())) {
                    case 1:
                        App.State.setPace(App.State.STEADY)
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY)
                        break;
                    case 2:
                        App.State.setPace(App.State.STRENUOUS)
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY)
                        break;
                    case 3:
                        App.State.setPace(App.State.GRUELING)
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY)
                        break;
                    //TODO
                    //case 4:
                }
            }
        });
    });

}

App.Game.actionFor_MainDisplayChangeRation = function () {
    $(function () {
        $("#ration").text(App.State.getRation())

        $("#input").focus()
        $("#input").keyup(function (keypressed) {

            if (keypressed.which === 13) {
                switch (parseInt($("#input").val())) {
                    case 1:
                        App.State.setRation(App.State.FILLING)
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY)
                        break;
                    case 2:
                        App.State.setRation(App.State.MEAGER)
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY)
                        break;
                    case 3:
                        App.State.setRation(App.State.BARE_BONES)
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY)
                        break;
                }
            }
        });
    });
}

App.Game.actionFor_MainDisplayRest = function () {
    // For testing purposes remember to remove
    App.Game.afterSpaceBar(App.Displayer.MAIN_DISPLAY)
}

App.Game.actionFor_MainDisplayTrade = function () {
    // For testing purposes remember to remove
    App.Game.afterSpaceBar(App.Displayer.MAIN_DISPLAY)
}

App.Game.actionFor_MainDisplayTalk = function () {
    // For testing purposes remember to remove
    App.Game.afterSpaceBar(App.Displayer.MAIN_DISPLAY)
}

App.Game.actionFor_MainDisplayPurchase = function () {
    var prices = App.State.getPrice();

    $(function () {
        $("#price-oxen").text(prices.oxen);
        $("#price-cloths").text(prices.cloths);
        $("#price-bait").text(prices.bait);
        $("#price-wheel").text(prices.wheel);
        $("#price-axle").text(prices.axle);
        $("#price-tongue").text(prices.tongue);
        $("#price-food").text(prices.food);
        $("#money").text(App.State.getMoney());


        $("#input").focus()
        $("#input").keyup(function (keypressed) {

            if (keypressed.which === 13) {
                switch (parseInt($("#input").val())) {

                    case 1:
                        $("#input").attr('disabled', 'disabled');
                        $("#purchase-display").show(); // where user types amount to purchase 
                        $("#input2").focus();
                        $("#item").text("oxen")

                        // Move on to the next input
                        $("#input2").keyup(function (keypressed) {
                            var currentOxen = App.State.getOxen();
                            var numOxenToBuy = parseInt($("#input2").val())
                            var currentMoney = App.State.getMoney();
                            if (keypressed.which === 13) {
                                var totalPrice = numOxenToBuy * prices.oxen;

                                // Display warning and refresh this page
                                if (totalPrice > currentMoney) {
                                    // display warning
                                    $("#warning").show();
                                    App.Game.afterSpaceBar(App.Displayer.MAIN_DISPLAY_PURCHASE)
                                }

                                // Make the purchase and refresh this page
                                else {
                                    App.State.setOxen(currentOxen + numOxenToBuy);
                                    App.State.setMoney((currentMoney - totalPrice).toFixed(2));
                                    App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY_PURCHASE)
                                }
                            }
                        })
                        break;
                    case 2:
                        $("#input").attr('disabled', 'disabled');
                        $("#purchase-display").show(); // where user types amount to purchase 
                        $("#input2").focus();
                        $("#item").text("cloths")

                        // Move on to the next input
                        $("#input2").keyup(function (keypressed) {
                            var currentCloths = App.State.getCloths();
                            var numClothsToBuy = parseInt($("#input2").val())
                            var currentMoney = App.State.getMoney();
                            if (keypressed.which === 13) {
                                var totalPrice = numClothsToBuy * prices.cloths;

                                // Display warning and refresh this page
                                if (totalPrice > currentMoney) {
                                    // display warning
                                    $("#warning").show();
                                    App.Game.afterSpaceBar(App.Displayer.MAIN_DISPLAY_PURCHASE)
                                }

                                // Make the purchase and refresh this page
                                else {
                                    App.State.setCloths(currentCloths + numClothsToBuy);
                                    App.State.setMoney((currentMoney - totalPrice).toFixed(2));
                                    App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY_PURCHASE)
                                }
                            }
                        })
                        break;
                    case 3:
                        $("#input").attr('disabled', 'disabled');
                        $("#purchase-display").show(); // where user types amount to purchase 
                        $("#input2").focus();
                        $("#item").text("Bait")

                        // Move on to the next input
                        $("#input2").keyup(function (keypressed) {
                            var currentBait = App.State.getBait();
                            var numBaitToBuy = parseInt($("#input2").val())
                            var currentMoney = App.State.getMoney();
                            if (keypressed.which === 13) {
                                var totalPrice = numBaitToBuy * prices.bait;

                                // Display warning and refresh this page
                                if (totalPrice > currentMoney) {
                                    // display warning
                                    $("#warning").show();
                                    App.Game.afterSpaceBar(App.Displayer.MAIN_DISPLAY_PURCHASE)
                                }

                                // Make the purchase and refresh this page
                                else {
                                    App.State.setBait(currentBait + numBaitToBuy);
                                    App.State.setMoney((currentMoney - totalPrice).toFixed(2));
                                    App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY_PURCHASE)
                                }
                            }
                        })
                        break;
                    case 4:
                        $("#input").attr('disabled', 'disabled');
                        $("#purchase-display").show(); // where user types amount to purchase 
                        $("#input2").focus();
                        $("#item").text("wheels")

                        // Move on to the next input
                        $("#input2").keyup(function (keypressed) {
                            var currentWheels = App.State.getWheel();
                            var numWheelsToBuy = parseInt($("#input2").val())
                            var currentMoney = App.State.getMoney();
                            if (keypressed.which === 13) {
                                var totalPrice = numWheelsToBuy * prices.wheel;

                                // Display warning and refresh this page
                                if (totalPrice > currentMoney) {
                                    // display warning
                                    $("#warning").show();
                                    App.Game.afterSpaceBar(App.Displayer.MAIN_DISPLAY_PURCHASE)
                                }

                                // Make the purchase and refresh this page
                                else {
                                    App.State.setWheels(currentWheels + numWheelsToBuy);
                                    App.State.setMoney((currentMoney - totalPrice).toFixed(2));
                                    App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY_PURCHASE)
                                }
                            }
                        })
                        break;
                    case 5:
                        $("#input").attr('disabled', 'disabled');
                        $("#purchase-display").show(); // where user types amount to purchase 
                        $("#input2").focus();
                        $("#item").text("axles")

                        // Move on to the next input
                        $("#input2").keyup(function (keypressed) {
                            var currentAxles = App.State.getAxle();
                            var numAxlesToBuy = parseInt($("#input2").val())
                            var currentMoney = App.State.getMoney();
                            if (keypressed.which === 13) {
                                var totalPrice = numAxlesToBuy * prices.axle;

                                // Display warning and refresh this page
                                if (totalPrice > currentMoney) {
                                    // display warning
                                    $("#warning").show();
                                    App.Game.afterSpaceBar(App.Displayer.MAIN_DISPLAY_PURCHASE)
                                }

                                // Make the purchase and refresh this page
                                else {
                                    App.State.setAxles(currentAxles + numAxlesToBuy);
                                    App.State.setMoney((currentMoney - totalPrice).toFixed(2));
                                    App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY_PURCHASE)
                                }
                            }
                        })
                        break;
                    case 6:
                        $("#input").attr('disabled', 'disabled');
                        $("#purchase-display").show(); // where user types amount to purchase 
                        $("#input2").focus();
                        $("#item").text("tongues")

                        // Move on to the next input
                        $("#input2").keyup(function (keypressed) {
                            var currentTongue = App.State.getTongue();
                            var numTonguesToBuy = parseInt($("#input2").val())
                            var currentMoney = App.State.getMoney();
                            if (keypressed.which === 13) {
                                var totalPrice = numTonguesToBuy * prices.tongue;

                                // Display warning and refresh this page
                                if (totalPrice > currentMoney) {
                                    // display warning
                                    $("#warning").show();
                                    App.Game.afterSpaceBar(App.Displayer.MAIN_DISPLAY_PURCHASE)
                                }

                                // Make the purchase and refresh this page
                                else {
                                    App.State.setTongues(currentTongue + numTonguesToBuy);
                                    App.State.setMoney((currentMoney - totalPrice).toFixed(2));
                                    App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY_PURCHASE)
                                }
                            }
                        })
                        break;
                    case 7:
                        $("#input").attr('disabled', 'disabled');
                        $("#purchase-display").show(); // where user types amount to purchase 
                        $("#input2").focus();
                        $("#item").text("pounds of food")

                        // Move on to the next input
                        $("#input2").keyup(function (keypressed) {
                            var currentFood = App.State.getFood();
                            var numFoodToBuy = parseInt($("#input2").val())
                            var currentMoney = App.State.getMoney();
                            if (keypressed.which === 13) {
                                var totalPrice = numFoodToBuy * prices.food;

                                // Display warning and refresh this page
                                if (totalPrice > currentMoney) {
                                    // display warning
                                    $("#warning").show();
                                    App.Game.afterSpaceBar(App.Displayer.MAIN_DISPLAY_PURCHASE)
                                }

                                // Make the purchase and refresh this page
                                else {
                                    App.State.setFood(currentFood + numFoodToBuy);
                                    App.State.setMoney((currentMoney - totalPrice).toFixed(2));
                                    App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY_PURCHASE)
                                }
                            }
                        })
                        break;
                    case 8:
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.MAIN_DISPLAY)
                        break;
                }
            }
        });
    });
}






// ============================ HELPER FUNCTIONS ===================================

// Return the total price of items in the shopping cart
App.Game.getshoppingCartTotal = function () {
    var total = 0.0;
    total += App.Game.shoppingCart.oxen * App.State.getPriceOxen()
    total += App.Game.shoppingCart.food * App.State.getPriceFood()
    total += App.Game.shoppingCart.cloths * App.State.getPriceCloths()
    total += App.Game.shoppingCart.bait * App.State.getPriceBait()
    total += App.Game.shoppingCart.wheel * App.State.getPriceWheel()
    total += App.Game.shoppingCart.axle * App.State.getPriceAxle()
    total += App.Game.shoppingCart.tongue * App.State.getPriceTongue()

    return total.toFixed(2);
}

// empties items in the shopping cart
App.Game.clearShoppingCart = function () {
    App.Game.shoppingCart = {
        oxen: 0,
        food: 0,
        cloths: 0,
        bait: 0,
        axle: 0,
        tongue: 0,
        wheel: 0
    }
}


// Runs the action for a display after spacebar is pressed
App.Game.afterSpaceBar = function (displayNum) {
    // Check for space
    $(function () {

        $(document).keyup(function (keypressed) {
            // 32 is Space bar
            if (keypressed.which == 32) {
                $(document).off("keyup");
                App.Game.handleActionBasedOnDisplayNum(displayNum)
            }
        })
    });
}

// Gives the image address of the next location's landmark object
App.Game.getNextLocationObject = function (currentLocation) {

    switch (currentLocation) {
        // Landmark after Independence is a river
        case App.State.INDEPENDENCE:
            return App.Displayer.RIVER;
        case App.State.KANSAS_RIVER_CROSSING:
            return App.Displayer.RIVER;
        case App.State.BIG_BLUE_RIVER_CROSSING:
            return App.Displayer.FORT;
        case App.State.FORT_KEARNEY:
            return App.Displayer.ROCK;
        case App.State.CHIMNEY_ROCK:
            return App.Displayer.FORT;
        case App.State.FORT_LARAMIE:
            return App.Displayer.ROCK;
        // TODO: Other location
    }
}

// The length from the beggining of one location to the next landmark
App.Game.getDistanceToNextLocation = function () {
    var distanceTraveled = App.State.getMilesTraveled();
    var currentLocation = App.State.getLocation();
    var nextLocation = currentLocation.nextLocation;

    return nextLocation.distance - distanceTraveled;
}


//Stringify's relevant playerData (don't want just App.State or Game, its too much info)
App.Game.StringifyPlayerData = function () {
    //send Player data to the DB
    var playerData = {};
    playerData["playerName"] = App.State.getLeader();
    playerData["playerJob"] = App.State.getJob();
    playerData["partyMbrs"] = App.State.getParty();
    playerData["playerWallet"] = App.State.getMoney();
    playerData["playerInventory"] = App.State.getInventory();
    //can add mileage and other travel data. 
    //Would prefer a separate object that is nested inside playerData
    var playerDataJSON = JSON.stringify(playerData);
    console.log(playerDataJSON);
    //send playerData to DB, still need to figure that out
    //will just be a simple function set up
}



// Start the game :p
App.Game.init();


