const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");


class Quiz
{
	constructor(type, questions)
	{
		this.type = type;
		this.questions = questions;
	}
} 

class Question 
{
	constructor(text, questions)
	{
		this.text = text;
		this.questions = questions;
	}
}

class Answer 
{
	constructor(text, value, isCorrect = false) 
	{
		this.text = text;
		this.value = value;
		this.isCorrect = isCorrect;
	}

	Click(type)
	{
		if(type == 1)
		{
			return this.isCorrect;
		}
		else
		{
			return this.value;
		}
	}
}