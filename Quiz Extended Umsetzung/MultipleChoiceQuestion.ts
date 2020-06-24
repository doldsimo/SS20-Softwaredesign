namespace EQ {
    export class MultipleChoiceQuestion extends Question {
        question: string;
        answers: string[];
        correctAnswers: number[];


        constructor(_question: string, _answer: string[], _correctAnswers: number[]) {
            super(_question);
            this.answers = _answer;
            this.correctAnswers = _correctAnswers;
        }


        checkAnwser(userAnswer: number[]): boolean {
            userAnswer = userAnswer.sort();
            this.correctAnswers = this.correctAnswers.sort();

            for (let i = 0; i < this.correctAnswers.length; i++) {
                console.log(userAnswer[i]);
                if (!(this.correctAnswers[i] === userAnswer[i])) {
                    return false
                }
            }
            return true;
        }

        showQuestionAnswers(): boolean {
            let answersString: string = this.question + "\n";

            for (let i = 0; i < this.answers.length; i++) {
                answersString = answersString + "[" + (i + 1) + "] " + this.answers[i] + "\n";
            }
            let userAnswer: string[] = prompt(answersString, "Gib so viele Zahlen von 1 bis " + this.answers.length + " mit Kommas getrennt ein").split(",");
            let userAnswerNumber: number[] = [];
            for (let i = 0; i < userAnswer.length; i++) {
                let theNumber: number = +userAnswer[i];
                userAnswerNumber.push(theNumber);
            }
            console.log(this.checkAnwser(userAnswerNumber));
            return this.checkAnwser(userAnswerNumber);
        }


    }

}
