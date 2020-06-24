namespace EQ {
	//Abstrackte klasse
	export abstract class Question {
		question: string;
        type: string;

		constructor(_question: string) {
			this.question = _question;
		}
	}
}

