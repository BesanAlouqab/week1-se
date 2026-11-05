export function isLate(submissionDate: Date, dueDate: Date): boolean {
  return submissionDate.getTime() > dueDate.getTime();
}

console.log(
  isLate(new Date("2026-11-05"), new Date("2026-11-04"))
);