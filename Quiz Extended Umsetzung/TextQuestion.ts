namespace EQ {
    export class TextQuestion extends Question {
        question: string;
        answer: string;

        constructor(_question: string, _answer: string) {
            super(_question)
            this.answer = _answer;
        }

        checkAnwser(_userAnswer: string): boolean{
            if(_userAnswer === this.answer)
                return true;
            else
                return false;
        }

        showQuestionAnswers(): boolean {
            let answersString: string = this.question + "\n" + "Gebe das richtige Wort ein";
            let userAnswer: string = prompt(answersString, "hier Wort eingeben");


            return this.checkAnwser(userAnswer);
        }
    }

}