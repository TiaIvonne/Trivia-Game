var questions = [

    {   option:      "Which theme it's an one hit wonder?",  
        alternatives: [ "Radiohead: Creep", "House of rising sun: The animals","Billie Jean: Michael Jackson", "Daft Punk: Get lucky"],
        correct:        1,
    },

    {   option:      "Which movie was won an Oscar for best movie song",
        alternatives: [ "Working girl: 1987","The body guard: 1992","Wall-e: 2008 ","127 hours 2010 "],
        correct:        0,
    },
    
    {   option:      "Terminator 2 includes a rock song from",
        alternatives: [ "Guns of roses: Sweet child of mine","Poison: Talk dirty to me","Black Sabbath: Brat song", "Guns of roses: You could be mine "],
        correct:        3,
      
    },

    {   option:      "Which country won Eurovision 1974?",
        alternatives: [ "Austria","Netherlands","Sweden","Denmark",],
        correct:        2,
    },

    {
        option:      "Which album won the best album in 2016 grammys?",
        alternatives:  [ "Ed Sheeran: Whatever", "Taylor Swift: 1989", "Kendrick Lamar: Alright", "Radiohead: A moon shapel pool"],
        correct:        1,
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
    $(this).hide()
    // $("#btnStart").prop('disabled', true); //TO DISABLED

    //display down counter
    triviaGame.downCounter()
  
    //start game

        //display question
        $("#question-block").html("<h2>" + triviaGame.questions[0].option+ "</h2>");
        
        //display answers with for each
        triviaGame.questions[0].alternatives.forEach((element, index) => {
            console.log(index)
            $("#answer-block").append(`<li data-index=${index}> ${element} </li>`)
            $("li").css('list-style-type', 'none'); 
        });

        //select an option and save in an array
        //validates only pick a one choice
      
            $("li").click(function(){
                if(triviaGame.answer.length < 1){
                    console.log("hola");
                    console.log($(this).data("index"))
                    triviaGame.answer.push($(this).data("index"));
                    console.log("Respuesta elegida " + triviaGame.answer);

                    
                    var choice = triviaGame.answer;
                    var correct = questions[0].correct;

                    if(triviaGame.gameResult(choice, correct)){
                        
                        triviaGame.answer=[];
                        alert("you win")
                    }else{
                        alert("you lose filthy animal!")
                    }

                    $("#correctqs").text("Correct answers " +triviaGame.correctAnswer);
                    $("#incorrectqs").text("Incorrect answers " +triviaGame.wrongAnswer);







                   

                      
                    // if(correct == choice){
                    
                    //     alert("you win!!");
                        
                    // }
                    // else{
                    //     alert("you lose! filthy animal!!");
                     
                    // }

                   




                }
                

            


        
            });
        




        // set button 50/50 hint
        // $("#btnHint").click(function(){
        // });

   
            
         
        //btnReset
        $("#btnReset").on("click" ,function(){
        $( ".game" ).hide();
        $("#btnStart").show();
            

        
        });



    });
       
       





    


//pendiente, panel con el score







