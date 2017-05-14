"use strict"

/**
 * SUMMARY: 
 *      Handels animations for the traveling display.
 *      Get the player from point a to point b where point a is the 
 *      far right of the screen and point b is the far left (where the landmark is)
 *      
 * OVERVIEW: 
 *      The animations should consist of moving a cart in a single incrimental steps 
 *      
 * 
 * FUNCTIONALITY:
 *      - Maintains the state of the cart in the game.
 *      - Controls cart movement
 *      - Knows when at destination
 *      - etc....  
 */

App.Animation = {}

App.Animation.init = function () {
    this.cartPosition = 0; // cart position from 
    this.atDestination = false;
}

// moves the cart a certain distance
App.Animation.step = function (pace) {
    $(function () {

        var cart = document.getElementById("cart");
        var width = 500 - 100; //#container width - (cart width + river width) has to be hardcoded. style.width returns "500px"

        var currentLandmark = App.State.getLocation()
        var futureLandmark = currentLandmark.nextLocation;
        var distanceBetweenLandmarks = futureLandmark.distance - currentLandmark.distance;

        // Arrived at the distination when the cart has reached to far left side
        if (App.Animation.cartPosition >= width) {

            App.Animation.atDestination = true;
            // App.Animation.reset();
            console.log("Reached destination!")
        } else {

            // Pace must be scaled to match a 400 width frame.
            // Equation: (width/distance to next location) * pace = the incremental distance on the frame.
            let scaledPace = parseInt((width / distanceBetweenLandmarks) * pace);

            // console.log(">>>>>>>>>>>>>>>>", scaledPace);
            App.Animation.cartPosition += scaledPace;

            // don't go over width(left side of the frame)
            if (App.Animation.cartPosition > width) {
                App.Animation.cartPosition = width;
            }
            // move the cart
            cart.style.right = App.Animation.cartPosition + 'px';

            // Ensure that the player doesn't travel past the next location.
            if ((App.State.getMilesTraveled() + pace) > futureLandmark.distance) {
                App.State.setMilesTraveled(futureLandmark.distance);
            }
            else {// player hasn't reached or gone past the landmark
                App.State.addMilesTraveled(pace);
            }
        }
    })
}

App.Animation.isAtDestination = function () {
    return this.atDestination;
}

App.Animation.reset = function () {
    this.cartPosition = 0; // cart position from 
    this.atDestination = false;
    // this.distanceToTravel = 0;
}

