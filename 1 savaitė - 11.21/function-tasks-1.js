console.groupCollapsed("1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.");
{
  function pirmasElementas(arr) {
    console.log(arr[0]);
  }
  pirmasElementas(["katinas", 8, "trečias", true, "šuo"]);
}
console.groupEnd();

console.groupCollapsed("2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.");
{
  function pasalintiPirma(arr) {
    console.log(arr.shift());
  }
  pasalintiPirma(["katinas", 8, "trečias", true, "šuo"]);
}
console.groupEnd();

console.groupCollapsed("3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.");
{
  function paskutinisElementas(arr) {
    console.log(arr[arr.length - 1]);
  }
  paskutinisElementas(["katinas", 8, "trečias", true, "šuo"]);
}
console.groupEnd();

console.groupCollapsed("4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.");
{
  function pasalintiPaskutini(arr) {
    console.log(arr.pop());
  }
  pasalintiPaskutini(["katinas", 8, "trečias", true, "šuo"]);
}
console.groupEnd();

console.groupCollapsed("5. Parašykite funkciją, kuri grąžina elementų kiekį masyve");
{
  function elementuKiekis(arr) {
    console.log(arr.length);
  }
  elementuKiekis(["katinas", 8, "trečias", true, "šuo"]);
}
console.groupEnd();

console.groupCollapsed("6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą");
{
  function paskutinisIndeksas(arr) {
    console.log(arr.indexOf(arr[arr.length - 1]));
  }
  paskutinisIndeksas(["katinas", 8, "trečias", true, "šuo"]);
}
console.groupEnd();

console.groupCollapsed("7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis");
{
  function visiElementai(arr) {
    arr.forEach((el) => {
      console.log(arr.indexOf(el));
    });
  }
  visiElementai(["katinas", 8, "trečias", true, "šuo"]);
}
console.groupEnd();

console.groupCollapsed("8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis");
{
  function visosReiksmes(arr) {
    arr.forEach((el) => {
      console.log(el);
    });
  }
  visosReiksmes(["katinas", 8, "trečias", true, "šuo"]);
}
console.groupEnd();

console.groupCollapsed(
  "9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  "
);
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  function indexReiksmes(arr) {
    arr.forEach((el) => {
      console.log([arr.indexOf(el)], "=>", el);
    });
  }
  indexReiksmes(["katinas", 8, "trečias", true, "šuo"]);
}
console.groupEnd();

console.groupCollapsed("10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.");
{
  function atbulaiReiksmes(arr) {
    arr.reverse().forEach((el) => {
      console.log(el);
    });
  }
  atbulaiReiksmes(["katinas", 8, "trečias", true, "šuo"]);
}
console.groupEnd();

console.groupCollapsed("11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...");
{
  function visiIndeksai(arr) {
    let newArr = [];
    arr.forEach((el) => {
      newArr.push(arr.indexOf(el));
    });
    console.log(newArr.join(" "));
  }
  visiIndeksai(["katinas", 8, "trečias", true, "šuo"]);
}
console.groupEnd();

console.groupCollapsed("12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48");
{
  function visosReiksmes(arr) {
    let newArr = [];
    arr.forEach((el) => {
      newArr.push(el);
    });
    console.log(newArr.join(" "));
  }
  visosReiksmes(["katinas", 8, "trečias", true, "šuo"]);
}
console.groupEnd();

console.groupCollapsed(
  "13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:"
);
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  function visiIndeksai(arr) {
    let newArr = [];
    arr.forEach((el) => {
      newArr.push("[", arr.indexOf(el), "]", "=>", el);
    });
    console.log(newArr.join(" "));
  }
  visiIndeksai(["katinas", 8, "trečias", true, "šuo"]);
}
console.groupEnd();
