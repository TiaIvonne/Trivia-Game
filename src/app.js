//constructor
var TriviaGame = function (questions) {
    this.questions = questions; //call an object "questions" in main
    this.answer = []; //save choose answer
    this.correctAnswer = 0; // save correct
    this.wrongAnswer = 0; // save incorrect
    this.unanswer = 0; //save unanswer
    this.timeLeft = 10; // use for countdown
    this.id = 0;

    
    
}
TriviaGame.prototype.shuffle = function () {
    var array= this.questions;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }   
}

TriviaGame.prototype.downCounter = function(){
/*var*/ this.id = setInterval( () => {
    if(this.timeLeft == 0)
        clearInterval(this.id);
    else
        this.timeLeft --
        // console.log(this.timeLeft);
        // console.log(this.timeLeft);
        $("#countdown").text(this.timeLeft);
        // return this.timeLeft;
    
}, 1000);

}


TriviaGame.prototype.gameResult = function(choice, correct){
  
    if(choice == correct){
        this.correctAnswer ++
        return true;
        
    }else{
        this.wrongAnswer ++
        return false 
        
    }
    
}

TriviaGame.prototype.stop = function(){
   
    clearInterval(this.id);

}

TriviaGame.prototype.finishedGame = function(){
    if((this.correctAnswer + this.wrongAnswer) === 5){
        alert("You finished!!")
    }
}











