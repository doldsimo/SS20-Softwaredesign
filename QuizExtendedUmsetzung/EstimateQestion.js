"use strict";
var EQ;
(function (EQ) {
    class EstimateQuestion extends EQ.Question {
        constructor(_question, _answer, _tolerance) {
            super(_question);
            this.answer = _answer;
            this.tolerance = _tolerance;
        }
        checkAnwser(userAnswer) {
            let userAnswerNumber = +userAnswer;
            console.log(userAnswerNumber);
            let toleranceDown = this.answer - this.tolerance;
            let toleranceUp = this.answer + this.tolerance;
            console.log(toleranceDown);
            console.log(toleranceUp);
            if (userAnswerNumber < toleranceUp && userAnswerNumber > toleranceDown)
                return true;
            else
                return false;
        }
        showQuestionAnswers() {
            let answersString = this.question + "\n" + "Gebe eine geschätzte Zahl ein";
            let userAnswer = prompt(answersString, "Gebe eine Zahl ein");
            return this.checkAnwser(userAnswer);
        }
    }
    EQ.EstimateQuestion = EstimateQuestion;
})(EQ || (EQ = {}));
//# sourceMappingURL=EstimateQestion.js.map