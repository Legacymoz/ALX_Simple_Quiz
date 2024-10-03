function checkAnswer(){
    const correctAnswer = "4";
    const userAnswer=document.querySelector('input[name="quiz"]:checked').value;
    const myFeedback= document.getElementById("feedback");

    if (userAnswer === correctAnswer)
    {
        myFeedback.textContent= "Correct! Well done.";
    }
    else{
        myFeedback.textContent= "That's incorrect. Try again!";
    }
}

const submitButton=document.getElementById("submit-answer");

submitButton.addEventListener("click", checkAnswer);