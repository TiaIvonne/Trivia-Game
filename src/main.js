var questions = [

    {   option:      "Which theme it's an one hit wonder?",  
        alternatives: [ "Radiohead: Creep", "House of rising sun: The animals","Billie Jean: Michael Jackson", "Daft Punk: Get lucky"],
        correct:      [0, "Radiohead : Creep"]
        
   
    },

    {   option:      "Which movie was won an Oscar for best movie song",
        alternatives: [ "Working girl: 1987","The body guard: 1992","Wall-e: 2008 ","127 hours 2010 "],
        correct:      [0, "Working Girl 1987"]
        
    },
    
    {   option:      "Terminator 2 includes a rock song from",
        alternatives: [ "Guns of roses: Sweet child of mine","Poison: Talk dirty to me","Black Sabbath: Brat song", "Guns of roses: You could be mine "],
        correct:      [ 3, "You could be mine"]
        
      
    },

    {   option:      "Which country won Eurovision 1974?",
        alternatives: [ "Austria","Netherlands","Sweden","Denmark",],
        correct:       [ 2, "Sweden"]
        
    },

    {
        option:      "Which album won the best album in 2016 grammys?",
        alternatives:  [ "Ed Sheeran: Whatever", "Taylor Swift: 1989", "Kendrick Lamar: Alright", "Radiohead: A moon shapel pool"],
        correct:       [ 1, "Taylor Swift 1989"]
        
    },
]

var triviaGame= new TriviaGame(questions); 

$(document).ready(function(){

    triviaGame.shuffle();
    //countdown panel
    $("#countdown").text(triviaGame.timeLeft);
    $(".game").hide();
    $(".scorepanel").hide();

});



// set button start, change to page two
    $("#btnStart").click(function(){
   
        //show game and score panel
        $(".game").show();
        $(".scorepanel").show();
        $(".category").hide();
        $(this).hide()
       
       
    // $("#btnStart").prop('disabled', true); //TO DISABLED
   
        //display down counter
        triviaGame.downCounter()
  
    //start game
        
        //display question
        
        console.log("amount questions answered:", )
        //display answers with for each
        displayQuestion(triviaGame.answer.length)

        
        //select an option and save in an array
        //validates only pick a one choice
      
            $("li").click(function(){
                        // console.log($(this).data("index"))
                        triviaGame.answer.push($(this).data("index"));
                        // console.log("Respuesta elegida " + triviaGame.answer);

                        
                        var choice = triviaGame.answer[0];// lee la respuesta entregada por el jugador
                        var correct = questions[0].correct[0];//save correct answer
                        // var unanswer = 0;
            

                        if(triviaGame.gameResult(choice, correct)){
                            console.log("correcto")
                            triviaGame.stop();
                            $("#answer-block").hide();
                            $("#btnHint").hide();
                            $("#answer-block").show().text("CORRECT!! You are awesome");
                            
                            
                        }else {
                            triviaGame.stop()
                            $("#answer-block").hide();
                            $("#btnHint").hide();
                            //show a correct answer
                            $("#answer-block").show().text("You lose! :( the correct answer is " + questions[0].correct[1]);

                        }
                        console.log("amount questions answered:", triviaGame.answer.length)
                        setTimeout(()=>{
                    
                            displayQuestion(triviaGame.answer.length)


                        },2000)
                //actualizar el contador de preguntas no contestadas
                $("#correctqs").text("Correct answers " +triviaGame.correctAnswer);
                $("#incorrectqs").text("Incorrect answers " +triviaGame.wrongAnswer);
                triviaGame.finishedGame();
            });
            
        
              
    });     


function displayQuestion(numberOfQuestion) {

    $("#question-block").html("<h2>" + triviaGame.questions[numberOfQuestion].option+ "</h2>");
        

    triviaGame.questions[numberOfQuestion].alternatives.forEach((element, index) => {
        // console.log(index)
        $("#answer-block").append(`<li data-index=${index}> ${element} </li>`)
       
    });

}








