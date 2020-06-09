"use strict";
var EQ;
(function (EQ) {
    class MultipleChoiceQuestion extends EQ.Question {
        constructor(_question, _answer, _correctAnswers) {
            super(_question);
            this.answers = _answer;
            this.correctAnswers = _correctAnswers;
        }
        checkAnwser(userAnswer) {
            userAnswer = userAnswer.sort();
            this.correctAnswers = this.correctAnswers.sort();
            for (let i = 0; i < this.correctAnswers.length; i++) {
                console.log(userAnswer[i]);
                if (!(this.correctAnswers[i] === userAnswer[i])) {
                    return false;
                }
            }
            return true;
        }
        showQuestionAnswers() {
            let answersString = this.question + "\n";
            for (let i = 0; i < this.answers.length; i++) {
                answersString = answersString + "[" + (i + 1) + "] " + this.answers[i] + "\n";
            }
            let userAnswer = prompt(answersString, "Gib so viele Zahlen von 1 bis " + this.answers.length + " mit Kommas getrennt ein").split(",");
            let userAnswerNumber = [];
            for (let i = 0; i < userAnswer.length; i++) {
                let theNumber = +userAnswer[i];
                userAnswerNumber.push(theNumber);
            }
            console.log(this.checkAnwser(userAnswerNumber));
            return this.checkAnwser(userAnswerNumber);
        }
    }
    EQ.MultipleChoiceQuestion = MultipleChoiceQuestion;
})(EQ || (EQ = {}));
//# sourceMappingURL=MultipleChoiceQuestion.js.map