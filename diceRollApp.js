let resultsArray = [];

function clearArray() {
    resultsArray =[];
}

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



function rollDice(diceNumber){
    diceNumber = this.diceNumber
    alert(Math.floor(Math.random()* diceNumber +1));
}

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

function rolld4() {
d4.rollDice = rollDice;
d4.rollDice();
}

function rolld6() {
    d6.rollDice = rollDice;
    d6.rollDice();
}

function rolld8(){
    d8.rollDice = rollDice;
    d8.rollDice();
}

function rolld10(){
    d10.rollDice = rollDice;
    d10.rollDice();
}


