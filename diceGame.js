
let rollCount4= [0];
let rollCount6= [0];
let rollCount8= [0];
let rollCount10= [0];
let rollCount12= [0];
let rollCount20= [0];
let finalRollAdd = [0];
let rollCountTotal = getRollCountTotal(rollCount4, rollCount6, rollCount8, rollCount10, rollCount12, rollCount20);
function runJackieChan(){
	// console.log("roll below 6");
	// rollLow();
	// console.log("roll a 3");
	// roll3();
	// console.log ("roll between 6 and 10");
	// rollBetween();
	// console.log("roll doubles");
	// rollDoubles();
	// console.log("roll 4 number that increase each time")
	rollIncrease();
// rollAbove(finalRollAdd, rollCountTotal);
}


function getRollCount4(rollCount4){
	rollCount4.push(1);
	return rollCount4;
}
function getRollCount6(rollCount6){
	rollCount6.push(1);
	return rollCount6;
}
function getRollCount8(rollCount8){
	rollCount8.push(1);
	return rollCount8;
}
function getRollCount10(rollCount10){
	rollCount10.push(1);
	return rollCount10;
}
function getRollCount12(rollCount12){
	rollCount12.push(1);
	return rollCount12;
}
function getRollCount20(rollCount20){
	rollCount20.push(1);
	return rollCount20;
}
function getRollCountTotal(rollCount4, rollCount6, rollCount8, rollCount10, rollCount12, rollCount20){
	let rollCountTotal = (rollCount4.length + rollCount6.length + rollCount8.length + rollCount10.length + rollCount12.length + rollCount20.length);
	return rollCountTotal;
}

function roll (){
	let diceSelect = getRoll();
	while (diceSelect !=="4" && diceSelect !=="6" && diceSelect !=="8" && diceSelect !=="10" && diceSelect !=="12" && diceSelect !=="20"){
		console.log("Please enter 4, 6, 8, 10, 12, or 20");
		diceSelect = getRoll();
	}
	if (diceSelect === "4"){
	rollCount4 = getRollCount4(rollCount4);
	let roll = getRoll4(diceSelect, rollCount4);
	return roll;
	}
	else if (diceSelect === "6"){
	rollCount6 = getRollCount6(rollCount6);
	let roll = getRoll6(diceSelect, rollCount6);
	return roll;
	}
	else if (diceSelect === "8"){
	rollCount8 = getRollCount8(rollCount8);
	let roll = getRoll8(diceSelect, rollCount8);
	return roll;
	}
	else if (diceSelect === "10"){
	rollCount10 = getRollCount10(rollCount10);
	let roll = getRoll10(diceSelect, rollCount10);
	return roll;
	}
	else if (diceSelect === "12"){
	rollCount12 = getRollCount12(rollCount12);
	let roll = getRoll12(diceSelect, rollCount12);
	return roll;
	}
	else if (diceSelect === "20"){
	rollCount20 = getRollCount20(rollCount20);
	let roll = getRoll20(diceSelect, rollCount20);
	return roll;
	}
	console.log(getRollCountTotal(rollCount4, rollCount6, rollCount8, rollCount10, rollCount12, rollCount20));
}

function getRoll(){
	let diceSelect = prompt("enter # sided dice here. ex: 6");
	return diceSelect;
}
function getRoll4(diceSelect, rollCount4) {
	let rollNumber = 6 + 2;
	if (rollCount4.length < rollNumber){
    let roll4 = Math.floor(Math.random() * ((4 - 1) + 1) + 1);
    console.log("You rolled a " + roll4);
    return roll4;
    }
    else if (rollCount4.length >= rollNumber){
    	console.log("You are out of 4-sided rolls!!!");
    	reRollOption();
    }    
}
function getRoll6(diceSelect, rollCount6) {
	let rollNumber = 6 + 2;
	if (rollCount6.length < rollNumber){
    let roll6 = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    console.log("You rolled a " + roll6);
    return roll6;
    }
    else if (rollCount6.length >= rollNumber){
    	console.log("You are out of 6-sided rolls!!!");
    	reRollOption();
    }    
}
function getRoll8(diceSelect, rollCount8) {
	let rollNumber = 6 + 2;
	if (rollCount8.length < rollNumber){
    let roll8 = Math.floor(Math.random() * ((8 - 1) + 1) + 1);
    console.log("You rolled a " + roll8);
    return roll8;
    }
    else if (rollCount8.length >= rollNumber){
    	console.log("You are out of 8-sided rolls!!!");
    	reRollOption();
    }    
}
function getRoll10(diceSelect, rollCount10) {
	let rollNumber = 6 + 2;
	if (rollCount10.length < rollNumber){
    let roll10 = Math.floor(Math.random() * ((10 - 1) + 1) + 1);
    console.log("You rolled a " + roll10);
    return roll10;
    }
    else if (rollCount10.length >= rollNumber){
    	console.log("You are out of 10-sided rolls!!!");
    	return roll;
    	reRollOption();
    }    
}
function getRoll12(diceSelect, rollCount12) {
	let rollNumber = 6 + 2;
	if (rollCount12.length < rollNumber){
    let roll12 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
    console.log("You rolled a " + roll12);
    return roll12;
    }
    else if (rollCount12.length >= rollNumber){
    	console.log("You are out of 12-sided rolls!!!");
    	reRollOption();
    }    
}
function getRoll20(diceSelect, rollCount20) {
	let rollNumber = 6 + 2;
	if (rollCount20.length < rollNumber){
    let roll20 = Math.floor(Math.random() * ((20 - 1) + 1) + 1);
    console.log("You rolled a " + roll20);
    return roll20;
    }
    else if (rollCount20.length >= rollNumber){
    	console.log("You are out of 20-sided rolls!!!");
    	return roll;
    	reRollOption();

    }    
}
function reRollOption(){
	let reRoll = true;
	while (reRoll === true){
		let rollQuestion = prompt("would you like to re-roll?");
		if (rollQuestion === "y" || rollQuestion === "Y" || rollQuestion === "Yes" || rollQuestion === "yes"){
			reRoll = false;
			return roll();
		}
		else {
			reRoll = false;
		}
	}
}
runJackieChan();

