function toCase(text) {
  // write your code here

	if(text.trim() === " ") return "-";

	let LowerText=text.toLowerCase();
	let UpperText=text.toUpperCase(); 

	return LowerText+"-"+UpperText;

	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
