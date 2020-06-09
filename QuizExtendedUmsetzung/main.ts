namespace EQ {
    // Adding default Questions
    let allQuestions: Question[] = [
        new SingleChoiceQuestion("Wie viele Bundesländer hat Deutschland?", ["12", "14", "16", "18"], 3), // nicht der Index, als korrekte Antwort angeben
        new MultipleChoiceQuestion("Was zählt alles unter Kfz?", ["Motorrad", "Auto", "Lokomotive", "Roller"], [1,2,4]), // nicht der Index als korrekte Antwort angeben
        new YesNoQuestion("Ist der Mensch ein Säugetier?", true),
        new EstimateQuestion("Wie viele Menschen Leben auf der Erde? (Januar 2020)", 7754847000, 1000000000),
        new TextQuestion("Wie heißt die aktuelle Bundeskanzlerin? (Nur Nachname)", "Merkel"),
    ]
    let userPoints: number = 0;

    console.log(allQuestions);

    askUsersChoice();



    function addSingleChoiceQuestion(): void {
        let question: string = prompt("[Single Choice Question]\nWie soll die Frage lauten?", "Gebe hier deine Frage ein");

        let allAnswers: string[] = [];
        let userAddAnswers: boolean = true;

        //Es soll mindestens eine Antwortmoeglichkeit geben
        let answer: string = prompt("Gebe eine Antwortmöglichkeit ein", "Gebe eine Antowrtmöglichkeit ein");
        allAnswers.push(answer);

        while (userAddAnswers) {
            let answer: string = prompt("Gebe eine weitere Antwortmöglichkeit ein \n[b] Keine weiteren Antworten", "Gebe eine Antowrtmöglichkeit ein");
            if (answer === "b")
                userAddAnswers = false;
            else
                allAnswers.push(answer);
        }

        // Wandelt das allAnswers Array in einen String um; somit koennen die Antworten nochmal ausgegeben werden
        let allAnswersString: string = "";
        for (let i = 0; i < allAnswers.length; i++) {
            allAnswersString = allAnswersString + "[" + (i + 1) + "] " + allAnswers[i] + "\n";
        }

        // Abfrage welche Antwortmöglichkeit richtig ist
        let correctAnswer: number = Number(prompt("Welche der von dir eingegebenen Antworten ist die richtige? \n" + allAnswersString, "Zahl zwischen 1 und " + allAnswers.length));


        let singleChoiceQuestion = new SingleChoiceQuestion(question, allAnswers, correctAnswer);

        allQuestions.push(singleChoiceQuestion);
    }

    function addMultipleChoiceQuestion(): void {
        let question: string = prompt("[Multiple Choice Question]\nWie soll die Frage lauten?", "Gebe hier deine Frage ein");

        let allAnswers: string[] = [];
        let correctAnswers: number[] = [];
        let userAddAnswers: boolean = true;

        //Es soll mindestens eine Antwortmoeglichkeit geben
        let answer: string = prompt("Gebe eine Antwortmöglichkeit ein", "Gebe eine Antowrtmöglichkeit ein");
        allAnswers.push(answer);

        while (userAddAnswers) {
            let answer: string = prompt("Gebe eine weitere Antwortmöglichkeit ein \n[b] Keine weiteren Antworten", "Gebe eine Antowrtmöglichkeit ein");
            if (answer === "b")
                userAddAnswers = false;
            else {
                let checkAnswerIfTrue: string = prompt("Ist diese Antwort richtig? \n[1] Ja\n[2] Nein", "Gebe 1 oder 2 ein");
                if (checkAnswerIfTrue === "1")
                    correctAnswers.push(allAnswers.length + 1);

                allAnswers.push(answer);
            }
        }
        let multipleChoiceQuestion = new MultipleChoiceQuestion(question, allAnswers, correctAnswers);
        console.log(multipleChoiceQuestion);
    }

    function addYesNoQuestion(): void {
        let question: string = prompt("[Ja/Nein Frage]\nWie soll die Frage lauten?", "Gebe hier deine Frage ein");
        let answer: string = prompt("Ist diese Frage wahr?\n[1] Ja\n[2] Nein", "1 oder 2");
        let isCorrect: boolean = false;

        if (answer === "1")
            isCorrect = true;


        let yesNoQuestion = new YesNoQuestion(question, isCorrect);

        allQuestions.push(yesNoQuestion);

    }

    function addEstimateQuestion(): void {
        let question: string = prompt("[Schätz Frage]\nWie soll die Frage lauten?", "Gebe hier deine Frage ein");
        let correctNumber: number = Number(prompt("Was ist die genaue Antwortzahl?", "Gebe hier die Zahl ein"));
        let tolerance: number = Number(prompt("Wie groß soll die Toleranz von der richtigen Antwort sein?", "Gebe hier die Zahl ein"));

        let estimateQuestion = new EstimateQuestion(question, correctNumber, tolerance);

        allQuestions.push(estimateQuestion);
        console.log(estimateQuestion);
    }

    function addTextQuestion(): void {
        let question: string = prompt("[Text Frage]\nWie soll die Frage lauten?", "Gebe hier deine Frage ein");
        let correctAnswer: string = prompt("Was ist das Antwort Wort?", "Geben hier das Wort ein");

        let textQuestion = new TextQuestion(question, correctAnswer);

        allQuestions.push(textQuestion);
    }


    function addQuestion(): void {
        let userInput: string = prompt("Was für eine Frage möchtes du hinzufügen?\n[1] SingleChoice Question\n[2] MultipleChoice Question\n[3] YesNo Question\n[4] Estimate Question\n[5] Text Question", "Nummer von 1 bis 5");
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

    function showUserPoints(): void{
        alert("Dein aktueller Punktestand ist: " + userPoints);
        askUsersChoice();
    }

    function answerQuestion(): void {
        //Get Random Qestion from Array
        let yourQuestion: any = allQuestions[Math.floor(Math.random() * allQuestions.length)];
        console.log(yourQuestion.constructor.name);

        switch (yourQuestion.constructor.name) {
            case "SingleChoiceQuestion": {
                let yourSingleChoiceQuestion: SingleChoiceQuestion = yourQuestion;
                if(yourSingleChoiceQuestion.showQuestionAnswers())
                    userPoints++;
                showUserPoints();
                break;
            }
            case "MultipleChoiceQuestion": {
                let yourMultipleChoiceQuestion: MultipleChoiceQuestion = yourQuestion;
                if(yourMultipleChoiceQuestion.showQuestionAnswers())
                    userPoints++;
                showUserPoints(); 
                break;
            }
            case "YesNoQuestion": {
                let yourYesNoQuestion: YesNoQuestion = yourQuestion;
                if(yourYesNoQuestion.showQuestionAnswers())
                    userPoints++;
                showUserPoints(); 
                break;
            }
            case "EstimateQuestion": {
                // debugger;
                let yourEstimateQuestion: EstimateQuestion = yourQuestion;
                if(yourEstimateQuestion.showQuestionAnswers())
                    userPoints++;
                showUserPoints(); 
                break;
            }
            case "TextQuestion": {
                let yourTextQuestion: TextQuestion = yourQuestion;
                if(yourTextQuestion.showQuestionAnswers())
                    userPoints++
                showUserPoints(); 
                break;
            }
            default: {
                break;
            }
        }
    }

    function askUsersChoice(): void {
        // console.log("[1] Antowrte einer Frage\n[2] Füge eine neue Frage hinzu\n[3] Quiz verlassen");
        let userInput: string = prompt("[1] Antworte einer Frage\n[2] Füge eine neue Frage hinzu\n[3] Quiz verlassen", "Nummer von 1 bis 3");
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


}
