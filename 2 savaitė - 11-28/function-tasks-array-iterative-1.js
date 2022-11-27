const people = [
  {
    name: "Jonas",
    surname: "Jonaitis",
    sex: "male",
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: "Severija",
    surname: "Piktutytė",
    sex: "female",
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: "Valdas",
    surname: "Vilktorinas",
    sex: "male",
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: "Virginijus",
    surname: "Uostauskas",
    sex: "male",
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: "Samanta",
    surname: "Uostauskienė",
    sex: "female",
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];
// {
//     name: 'Jonas',
//     surname: 'Jonaitis',
//     sex: 'male',
//     age: 26,
//     income: 1200,
//     married: false,
//     hasCar: false
//   }
console.groupCollapsed("1. Atspausdinkite visus žmones eilutėmis");
//Jonas Jonaitis - is male of age 26. Earns 1200$ is not married has no car.
{
  people.forEach((person) => {
    console.log(
      `${person.name} ${person.surname} - is ${person.sex} of age ${person.age}. Earns ${person.income}$ ${
        person.married ? "is married" : "is not married"
      } and ${person.hasCar ? "has a car" : "has no car"}`
    );
  });
}
console.groupEnd();

console.groupCollapsed("2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu");
{
  const fullName = people.map(({ name, surname }) => `${name} ${surname}`).join(" - ");
  console.log(fullName);
}
console.groupEnd();

console.groupCollapsed("3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą");
{
  const fullNameWithStatus = people
    .map(({ name, surname, married }) => `${name} ${surname} - ${married ? "is married" : "not married"}`)
    .join(", ");
  console.log(fullNameWithStatus);
}
console.groupEnd();

console.groupCollapsed("4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą");
{
  const incomeBySex = people.map(({ sex, income }) => ({
    sex: sex,
    income: income,
  }));
  console.log(incomeBySex);
}
console.groupEnd();

console.groupCollapsed("5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą");
{
  const peopleArray = people.map(({ name, surname, sex }) => ({
    name: name,
    lastname: surname,
    sex: sex,
  }));
  console.log(peopleArray);
}
console.groupEnd();

console.groupCollapsed("6. Atspausdinkite visus vyrus");
{
  const printMale = people.filter(({ sex }) => sex === "male");
  console.log(printMale);
}
console.groupEnd();

console.groupCollapsed("7. Atspausdinkite visas moteris");
{
  const printFemale = people.filter(({ sex }) => sex === "female");
  console.log(printFemale);
}
console.groupEnd();

console.groupCollapsed("8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas");
{
  const printHasCar = people.filter(({ hasCar }) => hasCar).map(({ name, surname }) => ({ name, surname }));
  console.log(printHasCar);
}
console.groupEnd();

console.groupCollapsed("9. Atspausdinkite žmones kurie yra susituokę");
{
  const isMarried = people.filter(({ married }) => married);
  console.log(isMarried);
}
console.groupEnd();

console.groupCollapsed("10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį");
{
  // const totalDrivers = {
  //   male: people.filter(({ hasCar, sex }) => hasCar && sex === "male").length,
  //   female: people.filter(({ hasCar, sex }) => hasCar && sex === "female").length,
  // };
  const totalDrivers = people.reduce(
    (driverCount, person) => {
      person.hasCar ? (person.sex === "male" ? (driverCount.male += 1) : (driverCount.female += 1)) : null;
      return driverCount;
    },
    { male: 0, female: 0 }
  );
  console.log(totalDrivers);
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  const reformArray = people.map(({ income, ...person }) => ({
    ...person,
    salary: income,
  }));
  console.log(reformArray);
}
console.groupEnd();

console.groupCollapsed("12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės");
{
  const removedSomeKeys = people.map(({ age, married, hasCar, income }) => ({
    age,
    married,
    hasCar,
    income,
  }));
  console.log(removedSomeKeys);
}
console.groupEnd();

console.groupCollapsed(
  '13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe'
);
{
  const peopleWithFullName = people.map(({ name, surname, ...person }) => ({
    fullname: `${name} ${surname}`,
    ...person,
  }));
  console.log(peopleWithFullName);
}
console.groupEnd();
