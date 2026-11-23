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
const indicateInputValidity = (id, value) => {
    /**
     * Numeric values for calculation are positive values.
     * Zero is not acceptable for calculation.
     * 
     * INPUT CASES:
     *  -   Positive value (greater than zero)
     *  -   0 (zero)
     *  -   Negative value (lesser than zero)
     *  -   With decimal value
     *  -   NaN
     */
    // Show or remove indicators
    const indicatorNode = document.getElementById(id + "-label");
    // when positive value
    if (value > 0) {
        indicatorNode.classList.remove("zero");
        indicatorNode.classList.remove("invalid");
    }
    // when zero
    else if (value === 0) {
        indicatorNode.classList.add("zero");
        indicatorNode.classList.remove("invalid");
    }    
    // when negative value or 'not-a-number'
    else {
        indicatorNode.classList.remove("zero");
        indicatorNode.classList.add("invalid");
    }
}


// ##   EVENT HANDLERS
function handleNumberInput (event) {
    // -----    1. Collect input
    const id = event.target.id;
    const stringValue = event.target.value;
    const value = event.target.valueAsNumber;
    console.log("handle-input:", id, stringValue, value);

    // -----    2. Input validity and indication
    indicateInputValidity(id, value);
}


// ##   EVENT LISTENERS
billInput.addEventListener("input", handleNumberInput);