// provide a function to calculate my age

export function calculateAge() {
  return Math.floor(
    (new Date().getTime() - new Date("2005-06-08").getTime()) /
    (1000 * 60 * 60 * 24 * 365.25)
  );
}