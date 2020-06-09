"use strict";
var EQ;
(function (EQ) {
    class YesNoQuestion extends EQ.Question {
        constructor(_question, _answer) {
            super(_question);
            this.answer = _answer;
        }
        checkAnwser(userAnswer) {
            let isTrueSayUser;
            if (userAnswer === "1")
                isTrueSayUser = true;
            else
                isTrueSayUser = false;
            if (isTrueSayUser === this.answer)
                return true;
            else
                return false;
        }
        showQuestionAnswers() {
            let answersString = this.question + "\n" + "[1] Ja\n" + "[2] Nein";
            let userAnswer = prompt(answersString, "Gebe 1 oder 2 ein");
            return this.checkAnwser(userAnswer);
        }
    }
    EQ.YesNoQuestion = YesNoQuestion;
})(EQ || (EQ = {}));
//# sourceMappingURL=YesNoQuestion.js.map