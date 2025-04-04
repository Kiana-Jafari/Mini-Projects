/*

Officer: 5979363
CaseNum: 701-3-36159510-5979363

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from pierre myrle.
All they need is for you to do the detective work.

This time you must implement two functions:

- A matchProperties function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A locateGuilty function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - function locateGuilty(){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. 
Their expression seemed nerveous. They brobably weigh between 64 and 95 kg. 
They seemed to be between the age of 18 and 65 years old. 
They were wearing a green jacket. They were carrying a big black envelope. 
I'm not quite sure. It's hard to say. I'll never forget their green eyes. 
They were fairly tall, I think between a height of 148 and 195 cm. 
It was very dark and I could barely see, I distinctly remember that 
they were wearing a orange socks, I remember thinking that was quite unusual. 
The person I saw was male. That's all I can remember about them. 

*/

const suspectList = [
  { 
		"name": "LESLEY BROADVIEW",
		"accessory": "metal briefcase",
		"coat": "black overcoat",
		"expression": "nerveous",
		"gender": "female",
		"weight": 82,
		"height": 182,
		"age": 51
	},
  { 
		"name": "NICOLE DAVISWOOD",
		"accessory": "brown paper bag",
		"coat": "yellow poncho",
		"expression": "menacing",
		"gender": "female",
		"weight": 76,
		"height": 183,
		"age": 51
	},
	{ 
		"name": "BRAD MONKSFORD",
		"accessory": "big black envelope",
		"coat": "green jacket",
		"expression": "nerveous",
		"gender": "male",
		"weight": 77,
		"height": 164,
		"age": 21
	},
	{ 
		"name": "KITTY MOHWAWK",
		"accessory": "glass bottle",
		"coat": "green army coat",
		"expression": "menacing",
		"gender": "female",
		"weight": 74,
		"height": 169,
		"age": 25
	},
	{ 
		"name": "LIANNE ADVERSANE",
		"accessory": "orange plastic bag",
		"coat": "black hoodie",
		"expression": "confused",
		"gender": "female",
		"weight": 83,
		"height": 176,
		"age": 32
	},
	{ 
		"name": "DARBY FORSLIN",
		"accessory": "red backpack",
		"coat": "blue overcoat",
		"expression": "blank",
		"gender": "male",
		"weight": 88,
		"height": 200,
		"age": 44
	},
	{ 
		"name": "MALINDA MAUBERT",
		"accessory": "plastic box",
		"coat": "white fur coat",
		"expression": "sad",
		"gender": "male",
		"weight": 71,
		"height": 159,
		"age": 37
	}
];

// Function that returns a number value indicating how many of the suspect object properties match the witness statement
function matchProperties(suspectObj)
{
  let count = 0;

	const conditions = [
		() => suspectObj.expression === 'nerveous',
		() => (suspectObj.weight > 64 && suspectObj.weight < 95),
		() => (suspectObj.age > 18 && suspectObj.age < 65),
		() => suspectObj.coat === 'green jacket',
		() => suspectObj.accessory === 'big black envelope',
		() => (suspectObj.height > 148 && suspectObj.height < 195),
		() => suspectObj.gender === 'male'
	];

	for (let i = 0; i < conditions.length; i++)
	{
		if (conditions[i]() == true)
		{
			count ++;
		}
	}

	return count;
}

// Function that traverses the array of suspects and returns the object representing the guilty suspect
function locateGuilty()
{
  let maxMatch = 0;
	let guiltySuspect = {};

	for (let i = 0; i < suspectList.length; i++)
	{
		let match = matchProperties(suspectList[i]);
		
		if (match > maxMatch)
			{
				maxMatch = match;
				guiltySuspect = suspectList[i];
			}
	}
	return guiltySuspect;
}

console.log('The guilty suspect is ' + locateGuilty().name); // Output: The guilty suspect is BRAD MONKSFORD
