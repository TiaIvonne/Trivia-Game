//constructor
var TriviaGame = function (questions) {
    this.questions = questions; //call an object "questions" in main
    this.answer = []; //save choose answer
    this.correctAnswer = 0; // save correct
    this.wrongAnswer = 0; // save incorrect
    this.unanswer = 0; //save unanswer
    this.timeLeft = 10; // use for countdown
    this.id = 0;
    this.difference = [];
    this.rand = [];
}

//shuffle questions
TriviaGame.prototype.shuffle = function () {
    var array= this.questions;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }   
}

//set timer 10 to 0
TriviaGame.prototype.downCounter = function(){
/*var*/ this.id = setInterval( () => {

        if(this.timeLeft === 0){
        clearInterval(this.id);
        this.generateLoss();
        
        }else{
        this.timeLeft --
        $("#countdown").text(this.timeLeft);
        return this.timeLeft;
        }
    }, 1000);
}

//if you don't answer a question, game stop and you lose
TriviaGame.prototype.generateLoss = function(){
    this.unanswer++
    this.stop();
    $("#answer-block").show().text("You didn't answer the question :( ")
    this.finishedGame()
    setTimeout(4000);
}

//evaluates if your choice it's correct or not
TriviaGame.prototype.gameResult = function(choice, correct){

    if(choice == correct){
        this.correctAnswer ++
        return true;
    }else {
        this.wrongAnswer ++
        return false 
    }
}

//stop timer
TriviaGame.prototype.stop = function(){
    clearInterval(this.id);
}

//end of the game and display score panel
TriviaGame.prototype.finishedGame = function(){
    if((this.correctAnswer + this.wrongAnswer) === 5){
        $("#answer-block").empty();
        $("#countdown").remove();
        $("#question-block").empty();
        $(".game").hide();
        $(".scorepanel").show()
        $("#btnReset").show()
    }   
    else if (this.unanswer ===1){
        $("#answer-block").empty();
        $(".game").hide()
        $(".scorepanel").show()
        $("#btnReset").show()
        $("#unanswered").text("Unanswer question " + triviaGame.unanswer)
        $("#btnReset").click(function () {
            location.reload();
        })
    }
}
//reset timer
TriviaGame.prototype.reset = function(){
    this.timeLeft = 10;
}

//when you press button hint, generateHint show a wrong alternative for help
TriviaGame.prototype.generateHint = function(alternatives, rightAnswer){
    //compare array alternatives and correct, clean duplicate values
    this.difference = alternatives.filter(x => !rightAnswer.includes(x));
    //with a clean array, generate a random
    this.rand = this.difference[Math.floor(Math.random() * this.difference.length)];
    return this.rand
};












