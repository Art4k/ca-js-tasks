console.group("21. Sukurkite funkciją, kuri ištrintų pirmą surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
  function removeFirstLetterA(str) {
    const removableLetter = "a";
    if (str.indexOf(removableLetter) < 0) return `Nėra ${removableLetter} raidės`;
    findLetterAIndex = str.indexOf("a");
    const modifiedString = str.slice(0, findLetterAIndex) + str.slice(findLetterAIndex + 1);
    return modifiedString;
  }
  console.log("---");
  console.log({
    labas: removeFirstLetterA("labas"),
    kempiniukas: removeFirstLetterA("kempiniukas"),
    123123: removeFirstLetterA("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("22. Sukurkite funkciją, kuri ištrintų paskutinę surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
  function removeLastLetterA(str) {
    const removableLetter = "a";
    if (str.indexOf(removableLetter) < 0) return `Nėra ${removableLetter} raidės`;
    findLetterAIndex = str.lastIndexOf("a");
    const modifiedString = str.slice(0, findLetterAIndex) + str.slice(findLetterAIndex + 1);
    return modifiedString;
  }
  console.log("---");
  console.log({
    labas: removeLastLetterA("labas"),
    kempiniukas: removeLastLetterA("kempiniukas"),
    123123: removeLastLetterA("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("23. Sukurkite funkciją, kuri ištrintų visus 'a' raidės pasikartojimus žodyje");
{
  function removeAllOccurencesOfLetterA(str) {
    const removableLetter = "a";
    const newArr = [];
    if (str.indexOf(removableLetter) < 0) return `Nėra ${removableLetter} raidės`;
    for (let i = 0; i < str.length; i += 1) {
      str[i].indexOf(removableLetter) < 0 ? newArr.push(str[i]) : null;
    }
    return newArr.join("");
  }
  console.log("---");
  console.log({
    labas: removeAllOccurencesOfLetterA("labas"),
    kempiniukas: removeAllOccurencesOfLetterA("kempiniukas"),
    123123: removeAllOccurencesOfLetterA("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("24. Sukurkite funkciją, kuri ištrintų visus, vartotojo įvestos raidės pasikartojimus žodyje");
{
  function removeAllOccurencesOfLetter(str, letter) {
    const removableLetter = letter;
    const newArr = [];
    if (str.indexOf(removableLetter) < 0) return `Nėra ${removableLetter}`;
    for (let i = 0; i < str.length; i += 1) {
      str[i].indexOf(removableLetter) < 0 ? newArr.push(str[i]) : null;
    }
    return newArr.join("");
  }
  console.log("---");
  console.log({
    "labas, a": removeAllOccurencesOfLetter("labas", "a"),
    "kempiniukas, i": removeAllOccurencesOfLetter("kempiniukas", "i"),
    "123123, 3": removeAllOccurencesOfLetter("123123", "3"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

// 25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.group("25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.");
{
  function filterLetters(str, lettersToRemove) {
    const newArr = [];
    for (let i = 0; i < str.length; i += 1) {
      if (lettersToRemove.filter((removableLetter) => removableLetter === str[i]).length === 0) newArr.push(str[i]);
    }
    return newArr.join("");
  }
  console.log("---");
  const str = filterLetters("Brangakmienio paveikslas", ["a", "i"]);
  console.log(str);
  console.log("---");
}
console.groupEnd();
console.log();

console.group("26. Sukurkite funkciją, kuri pirmu parametrų priimą sakinį, kiekvieną tarpą pakeičia brūkšneliu ir grąžina pakeistą sakinį");
{
  function replaceSpaceWithDash(str) {
    replaceSpace = str.split(" ").join("-");
    return replaceSpace;
  }
  console.log("---");
  console.log({
    "viens du trys": replaceSpaceWithDash("viens du trys"),
    "as tave myliu": replaceSpaceWithDash("as tave myliu"),
    "Bairis seniuk": replaceSpaceWithDash("Bairis seniuk"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("27. Sukurkite funkciją, kuri pirmu parametru priima sakinį, ir kiekvieno žodžio pirmają raidę padaro didžiąja");
{
  function capitalize(str) {
    const newArr = [];
    upperCase = str.split(" ");
    upperCase.forEach((el) => {
      newArr.push(el[0].toUpperCase() + el.slice(1));
    });
    return newArr.join(" ");
  }
  console.log("---");
  console.log({
    "viens du trys": capitalize("viens du trys"),
    "as tave myliu": capitalize("as tave myliu"),
    "Bairis seniuk": capitalize("Bairis seniuk"),
  });
  console.log("---");
}
console.groupEnd();
console.log();
