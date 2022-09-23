function getAge(person) {
  const currentYear = new Date().getFullYear();
  const birth = person.yearOfBirth || currentYear;
  const death = person.yearOfDeath || currentYear;
  const age = death - birth;

  return age;
}

const findTheOldest = function(people) {
  const oldest = people.reduce(
    (previous, current) => {
      const previousAge = getAge(previous);
      const currentAge = getAge(current);
      const older = currentAge > previousAge ? current : previous;

      return older;
    }
  );

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
