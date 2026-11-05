export function calculateGrade(score: number, total: number): {
  percentage: number;
  letter: string;
} {
  const percentage = (score / total) * 100;

  let letter: string;

  if (percentage >= 90) {
    letter = "A";
  } else if (percentage >= 80) {
    letter = "B";
  } else if (percentage >= 70) {
    letter = "C";
  } else if (percentage >= 60) {
    letter = "D";
  } else {
    letter = "F";
  }

  return { percentage, letter };
}

console.log(calculateGrade(85, 100));