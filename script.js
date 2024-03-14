// Write your JavaScript code here!

// const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

    //Task 3
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch(); // This value is going to be a promise.
    //console.log(listedPlanetsResponse); // To check the output.

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        //console.log(listedPlanets);
    }).then(function () {
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let selectedPlanet = pickPlanet(listedPlanets);
        console.log(selectedPlanet);

        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance,  selectedPlanet.moons, selectedPlanet.image);
    });

    //formSubmission 
    const form = document.querySelector('form');
    const list = document.querySelector('#faultyItems');
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // This ensure that that when the form is submitted , it will prevent it from loading with out requirements
        const pilot = document.querySelector("input[name=pilotName]").value; // input element with the attribute name equal to "pilotName" using the querySelector method. It then retrieves the value entered into this input field and assigns it to the variable pilot.
        const copilot = document.querySelector("input[name=copilotName]").value; // same as above
        const fuelLevel = document.querySelector("input[name=fuelLevel]").value; // same as above
        const cargoLevel = document.querySelector("input[name=cargoMass]").value;// same as above
        //const button = document.querySelector(button);
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });        
});