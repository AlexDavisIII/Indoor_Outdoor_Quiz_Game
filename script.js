//creates a two dimensional array to hold questions and answers

/*
scale:
a = indoor person.
b = outdoor person.
c = indifferent

*/


var questions = [
['You step outside...', 'a','b','c'], 
['You step inside...', 'a','b','c'], 
['When you need time to yourself, you\'d rather...', 'a','b','c']

];

var start; //used to prompt user to start playing the game`
var questionOne;
var questionTwo;
var questionThree;


/***************
	FUNCTIONS
***************/

/*When executed, asks the user if they are ready to play the game. It then asks the user to input a lower case 'y' for 'yes' and a lower case 'n' for 'no'*/
function wannaPlay(){
	
	start = prompt('Are you ready to play this game?');
	
	//Provides a slightly more clear question to the user until the user enters a lowercase y or n
	while(start.toLowerCase() !== 'y' && start.toLowerCase() !== 'n'){
		start = prompt("Make sure you use a 'y' or a 'n' to answer the questions. Or else...it just won't listen!!!");
	}
	
	if(start.toLowerCase() === 'y'){
		alert('Awesome!');
	}else if(start.toLowerCase() === 'n'){
		alert('That\'s ok! See you soon.');
	}
}



//calls the play function
wannaPlay();