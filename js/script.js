console.log('Hello, front end');


function calculateTemp(unit, degree){
	if(unit === "C"){
		//convert to ferinheigt
		return Math.floor(((degree * 9) / 5) + 32);
	}
	else{
		//convert to celcius
		return Math.floor(((degree - 32) / 9) * 5);
	}
}

function checkUnit(){
	if( document.querySelector("input[id=tempC]").checked){
		return "C";
	}
	else{
		return "F";
	}
}

function displayUnit(){
	if( document.querySelector("input[id=tempC]").checked){
		return "F";
	}
	else{
		return "C";
	}
}

function clearDisplays(){
	document.querySelector("h3[id=resultTemp]").innerHTML = "";
	document.querySelector("input[id=temp]").value = "";
}

var calcButton = document.querySelector("input[id=Calculate]");

var clearButton = document.querySelector("input[id=Clear]");

calcButton.addEventListener("click",function(){
	var temp = document.querySelector("input[id=temp]").value;
	var tUnit = checkUnit();
	document.querySelector("h3[id=resultTemp]").innerHTML = calculateTemp(tUnit, temp) + displayUnit();
	console.log(calculateTemp(tUnit, temp), displayUnit());
});

clearButton.addEventListener("click",function(){
	clearDisplays();
});



