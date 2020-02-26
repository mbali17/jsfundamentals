//input marks scored, total marks
//Calculate percentage
//return letter grade: A= 90-100, B= 80-90, c= 70-79, d= 60-69 f =0-59

let calculatePercentage = function(scored, total) {
  return (scored / total) * 100;
};

let calculateLetterGrade = function(marksScored, totalMarks) {
  let percentageScored = calculatePercentage(marksScored, totalMarks);
  console.log(`percentage score is: ${percentageScored}`);
  let letterGrade = ' ';
  if (percentageScored >= 90 && percentageScored < 100) {
    letterGrade = 'A';
  } else if (percentageScored >= 80 && percentageScored < 90) {
    letterGrade = 'B';
  } else if (percentageScored >= 70 && percentageScored <= 79) {
    letterGrade = 'C';
  } else if (percentageScored >= 60 && percentageScored <= 69) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }
  return letterGrade;
};
let marksScored = 18;
let totalMarks = 20;
console.log(
  `The letter grade for the ${marksScored} is ${calculateLetterGrade(
    marksScored,
    totalMarks
  )}`
);
