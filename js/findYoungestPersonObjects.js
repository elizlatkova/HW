// an array of objects, representing data for a person:
let persons = [
	{
		"gender": "female",
		"age": 32,
		"firstName": "Ada",
		"surName": "Byron"
	},
	{
		"gender": "male",
		"age": 42,
		"firstName": "Asen",
		"surName": "Asenov"
	},	
	{	
		"gender": "male",
		"age": 18,
		"firstName": "Petar",
		"surName": "Petrov"
	},
	{
		"gender": "male",
		"age": 33,
		"firstName": "Ivan",
		"surName": "Ivanov"
	}
];

//I tried myself without looking the exemple :)
function findYoungestPerson(arr){
    let youngest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(youngest.age>arr[i].age){
            youngest = arr[i];
        };
    };
    return youngest
}

let youngestPerson = findYoungestPerson(persons);
console.log(`The younger person is ${youngestPerson.firstName} - ${youngestPerson.age} years.`);
