/**
 * MAIN LOGIC
 * 
 *  1.  Collect every user input-interaction from input controls.
 *  2.  Indicate when inputs are not valid for calculation.
 *  3.  Store valid inputs for calculation.
 *  4.  Show calculation results when calculation can be successful.
 */


// ##   INPUT STORE
const INPUT = {
    "bill-input": 0,
    "custom-tip-input": 0,
    "number-of-people-input": 0
}


// ##   DOM NODES
const billInput = document.getElementById("bill-input");
const customTipInput = document.getElementById("custom-tip-input");
const numberOfPeopleInput = document.getElementById("number-of-people-input");
const customTipRadioButton = document.getElementById("custom-tip-radio");


// ##   HELPER FUNCTIONS
const indicateInputValidity = (id, value, validity) => {
    const indicatorNode = document.getElementById(id + "-label");
    console.log("zero?", Number(value));
    // when input is valid
    if (validity) {
        if (
            value!=="" && 
            Number(value)===0 && 
            id!=="custom-tip-input"
        ) {
            indicatorNode.classList.add("zero");
        }
        else {
            indicatorNode.classList.remove("zero");
        }
        indicatorNode.classList.remove("invalid");
    }
    // when input is invalid
    else if (!validity) {
        indicatorNode.classList.remove("zero");
        indicatorNode.classList.add("invalid");
    }
};
const storeValidInputs = (id, value) => {
    const numericValue = Number(value);
    INPUT[id] = numericValue ? numericValue: 0;
    console.log("update store:", INPUT);
};


// ##   EVENT HANDLERS
function handleNumberInput (event) {
    // ---  1. COLLECT INPUT
    const id = event.target.id;
    const value = event.target.value;
    const validity = event.target.checkValidity();
    console.log("INPUT:", id, value, validity);

    // ---  2. INDICATE VALIDITY
    indicateInputValidity(id, value, validity);

    // ---  3. UPDATE INPUT
    storeValidInputs(id, value, validity);
}
function handleCustomInputClick () {
    console.log("custom input clicked");
    customTipRadioButton.checked = true;
}


// ##   EVENT LISTENERS
billInput.addEventListener("input", handleNumberInput);
customTipInput.addEventListener("input", handleNumberInput);
numberOfPeopleInput.addEventListener("input", handleNumberInput);
customTipInput.addEventListener("click", handleCustomInputClick);