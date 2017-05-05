"use strict"
/**
 * SUMMARY: 
 *      Handels the flow of the application
 * 
 * OVERVIEW: 
 *      The flow of the application can be thought of as interacting 
 *      with the displays and asking for somthing to happen.
 *      i.e this is basically just an interacting between the Displayer.js and Events.js
 * 
 * FUNCTIONALITY:
 *      - Communicate with Displayer.js by asking for views
 *      - Trigger events from Event.js based on the choices from the displayed html
 *      - etc....  
 */

App.Event = {}

// Eat Food
App.Event.eat = function () {
    var currentFood = App.State.getFood();
    var foodToEat = 0;
    // Subtract food based on the ration. 
    switch (App.State.getRation()) {
        case App.State.FILLING:
            break;
        case App.State.MEAGER:
            break;
        case App.State.BEAR_BONES:
            break;
        default:
            console.log(" >>POSSIBLE ERROR in Event.js<<: No ration value of ", App.State.getRation())
    }


    console.log("Eating....")
};
