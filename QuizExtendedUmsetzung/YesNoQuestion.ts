namespace EQ {
    export class YesNoQuestion extends Question {
        question: string;
        answer: boolean;

        constructor(_question: string, _answer: boolean) {
            super(_question)
            this.answer = _answer;

        }

        checkAnwser(userAnswer: string): boolean {
            let isTrueSayUser: boolean;
            if(userAnswer === "1")
                isTrueSayUser = true;
            else
                isTrueSayUser = false;
            
            if(isTrueSayUser === this.answer)
                return true;
            else
                return false;

            
        }

        showQuestionAnswers(): boolean {
            let answersString: string = this.question + "\n" + "[1] Ja\n" + "[2] Nein";
            let userAnswer: string = prompt(answersString, "Gebe 1 oder 2 ein");
            
            return this.checkAnwser(userAnswer);

        }
    }

}