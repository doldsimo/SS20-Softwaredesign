"use strict";
var EQ;
(function (EQ) {
    class SingleChoiceQuestion extends EQ.Question {
        constructor(_question, _answers, _correctAnswer) {
            super(_question);
            this.answers = _answers;
            this.correctAnswer = _correctAnswer;
        }
        checkAnwser(userAnswer) {
            if (userAnswer === this.correctAnswer)
                return true;
            else
                return false;
        }
        showQuestionAnswers() {
            let answersString = this.question + "\n";
            for (let i = 0; i < this.answers.length; i++) {
                answersString = answersString + "[" + (i + 1) + "] " + this.answers[i] + "\n";
            }
            let userAnswer = Number(prompt(answersString, "Zahl von 1 bis " + this.answers.length));
            return this.checkAnwser(userAnswer);
        }
    }
    EQ.SingleChoiceQuestion = SingleChoiceQuestion;
})(EQ || (EQ = {}));
//# sourceMappingURL=SingleChoiceQuestion.js.map