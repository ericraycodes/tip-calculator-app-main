/**
 * MAIN LOGIC
 * 
 * 1. Wait for user to finish interacting with the input controls.
 * 2. Validate user inputs.
 * 3. When there is no tip percentage it defaults to zero percent.
 * 4. When the user inputted amounts of zero or less show invalid input indicator.
 */


// ## DOM NODE REFERENCES
const bill = document.getElementById("bill");
const numberOfPeople = document.getElementById("number-of-people")


// Helper functions
const isInputValid = (e) => {
    // validity for number of people input
    if (e.target.id === "number-of-people") {
        return /^[0-9]+$/.test(e.target.value);
    }

    const rgx = /^[0-9.]+$/;
    const validity = rgx.test(e.target.value);
    console.log(e.target.value, e.target.id, validity);
    return validity;
};


// ## EVENT HANDLERS
// Collect numeric input
const handleChange = (event) => {
    console.log("on change");

    // -----    2. VALIDATE INPUTS
    const validity = isInputValid(event);
};


// -----     1. WAIT FOR USER INPUTS
// Bill amount <input #bill>
bill.addEventListener("change", handleChange);
numberOfPeople.addEventListener("change", handleChange);