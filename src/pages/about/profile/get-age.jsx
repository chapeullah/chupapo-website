export function getAge(dateOfBirthString) {
  const dateOfBirth = new Date(dateOfBirthString);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - dateOfBirth.getFullYear();

  const hasDateOfBirthPassed =
    currentDate.getMonth() > dateOfBirth.getMonth() ||
    (
      currentDate.getMonth() === dateOfBirth.getMonth() &&
      currentDate.getDate() >= dateOfBirth.getDate()
    );

  if (!hasDateOfBirthPassed) {
    --age;
  }

  return age;
}