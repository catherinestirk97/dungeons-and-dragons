//dice objects
const d4 = {
    diceNumber:4
 }
 
 const d6 = {
     diceNumber:6
 }
 
 const d8 = {
     diceNumber:8
 }
 
 const d10 = {
     diceNumber:10
 }

 const d12 = {
    diceNumber:12
}

const d20 = {
    diceNumber:20
}

//empty array for results to be pushed to
let resultsArray = [];

//rollDice function will read how many sides the dice has and randomly generate a number between 1 and the amount of sides
function rollDice(diceNumber){
    let result = Math.floor(Math.random()* diceNumber +1);
    resultsArray.push(result);
    return resultsArray;
}

//callXtimes function will call the rollDice function the number of times the user has selected from the dropdown box
function callXtimes(value, diceNumber, func){
    clearArray();
    console.log(value, diceNumber);
    for(i=0; i <value; i++){
        func(diceNumber);
    }
    alert(`You rolled a ${resultsArray}`);
}

function clearArray() {
    resultsArray =[];
}

function getd4DropdownResult(){
//making value equal to what the user selects from the dropdown box
    let d4dropdown = document.getElementById("d4");
    let d4dropdownResult = parseInt(d4dropdown.value);
    console.log(d4dropdownResult);
    return d4dropdownResult;
}

function rolld4() {
d4.rollDice = rollDice;
d4.getd4DropdownResult = getd4DropdownResult;
d4.value = d4.getd4DropdownResult();
// d4.rollDice();
// console.log(d4.value);
// d4.callXtimes = callXtimes;
// d4.callXtimes(d4.value, rollDice)
d4.callXtimes = callXtimes;
//d4.callXtimes(d4.value,d4.diceNumber);
d4.callXtimes(d4.value,d4.diceNumber,d4.rollDice);
//bar(function(){ foo("Hello World!") });

}

function rolld6() {
    d6.rollDice = rollDice;
    d6.getd6DropdownResult = getd6DropdownResult;
    d6.value = d6.getd6DropdownResult();
    d6.callXtimes = callXtimes;
    d6.callXtimes(d6.value,d6.diceNumber,d6.rollDice);
}

function getd6DropdownResult(){
        let d6dropdown = document.getElementById("d6");
        let d6dropdownResult = parseInt(d6dropdown.value);
        console.log(d6dropdownResult);
        return d6dropdownResult;
    }

function rolld8(){
    d8.rollDice = rollDice;
    d8.getd8DropdownResult = getd8DropdownResult;
    d8.value = d8.getd8DropdownResult();
    d8.callXtimes = callXtimes;
    d8.callXtimes(d8.value,d8.diceNumber,d8.rollDice);
}

function getd8DropdownResult(){
    let d8dropdown = document.getElementById("d8");
    let d8dropdownResult = parseInt(d8dropdown.value);
    console.log(d8dropdownResult);
    return d8dropdownResult;
}

function rolld10(){
    d10.rollDice = rollDice;
    d10.getd10DropdownResult = getd10DropdownResult;
    d10.value = d10.getd10DropdownResult();
    d10.callXtimes = callXtimes;
    d10.callXtimes(d10.value,d10.diceNumber,d10.rollDice);
}

function getd10DropdownResult(){
    let d10dropdown = document.getElementById("d10");
    let d10dropdownResult = parseInt(d10dropdown.value);
    console.log(d10dropdownResult);
    return d10dropdownResult;
}

function rolld12(){
    d12.rollDice = rollDice;
    d12.getd12DropdownResult = getd12DropdownResult;
    d12.value = d12.getd12DropdownResult();
    d12.callXtimes = callXtimes;
    d12.callXtimes(d12.value,d12.diceNumber,d12.rollDice);
}

function getd12DropdownResult(){
    let d12dropdown = document.getElementById("d12");
    let d12dropdownResult = parseInt(d12dropdown.value);
    console.log(d12dropdownResult);
    return d12dropdownResult;
}

function rolld20(){
    d20.rollDice = rollDice;
    d20.getd20DropdownResult = getd20DropdownResult;
    d20.value = d20.getd20DropdownResult();
    d20.callXtimes = callXtimes;
    d20.callXtimes(d20.value,d20.diceNumber,d20.rollDice);
}

function getd20DropdownResult(){
    let d20dropdown = document.getElementById("d20");
    let d20dropdownResult = parseInt(d20dropdown.value);
    console.log(d20dropdownResult);
    return d20dropdownResult;
}

function withAdvantage(diceNumber){
    console.log(diceNumber.diceNumber)
       rollDice(diceNumber.diceNumber);
       rollDice(diceNumber.diceNumber);
        console.log(resultsArray);
        if(resultsArray[0]>= resultsArray[1]){
            alert("You rolled: " + resultsArray + ". " + "Because of advantage, you use the " + resultsArray[0] + ".");
        } else {
            alert("You rolled: " + resultsArray + ". " + "Because of advantage, you use the " + resultsArray[1] + ".");
        }
        clearArray();
    }

function withDisadvantage(diceNumber) {
    console.log(diceNumber.diceNumber)
    rollDice(diceNumber.diceNumber);
    rollDice(diceNumber.diceNumber);
    console.log(resultsArray);
    if (resultsArray[0] >= resultsArray[1]) {
        alert("You rolled: " + resultsArray + ". " + "Because of disadvantage, you use the " + resultsArray[1] +".");
    } else {
        alert("You rolled: " + resultsArray + ". " + "Because of disadvantage, you use the " + resultsArray[0] + ".");
    }
    clearArray();
}