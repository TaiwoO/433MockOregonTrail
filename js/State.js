"use strict"

/**
 * SUMMARY:
 *      Handels the State of the game as well as functionality for changing the state
 * 
 * OVERVIEW:
 *      The core of the game can essentially be thought of as just having a state. 
 *      This can be things like where you are, how much food you have, what the wether is, etc
 * 
 * FUNCTIONALITY: 
 *      - Will contain all variables which define the state of the application.
 *      - Will have functions for changing those states.
 *      - Will have functions for giving the state.
 *      - etc..     
 */

App.State = {};


/**Discriptive constants for a few state values*/
// For Job
App.State.BANKER = "Banker";
App.State.CARPENTER = "Carpenter";
App.State.FARMER = "Farmer";

// For Rations
App.State.FILLING = 2;
App.State.MEAGER = 1;
App.State.BEAR_BONES = 0;

// For Pace
App.State.GRUELING = 2
App.State.STRENUOUS = 1
App.State.STEADY = 0

// TODO  
// For Location

// Initialize the state with a given state
// NOTE: the value after "||" is a default assingment
App.State.init = function (state) {
    // Inventory stuff 
    this.axles = state.axles;
    this.cloths = state.cloths;
    this.food = state.food;
    this.money = state.money;
    this.oxen = state.oxen;
    this.tongues = state.tongues;
    this.wheels = state.wheels;

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


// =================== STATE CHANGE FUNCTIONS =====================

// Eat Food
App.State.eat = function () {
    console.log("Eatting...")
    this.food -= this.person * OregonH.FOOD_PER_PERSON;

    if (this.food < 0) {
        this.food = 0;
    }
};

// Travel a small distance based on the pace
App.State.travel = function () {
    console.log("Traveling...");
};




// ===================== SETTERS / UPDATERS =========================
App.State.setJob = function (job) {
    this.job = job;
    console.log("Set Job to:", this.job)

}
// Party is array of strings
App.State.setParty = function (party) {
    this.party = party;
    console.log("Set Party to:", this.party)

}
// Party is array of strings to to added to already exisiting party
App.State.addParty = function (party) {
    this.party = this.party.concat(party);
    console.log("Added:", party, "to the party.", "The current party is now: ", this.party)
}

App.State.setLeader = function (leader) {
    // Add leader to party
    this.party[0] = leader;
    this.leader = leader;
    console.log("Set party lead to:", this.leader, " Current party:", this.party)
}


// ===================== GETTERS =========================
App.State.getJob = function () {
    return this.job;
}
App.State.getParty = function () {
    return this.party;
}
App.State.getLeader = function () {
    return this.leader;
}

// ======================= OTHER USEFUL STUFF ===============================
// See the state in the console nicely
App.State.dumpState = function () {
    var stateJSON = JSON.stringify(App.State, null, 2);
    console.log(stateJSON);
}
