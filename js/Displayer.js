"use strict"

/**
 * SUMMARY:
 *      Handels UI Displaying
 * 
 * OVERVIEW:
 *      Throughout the game, there are different displays, many of which are repetitive.
 *      It would be nice to have a way to request for the display you want and just have
 *      that one only show up
 * 
 * FUNCTIONALITY: 
 *      - Will contain all the displays for the application.
 *      - Will show the requested display.
 *      - etc..     
 */

App.Displayer = {}


/** Indexes of the pages on the app.**/

// Part 1: Setting up player
// __________________________
App.Displayer.CHOOSE_PROFESSION = 1
App.Displayer.PROFESSION_DIFFERENCES = 2;
App.Displayer.CHOOSE_LEADER_NAME = 3;
App.Displayer.CHOOSE_PARTY_NAMES = 4;
App.Displayer.CHOOSE_MONTH = 5;
App.Displayer.MONTH_ADVICE = 6;
App.Displayer.INTERMEDIATE_1 = 7; 
App.Displayer.INTERMEDIATE_2 = 8;

// Part 2: At Matt's store
// __________________________
App.Displayer.GENERAL_STORE = 9;
App.Displayer.GENERAL_STORE_OXEN = 10;
App.Displayer.GENERAL_STORE_FOOD = 11;
App.Displayer.GENERAL_STORE_CLOTHING = 12;
App.Displayer.GENERAL_STORE_BAIT= 13;
App.Displayer.GENERAL_STORE_WHEEL = 14;
App.Displayer.GENERAL_STORE_AXLE = 15;
App.Displayer.GENERAL_STORE_TONGUE = 16;

// Part 3: ...
// __________________________

App.Displayer.INTERMEDIATE_3 = 17;
// App.Displayer.;
// App.Displayer.;
// App.Displayer.;
// App.Displayer.;
// App.Displayer.;
// App.Displayer.;
// App.Displayer.;
// App.Displayer.;
// App.Displayer.;


// Shows the display based on requested display number
App.Displayer.showDisplayNum = function (displayNumber) {

    switch (displayNumber) {

        /** Part 1: Setting up character
         * 
         */
        case App.Displayer.CHOOSE_PROFESSION:
            App.Displayer.showDisplay_ChooseProfession()
            break;
        case App.Displayer.PROFESSION_DIFFERENCES:
            App.Displayer.showDisplay_ProfessionDifferences()
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
        case App.Displayer.MONTH_ADVICE:
            App.Displayer.showDisplay_MonthAdvice()
            break;
        case App.Displayer.INTERMEDIATE_1:
            App.Displayer.showDisplay_Intermediate1()
            break;
        case App.Displayer.INTERMEDIATE_2:
            App.Displayer.showDisplay_Intermediate2()
            break;

        /** Part 2: Matt's store 
         * 
         */
        case App.Displayer.GENERAL_STORE:
            App.Displayer.showDisplay_GeneralStore()
            break;
        case App.Displayer.GENERAL_STORE_OXEN:
            App.Displayer.showDisplay_GeneralStoreOxen()
            break;
        case App.Displayer.GENERAL_STORE_FOOD:
            App.Displayer.showDisplay_GeneralStoreFood()
            break;
        case App.Displayer.GENERAL_STORE_CLOTHING:
            App.Displayer.showDisplay_GeneralStoreClothing()
            break;
         case App.Displayer.GENERAL_STORE_BAIT:
            App.Displayer.showDisplay_GeneralStoreBait()
            break;
        case App.Displayer.GENERAL_STORE_WHEEL:
            App.Displayer.showDisplay_GeneralStoreWheel()
            break;
        case App.Displayer.GENERAL_STORE_AXLE:
            App.Displayer.showDisplay_GeneralStoreAxle()
            break;
        case App.Displayer.GENERAL_STORE_TONGUE:
            App.Displayer.showDisplay_GeneralStoreTongue()
            break;

        /** Part 3: Beginning Journey 
         *  
         */
        case App.Displayer.INTERMEDIATE_3:
            App.Displayer.showDisplay_Intermediate3()
            break;

        default:
            console.log(" >>POSSIBLE ERROR in Displayer.js<< No Display Number:", displayNumber)
        // TODO All of the display cases
    }
}


// ======================= THE DISPLAY FUNCTIONS ====================

/**
 * ================================================================
 * PART 1: Setting up character and getting to Matt's store
 * ================================================================
 */

// Profession choice display (CHOOSE_PROFESSION)
App.Displayer.showDisplay_ChooseProfession = function () {
    $(document).ready(function () {

        $("#main").html(
            `   <h1> Welcome to Oregon Trail (Testing) </h1> 
                <p> Many kinds of people made the trip to Oregon. 
                <br> 
                You may:  
                    <ol> 
                    <li>Be a banker from Boston</li> 
                    <li>Be a carpenter from Ohio</li> 
                    <li>Be a farmer from Illinois</li> 
                    <li>Find out the differences between these choices (Not implemented)</li> 
                    </ol> 
                </p> 
                <input type='number' id='input' name='input' min='1' max='3'> `
        );
    });
}

