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

/*
To call a function, write in console
getTriangleArea(a,h)
*/