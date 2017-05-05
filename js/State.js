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
App.State.FILLING = "Filling";
App.State.MEAGER = "Meager";
App.State.BARE_BONES = "Bare bones";

// For Pace
App.State.GRUELING = "Grueling";
App.State.STRENUOUS = "Strenuous";
App.State.STEADY = "Steady";

// For Weather
App.State.WARM = "Warm";
App.State.COOL = "Cool";
App.State.COLD = "Cold" // Not sure

// For Health
App.State.FAIR = "Fair";
App.State.POOR = "Poor";
App.State.CRITICAL = "Critical";

// For Month. NOTE: January=0
App.State.MARCH = 2;
App.State.APRIL = 3;
App.State.MAY = 4;
App.State.JUNE = 5;
App.State.JULY = 6;

// For Location
App.State.KANSAS_RIVER_CROSSING = "Kansas River Crossing";


// Initialize the state with a given state
App.State.init = function (state) {
    // Inventory stuff 
    this.axles = state.axles || 0;
    this.cloths = state.cloths || 0;
    this.food = state.food || 0;
    this.money = state.money || 0;
    this.bait = state.bait || 0;
    this.oxen = state.oxen || 0;
    this.tongues = state.tongues || 0;
    this.wheels = state.wheels || 0;

    // Base prices
    this.priceOxen = state.priceOxen || 20;
    this.priceFood = state.priceFood || .20;
    this.priceCloths = state.priceCloths || 10;
    this.priceBait = state.priceBait || 2;
    this.priceWheel = state.priceWheel || 10;
    this.priceAxle = state.priceAxle || 10;
    this.priceTongue = state.priceTongue || 10;

    // Condition stuff
    this.weather = state.weather || App.State.WARM;
    this.health = state.health || App.State.FAIR;
    this.pace = state.pace || App.State.STEADY;
    this.ration = state.ration || App.State.FILLING;

    // Others
    this.leader = state.leader || "";
    this.job = state.job || "";
    this.party = state.party || []; // an array of names
    this.location = state.location || App.State.KANSAS_RIVER_CROSSING;
    this.date = state.date || new Date("March 1, 1848");
    this.milesTraveled = state.milesTraveled || 0;
};


// =================== STATE CHANGE FUNCTIONS BASED ON ACTIONS =====================



// Travel a small distance based on the pace
App.State.travel = function () {
    console.log("Traveling...");
};


// ===================== SETTERS / UPDATERS =========================

// For states
//
App.State.setJob = function (job) {
    this.job = job;
    switch (this.job) {
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
App.State.setMonth = function (month) {
    this.date.setMonth(month)
    console.log("Set month to:", this.getMonth(), ". The current date is: ", this.date)
}
// TODO:
// App.State.addDay = function() {
    
// }

App.State.setLocation = function(location) {
    this.location = location;
    console.log("set location to: ", this.location)
}
App.State.setMoney = function (money) {
    this.money = money;
    console.log("Set money to:", this.money);
}

// updates the prices of goods based on location
App.State.updatePrices = function () {

    switch (this.location) {
        // case App.State.KANSAS:
        //     this.price = ???
        //     this...= ??
        //     this...= ??
        //     this...= ??
        //     this...= ??
        //     break;
    }
}

// For conditions
//
App.State.setHealther = function(health) {
    this.health = health;
    console.log("Set health to:", this.health);
}
App.State.setWeather = function(weather) {
    this.weather = weather;
    console.log("Set weather to:", this.weather);
}
App.State.setPace = function (pace) {
    this.pace = pace;
    console.log("Set pace to:", this.pace);
}
App.State.setRation = function(ration) {
    this.ration = ration;
    console.log("set ration to:", this.ration);
}


// For inventory
//
App.State.setOxen = function (val) {
    this.oxen = val;
    console.log("set oxen to:", this.oxen);
}
App.State.setFood = function (val) {
    this.food = val;

    // No negatives
    if (this.food < 0) {
        this.food = 0;
    }
    console.log("set food to:", this.food);
}
App.State.setCloths = function (val) {
    this.cloths = val;
    console.log("set cloths to:", this.cloths);
}
App.State.setBait = function (val) {
    this.bait = val;
    console.log("set bait to:", this.bait);
}
App.State.setWheels = function (val) {
    this.wheels = val;
    console.log("set wheels to:", this.wheels);
}
App.State.setAxles = function (val) {
    this.axles = val;
    console.log("set axles to:", this.axles);
}
App.State.setTongues = function (val) {
    this.tongues = val;
    console.log("set tongues to:", this.tongues);
}



// ===================== GETTERS =========================

// For states
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
// Returns date as the string corresponding to a month number
App.State.getMonth = function () {

    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var monthNum = this.date.getMonth();
    return monthNames[monthNum];
}
App.State.getDate = function () {
    return this.date;
}
App.State.getLocation = function() {
    return this.location;
}

// For condition
//
App.State.getPace = function() {
    return this.pace;
}
App.State.getRation = function() {
    return this.ration;
}
App.State.getHealth = function () {
    return this.health;
}
App.State.getWeather = function() {
    return this.weather;
}
App.State.getCondition = function () {
    return {
        weather: this.weather,
        health: this.health,
        pace: this.pace,
        ration: this.ration
    }
}


// For Inventory
//
App.State.getMoney = function () {
    return this.money;
}

App.State.getOxen = function () {
    return this.oxen;
}
App.State.getFood = function () {
    return this.food;
}
App.State.getClothing = function () {
    return this.cloths;
}
App.State.getBait = function () {
    return this.bait;
}
App.State.getWheel = function () {
    return this.wheels;
}
App.State.getAxle = function () {
    return this.axles;
}
App.State.getTongue = function () {
    return this.tongues;
}
App.State.getInventory = function () {
    return App.Game.shoppingCart;

}
App.State.getInventory = function () {
    return {
        axles: this.axles,
        cloths: this.cloths,
        food: this.food,
        money: this.money,
        bait: this.bait,
        oxen: this.oxen,
        tongues: this.tongues,
        wheels: this.wheels
    }
}


// For prices
//

App.State.getPriceOxen = function () {
    return this.priceOxen;
}
App.State.getPriceFood = function () {
    return this.priceFood;
}
App.State.getPriceCloths = function () {
    return this.priceCloths;
}
App.State.getPriceBait = function () {
    return this.priceBait;
}
App.State.getPriceWheel = function () {
    return this.priceWheel;
}
App.State.getPriceAxle = function () {
    return this.priceAxle;
}
App.State.getPriceTongue = function () {
    return this.priceTongue;
}

// ======================= OTHER USEFUL STUFF ===============================

// See the state in the console nicely
App.State.dumpState = function () {
    var stateJSON = JSON.stringify(App.State, null, 2);
    console.log(stateJSON);
    return stateJSON;
}

