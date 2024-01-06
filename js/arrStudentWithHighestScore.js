let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];


// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.
// ---> YOUR CODE HERE <---
function getHighestScoreIndex(score){
    let maxScore = Math.max(...score);
    let maxScoreIndex = score.indexOf(maxScore);
    return maxScoreIndex
}

// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:
// ---> YOUR CODE HERE <---
let highestScoreStudentIndex = getHighestScoreIndex(scores);
console.log(`${students[highestScoreStudentIndex]} has the highest score: ${scores[highestScoreStudentIndex]}`)

// expected output
// Maria has the higest score: 6