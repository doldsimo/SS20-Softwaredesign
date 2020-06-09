namespace EQ {
    export class SingleChoiceQuestion extends Question {
        question: string;
        answers: string[];
        correctAnswer: number;


        constructor(_question: string, _answers: string[], _correctAnswer: number) {
            super(_question);
            this.answers = _answers;
            this.correctAnswer = _correctAnswer;
        }

        checkAnwser(userAnswer: number): boolean {
            if(userAnswer === this.correctAnswer)
                return true;
            else
                return false;
        }

        showQuestionAnswers(): boolean {
            let answersString: string = this.question + "\n";

            for (let i = 0; i < this.answers.length; i++) {
                answersString = answersString + "[" + (i + 1) + "] " + this.answers[i] + "\n";
            }
            let userAnswer: number = Number(prompt(answersString, "Zahl von 1 bis " + this.answers.length));

            return this.checkAnwser(userAnswer);
        }
    }

}

