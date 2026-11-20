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
const validateNumericValue = (id, valueTypeString, value) => {
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
    // -----    1. Collect input
    const inputId = event.target.id;
    const stringValue = event.target.value;
    const numericValue = event.target.valueAsNumber;
    console.log("number-input:", inputId, stringValue, numericValue);

    // -----    2-3. Input validity and indication
    validateNumericValue(inputId, stringValue, numericValue);
}


// ##   EVENT LISTENERS
billInput.addEventListener("input", handleNumberInput);