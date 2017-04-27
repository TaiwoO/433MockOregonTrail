"use strict"

/**
 * SUMMARY:
 *      Handels UI Displaying
 * 
 * OVERVIEW:
 *      Throughout the game, there are different displays, many of which are repetitive.
 *      It would be nice to have a way to request for the display you want and just have.
 *      The one show up
 * 
 * FUNCTIONALITY: 
 *      - Will contain all the displays for the application.
 *      - Will show the requested display and make all others inactive
 *      - etc..     
 */

App.Displayer = {}


// Indexes of the pages on the app.
// We'll see which naming scheme is best
App.Displayer.CHOOSE_PROFESSION = 1
App.Displayer.CHOOSE_LEADER_NAME = 2
App.Displayer.CHOOSE_PARTY_NAMES = 3;
App.Displayer.CHOOSE_MONTH = 4;
App.Displayer._4 = 5;
App.Displayer._5 = 6;

// Shows the display based on requested display number
App.Displayer.showDisplayNum = function (displayNumber) {

    switch (displayNumber) {
        case App.Displayer.CHOOSE_PROFESSION:
            App.Displayer.showDisplay_ChooseProfession()
            break;
        case App.Displayer.CHOOSE_LEADER_NAME:
            App.Displayer.showDisplay_ChooseLeaderName()
            break;
        case App.Displayer.CHOOSE_PARTY_NAMES:
            App.Displayer.showDisplay_ChoosePartyNames()
            break;
        case App.Displayer.CHOOSE_MONTH:
            App.Displayer.showDisplay_ChooseMonth()
            break;
        default:
            console.log(" >>POSSIBLE ERROR in Displayer.js<< No Display Number:", displayNumber)
        // TODO All of the display cases
    }
}


// ======================= THE DISPLAY FUNCTIONS ====================
// Profession choice display
App.Displayer.showDisplay_ChooseProfession = function () {
    $(document).ready(function () {

        $("#main").html(
            "<h1> Welcome to Oregon Trail (Testing) </h1> \
		<p> Many kinds of people made the trip to Oregon. \
		<br> \
		You may:  \
			<ol> \
			  <li>Be a banker from Boston</li> \
			  <li>Be a carpenter from Ohio</li> \
			  <li>Be a farmer from Illinois</li> \
			  <li>Find out the differences between these choices (Not implemented)</li> \
			</ol> \
		</p> \
		<input type='number' id='input' name='input' min='1' max='3'> "
        );
    });
}

// Leader name display
App.Displayer.showDisplay_ChooseLeaderName = function () {
    $(document).ready(function () {

        $("#main").html(
            "<div id='nameChoiceDisplay'> \
                <h2> What is the first name of the wagon leader? </h2> \
                <input type='text' id='input' name='wagonLeader' maxlength='10'> \
            </div>"
        );
    });
}

// Party Names display
App.Displayer.showDisplay_ChoosePartyNames = function () {
    $(document).ready(function () {

        $("#main").html(
            "<div id='partyChoiceDisplay'> \
                <h3> What are the first names of the four other members in your party? </h3> \
                <ol start='1'> \
                    <li id='partyLead'> </li> \
                    <li> <input type='text' id='input1' name='input1' maxlength='10'> </li> \
                    <li> <input type='text' id='input2' name='input2' maxlength='10'> </li> \
                    <li> <input type='text' id='input3' name='input3' maxlength='10'> </li> \
                    <li> <input type='text' id='input4' name='input4' maxlength='10'> </li> \
                </ol> \
	        </div> "
        );
    });
}

// Choose month display
App.Displayer.showDisplay_ChooseMonth= function () {
    $(document).ready(function () {

        $("#main").html(
            "<h1> later..</h1>"
        );
    });
}




