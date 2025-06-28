function toCase(text) {
  // write your code here

	if(text.trim() === " ") return "-";

	return (text.toLowerCase() + " ".concat(text.toUpperCase())).replace(" ", "-")
;
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