// Differences between professions (PROFESSION_DIFFERENCES)
App.Displayer.showDisplay_ProfessionDifferences = function () {
    $(document).ready(function () {
        $("#main").html(
            ` 
            <p>
                Traveling to Oregon isn't easy!
                But if you're banker, you'll have more money for supplies
                and service...
            </p> 

            <br>
            <p class="below">Press SPACE BAR to continue</p>
            `
        );
    });
}

// Leader name display (CHOOSE_LEADER_NAME)
App.Displayer.showDisplay_ChooseLeaderName = function () {
    $(document).ready(function () {

        $("#main").html(
            `<div id='nameChoiceDisplay'> 
                <h2> What is the first name of the wagon leader? </h2> 
                <input type='text' id='input' name='wagonLeader' maxlength='10'> 
            </div>`
        );
    });
}

// Party Names display (CHOOSE_PARTY_NAMES)
App.Displayer.showDisplay_ChoosePartyNames = function () {
    $(document).ready(function () {

        $("#main").html(
            ` <div id='partyChoiceDisplay'> 
                    <h3> What are the first names of the four other members in your party? </h3> 
                    <ol start='1'> 
                        <li id='partyLead'> </li> 
                        <li> <input type='text' id='input1' name='input1' maxlength='10'> </li> 
                        <li> <input type='text' id='input2' name='input2' maxlength='10'> </li> 
                        <li> <input type='text' id='input3' name='input3' maxlength='10'> </li> 
                        <li> <input type='text' id='input4' name='input4' maxlength='10'> </li> 
                    </ol> 
	          </div> `
        );
    });
}

// Choose month display (CHOOSE_MONTH)
App.Displayer.showDisplay_ChooseMonth = function () {
    $(document).ready(function () {

        $("#main").html(
            `
        <div id="monthChoiceDisplay">
            <p> It is 1848. Your jumping off place for Oregon is Independence, Missouri. <br>
                You must decided which month to leave Independence. 
            <br>
            <ol>
                <li>March</li>
                <li>April</li>
                <li>May</li>
                <li>June</li>
                <li>July</li>
                <li>Ask for adivce</li>
            </ol>
            <br>
            What is your choice? <input type="number" id="input" name="input" min="1" max="6">
            </p>
        </div>
            `
        );
    });
}

// Ask for advice on choosing month (MONTH_ADVICE)
App.Displayer.showDisplay_MonthAdvice = function () {
    $(document).ready(function () {
        $("#main").html(
            `
            <p> You attend a public meeting held for "folks with
                folks with California - .......
                <br><br>
                <p class="below">Press SPACE BAR to continue</p>
            </p>
            `
        );
    });
}


// Prompt 1 (INTERMEDIATE_1)
App.Displayer.showDisplay_Intermediate1 = function () {
    $(document).ready(function () {
        $("#main").html(
            `
            <p> Before leaving Independence you should buy 
                equipment and supplies, You have <span id="money"></span> in cash,
                but you dont' have to spend it all now. 
                <br>
                You can buy whatever you need at Matt's General Store.

                <br><br>
                <p class="below">Press SPACE BAR to continue</p>
            </p>
            `
        );
    });
}

// Prompt 2 (INTERMEDIATE_2)
App.Displayer.showDisplay_Intermediate2 = function () {
    $(document).ready(function () {
        $("#main").html(
            `
            <p> Hello, I'm Matt. so you're going to Oregon! 
                <br> 
                I can fix you up with what you need:
                <ul>
                    <li>a team of oxen to pull your wagon</li>
                    <li>clothing for both summer and winter</li>
                    <li>plenty of food for the trip</li>
                    <li>ammunition for your rifles</li>
                    <li>spare parts for your wagon</li>
                </ul>
                <br><br>
                <p class="below">Press SPACE BAR to continue</p>
            </p>            
            `
        );
    });
}

/**================================================================
 * PART 2: At Matt's store
 * ================================================================
 */

