//creates a two dimensional array to hold questions and answers

/*

scale:
a = indoor person.
b = outdoor person.
c = indifferent

*/

/*Variables to hold user input*/
var indoorPerson = 0; //used to hold points for answers users more indoors would answer
var outdoorPerson = 0; //used to hold points for answers users who are more outdoor would answer
var indifferent = 0; //used to hold points for users who don't care either way or who like both


var questions = [
['You step outside. What\'s your reaction?', 'Yay! The outside!','Oh no! the outside','Eh'],
['You step inside. What\'s your reaction?', 'Oh No! Outside','Awesome, Finally! Outside','Eh'], 
['When you need time to yourself, you\'d rather...', 'Go outside, take a walk, feel the breeze.','Stay inside, watch a movie, chill on the couch','Doesn\'t matter really. As long as my mind is OFF the situation.']
];


var answerIncrementor = 0; //used to increment every time a correct answer is given
var clearItUp = 'Select "a", "b", or "c" to choose a response! Then click \'Enter\' when you are done.'; //used as a means of clearing up instructions that may be more difficult for user to understand when answering questions
var start; //used to prompt user to start playing the game
var generatedQuestion; //used to hold generated question
var userAnswer; //used to hold the user's response to question
var lengthOfArray = questions.length; //holds length of the array (should be 3)




/***************
	FUNCTIONS
***************/
/*When executed, asks the user if they are ready to play the game. It then asks the user to input a lower case 'y' for 'yes' and a lower case 'n' for 'no'*/
function wannaPlay(){
	
	start = prompt('Are you ready to play this game? (y/n)');
	
	//Provides a slightly more clear question to the user until the user enters a lowercase y or n
	while(start.toLowerCase() !== 'y' && start.toLowerCase() !== 'n'){
		start = prompt("Make sure you use a 'y' or a 'n' to answer the questions. Or else...it just won't listen!!!");
	}
	
	if(start.toLowerCase() === 'y'){
		alert('Awesome!');
	}else if(start.toLowerCase() === 'n'){
		alert('That\'s ok!');
	}
}

//generates the question to be asked by the user


function formulateQuestion(){
	y = 0; //static variable to ensure only questions are asked
	
	generatedQuestion = alert(questions[answerIncrementor][y]); //generates question
	
}

//generates possible answers to a question
function possibleAnswers(x, y, z){
	x = indoorPerson;
	outdoorPerson = y;;
	z = indifferent;
	
	var instructions = 'Type \'a\' \'b\' or \'c\' and press \'Enter\' to make your selection'; //give user instructions on how to select an answer.
	var answerSelect = 0; //used in conjunctions with answerIncrementor (used to select the array column), this selects the array row
	var selectorA = 'a) '; //provides label to answers. First selection is an 'a'
	var selectorB = 'b) '; //provides label to answers. Second selection is a 'b'
	var selectorC = 'c) '; //provides label to answers. Third selection is a 'c'

	userAnswer = prompt(selectorA+questions[answerIncrementor][answerSelect+1]+'\n\n'+selectorB+questions[answerIncrementor][answerSelect+2]+'\n\n'+selectorC+questions[answerIncrementor][answerSelect+3]+instructions);

	while(userAnswer.toLowerCase() !== 'a' && userAnswer.toLowerCase() !== 'b' && userAnswer.toLowerCase() !== 'c'){
		//restate the question with an added remark at the beginning
		userAnswer = prompt(clearItUp+'\n\n'+selectorA+questions[answerIncrementor][answerSelect+1]+'\n\n'+selectorB+questions[answerIncrementor][answerSelect+2]+'\n\n'+selectorC+questions[answerIncrementor][answerSelect+3]);
	}
	
	
	//logic to determine how to allocate point system
	if(userAnswer == 'a'){
		indoorPerson += 1;
		answerIncrementor += 1;
	} else if (userAnswer == 'b'){
		outdoorPerson++;
		answerIncrementor += 1;
	} else if (userAnswer == 'c'){
		indifferent++;
		answerIncrementor += 1;
	}
}

//function to run the game so long as there are more questions to be asked
function playGame(){

	for(var i = 0; i < lengthOfArray; i++){
		formulateQuestion();
		possibleAnswers(indoorPerson, outdoorPerson, indifferent);
	}
}

//function to determine if you are indoor/outdoor/indifferent based on highest score.
function whatAreYou(){
	var youAreIndoor = "Based on our overly complex calculator calculations, you are an indoor person. GET OUT THERE!";
	var youAreOutdoor = "According to this totally accurate quiz, you belong indoors. Find yourself someplace to sit and watch TV or something!";
	var youAreIndifferent = "Judging by our highly technical analysis, you are neither an indoor nor an outside person. You really don't care...WORKS FOR ME!";
	
	if(indoorPerson > outdoorPerson && indoorPerson > indifferent){
		alert(youAreIndoor);
	}else if(outdoorPerson > indoorPerson && outdoorPerson > indoorPerson){
		alert(youAreOutdoor);
	}else if(indifferent > indoorPerson && indifferent > outdoorPerson){
		alert(youAreIndifferent);
	} else {
		whatAreYouTie();
	}
}

function whatAreYouTie(){

	var indoorOutdoor = "According to your answers, you are essentially indifferent!"; //built just in case indoor and outdoor share the same value (for future additions beyond v1)
	var indoorIndifferent = "Based on your responses here, you'd choose to be indoors if you were forced to choose, but you really don't care either way!"; //in case indoor and indifferent have equal values (for future additions beyond v1)
	var outdoorIndifferent = "So, you'd choose to be outdoors if you HAD to choose, but it really makes no different to you. I see your game"; //in case outdoor and indifferent have equal values (for future additions beyond v1)
	var allEqualp1 = "Well aren't you something! You aren't an indoor, outdoor, or all indifferent. Which means one of two things: ";
	var allEqualp2 = "\n\n1) You had a little bit of fun purposefully choosing A, B, and C an equal number of times to 'see what I'll say' ";
	var allEqualp3 = "\n\n2) Some of the responses weren't to your liking. If so, shoot me an email or something!";
	
	if(indoorPerson == outdoorPerson && indifferent < indoorPerson){
		alert(indoorOutdoor);
	} else if(indoorPerson == indifferent && outdoorPerson < indoorPerson){
		alert(indoorIndifferent);
	} else if(outdoorPerson == indifferent && indoorPerson < outdoorPerson){
		alert(outdoorIndifferent);
	} else {
		alert(allEqualp1+allEqualp2+allEqualp3);
	}
}

//calls the play function
wannaPlay();

//logic to play the game ONLY if the user wishes to play the game
if(start == 'y'){
playGame();
whatAreYou();
} else if(start == 'n'){
	alert("Come Back Soon");
}




