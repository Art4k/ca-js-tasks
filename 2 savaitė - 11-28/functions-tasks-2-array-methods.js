// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group("1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve");
console.log("---");
{
  function mulArrBy2(arr) {
    const newArr = [];
    arr.map((number) => newArr.push(number * 2));
    return newArr;
  }
  console.log({
    numbers,
    result: mulArrBy2(numbers),
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group("2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve");
console.log("---");
{
  function powerArrBy2(arr) {
    const newArr = [];
    arr.map((number) => newArr.push(number * number));
    return newArr;
  }
  console.log({
    numbers,
    result: powerArrBy2(numbers),
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group("3. Padauginti masyvo narius iš jų index'o (vietos masyve) ir išsaugoti naujame masyve");
console.log("---");
{
  function mulArrElementsByIndex(arr) {
    const newArr = [];
    arr.map((number, index) => newArr.push(number * index));
    return newArr;
  }
  console.log({
    numbers,
    result: mulArrElementsByIndex(numbers),
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group("4. Atrinkti tiktai teigimų elementų masyvą");
console.log("---");
{
  function filterPositives(arr) {
    const newArr = [];
    arr.filter((number) => (number > 0 ? newArr.push(number) : null));
    return newArr;
  }
  console.log({
    numbers,
    result: filterPositives(numbers),
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group("5. Atrinkti tiktai neigiamų elementų masyvą");
console.log("---");
{
  function filterNegatives(arr) {
    const newArr = [];
    arr.filter((number) => (number < 0 ? newArr.push(number) : null));
    return newArr;
  }
  console.log({
    numbers,
    result: filterNegatives(numbers),
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group("6. Atrinkti tiktai lyginių skaičių masyvą");
console.log("---");
{
  function filterEquals(arr) {
    const newArr = [];
    arr.filter((number) => (number % 2 === 0 ? newArr.push(number) : null));
    return newArr;
  }
  console.log({
    numbers,
    result: filterEquals(numbers),
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group("7. Atrinkti tiktai nelyginių skaičių masyvą");
console.log("---");
{
  function filterOdds(arr) {
    const newArr = [];
    arr.filter((number) => (number % 2 !== 0 ? newArr.push(number) : null));
    return newArr;
  }
  console.log({
    numbers,
    result: filterOdds(numbers),
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{
  function arrAbsoluteValues(arr) {
    const newArr = [];
    arr.map((number) => newArr.push(number < 0 ? number * -1 : number));
    return newArr;
  }

  console.log("---");
  console.log({
    numbers,
    result: arrAbsoluteValues(numbers),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("9. Pakelti visas masyvo reikšmes laipsniu 'index' ir išsaugoti naujame masyve");
console.log("---");
{
  function powArrElementsByIndex(arr) {
    const newArr = [];
    arr.map((number, index) => newArr.push(number ** index));
    return newArr;
  }
  console.log({
    numbers,
    result: powArrElementsByIndex(numbers),
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group("10. Atrinkti tik natūralių skaičių masyvą");
console.log("---");
{
  function filterNaturals(arr) {
    const newArr = [];
    arr.filter((number) => number > 0 && number % 1 === 0).map((number) => newArr.push(number));
    return newArr;
  }
  console.log({
    numbers,
    result: filterNaturals(numbers),
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group("11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve");
console.log("---");
{
  function absArrElements(arr) {
    const newArr = [];
    function roundNumber(number) {
      const remainder = number % 1;
      const wholeNumber = number - remainder;
      if (remainder <= -0.5) return wholeNumber - 1;
      else if (remainder >= 0.5) return wholeNumber + 1;
      return wholeNumber;
    }
    arr.map((number) => newArr.push(roundNumber(number)));
    return newArr;
  }
  console.log({
    numbers,
    result: absArrElements(numbers),
  });
}
console.log("---");
console.groupEnd();

console.group("12. Atrinkti kas antrą elementą");
console.log("---");
{
  function filterEverySecond(arr) {
    const newArr = [];
    arr.filter((number, index) => ((index + 1) % 2 === 0 ? newArr.push(number) : null));
    return newArr;
  }
  console.log({
    numbers,
    result: filterEverySecond(numbers),
  });
}
console.log("---");
console.groupEnd();

console.group("13. Atrinkti kas penktą elementą");
console.log("---");
{
  function filterEveryFifth(arr) {
    const newArr = [];
    arr.filter((number, index) => ((index + 1) % 5 === 0 ? newArr.push(number) : null));
    return newArr;
  }
  console.log({
    numbers,
    result: filterEveryFifth(numbers),
  });
}
console.log("---");
console.groupEnd();

console.group("14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)");
console.log("---");
{
  function printArr(arr) {
    arr.map((number, index) => console.log(`[${index}] => ${number}`));
  }
  printArr(numbers);
}
console.log("---");
console.groupEnd();

console.group("15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą");
console.log("---");
{
  function sumArr(arr) {
    let sumNumber = 0;
    arr.map((number) => (sumNumber += number));
    return sumNumber;
  }

  console.log({
    numbers,
    result: sumArr(numbers),
  });
}
console.log("---");
console.groupEnd();

console.group("16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį");
console.log("---");
{
  function avgArr(arr) {
    let avgNumber = 0;
    arr.map((number) => (avgNumber += number / arr.length));
    return avgNumber;
  }

  console.log({
    numbers,
    result: avgArr(numbers),
  });
}
console.log("---");
console.groupEnd();

console.group("17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.");
console.log("---");
{
  function arrMax(arr) {
    let maxNumber = arr[0];
    arr.filter((number) => (maxNumber < number ? (maxNumber = number) : null));
    return maxNumber;
  }

  console.log({
    numbers,
    result: arrMax(numbers),
  });
}
console.log("---");
console.groupEnd();

console.group("18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.");
console.log("---");
{
  function arrMin(arr) {
    let minNumber = arr[0];
    arr.filter((number) => (minNumber > number ? (minNumber = number) : null));
    return minNumber;
  }

  console.log({
    numbers,
    result: arrMin(numbers),
  });
}
console.log("---");
console.groupEnd();