// Matt's general store (GENERALSTORE)
App.Displayer.showDisplay_GeneralStore = function () {
    $(document).ready(function () {
        $("#main").html(
            `
        <div id="storeMenuDisplay">
            <h2 id="mattsStore"> Matt's General Store </h2>
            <h3 id="generalStore"> General Store </h3> <!--Will be Fort _____'s General Store-->
            <h2 id="mattsLocation"> Independence, Missouri </h2>
            <br>
            <h3 id="currentDate"> </h3>
            <br>
            <ol> <!--All these will need to be edited to display current running cost of amount bought-->
                <li id="oxenPrice">Oxen                  $ <span id="priceOxen"></span></li>
                <li id="foodPrice">Food                  $ <span id="priceFood"></span></li>
                <li id="clothingPrice">Clothing          $ <span id="priceClothing"></span></li>
                <li id="baitPrice">Fishing Bait          $ <span id="priceBait"></span></li>
                <li id="wheelPrice">Wagon Wheel          $ <span id="priceWheel"></span></li>
                <li id="axlePrice">Wagon Axle            $ <span id="priceAxle"></span></li>
                <li id="tonguePrice">Wagon Tongue        $ <span id="priceTongue"></span></li>
            </ol>
            <br>
            <p id="bill">Total bill:    $<span id="totalPrice"></span></p>
            <br>
        
            <p id="">Amount you have:  $<span id="money"></span></p>

            <p>Which item would you like to buy? <input type="number" id="input" name="input" min="1" max="7"> </p>
            <br>
            <p class="below">Press SPACE BAR to leave store</p>

            <p hidden id="warning"> Make sure that you have oxen and aren't over you'r spending limit</p>
		</div>
            `
        );
    });
}

// Matt's general store (GENERALSTORE_OXEN)
App.Displayer.showDisplay_GeneralStoreOxen = function () {
    $(document).ready(function () {
        $("#main").html(
            `
            <p>There are 2 oxen in a yoke. I recommend at least 3 yoke.
            I charge $40 a yoke</p>
            <p>
		        How many yoke do you want? <input type="number" id="input" name="input" min="0" max="18">
		    </p>

            <p> Bill so far:  $<span id="bill"></span></p>
            `
        );
    });
}

// Matt's general store (GENERALSTORE_FOOD)
App.Displayer.showDisplay_GeneralStoreFood = function () {
    $(document).ready(function () {
        $("#main").html(
            `
            <p> I recommend you take at least 200 pound of....</p>
            <br>
            <p>
		        How many pounds of food do you want? <input type="number" id="input" name="input" min="0" max="2000">
		    </p>
            <p> Bill so far:  $<span id="bill"></span></p>
            `
        );
    });
}

// Matt's general store (GENERALSTORE_CLOTHING)
App.Displayer.showDisplay_GeneralStoreClothing = function () {
    $(document).ready(function () {
        $("#main").html(
            `
            <p> You'll need warm clothing...</p>
            <br>
            <p>
		        How many sets of clothes do you want? <input type="number" id="input" name="input" min="0" max="99">
		    </p>
            <p> Bill so far:  $<span id="bill"></span></p>
            `
        );
    });
}

// Matt's general store (GENERALSTORE_BAIT)
App.Displayer.showDisplay_GeneralStoreBait = function () {
    $(document).ready(function () {
        $("#main").html(
            `
             <p> Bait....</p>
            <br>
            <p>
		        How many baits do you want? <input type="number" id="input" name="input" min="0" max="200">
		    </p>
            <p> Bill so far:  $<span id="bill"></span></p>
            `
        );
    });
}

// Matt's general store (GENERALSTORE_WHEEL)
App.Displayer.showDisplay_GeneralStoreWheel = function () {
    $(document).ready(function () {
        $("#main").html(
            `
            <p> Wheels...</p>
            <br>
            <p>
		        How many wheels do you want? <input type="number" id="input" name="input" min="0" max="99">
		    </p>
            <p> Bill so far:  $<span id="bill"></span></p>
            `
        );
    });
}

// Matt's general store (GENERALSTORE_AXLE)
App.Displayer.showDisplay_GeneralStoreAxle = function () {
    $(document).ready(function () {
        $("#main").html(
            `
            <p> Axle...</p>
            <br>
            <p>
		        How many Axles do you want? <input type="number" id="input" name="input" min="0" max="99">
		    </p>
            <p> Bill so far:  $<span id="bill"></span></p>
            `
        );
    });
}

// Matt's general store (GENERALSTORE_TONGUE)
App.Displayer.showDisplay_GeneralStoreTongue = function () {
    $(document).ready(function () {
        $("#main").html(
            `
            <p> Tongue...</p>
            <br>
            <p>
		        How many Tongues do you want? <input type="number" id="input" name="input" min="0" max="99">
		    </p>
            <p> Bill so far:  $<span id="bill"></span></p>
            `
        );
    });
}

/**================================================================
 * PART 3: .....
 * ================================================================
 */

// Text directly after making purchases at Matt's store (INTERMEDIATE_3)
App.Displayer.showDisplay_Intermediate3 = function () {
    $(document).ready(function () {
        $("#main").html(
            `
            <p> Well then, you're ready to start.</p>
            <p> Good luck! You have a long and difficault journey ahead of you </p>
            <p class="below">Press SPACE BAR to continue</p>            
            `
        );
    });
}




