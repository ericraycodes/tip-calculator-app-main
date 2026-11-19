/**
 * MAIN LOGIC
 * 
 * 1. Wait for user to finish interacting with the input controls.
 * 2. Validate user inputs.
 * 3. When there is no tip percentage it defaults to zero percent.
 * 4. When the user inputted amounts of zero or less show invalid input indicator.
 * 5. Display the calculation result when required input fields are valid.
 * 
 */


// ## DOM NODE REFERENCES
const billLabel = document.getElementById("bill-label");
const numberOfPeopleLabel = document.getElementById("number-of-people-label");
const customTipLabel = document.getElementById("custom-tip-label");
const bill = document.getElementById("bill");
const numberOfPeople = document.getElementById("number-of-people")
const customTip = document.getElementById("custom-tip");


// Helper functions
const showOrRemoveInvalidInputIndicator = (inputNode, validity) => {
    // bill amount input
    if (inputNode.id === "bill") {
        validity ?
            billLabel.classList.remove("invalid") :
            billLabel.classList.add("invalid");
    }
    // number of people input
    else if (inputNode.id === "number-of-people") {
        validity ?
            numberOfPeopleLabel.classList.remove("invalid") :
            numberOfPeopleLabel.classList.add("invalid");
    }
    // custom tip input
    else if (inputNode.id === "custom-tip") {
        validity ?
            customTipLabel.classList.remove("invalid"):
            customTipLabel.classList.add("invalid");
    }
};


// ## EVENT HANDLERS
// Collect numeric input
const handleChange = (event) => {
    console.log(event.target.id, typeof event.target.valueAsNumber, event.target.value);

    // -----    2. VALIDATE INPUTS
    const inputValidity = event.target.valueAsNumber >= 0;
    console.log("validity:", inputValidity);

    // Show error when invalid
    showOrRemoveInvalidInputIndicator(event.target, inputValidity);
};


// -----     1. WAIT FOR USER INPUTS
// Bill amount <input #bill>
bill.addEventListener("input", handleChange);
numberOfPeople.addEventListener("input", handleChange);
customTip.addEventListener("input", handleChange);