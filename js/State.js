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
App.State.GRUELING = "Grueling";//33
App.State.STRENUOUS = "Strenuous";//24
App.State.STEADY = "Steady";// 18

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

// For Location types
App.State.ROCK = "Rock";
App.State.FORT = "Fort";
App.State.LANDMARK = "Landmark";
App.State.CROSSING = "Crossing";

// For Location. 
/** WARNING! Locations must be listed in reverse order so that 'nextLocation' is  defined. 
*          Ex: Kansas river crossing must exist before Independence can say Kansas river corssing is its next location. 
**/
// TODO : Other locations (last location first)
// App.State. = "";
// App.State.INDEPENDENCE_ROCK = { name: "Independence Rock", nextLocation: , distance: 830 };
App.State.FORT_LARAMIE = { name: "Fort Laramie", nextLocation: App.State.INDEPENDENCE_ROCK, distance: 640, type: App.State.FORT };
App.State.CHIMNEY_ROCK = { name: "Chimney Rock", nextLocation: App.State.FORT_LARAMIE, distance: 554, type: App.State.ROCK };
App.State.FORT_KEARNEY = { name: "Fort Kearney", nextLocation: App.State.CHIMNEY_ROCK, distance: 304, type: App.State.FORT };
App.State.BIG_BLUE_RIVER_CROSSING = { name: "Big Blue River Crossing", nextLocation: App.State.FORT_KEARNEY, distance: 185, type: App.State.CROSSING }
App.State.KANSAS_RIVER_CROSSING = { name: "Kansas River Crossing", nextLocation: App.State.BIG_BLUE_RIVER_CROSSING, distance: 102, type: App.State.CROSSING };
App.State.INDEPENDENCE = { name: "Independence", nextLocation: App.State.KANSAS_RIVER_CROSSING, distance: 0, type: App.State.FORT }


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
    this.location = state.location || App.State.INDEPENDENCE;
    this.date = state.date || new Date("March 1, 1848");
    this.milesTraveled = state.milesTraveled || 0;
};

/**================================================================
 *                           SETTERS / UPDATERS
 * ================================================================*/

/**  
 * For states
 * */
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

App.State.addDay = function (days) {

    var currentDate = this.date.getDate()
    var daysToAdd = days || 1;

    this.date.setDate(currentDate + daysToAdd);
    console.log("Added a day, date is now:", App.State.getPrettyDate());
}

App.State.setLocation = function (location) {
    this.location = location;
    console.log("set location to: ", this.location.name);

    // When the location changes so does the prices
    App.State.updatePrices();
}

/** 
 * For conditions
 * */
App.State.setHealther = function (health) {
    this.health = health;
    console.log("Set health to:", this.health);
}
App.State.setWeather = function (weather) {
    this.weather = weather;
    console.log("Set weather to:", this.weather);
}
App.State.setPace = function (pace) {
    this.pace = pace;
    console.log("Set pace to:", this.pace);
}
App.State.setRation = function (ration) {
    this.ration = ration;
    console.log("set ration to:", this.ration);
}


/** 
 * For inventory
 * */
App.State.setOxen = function (val) {
    this.oxen = val;
    console.log("set oxen to:", this.oxen);
}
App.State.addOxen = function (oxen) {
    this.oxen += val;
    console.log("Added:", oxen, "oxen. Total oxen is now:", this.oxen);
}

