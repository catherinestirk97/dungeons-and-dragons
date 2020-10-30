let resultsArray = [];

function clearArray() {
    resultsArray =[];
}

function rollDice4() {
    let dropDownBox = document.getElementById("d4");
    let dropDownBoxResult = parseInt(dropDownBox.options[dropDownBox.selectedIndex].value);
    for(i =0; i < dropDownBoxResult; i++){
        let result = Math.floor(Math.random()*4 +1);
        resultsArray.push(result);
        console.log(resultsArray);
    }
    alert("You rolled a " + resultsArray);
    clearArray();
  }

  function d4WithAdvantage(){
    for(j =0; j <2; j++){
        let result = Math.floor(Math.random()*4 +1);
        resultsArray.push(result);
        console.log(resultsArray);
    }
    if(resultsArray[0] >= resultsArray[1]){
        alert("You rolled a " + resultsArray[0]);
    } else {
        alert("You rolled a " + resultsArray[1]);
    }
    clearArray();
}

function d4WithDisadvantage(){
    for(j =0; j <2; j++){
        let result = Math.floor(Math.random()*4 +1);
        resultsArray.push(result);
        console.log(resultsArray);
    }
    if(resultsArray[0] <= resultsArray[1]){
        alert("You rolled a " + resultsArray[0]);
    } else {
        alert("You rolled a " + resultsArray[1]);
    }
    clearArray();
}

