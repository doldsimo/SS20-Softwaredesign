namespace EQ {
    export class EstimateQuestion extends Question {
        question: string;
        answer: number;
        tolerance: number;

        constructor(_question: string, _answer: number, _tolerance: number) {
            super(_question)
            this.answer = _answer;
            this.tolerance = _tolerance;
        }

        checkAnwser(userAnswer: string): boolean{
            let userAnswerNumber: number = +userAnswer;
            console.log(userAnswerNumber);
            let toleranceDown: number = this.answer - this.tolerance;
            let toleranceUp: number = this.answer + this.tolerance;
            console.log(toleranceDown);
            console.log(toleranceUp);

            if(userAnswerNumber < toleranceUp && userAnswerNumber > toleranceDown)
                return true;
            else
                return false;
        }

        showQuestionAnswers(): boolean{
            let answersString: string = this.question + "\n" + "Gebe eine geschätzte Zahl ein";
            let userAnswer: string = prompt(answersString, "Gebe eine Zahl ein");


            return this.checkAnwser(userAnswer);

        }
    }

}