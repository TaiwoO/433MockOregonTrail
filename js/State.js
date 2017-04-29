"use strict"

/**
 * SUMMARY:
 *      Handels the State of the game as well as functionality for changing the state
 * 
 * OVERVIEW:
 *      The core of the game can essentially be thought of as just having a state. 
 *      This can be things like where you are, how much food you have, what the weather is, etc
 * 
 * FUNCTIONALITY: 
 *      - Will contain all variables which define the state of the application.
 *      - Will have functions for changing those states.
 *      - Will have functions for giving the state.
 *      - etc...     
 */

App.State = {};


/**Discriptive constants for a few state values*/
// For Job
App.State.BANKER = "Banker";
App.State.CARPENTER = "Carpenter";
App.State.FARMER = "Farmer";

// For Rations
App.State.FILLING = 3;
App.State.MEAGER = 2;
App.State.BEAR_BONES = 1;

// For Pace
App.State.GRUELING = 3;
App.State.STRENUOUS = 2;
App.State.STEADY = 1;

// TODO  
// For Location
// For Month

// Initialize the state with a given state
App.State.init = function (state) {
    // Inventory stuff 
    this.axles = state.axles;
    this.cloths = state.cloths;
    this.food = state.food;
    this.money = state.money;
    this.bait = state.bait;
    this.oxen = state.oxen;
    this.tongues = state.tongues;
    this.wheels = state.wheels;

    // Base prices
    this.priceOxen = 20;
    this.priceFood = .20;
    this.priceCloths = 10;
    this.priceBait = 2;
    this.priceWheel = 10;
    this.priceAxle = 10;
    this.priceTongue = 10;

    // Condition stuff
    this.weather = state.weather;
    this.health = state.health;
    this.pace = state.pace;
    this.rations = state.rations;

    // Others
    this.leader = state.leader;
    this.job = state.job;
    this.party = state.party; // an array of names
    this.location = state.location;
    this.date = state.data;
    this.milesTraveled = state.milesTraveled;

 
};


// =================== STATE CHANGE FUNCTIONS BASED ON ACTIONS =====================

// Eat Food
App.State.eat = function () {

    // Subtract food based on the ration. 
    switch (this.rations) {
        case App.State.FILLING:
            this.food -= App.State.FILLING * App.State.FOOD_PER_PERSON;
            break;
        case App.State.MEAGER:
            this.food -= App.State.MEAGER * App.State.FOOD_PER_PERSON;
            break;
        case App.State.BEAR_BONES:
            this.food -= App.State.BEAR_BONES * App.State.FOOD_PER_PERSON;
            break;
        default:
            console.log(" >>POSSIBLE ERROR in State.js<<: Current ration is not set to a proper value. \
                        Try setting rations to App.State.FILLING, or App.State.MEAGER, or App.State.BEAR_BONES")
    }

    // No negatives
    if (this.food < 0) {
        this.food = 0;
    }

    console.log("Eating.. Food left: ", this.food)
};

// Travel a small distance based on the pace
App.State.travel = function () {
    console.log("Traveling...");
};


// ===================== SETTERS / UPDATERS =========================

App.State.setJob = function (job) {
    this.job = job;
    switch(this.job) {
        case App.State.BANKER:
            this.money = 1600;
            break;
        case App.State.CARPENTER:
            this.money = 800;
            break;
        case App.State.FARMER:
            this.money = 400;
            break;
    }
    console.log("Set Job to:", this.job)
}
App.State.setLeader = function (leader) {
    // Add leader to party
    this.party[0] = leader;
    this.leader = leader;
    console.log("Set party lead to:", this.leader, " Current party:", this.party)
}
// Party is array of strings
App.State.setParty = function (party) {
    this.party = party;
    console.log("Set Party to:", this.party)
}
// Append the party to the current party
App.State.addParty = function (party) {
    this.party = this.party.concat(party);
    console.log("Added:", party, "to the party.", "The current party is now: ", this.party)
}
App.State.setMonth = function(month) {
    this.month = month;
    console.log("Set month to:", this.month)
}
App.State.setMoney = function(money) {
    this.money = money;
    console.log("Set money to:", this.money)
}
// updates the prices of goods based on location
App.State.updatePrices = function () {

    switch(this.location) {
        // case App.State.KANSAS:
        //     this.price = ???
        //     this...= ??
        //     this...= ??
        //     this...= ??
        //     this...= ??
        //     break;
    }
}

App.State.setOxen = function (val) {
    this.oxen = val;
    console.log("set oxen to:",this.oxen);
}
App.State.setFood = function (val) {
    this.food = val;
    console.log("set food to:",this.food);
}
App.State.setCloths = function (val) {
    this.cloths = val;
    console.log("set cloths to:",this.cloths);
}
App.State.setBait = function (val) {
    this.bait = val;
    console.log("set bait to:",this.bait);
}
App.State.setWheels = function (val) {
    this.wheels = val;
    console.log("set wheels to:",this.wheels);
}
App.State.setAxles = function (val) {
    this.axles = val;
    console.log("set axles to:",this.axles);
}
App.State.setTongues = function (val) {
    this.tongues = val;
    console.log("set tongues to:",this.tongues);
}



// ===================== GETTERS =========================

// For ...
//
App.State.getJob = function () {
    return this.job;
}
App.State.getLeader = function () {
    return this.leader;
}
App.State.getParty = function () {
    return this.party;
}
App.State.getMonth = function () {
    return this.month;
}
App.State.getDate = function () {
    return this.data;
}

// For Inventory
//

App.State.getMoney = function () {
    return this.money;
}

// For prices
//

App.State.getPriceOxen = function() {
    return this.priceOxen;
}
App.State.getPriceFood = function() {
    return this.priceFood;
}
App.State.getPriceCloths = function() {
    return this.priceCloths;
}
App.State.getPriceBait = function() {
    return this.priceBait;
}
App.State.getPriceWheel = function() {
    return this.priceWheel;
}
App.State.getPriceAxle = function() {
    return this.priceAxle;
}
App.State.getPriceTongue = function() {
    return this.priceTongue;
}

// ======================= OTHER USEFUL STUFF ===============================

// See the state in the console nicely
App.State.dumpState = function () {
    var stateJSON = JSON.stringify(App.State, null, 2);
    console.log(stateJSON);
}

