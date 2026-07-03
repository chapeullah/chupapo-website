export function getExperienceYears(startDateString) {
  const startDate = new Date(startDateString);
  const currentDate = new Date();

  const months =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    currentDate.getMonth() -
    startDate.getMonth();

  const years = months / 12;

  return Math.ceil(years * 2) / 2;
}