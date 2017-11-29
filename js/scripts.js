/*
Task requirements modified. 
Data is incorrect when parameters <=0 are passed. 
*/

function getTriangleArea(a,h) {
	if (a<=0 || h<=0) {
		return "Incorrect data";
	} else {
		return (a*h)/2;
	}
}

/*Call a function. Example:*/

var a = 0;
var h = 2;

getTriangleArea(a,h);
