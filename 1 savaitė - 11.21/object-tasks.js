console.groupCollapsed("1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7");
{
  const drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
  ];
  function sortDrinkByPrice(drinks) {
    return drinks.sort((a, b) => (a.price > b.price ? 1 : -1));
  }
  // expected result - sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
  console.log(sortDrinkByPrice(drinks));
}
console.groupEnd();

console.groupCollapsed("2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau");
{
  function addName(obj, name, value) {
    obj[name] = value;
    return obj;
  }
  // expected result - addName(obj, name, value) ➞ { piano: 500, stereo: 300, Caligula: 440 }
  console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));
}
console.groupEnd();

console.groupCollapsed("3 - https://edabit.com/challenge/48EJWLhF224na8po3");
{
  const genList = [
    {
      generation: -3,
      male: "great grandfather",
      female: "great grandmother",
    },
    {
      generation: -2,
      male: "grandfather",
      female: "grandmother",
    },
    {
      generation: -1,
      male: "father",
      female: "mother",
    },
    {
      generation: 0,
      male: "me!",
      female: "me!",
    },
    {
      generation: 1,
      male: "son",
      female: "daughter",
    },
    {
      generation: 2,
      male: "grandson",
      female: "granddaughter",
    },
    {
      generation: 3,
      male: "great grandson",
      female: "great granddaughter",
    },
  ];
  function generation(x, y) {
    return genList
      .filter((a) => a.generation == x)
      .map((b) => (y == "f" ? b.female : y == "m" ? b.male : "nera lyties"))
      .shift();
  }
  //expected result - generation(2, "f") ➞ "granddaughter"
  console.log(generation(2, "f"));
}
console.groupEnd();

console.groupCollapsed("4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX");
{
  const exampleHand = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
  ];
  function maximumScore(tileHand) {
    return tileHand.map((x) => x.score).reduce((a, b) => a + b, 0);
  }
  //expected result - 28
  console.log(maximumScore(exampleHand));
}
console.groupEnd();

console.groupCollapsed("5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD");
{
  function calculateDifference(obj, limit) {
    return Object.values(obj).reduce((a, b) => a + b, 0) - limit;
  }
  //expected result - calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1
  console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));
}

console.groupEnd();

console.groupCollapsed("6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM");
{
  function toArray(obj) {
    return Object.entries(obj);
  }
  //expected result - toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
  console.log(toArray({ shrimp: 15, tots: 12 }));
}
console.groupEnd();

console.groupCollapsed("7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip");
{
  function inkLevels(inks) {
    return Math.min(...Object.values(inks));
  }
  //expected result - inkLevels({"cyan": 23,"magenta": 12,"yellow": 10}) ➞ 10
  console.log(inkLevels({ cyan: 23, magenta: 12, yellow: 10 }));
}
console.groupEnd();

console.groupCollapsed("8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak");
{
  const stolenItems = {
    tv: 30,
    skate: 20,
    stereo: 50,
  };
  function calculateLosses(obj) {
    return Object.values(obj).length <= 0 ? "Lucky you!" : Object.values(obj).reduce((a, b) => a + b, 0);
  }
  //expected result ➞ 100
  console.log(calculateLosses(stolenItems));
}
console.groupEnd();