function rollLow(){
	let roll1 = roll();
	if (roll1 > 6){
		console.log("you did it");
	}
	else if (roll1 < 6){
	let roll1 = reRollOption();
		if (roll1 > 6){
			console.log("you did it");
		}
		else if (roll1 < 6){
			rollLowFlup();
		}

	}
}
function rollLowFlup(){
	let roll1 = reRollOption();
	if (roll1 > 6){
			console.log("you did it");
		}
		else if (roll1 < 6){
			rollLowFlup();
		}
}
function roll3(){
	let roll1 = roll();
	if (roll1 === 3){
		console.log("you did it");
	}
	else if (roll1 !==3){
		let roll1 = reRollOption();
		if (roll1 === 3){
			console.log("you did it");
		}
		else if (roll1 !== 3){
			roll3Flup();
		}
	}
}
function roll3Flup(){
	let roll1 = reRollOption();
	if (roll1 === 3){
			console.log("you did it");
		}
		else if (roll1 !==3){
			roll3Flup();
		}
}
function rollBetween(){
	let roll1 = roll();
	if (roll1 > 6 && roll1 < 10){
		console.log("you did it");
	}
	else if (roll1 < 6 || roll1 > 10){
		let roll1 = reRollOption();
		if (roll1 > 6 && roll1 < 10){
			console.log("you did it");
		}
		else if (roll1 < 6 || roll1 > 10){
			rollBetweenFlup();
		}
	}
}
function rollBetweenFlup(){
	let roll1 = reRollOption();
	if (roll1 > 6 && roll1 < 10){
			console.log("you did it");
		}
		else if (roll1 < 6 || roll1 > 10){
			rollBetweenFlup();
		}
}
function rollDoubles(){
	let roll1 = roll();
	let roll2 = roll();
	if (roll1 === roll2){
		console.log("you did it");
	}
	else if (roll1 !== roll2){
		let roll2 = reRollOption();
		if (roll1 === roll2){
			console.log("you did it");
		}
		else if (roll1 !== roll2){
			rollDoublesFlup(roll1);
		}
	}
}
function rollDoublesFlup(roll1){
	let roll2 = reRollOption();
	if (roll1 === roll2){
			console.log("you did it");
		}
		else if (roll1 !== roll2){
			rollDoublesFlup();
		}
}
function rollIncrease(){
	let roll1 = roll();
	let change = prompt("Would you like to change your first roll?");
	if (change === "y" || change === "Y" || change === "Yes" || change === "yes"){
	roll1 = reRollOption();
	}
	let roll2 = roll();
	if (roll2 > roll1){
		console.log("you did it");
		rollIncreaseThird(roll2);
	}
	else if (roll1 >= roll2){
		rollIncreaseFlup(roll1);

	}
}
function rollIncreaseFlup(roll1){
	let roll2 = reRollOption();
	if (!roll2){
		console.log("you must re-roll");
		rollIncreaseFlup(roll1);

	}
	else if (roll1 < roll2){
		console.log("you did it");
		rollIncreaseThird(roll2);
	}
	else if (roll1 >= roll2){
		rollIncreaseFlup(roll1);
	}
}
function rollIncreaseThird(roll2){
	let roll3 = roll();
	if (roll3 > roll2){
		console.log("you did it");
		rollIncreaseFourth(roll3);
	}
	else if (roll2 >= roll3){
		rollIncreaseThirdFlup(roll2);
	}
}
function rollIncreaseThirdFlup(roll2){
	let roll3 = reRollOption();
	if (!roll3){
		console.log("you must re-roll");
		rollIncreaseThirdFlup(roll2);

	}
	else if (roll2 < roll3){
		console.log("you did it");
		rollIncreaseFourth(roll3);
	}
	else if (roll2 >= roll3){
		rollIncreaseThirdFlup(roll2);
	}
}
function rollIncreaseFourth(roll3){
	let roll4 = roll();
	if (roll4 > roll3){
		console.log("you did it");
	}
	else if (roll3 >= roll4){
		rollIncreaseFourthFlup(roll3);
	}
}
function rollIncreaseFourthFlup(roll3){
	let roll4 = reRollOption();
	if (!roll4){
		console.log("you must re-roll");
		rollIncreaseFourthFlup(roll3);

	}
	else if (roll3 < roll4){
		console.log("you did it");
	}
	else if (roll3 >= roll4){
		rollIncreaseFourthFlup(roll3);
	}
}
function rollAbove(rollCountTotal, finalRollAdd){
	let roll1 = roll();
	let rollTotal;
	let finalTotal = [];
	finalTotal += finalTotal.push(1);
		for (i=0; i < rollCountTotal - 6; i++){
			rollTotal += finalRollAdd[i];
		}
		if (rollTotal > "5"){
			console.log("you won!");
		}
		else {
			rollAbove(rollCountTotal, finalRollAdd);
		}
}
