let resultsArray = [];


function clearArray() {
    resultsArray =[];
}


function rollDice(diceNumber){
    let result = Math.floor(Math.random()* diceNumber +1);
    resultsArray.push(result);
    return resultsArray;
}

function callXtimes(value, diceNumber, func){
    console.log(value, diceNumber);
    for(i=0; i <value; i++){
        func(diceNumber);
    }
    alert(`You rolled a ${resultsArray}`);
    clearArray();
}

const d4 = {
   diceNumber:4,
    value: 2
}

const d6 = {
    diceNumber:6,
    value:3
}

const d8 = {
    diceNumber:8
}

const d10 = {
    diceNumber:10
}

function rolld4() {
d4.rollDice = rollDice;

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
    // d6.rollDice();
    d6.callXtimes = callXtimes;
    d6.callXtimes(d6.value, d6.diceNumber, d6.rollDice);
}

function rolld8(){
    d8.rollDice = rollDice;
    d8.rollDice();
}

function rolld10(){
    d10.rollDice = rollDice;
    d10.rollDice();
}
// let resultsArray = [];

// function clearArray() {
//     resultsArray =[];
// }



// function rollDice4() {
//     let dropDownBox = document.getElementById("d4");
//     let dropDownBoxResult = parseInt(dropDownBox.options[dropDownBox.selectedIndex].value);
//     for(i =0; i < dropDownBoxResult; i++){
//         let result = Math.floor(Math.random()*4 +1);
//         resultsArray.push(result);
//         console.log(resultsArray);
//     }
//     alert("You rolled a " + resultsArray);
//     clearArray();
//   }

//   function d4WithAdvantage(){
//     for(j =0; j <2; j++){
//         let result = Math.floor(Math.random()*4 +1);
//         resultsArray.push(result);
//         console.log(resultsArray);
//     }
//     if(resultsArray[0] >= resultsArray[1]){
//         alert("You rolled a " + resultsArray[0]);
//     } else {
//         alert("You rolled a " + resultsArray[1]);
//     }
//     clearArray();
// }

// function d4WithDisadvantage(){
//     for(j =0; j <2; j++){
//         let result = Math.floor(Math.random()*4 +1);
//         resultsArray.push(result);
//         console.log(resultsArray);
//     }
//     if(resultsArray[0] <= resultsArray[1]){
//         alert("You rolled a " + resultsArray[0]);
//     } else {
//         alert("You rolled a " + resultsArray[1]);
//     }
//     clearArray();
// }
