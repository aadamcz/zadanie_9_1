/*
Task requirements modified. 
Data is incorrect when parameters <=0 are passed. 
*/

function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) {
		return "Incorrect data";
	} else {
		return (a * h) / 2;
	}
}

/*Call a function. Example:*/

var a = 0;
var h = 2;

console.log(getTriangleArea(a, h));

var triangle1Area = getTriangleArea(3, 6);
//console.log(triangle1Area);

var triangle2Area = getTriangleArea(4, 3);
//console.log(triangle2Area);

var triangle3Area = getTriangleArea(17, 8);
//console.log(triangle3Area);
