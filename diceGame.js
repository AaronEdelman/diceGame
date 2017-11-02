let rollCount4= [0];
let rollCount6= [0];
let rollCount8= [0];
let rollCount10= [0];
let rollCount12= [0];
let rollCount20= [0];

function roll (){
	let diceSelect = getRoll();
	if (diceSelect === "4"){

	}
	else if (diceSelect === "6"){
	rollCount6 = getRollCount6(rollCount6);
	let roll6 = getRoll6(diceSelect, rollCount6);
	}
	else if (diceSelect === "8"){
	rollCount6 = getRollCount6(rollCount6);
	let roll6 = getRoll6(diceSelect, rollCount6);
	}
	else if (diceSelect === "10"){
	rollCount6 = getRollCount6(rollCount6);
	let roll6 = getRoll6(diceSelect, rollCount6);
	}
	else if (diceSelect === "12"){
	rollCount6 = getRollCount6(rollCount6);
	let roll6 = getRoll6(diceSelect, rollCount6);
	}
	else if (diceSelect === "20"){
	rollCount6 = getRollCount6(rollCount6);
	let roll6 = getRoll6(diceSelect, rollCount6);
	}
	else{
		console.log("Please enter 4, 6, 8, 10, 12, or 20");
	}
}

function getRoll(){
	let diceSelect = prompt("enter # sided dice here. ex: 6");
	return diceSelect;
}

function getRoll6(diceSelect, rollCount6) {
	let rollNumber = 6 + 2;
	if (diceSelect === "6" && rollCount6.length < rollNumber){
    let roll6 = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    console.log("You rolled a " + roll6);
    return roll6;
    }
    else if (diceSelect === "6" && rollCount6.length >= rollNumber){
    	console.log("You are out of 6-sided rolls!!!");
    }    
}
function reRollOption(){
	let reRoll = true;
	while (reRoll === true){
		let rollQuestion = prompt("would you like to re-roll?");
		if (rollQuestion === "y" || rollQuestion === "Y" || rollQuestion === "Yes" || rollQuestion === "yes"){
			roll();
		}
		else {
			reRoll = false;
		}
	}
}
monster1();

function monster1(){
	
	roll();
	reRollOption();
}

function getRollCount6(rollCount6){
	rollCount6.push(1);
	return rollCount6;
}
