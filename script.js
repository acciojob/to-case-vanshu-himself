function toCase(text) {
  // write your code here

	return `${text.toLowerCase()}-${text.toUpperCase()}`;
}



const text = prompt("Enter text:");
alert(toCase(text));

