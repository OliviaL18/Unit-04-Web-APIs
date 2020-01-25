$(document).ready(function() {

    var questions = [
        "What is the correct syntax for referring to an external script?", //1
        "", //2
        "", //3
        "", //4
        "", //5
        "", //6
    ];

    var answerA = [
        "<script='script.js'>", //1
        "", //2
        "", //3
        "", //4
        "", //5
        "", //6
    ];

    var answerB = [
        "<script src='script.js'>", //1
        "", //2
        "", //3
        "", //4
        "", //5
        "", //6
    ];

    var answerC = [
        "<script name='script.js'>", //1
        "", //2
        "", //3
        "", //4
        "", //5
        "", //6
    ];

    var answerD = [
        "script src='script.js'", //1
        "", //2
        "", //3
        "", //4
        "", //5
        "", //6
    ];

    let i = 0;

    /*for (i=0; i<questions.length; i++){

    }*/

    $("#question").text(questions[i]);
    $("#answerA").text(answerA[i]);
    $("#answerB").text(answerB[i]);
    $("#answerC").text(answerC[i]);
    $("#answerD").text(answerD[i]);
})