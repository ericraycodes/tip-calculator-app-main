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


// ##   HELPER FUNCTIONS
const validateNumericValue = (id, value) => {
    // validate bill amount inputs
    const isValid = value > 0;

    // Show or remove indicators
    const indicatorNode = document.getElementById(id + "-label");
    if (value > 0) {
        indicatorNode.classList.remove("zero");
        indicatorNode.classList.remove("invalid");
    }
    else if (value === 0) {
        indicatorNode.classList.add("zero");
        indicatorNode.classList.remove("invalid");
    }
    else {
        indicatorNode.classList.remove("zero");
        indicatorNode.classList.add("invalid");
    }
}


// ##   EVENT HANDLERS
function handleNumberInput (event) {
    // -----    1. Collect input numeric value
    const numericValue = event.target.valueAsNumber;
    console.log("number-input:", event.target.id, event.target.value, numericValue);

    // -----    2-3. Input validity and indication
    validateNumericValue(event.target.id, numericValue);
}


// ##   EVENT LISTENERS
billInput.addEventListener("input", handleNumberInput);