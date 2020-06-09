"use strict";
var EQ;
(function (EQ) {
    class TextQuestion extends EQ.Question {
        constructor(_question, _answer) {
            super(_question);
            this.answer = _answer;
        }
        checkAnwser(_userAnswer) {
            if (_userAnswer === this.answer)
                return true;
            else
                return false;
        }
        showQuestionAnswers() {
            let answersString = this.question + "\n" + "Gebe das richtige Wort ein";
            let userAnswer = prompt(answersString, "hier Wort eingeben");
            return this.checkAnwser(userAnswer);
        }
    }
    EQ.TextQuestion = TextQuestion;
})(EQ || (EQ = {}));
//# sourceMappingURL=TextQuestion.js.map