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
    billAmount: 0,
    tipPercentage: 0,
    numberOfPayors: 0
}


// ##   DOM NODES
const billInput = document.getElementById("bill-input");
const customTipInput = document.getElementById("custom-tip-input");
const numberOfPeopleInput = document.getElementById("number-of-people-input");
const customTipRadioButton = document.getElementById("custom-tip-radio");
const tipSelection = document.getElementById("tip-selection");


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
const storeValidInputs = (id, value, validity) => {
    // which store property is updated
    let property;
    switch (true) {
        case /bill/.test(id):
            property = "billAmount";
            break;
        case /tip/.test(id):
            property = "tipPercentage";
            break;
        case /people/.test(id):
            property = "numberOfPayors";
            break;
        default: break;
    }

    // update store
    INPUT[property] = validity ? Number(value): 0;
    console.log("update store:", INPUT);
};
const finalizeResult = (value) => {
    console.log("finalize:", typeof value, value);
    // when values are extremes or zero
    if (value===0 || Number.isNaN(value) || value===Infinity) return "0.00";
    // real numeric values round off to the hundredths
    return Math.round(value * 100) / 100;
}
const splitBill = (store) => {
    const splittedBill = store.billAmount / store.numberOfPayors;
    console.log("bill pax:", splittedBill);
    const splittedTip = splittedBill * store.tipPercentage/100;
    console.log("tip pax:", splittedTip);
    const splittedTippedPayment = splittedBill + splittedTip;
    console.log("tipped bill pax:", splittedTippedPayment);
    // return two final results
    return [
        finalizeResult(splittedTip),
        finalizeResult(splittedTippedPayment)
    ];
};


// ##   EVENT HANDLERS
function handleNumberInput (event) {
    // ---  1. COLLECT INPUT
    const id = event.target.id || event.target.name;
    const value = event.target.value;
    const validity = event.target.checkValidity();
    console.log("INPUT:", id, value, validity);

    // automatic checked when custom input is filled out
    if (id === "custom-tip-input") customTipRadioButton.checked = true;

    // ---  2. INDICATE VALIDITY
    if (id !== "tip") indicateInputValidity(id, value, validity);

    // ---  3. UPDATE INPUT
    storeValidInputs(id, value, validity);

    // ---  CALCULATE
    const [tipAmountPerPerson, totalAmountPerPerson] = splitBill(INPUT);
    console.log("result:", tipAmountPerPerson, totalAmountPerPerson);
}


// ##   EVENT LISTENERS
billInput.addEventListener("input", handleNumberInput);
customTipInput.addEventListener("input", handleNumberInput);
numberOfPeopleInput.addEventListener("input", handleNumberInput);
customTipInput.addEventListener("click", handleNumberInput);
tipSelection.addEventListener("change", handleNumberInput);