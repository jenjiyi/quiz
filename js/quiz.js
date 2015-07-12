$(document).ready (function(){

//questions object
	var questionList = [{
		questions: "What was her first band called??", 
		answers:["The Adverts", "The Runaways", "Girlschool", "The Germs"],
		qNum: 0,
		correct: 1
		},
		{
		questions:'Her song "Bad Reputation" was used as the opening theme song for which TV show?',
		answers:["Law and Order", "Girls", "Freaks and Geeks", "Beverly Hills: 90210"],
		qNum: 1,
		correct: 2
		},
		{
		questions:'"Crimson and Clover" was originally by which band?',
		answers:["Tommy James and the Shondells", "The Pandoras", " The Eagles", "Screamin' Jay Hawkins"] ,
		qNum: 2,
		correct: 0
		},
		{
		questions:"4. q3",		
		answers:["a3", "b3", "c3", "d3"],
		qNum: 3,
		correct: 2
		},
		{ 
		questions:"5. q4",
		answers:["a4", "b4", "c4", "d4"],
		qNum: 4,
		correct: 2
		},
		{
		questions: "6. q5",
		answers:["a5", "b5", "c5", "d5"],
		qNum: 5,
		correct: 1
		},
		{ 
		questions:"7. q6",
		answers:["a6", "b6", "c6", "d6"],
		qNum: 6,
		correct: 0
		},
		{
		questions:"8. q7",
		answers:["a7", "b7", "c7", "d7"],
		qNum: 7,
		correct: 3
		}]
//declare global vars
	var numCorrect = 0;
	var currentQuestion = 0;
//populate questions and answers
	$("#quiz h3").empty().html(questionList[currentQuestion].questions);
	$("label").empty().html(questionList[currentQuestion].answers[0]);
	$("#answerTwo + label").empty().html(questionList[currentQuestion].answers[1]);
	$("#answerThree + label").empty().html(questionList[currentQuestion].answers[2]);
	$("#answerFour + label").empty().html(questionList[currentQuestion].answers[3]);
//events
	//onclick next
	$(".next").click(function(){
		var radioSelect = $('input:radio[name=answer]:checked').val();
		var rightAnswer = questionList[currentQuestion].correct;
		console.log(rightAnswer);
		if (radioSelect === undefined ){
			console.log("Error: make a selection");
			$('.message-no-guess').css('display', 'block');
				}
		else{
			$('.message-no-guess').css('display', 'none');
			console.log("next, selected answer: " + radioSelect );
			currentQuestion ++; 
			if (radioSelect == rightAnswer ) {
				numCorrect ++;
				console.log("correct!" + numCorrect);
			}
			//else do nothing 
			else { };
			//populate next question function
			nextQuestion();
			} 
	});
	//enter key
	$(document).keydown(function( event ){
		if (event.which == 13){
			event.preventDefault();
			console.log('enter key pressed');
			//call click function
			$('.next').click();
			};
	});
	//next question
	function nextQuestion(){
		if (currentQuestion > 7){
			$(".quiz-wrapper").css("display", "none");
			$(".results").css("display", "block");
			results();
		}
		else {
			//clear radio
			$("input:radio").prop('checked', false);
			//populate questions and answers
			$("#quiz h3").empty().html(questionList[currentQuestion].questions);
			$("label").empty().html(questionList[currentQuestion].answers[0]);
			$("#answerTwo + label").empty().html(questionList[currentQuestion].answers[1]);
			$("#answerThree + label").empty().html(questionList[currentQuestion].answers[2]);
			$("#answerFour + label").empty().html(questionList[currentQuestion].answers[3]);
		}
	}

	//results function,
	function results(){
		console.log("results!");
		$("#amountRight").html(numCorrect);
		var numIncorrect = 8 - numCorrect;
		for (h = 0; h < numCorrect; h++){
			$('.hearts').append('<li><i class="fa fa-heart fa-3x"></i></li>');
		};
		for (i = 0; i < numIncorrect; i++){
			$('.hearts').append('<li><i class="fa fa-heart-o fa-3x"></i></li>');
		}
					
	}
	//reset quiz
	$('.reset').click(function() {
		console.log('reset quiz');
		currentQuestion = 0;
		numCorrect = 0;
		nextQuestion();
		$(".quiz-wrapper").css("display", "block");
			$(".results").css("display", "none");
	});

//transition animation functions
	$(window).load(function() {
		  $(".main").fadeIn(1000); 
		  //$( ".content" ).show( "slide", 1000 );		 
		});
});