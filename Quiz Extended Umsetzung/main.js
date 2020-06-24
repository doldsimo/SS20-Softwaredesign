"use strict";
var EQ;
(function (EQ) {
    let userPoints = 0;
    let allQuestions = [
    // new SingleChoiceQuestion("Wie viele Bundesländer hat Deutschland?", ["12", "14", "16", "18"], 3), // nicht der Index, als korrekte Antwort angeben
    // new MultipleChoiceQuestion("Was zählt alles unter Kfz?", ["Motorrad", "Auto", "Lokomotive", "Roller"], [1, 2, 4]), // nicht der Index als korrekte Antwort angeben
    // new YesNoQuestion("Ist der Mensch ein Säugetier?", true),
    // new EstimateQuestion("Wie viele Menschen Leben auf der Erde? (Januar 2020)", 7754847000, 1000000000),
    // new TextQuestion("Wie heißt die aktuelle Bundeskanzlerin? (Nur Nachname)", "Merkel"),
    ];
    load("allQuestions.json").then();
    async function load(_filename) {
        let response = await fetch(_filename);
        let json = await response.json();
        addQuestionsFromJSONToQuiz(json);
        console.log(allQuestions);
        askUsersChoice();
    }
    function addQuestionsFromJSONToQuiz(_json) {
        for (let i = 0; i < _json.length; i++) {
            switch (_json[i].type) {
                case "SingleChoiceQuestion": {
                    let singleChoiceQuestion = new EQ.SingleChoiceQuestion(_json[i].question, _json[i].answers, _json[i].correctAnswer);
                    allQuestions.push(singleChoiceQuestion);
                    break;
                }
                case "MultipleChoiceQuestion": {
                    let multipleChoiceQuestion = new EQ.MultipleChoiceQuestion(_json[i].question, _json[i].answers, _json[i].correctAnswers);
                    allQuestions.push(multipleChoiceQuestion);
                    break;
                }
                case "YesNoQuestion": {
                    let yesNoQuestion = new EQ.YesNoQuestion(_json[i].question, _json[i].answers);
                    allQuestions.push(yesNoQuestion);
                    break;
                }
                case "EstimateQuestion": {
                    let estimateQuestion = new EQ.EstimateQuestion(_json[i].question, _json[i].answer, _json[i].tolerance);
                    allQuestions.push(estimateQuestion);
                    break;
                }
                case "TextQuestion": {
                    let textQuestion = new EQ.TextQuestion(_json[i].question, _json[i].answer);
                    allQuestions.push(textQuestion);
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }
    function addSingleChoiceQuestion() {
        let question = prompt("[Single Choice Question]\nWie soll die Frage lauten?", "Gebe hier deine Frage ein");
        let allAnswers = [];
        let userAddAnswers = true;
        //Es soll mindestens eine Antwortmoeglichkeit geben
        let answer = prompt("Gebe eine Antwortmöglichkeit ein", "Gebe eine Antowrtmöglichkeit ein");
        allAnswers.push(answer);
        while (userAddAnswers) {
            let answer = prompt("Gebe eine weitere Antwortmöglichkeit ein \n[b] Keine weiteren Antworten", "Gebe eine Antowrtmöglichkeit ein");
            if (answer === "b")
                userAddAnswers = false;
            else
                allAnswers.push(answer);
        }
        // Wandelt das allAnswers Array in einen String um; somit koennen die Antworten nochmal ausgegeben werden
        let allAnswersString = "";
        for (let i = 0; i < allAnswers.length; i++) {
            allAnswersString = allAnswersString + "[" + (i + 1) + "] " + allAnswers[i] + "\n";
        }
        // Abfrage welche Antwortmöglichkeit richtig ist
        let correctAnswer = Number(prompt("Welche der von dir eingegebenen Antworten ist die richtige? \n" + allAnswersString, "Zahl zwischen 1 und " + allAnswers.length));
        let singleChoiceQuestion = new EQ.SingleChoiceQuestion(question, allAnswers, correctAnswer);
        allQuestions.push(singleChoiceQuestion);
    }
    function addMultipleChoiceQuestion() {
        let question = prompt("[Multiple Choice Question]\nWie soll die Frage lauten?", "Gebe hier deine Frage ein");
        let allAnswers = [];
        let correctAnswers = [];
        let userAddAnswers = true;
        //Es soll mindestens eine Antwortmoeglichkeit geben
        let answer = prompt("Gebe eine Antwortmöglichkeit ein", "Gebe eine Antowrtmöglichkeit ein");
        allAnswers.push(answer);
        while (userAddAnswers) {
            let answer = prompt("Gebe eine weitere Antwortmöglichkeit ein \n[b] Keine weiteren Antworten", "Gebe eine Antowrtmöglichkeit ein");
            if (answer === "b")
                userAddAnswers = false;
            else {
                let checkAnswerIfTrue = prompt("Ist diese Antwort richtig? \n[1] Ja\n[2] Nein", "Gebe 1 oder 2 ein");
                if (checkAnswerIfTrue === "1")
                    correctAnswers.push(allAnswers.length + 1);
                allAnswers.push(answer);
            }
        }
        let multipleChoiceQuestion = new EQ.MultipleChoiceQuestion(question, allAnswers, correctAnswers);
        console.log(multipleChoiceQuestion);
    }
    function addYesNoQuestion() {
        let question = prompt("[Ja/Nein Frage]\nWie soll die Frage lauten?", "Gebe hier deine Frage ein");
        let answer = prompt("Ist diese Frage wahr?\n[1] Ja\n[2] Nein", "1 oder 2");
        let isCorrect = false;
        if (answer === "1")
            isCorrect = true;
        let yesNoQuestion = new EQ.YesNoQuestion(question, isCorrect);
        allQuestions.push(yesNoQuestion);
    }
    function addEstimateQuestion() {
        let question = prompt("[Schätz Frage]\nWie soll die Frage lauten?", "Gebe hier deine Frage ein");
        let correctNumber = Number(prompt("Was ist die genaue Antwortzahl?", "Gebe hier die Zahl ein"));
        let tolerance = Number(prompt("Wie groß soll die Toleranz von der richtigen Antwort sein?", "Gebe hier die Zahl ein"));
        let estimateQuestion = new EQ.EstimateQuestion(question, correctNumber, tolerance);
        allQuestions.push(estimateQuestion);
        console.log(estimateQuestion);
    }
    function addTextQuestion() {
        let question = prompt("[Text Frage]\nWie soll die Frage lauten?", "Gebe hier deine Frage ein");
        let correctAnswer = prompt("Was ist das Antwort Wort?", "Geben hier das Wort ein");
        let textQuestion = new EQ.TextQuestion(question, correctAnswer);
        allQuestions.push(textQuestion);
    }
    function addQuestion() {
        let userInput = prompt("Was für eine Frage möchtes du hinzufügen?\n[1] SingleChoice Question\n[2] MultipleChoice Question\n[3] YesNo Question\n[4] Estimate Question\n[5] Text Question", "Nummer von 1 bis 5");
        switch (userInput) {
            case "1": {
                addSingleChoiceQuestion();
                askUsersChoice();
                break;
            }
            case "2": {
                addMultipleChoiceQuestion();
                askUsersChoice();
                break;
            }
            case "3": {
                addYesNoQuestion();
                askUsersChoice();
                break;
            }
            case "4": {
                addEstimateQuestion();
                askUsersChoice();
                break;
            }
            case "5": {
                addTextQuestion();
                askUsersChoice();
                break;
            }
            default: {
                // wird keine richtige Nummer eingegeben, wird erneut nachgefragt
                addQuestion();
                break;
            }
        }
    }
    function showUserPoints() {
        alert("Dein aktueller Punktestand ist: " + userPoints);
        askUsersChoice();
    }
    function answerQuestion() {
        //Get Random Qestion from Array
        let yourQuestion = allQuestions[Math.floor(Math.random() * allQuestions.length)];
        console.log(yourQuestion.constructor.name);
        switch (yourQuestion.constructor.name) {
            case "SingleChoiceQuestion": {
                let yourSingleChoiceQuestion = yourQuestion;
                if (yourSingleChoiceQuestion.showQuestionAnswers())
                    userPoints++;
                showUserPoints();
                break;
            }
            case "MultipleChoiceQuestion": {
                let yourMultipleChoiceQuestion = yourQuestion;
                if (yourMultipleChoiceQuestion.showQuestionAnswers())
                    userPoints++;
                showUserPoints();
                break;
            }
            case "YesNoQuestion": {
                let yourYesNoQuestion = yourQuestion;
                if (yourYesNoQuestion.showQuestionAnswers())
                    userPoints++;
                showUserPoints();
                break;
            }
            case "EstimateQuestion": {
                // debugger;
                let yourEstimateQuestion = yourQuestion;
                if (yourEstimateQuestion.showQuestionAnswers())
                    userPoints++;
                showUserPoints();
                break;
            }
            case "TextQuestion": {
                let yourTextQuestion = yourQuestion;
                if (yourTextQuestion.showQuestionAnswers())
                    userPoints++;
                showUserPoints();
                break;
            }
            default: {
                break;
            }
        }
    }
    function askUsersChoice() {
        // console.log("[1] Antowrte einer Frage\n[2] Füge eine neue Frage hinzu\n[3] Quiz verlassen");
        let userInput = prompt("[1] Antworte einer Frage\n[2] Füge eine neue Frage hinzu\n[3] Quiz verlassen", "Nummer von 1 bis 3");
        switch (userInput) {
            case "1": {
                answerQuestion();
                break;
            }
            case "2": {
                addQuestion();
                break;
            }
            case "3": {
                alert("Quiz wurde beendet,\nbis zum nächsten mal.");
                // console.log("Quiz wurde verlassen,\nbis zum nächsten mal.");
                break;
            }
            default: {
                // wird keine richtige Nummer eingegeben, wird erneut nachgefragt
                askUsersChoice();
                break;
            }
        }
    }
})(EQ || (EQ = {}));
//# sourceMappingURL=main.js.map