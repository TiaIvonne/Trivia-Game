//object questions
var questions = [

    {   option:         "Which theme it's an one hit wonder?",  
        alternatives: [ "Creep: Radiohead", "House of rising sun: The animals","Billie Jean: Michael Jackson", "Get lucky: Daft Punk"],
        correct:      [ 1, "House of rising sun: The Animals"],
        photo:          "images/animals.gif"
    },

    {   option:         "Which movie was won an Oscar for best movie song",
        alternatives: [ "Working Girl: 1987","The body guard: 1992","Wall-e: 2008 ","127 hours 2010 "],
        correct:      [ 0, "Working Girl: 1987"],
        photo:         "images/working.gif"
    },
    
    {   option:         "Terminator 2 includes a rock song from",
        alternatives: [ "Guns of roses: Sweet child of mine","Poison: Talk dirty to me","Black Sabbath: Brat song", "Guns of roses: You could be mine "],
        correct:      [ 3, "Guns of roses: You could be mine "],
        photo:          "images/terminator.gif",
    },

    {   option:         "Which country won Eurovision 1974?",
        alternatives: [ "Austria","Netherlands","Sweden","Denmark",],
        correct:      [ 2, "Sweden"],
        photo:          "images/abba.gif",
    },

    {   option:          "Which album won the best album in 2016 grammys?",
        alternatives:  [ "Ed Sheeran: Whatever", "Taylor Swift: 1989", "Kendrick Lamar: Alright", "Radiohead: A moon shapel pool"],
        correct:       [ 1, "Taylor Swift: 1989"],
        photo:          "images/taylorsad.gif",
    },
]
//generate new
var triviaGame= new TriviaGame(questions); 

//page loaded
$(document).ready(function(){

    triviaGame.shuffle();
    
    $("#countdown").text(triviaGame.timeLeft);
    $(".game").hide();
    $(".scorepanel").hide();
    $(".category").show();
    $("#btnStart").hide();
    $("iframe").hide();

});
//click a category
$("#music-movies").click(function(){
    $("#btnStart").show();

//click start game
    $("#btnStart").click(function(){
   
        //show game and score panel
        $(".game").show();
        $(".scorepanel").hide();
        $(".category").hide();
        $(this).hide()
        $("iframe").show();
        
        //display down counter
        triviaGame.downCounter()
        //display questions
        displayQuestion(triviaGame.answer.length);

    });     
})


function displayQuestion(numberOfQuestion) {

    $("#question-block").html((triviaGame.questions[numberOfQuestion].option));
    triviaGame.questions[numberOfQuestion].alternatives.forEach((element, index) => {
    $("#answer-block").append(`<li data-index=${index}> ${element} </li>`)
    });

    //set button hint and call a function generateHint
    $("#btnHint").click(function(){
        alternatives = triviaGame.questions[numberOfQuestion].alternatives;
        rightAnswer = triviaGame.questions[numberOfQuestion].correct
        triviaGame.generateHint(alternatives, rightAnswer);
        console.log(triviaGame.rand)
        alert("This option isn't correct => " + triviaGame.rand) //test
    })

    //display a list with possible answers
    $("li").click(function(){
        triviaGame.answer.push($(this).data("index"));                       
        var choice = $(this).data("index"); // save gamer choice
        var correct = questions[numberOfQuestion].correct[0]; //save correct answer
            //evaluates game result
            if(triviaGame.gameResult(choice, correct)){
                triviaGame.stop();
                $("#answer-block").hide();
                $("#btnHint").hide();
                $("#answer-block").show().text("CORRECT!! You are awesome");
                $("#correctqs").text("Correct answers " + triviaGame.correctAnswer);
            
            } else {
                triviaGame.stop()
                $("#answer-block").hide();
                $("#btnHint").hide();
                //show a correct answer
                $("#answer-block").show().text("You lose! :( the correct answer is " + questions[numberOfQuestion].correct[1]);
                $("#image").html("<img src =" + triviaGame.questions[numberOfQuestion].photo+ ">");
                $("#incorrectqs").text("Incorrect answers " + triviaGame.wrongAnswer);
            }

        //call function finished game
        triviaGame.finishedGame();

        //set timeout
        setTimeout(()=>{ 
            $("#answer-block").empty();
            $("#image").empty();
            triviaGame.reset();
            $("#countdown").text(triviaGame.timeLeft);
            triviaGame.downCounter();
            displayQuestion(triviaGame.answer.length);  
            },3000)

        //press btn reset and reload page
        $("#btnReset").click(function () {
        location.reload();
        
        })
    });
}

// end 