App.State.setFood = function (val) {
    this.food = val;

    // No negatives
    if (this.food < 0) {
        this.food = 0;
    }
    console.log("set food to:", this.food);
}
App.State.eatFood = function () {

    var currentFood = App.State.getFood();
    switch (this.ration) {
        case App.State.FILLING:
            App.State.setFood(currentFood - (3 * this.party.length));
            break;
        case App.State.MEAGER:
            App.State.setFood(currentFood - (2 * this.party.length));
            break;
        case App.State.BARE_BONES:
            App.State.setFood(currentFood - (1 * this.party.length));
            break;
    }
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
App.State.setMoney = function (money) {
    this.money = money;
    console.log("Set money to:", this.money);
}

/** 
 * For Prices
 * */

App.State.setPriceOxen = function (price) {
    this.priceOxen = price;
    console.log("set price of oxen to", price)
}
App.State.setPriceFood = function (price) {
    this.priceFood = price;
    console.log("set price of food to", price)
}
App.State.setPriceCloths = function (price) {
    this.priceCloths = price;
    console.log("set price of cloths to", price);
}
App.State.setPriceBait = function (price) {
    this.priceBait = price;
    console.log("set price of bait to", price);
}
App.State.setPriceWheel = function (price) {
    this.priceWheel = price;
    console.log("set price of wheel to", price);
}
App.State.setPriceAxle = function (price) {
    this.priceAxle = price;
    console.log("set price of axle to", price);
}
App.State.setPriceTongue = function (price) {
    this.priceTongue = price;
    console.log("set price of tongue to", price);
}

// updates the prices of goods based on location
App.State.updatePrices = function () {

    switch (this.location.name) {
        case App.State.FORT_KEARNEY.name:
            App.State.setPriceOxen(25)
            App.State.setPriceFood(.25);
            App.State.setPriceCloths(12.50);
            App.State.setPriceBait(2.50);
            App.State.setPriceWheel(12.50);
            App.State.setPriceAxle(12.50);
            App.State.setPriceTongue(12.50);
            break;
        case App.State.FORT_LARAMIE.name:
            App.State.setPriceOxen(30)
            App.State.setPriceFood(.30);
            App.State.setPriceCloths(15);
            App.State.setPriceBait(3);
            App.State.setPriceWheel(15);
            App.State.setPriceAxle(15);
            App.State.setPriceTongue(15);
            break;
        //TODO: other fort prices
    }
}

/**
 * For Other
 **/

App.State.setMilesTraveled = function (miles) {
    this.milesTraveled = miles;
    console.log("Set miles traveled to", this.milesTraveled)
}

App.State.addMilesTraveled = function (miles) {
    this.milesTraveled += miles;
    console.log("Updated miles traveled by", miles, "milesTraveled is now", this.milesTraveled);
}

/**================================================================
 *                           GETTERS
 * ================================================================*/

/** 
 * For states
 * */
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
App.State.getPrettyDate = function () {

    var prettyDate = "";
    prettyDate += App.State.getMonth() + " ";
    prettyDate += this.date.getDate() + ", ";
    prettyDate += this.date.getFullYear();

    return prettyDate;
}

App.State.getLocation = function () {
    return this.location;
}

/** 
 * For condition
 * */
App.State.getPace = function () {

    return this.pace;
}
App.State.getPaceDistance = function () {

    switch (this.pace) {
        case App.State.STEADY:
            return 15;
            break;
        case App.State.STRENUOUS:
            return 23;
            break;
        case App.State.GRUELING:
            return 30;
            break;

    }
}
App.State.getRation = function () {
    return this.ration;
}
App.State.getHealth = function () {
    return this.health;
}
App.State.getWeather = function () {
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


/** 
 * For Inventory
 * */
App.State.getMoney = function () {
    return this.money;
}
App.State.getOxen = function () {
    return this.oxen;
}
App.State.getFood = function () {
    return this.food;
}
App.State.getCloths = function () {
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


/** 
 * For prices
 * */
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
App.State.getPrice = function () {
    return {
        oxen: this.priceOxen,
        food: this.priceFood,
        cloths: this.priceCloths,
        bait: this.priceBait,
        wheel: this.priceWheel,
        axle: this.priceAxle,
        tongue: this.priceTongue
    }
}

/**
 * For Other
 * */

App.State.getMilesTraveled = function () {
    return this.milesTraveled;
}

/**================================================================
 *                           OTHER USEFUL METHODS
 * ================================================================*/

// See the state in the console nicely
App.State.dumpState = function () {
    var stateJSON = JSON.stringify(App.State, null, 2);
    console.log(stateJSON);
    return stateJSON;
}

