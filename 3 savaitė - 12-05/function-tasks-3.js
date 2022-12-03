console.group("11. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių");
{
  function isEvenNumberOfLetters(str) {
    return str.length === 0 ? "empty string" : `${str.length} - ${str.length % 2 === 0 ? true : false}`;
  }
  console.log("---");
  console.log({
    labas: isEvenNumberOfLetters("labas"),
    kempės: isEvenNumberOfLetters("kempės"),
    123123: isEvenNumberOfLetters("123123"),
    empty: isEvenNumberOfLetters(""),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("12. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje");
{
  function getNumberOfVowels(str) {
    const wovels = "AaĄąEeĘęĖėIiĮįYyOoUuŲųŪū";
    stringToArray = str.split("");
    return stringToArray.filter((letter) => wovels.includes(letter)).length;
  }
  console.log("---");
  console.log({
    aaaaa: getNumberOfVowels("aaaaa"),
    sasasasa: getNumberOfVowels("sasasasa"),
    aeyuioąčė: getNumberOfVowels("aeyuioąčė"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("13. Sukurkite funkciją, kuri grąžina priebalsių kiekį žodyje");
{
  function getNumberOfConsonants(str) {
    const consonants = "BbCcČčDdFfGgHhJjKkLlMmNnPpRrSsŠšTtVvZzŽž";
    stringToArray = str.split("");
    return stringToArray.filter((letter) => consonants.includes(letter)).length;
  }
  console.log("---");
  console.log({
    aaaaa: getNumberOfConsonants("aaaaa"),
    sasasasa: getNumberOfConsonants("sasasasa"),
    aeyuioąčė: getNumberOfConsonants("aeyuioąčė"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("14. Sukurkite funkciją, kuri grąžina <true>, jeigu NĖRA skaitmenų");
{
  function isOnlyLetters(str) {
    const numbers = "0123456789";
    stringToArray = str.split("");
    return stringToArray.filter((number) => numbers.includes(number)).length ? false : true;
  }

  console.log("---");
  console.log({
    labas: isOnlyLetters("labas"),
    kempės: isOnlyLetters("kempės"),
    123123: isOnlyLetters("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("15. Sukurkite funkciją, kuri grąžina 'a' raidžių kiekį žodyje");
{
  function letterACount(str) {
    const specialLetter = "a";
    stringToArray = str.split("");
    return stringToArray.filter((letter) => letter === specialLetter).length;
  }
  console.log("---");
  console.log({
    labas: letterACount("labas"),
    kempės: letterACount("kempės"),
    123123: letterACount("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("16. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje");
{
  function letterCount(str, searchLetter) {
    const specialLetter = searchLetter;
    stringToArray = str.split("");
    return stringToArray.filter((letter) => letter === specialLetter).length;
  }
  console.log("---");
  console.log({
    "labas, a": letterCount("labas", "a"),
    "kempės, k": letterCount("kempės", "k"),
    "123123, z": letterCount("123123", "z"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("17. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) 'a' raidės vietą žodyje");
{
  function indexOfLetterA(str) {
    const specialLetter = "a";
    stringToArray = str.split("");
    getFirstLetter = stringToArray.indexOf(specialLetter);
    return getFirstLetter > 0 ? getFirstLetter : "nera";
  }
  console.log("---");
  console.log({
    labas: indexOfLetterA("labas"),
    kempės: indexOfLetterA("kempės"),
    123123: indexOfLetterA("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("18. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) vartotojo perduotos raidės vietą žodyje");
{
  function indexOfLetter(str, searchLetter) {
    const specialLetter = searchLetter;
    stringToArray = str.split("");
    getFirstLetter = stringToArray.indexOf(specialLetter);
    return getFirstLetter >= 0 ? getFirstLetter : "nera";
  }
  console.log("---");
  console.log({
    "labas, a": indexOfLetter("labas", "a"),
    "kempės, k": indexOfLetter("kempės", "k"),
    "123123, z": indexOfLetter("123123", "z"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("19. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais 'a' raidės pasikartojimais žodyje");
{
  function indexesOfLetterA(str) {
    const specialLetter = "a";
    const letterIndexes = [];
    stringToArray = str.split("");
    for (let i = 0; i < stringToArray.length; i++) {
      stringToArray[i] === specialLetter ? letterIndexes.push(i) : null;
    }
    return letterIndexes.length !== 0 ? letterIndexes : "nera";
  }
  console.log("---");
  console.log({
    labas: indexesOfLetterA("labas"),
    kempės: indexesOfLetterA("kempės"),
    123123: indexesOfLetterA("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("20. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais vartotojo įvestos raidės pasikartojimais žodyje");
{
  function indexesOfLetter(str, searchLetter) {
    const specialLetter = searchLetter;
    const letterIndexes = [];
    stringToArray = str.split("");
    for (let i = 0; i < stringToArray.length; i++) {
      // jeigu ivestas skaicius
      //!/\d+/g.test(stringToArray[i]) ? (stringToArray[i] === specialLetter ? letterIndexes.push(i) : null) : null;

      //grazina ir raides, ir skaicius
      stringToArray[i] === specialLetter ? letterIndexes.push(i) : null;
    }
    return letterIndexes.length !== 0 ? letterIndexes : "nera";
  }
  console.log("---");
  console.log({
    "labas, a": indexesOfLetter("labas", "a"),
    "kempės, m": indexesOfLetter("kempės", "m"),
    "123123, 2": indexesOfLetter("123123", "2"),
  });
  console.log("---");
}
console.groupEnd();
console.log();
