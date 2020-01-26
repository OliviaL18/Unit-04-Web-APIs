$(document).ready(function() {

    var questions = [
        "1. What is the correct syntax for referring to an external script?", //1
        "2. How do you create a function in JavaScript?", //2
        "3. How do you write an IF statement in Javascript?", //3
        "4. How do you write a Javascript array?", //4
        "5. Math.random() returns a random number in what range?", //5
        "6. Which event occurs when the user clicks on an HTML element?", //6
    ];

    var answerA = [
        "<script='script.js'>", //1
        "function myFunction()", //2 *CORRECT*
        "if i=5 then", //3
        "var array = [value1, value2, value3]", //4
        "0 (exclusive) to 1 (exclusive)", //5
        "onclick", //6 *CORRECT*
    ];

    var answerB = [
        "<script src='script.js'>", //1 *CORRECT*
        "function = myFunction()", //2
        "if (i==5) then", //3
        "var array = 'value1', 'value2', 'value3'", //4
        "0 (inclusive) to 1 (inclusive)", //5
        "click", //6
    ];

    var answerC = [
        "<script name='script.js'>", //1
        "myFunction = ()", //2
        "if (i==5)", //3 *CORRECT*
        "var array = ('value1', 'value2', 'value3')", //4
        "0 (inclusive) to 1 (exclusive)", //5 *CORRECT* 
        "onmouseclick", //6
    ];

    var answerD = [
        "script src='script.js'", //1
        "function is myFunction()", //2
        "if (i==5) then", //3
        "var array = ['value1', 'value2', 'value3']", //4 *CORRECT*
        "0 (exclusive) to 1 (inclusive)", //5
        "onselect", //6
    ];

    var correctAnswers = [
        "B", //1
        "A", //2
        "C", //3
        "D", //4
        "C", //5
        "A", //6
    ];

    let i = 0;
    $("#question").text(questions[i]);
    $("#answerA").text(answerA[i]);
    $("#answerB").text(answerB[i]);
    $("#answerC").text(answerC[i]);
    $("#answerD").text(answerD[i]);

    let countCorrect = 0;
    
    $(".btn").on("click", function() {
        let correctAnswer = correctAnswers[i];
        let selectedAnswer = $(this).attr("data-value");
        if (selectedAnswer == correctAnswer){
            countCorrect++
        }
        i++;
        $("#question").text(questions[i]);
        $("#answerA").text(answerA[i]);
        $("#answerB").text(answerB[i]);
        $("#answerC").text(answerC[i]);
        $("#answerD").text(answerD[i]);
    })

    let countdown = 75;

    $(".start").on("click", function() {
        $("#timer").text(countdown);
        setInterval(function () {
            countdown --;
            $("#timer").text(countdown);
        }, 1000); 
    })
})