var questions = [

    {   option:      "Which theme it's an one hit wonder?",  
        alternatives: [ "Creep: Radiohead", "House of rising sun: The animals","Billie Jean: Michael Jackson", "Get lucky: Daft Punk"],
        correct:      [1, "House of rising sun: The Animals"],
        photo:          "images/animals.gif"
        
   
    },

    {   option:      "Which movie was won an Oscar for best movie song",
        alternatives: [ "Working girl: 1987","The body guard: 1992","Wall-e: 2008 ","127 hours 2010 "],
        correct:      [0, "Working Girl 1987"],
        photo:         "images/working.gif"
        
    },
    
    {   option:      "Terminator 2 includes a rock song from",
        alternatives: [ "Guns of roses: Sweet child of mine","Poison: Talk dirty to me","Black Sabbath: Brat song", "Guns of roses: You could be mine "],
        correct:      [ 3, "You could be mine"],
        photo:          "images/terminator.gif",
        
      
    },

    {   option:      "Which country won Eurovision 1974?",
        alternatives: [ "Austria","Netherlands","Sweden","Denmark",],
        correct:       [ 2, "Sweden"],
        photo:          "images/abba.gif",
        
    },

    {
        option:      "Which album won the best album in 2016 grammys?",
        alternatives:  [ "Ed Sheeran: Whatever", "Taylor Swift: 1989", "Kendrick Lamar: Alright", "Radiohead: A moon shapel pool"],
        correct:       [ 1, "Taylor Swift 1989"],
        photo:          "images/taylorsad.gif",
        
    },
]


var triviaGame= new TriviaGame(questions); 

$(document).ready(function(){

    triviaGame.shuffle();
    //countdown panel
    
    $("#countdown").text(triviaGame.timeLeft);
    $(".game").hide();
    $(".scorepanel").hide();
    $(".category").show();
    $("#btnStart").hide();
    $("iframe").hide();

});

$("#music-movies").click(function(){
    $("#btnStart").show();
    


// set button start, change to page two
    $("#btnStart").click(function(){
   
        //show game and score panel
        $(".game").show();
        $(".scorepanel").hide();
        $(".category").hide();
        $(this).hide()
        $("iframe").show();
        
       
       
        //display down counter
        triviaGame.downCounter()
        displayQuestion(triviaGame.answer.length);
        
    });     
})

function displayQuestion(numberOfQuestion) {


    $("#question-block").html((triviaGame.questions[numberOfQuestion].option));
    

    triviaGame.questions[numberOfQuestion].alternatives.forEach((element, index) => {
        // console.log(index)
        $("#answer-block").append(`<li data-index=${index}> ${element} </li>`)
      
    });

    $("li").click(function(){
       
        triviaGame.answer.push($(this).data("index"));                       
        var choice = $(this).data("index"); // save gamer choice
        var correct = questions[numberOfQuestion].correct[0]; //save correct answer
      
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
     
        triviaGame.finishedGame();
    
    setTimeout(()=>{ 
        $("#answer-block").empty();
        $("#image").empty();
        triviaGame.reset();
        triviaGame.unanswer;
        $("#countdown").text(triviaGame.timeLeft);
        triviaGame.downCounter();
        displayQuestion(triviaGame.answer.length);
                
    },5000)

    $("#btnReset").click(function(){
        location.reload();
    })






});
    

        

}




/*******************************/
//Hint//
/*******************************/

        // set button 50/50 hint
        // necesito entregar pistas:
        $("#btnHint").click(function(){
            var hintbtn = new TriviaGame(questions);
            // 0) defino respuesta correcta
            let answer = hintbtn.questions[0].correct; //respuestas correctas
            let result = hintbtn.questions[0].alternatives[answer]; //preguntas
 
            //1) elimino respuesta correcta desde arreglo

            
            // 2) creo un alert que entregue el hint en base a paso anterior

            alert(`El resultado es: ${result}`);
            
 
           
        });









