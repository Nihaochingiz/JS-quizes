const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

class Quiz
{
	constructor(type, questions, results)
	{
		//1 или 2
		this.type = type;
		this.questions = questions;
		this.results = results;
		this.score = 0;

		this.current = 0;
	}

	Click(index)
	{
		this.score += this.questions[this.current].Click(index);
		this.Next();
	}

	Next()
	{
		this.current++;
		
		if(this.current >= this.questions.length) 
		{
			this.End();
		}
	}

	End()
	{
		for(var i = 0; i < this.results.length; i++)
		{

		}
	}
} 

class Question 
{
	constructor(text, answers)
	{
		this.text = text; 
		this.answers = answers; 
	}

	Click(index) 
	{
		return this.answers[index].value; 
	}
}

class Answer 
{
	constructor(text, value) 
	{
		this.text = text; 
		this.value = value; 
	}
}

class Result 
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}

	Check(value)
	{
		if(this.value <= value)
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
}