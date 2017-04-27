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

    // references to the state, events, and displayer
    //
    this.state = App.State;
    this.events = App.Events;
    this.displayer = App.Displayer;

    // Initialize the default state of of the app.
    this.state.init({
        axles: 0,
        cloths: 0,
        food: 0,
        money: 0,
        oxen: 0,
        tongues: 0,
        wheels: 0,
        weather: 0,
        health: 0,
        pace: 0,
        rations: 0,
        leader: "",
        job: "",
        party: [],
        location: "",
        data: "",
        milesTraveled: 0
    })

    // Start the game off with the first display and everything show
    // flow from then on
    App.Game.handleActionBasedOnDisplayNum(App.Displayer.CHOOSE_PROFESSION)
}

// Handles what to display and the action that should
// occur based on the display number requested
App.Game.handleActionBasedOnDisplayNum = function (displayNum) {

    switch (displayNum) {
        case App.Displayer.CHOOSE_PROFESSION:
            App.Game.actionForDisplay_1();
            break;
        case App.Displayer.CHOOSE_LEADER_NAME:
            App.Game.actionForDisplay_2();
            break;
        case App.Displayer.CHOOSE_PARTY_NAMES:
            App.Game.actionForDisplay_3();
            break;
        case App.Displayer.CHOOSE_MONTH:
            App.Game.actionForDisplay_4();
            break;
        default:
            console.log(" >>POSSIBLE ERROR in GAME.js<< No Display Number:", displayNum)
    }
}

// ================================ ALL ACTIONS FOR THE DISPLAYS ============================
// Yea we need to handle what happens for each display FUCK!!

// Profession selection
App.Game.actionForDisplay_1 = function () {
    // Show the Choose Profession display
    App.Game.displayer.showDisplayNum(App.Displayer.CHOOSE_PROFESSION);

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
                        App.Game.state.setJob(App.State.BANKER);
                        break;
                    case 2:
                        App.Game.state.setJob(App.State.CARPENTER)
                        break;
                    case 3:
                        App.Game.state.setJob(App.State.FARMER)
                        break;
                    case 4:
                        // difference in jobs
                        App.Game.handleActionBasedOnDisplayNum(App.Displayer.PROFESSION_DIFFERENCES)
                        // Possible bug fix so that the user does'nt end up with no profession
                        //App.Game.actionForDisplay_1() // rerun after the user returns from seeing options.
                        // return
                        break;
                }
                //turn off  handler
                $("#input").off("keyup");

                // Now Handle for the next screen after this one
                App.Game.handleActionBasedOnDisplayNum(App.Displayer.CHOOSE_LEADER_NAME)
            }
        });
    });
}

// Leader Name selection
App.Game.actionForDisplay_2 = function () {
    // Show the Choose Leader Name 
    App.Game.displayer.showDisplayNum(App.Displayer.CHOOSE_LEADER_NAME);

    // Handle choices after DOM has loaded
    $(function () { // Shorthand for $( document ).ready()

        $("#input").focus();
        $("#input").keyup(function (keypressed) {
            if (keypressed.which === 13) {
                if ($("#input").val() != "") {
                    App.Game.state.setLeader($("#input").val())
                }
                $("#input").off("keyup");

                // Now Handle for the next screen after this one
                App.Game.handleActionBasedOnDisplayNum(App.Displayer.CHOOSE_PARTY_NAMES)
            }
        });
    });
}

// Party Name selection
App.Game.actionForDisplay_3 = function () {
    // Show the Choose Leader Name display
    App.Game.displayer.showDisplayNum(App.Displayer.CHOOSE_PARTY_NAMES);

    // Handle choices after DOM has loaded
    $(function () {
        var partyMemb = [];

        $("#partyLead").text(App.Game.state.getLeader())

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
                $("#inpu4").off("keyup");

                // TODO: Allow for correction
                // Add new members to the party
                App.Game.state.addParty(partyMemb)

                // Now Handle for the next screen after this last party member 
                App.Game.handleActionBasedOnDisplayNum(App.Displayer.CHOOSE_MONTH)
            }
        });


    });
}

// Month selection
App.Game.actionForDisplay_4 = function () {
    // Show the Choose month display
    App.Game.displayer.showDisplayNum(App.Displayer.CHOOSE_MONTH);

    $(function () {

    });

    // Now Handle for the next screen after this one
    //App.Game.handleActionBasedOnDisplayNum(TO DO...)

}

// Start the game :p
App.Game.init();
