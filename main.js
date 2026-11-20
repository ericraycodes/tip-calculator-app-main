/**
 * MAIN LOGIC
 * 
 *  1.  Collect every user input-interaction from input controls.
 *  2.  Validate inputs.
 *  3.  Show indicators when user input is invalid.
 *  4.  Simultaneous calculation of result.
 *  5.  Show calculation result when validated inputs are available.
 */


// ##   DOM NODES
const billInput = document.getElementById("bill-input");
const numberOfPeopleInput = document.getElementById("number-of-people-input");


// ##   EVENT HANDLERS
function handleNumberInput (event) {
    // -----    1. Collect input numeric value
    const numericValue = event.target.valueAsNumber;
    console.log("number-input:", event.target.id, event.target.value, numericValue);
}


// ##   EVENT LISTENERS
billInput.addEventListener("input", handleNumberInput);