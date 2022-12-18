//Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų:
const peopleData = [
  {
    name: "Petras",
    surname: "Petrauskas",
    age: 50,
    height: 185,
    weight: 79,
    sex: "male",
  },
  {
    name: "Jonas",
    surname: "Jonauskas",
    age: 45,
    height: 175,
    weight: 75,
    sex: "male",
  },

  {
    name: "Vardenis",
    surname: "Pavardenis",
    age: 18,
    height: 170,
    weight: 71,
    sex: "male",
  },

  {
    name: "Janina",
    surname: "Janinauskaite",
    age: 25,
    height: 168,
    weight: 65,
    sex: "female",
  },

  {
    name: "Gražina",
    surname: "Skolauskaitė",
    age: 18,
    height: 172,
    weight: 73,
    sex: "female",
  },

  {
    name: "Vytautas",
    surname: "Vytautauskas",
    age: 62,
    height: 183,
    weight: 81,
    sex: "male",
  },

  {
    name: "Mindaugas",
    surname: "Karaliauskas",
    age: 32,
    height: 170,
    weight: 65,
    sex: "male",
  },

  {
    name: "Voras",
    surname: "Spaideris",
    age: 68,
    height: 191,
    weight: 93,
    sex: "male",
  },
];

//Panaudojant array.forEach:
//   - Atspausdinti kiekvieną elementą
console.log("---------------------------");
peopleData.forEach((people) => {
  console.log(people);
});
//   - Atspausdinti kiekvieno elemento pilną vardą
console.log("---------------------------");
peopleData.forEach(({ name, surname }) => {
  console.log(`${name} ${surname}`);
});
//   - Atspausdinti kiekvieno elemento kūno masės indeksą
// svoris (kg) / (ūgis (cm) / 100)2
console.log("---------------------------");
peopleData.forEach(({ height, weight }) => {
  let kmi = weight / (height / 100) ** 2;
  console.log(kmi.toFixed(2));
});
console.log("---------------------------");
// Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:
const newPeopleArrFilter = [...peopleData];
//   - kurių vardas ilgesnis nei 6 simboliai
console.log("---------------------------");
console.log(newPeopleArrFilter.filter(({ name }) => name.length > 6));
//   - kurių svoris didesnis nei 80kg
console.log("---------------------------");
console.log(newPeopleArrFilter.filter(({ weight }) => weight > 80));
//   - kurie aukštesni nei 185cm
console.log("---------------------------");
console.log(newPeopleArrFilter.filter(({ height }) => height > 185));
console.log("---------------------------");
// Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti
const newPeopleArrMap = [...peopleData];
//   - ūgius
console.log(newPeopleArrMap.map(({ height }) => height));
//   - svorius
console.log("---------------------------");
console.log(newPeopleArrMap.map(({ weight }) => weight));
//   - ūgius, svorius ir amžius : [{height, weight, age}, ...]
console.log("---------------------------");
console.log(newPeopleArrMap.map(({ height, weight, age }) => ({ height, weight, age })));
//   - KMI indeksus
console.log("---------------------------");
console.log(newPeopleArrMap.map(({ height, weight }) => ({ kmi: (weight / (height / 100) ** 2).toFixed(2) })));
//   - KMI indeksus ir amžius
console.log("---------------------------");
console.log(newPeopleArrMap.map(({ height, weight, age }) => ({ kmi: (weight / (height / 100) ** 2).toFixed(2), age })));
console.log("---------------------------");
// Panaudojant array.reduce suskaičiuoti ir po to atspausdinti
const newPeopleArrReduce = [...peopleData];
//   - svorių vidurkį
console.log(newPeopleArrReduce.reduce((sum, { weight }, _, arr) => sum + weight / arr.length, 0).toFixed(2));
//   - ūgio vidurkį
console.log("---------------------------");
console.log(newPeopleArrReduce.reduce((sum, { height }, _, arr) => sum + height / arr.length, 0).toFixed(2));
console.log("---------------------------");

// Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:
//     Person klasėje:
//     - sukurti vidinį metodą: getBMI();     // suskaičiuoja kūno masės indeksą
//     - sukurti vidinį metodą: toString();   // atspausdina žmogų su esamom savybėm

class Person {
  constructor({ name, surname, age, height, weight, sex }) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.sex = sex;
    this.bmi = this.getBMI();
  }
  getBMI() {
    return (this.weight / (this.height / 100) ** 2).toFixed(2);
  }
  toString() {
    return `${this.name} ${this.surname} is ${this.age} years old ${this.sex}. Height: ${this.height} and weight: ${this.weight}`;
  }
}
const newPersons = peopleData.map((people) => new Person(people));
console.log(newPersons);
console.log("---------------------------");
//Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg
console.log(newPersons.filter(({ sex, age, weight }) => sex === "female" && age < 20 && weight > 70));
console.log("---------------------------");
//Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 24 ( pakeistas senas 18,5 nes ner tokiu)
console.log("---------------------------");
console.log(newPersons.filter(({ sex, age, bmi }) => sex === "male" && age > 25 && bmi < 23));
//Atrinkti vaikus, su antsvoriu (KMI > 24)
console.log("---------------------------");
console.log(newPersons.filter(({ age, bmi }) => age < 20 && bmi > 24));
//Atrinkti pensininkus, su antsvoriu (KMI > 25)
console.log("---------------------------");
console.log(newPersons.filter(({ age, bmi }) => age > 60 && bmi > 25));
//Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]
console.log("---------------------------");
console.log(newPersons.filter(({ bmi }) => bmi <= 25 || bmi >= 18.5));

// Peržiūrėti video:
// https://www.youtube.com/watch?v=JaMCxVWtW58

// Geras Žaidimas pasitreniravimui:
//   https://www.typing.com/student/game/tommyq

// Rekomenduoju pasikartoti greitasias komandas
