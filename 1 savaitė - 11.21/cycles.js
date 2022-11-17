const numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

console.groupCollapsed("WHILE / FOR");
{
  console.groupCollapsed('1. Sukurkite ciklą kuris 5 kartus atspausdintų "Sveikas Pasauli"');
  {
    let i = 1;
    console.log("While:");
    while (i <= 5) {
      console.log("Sveikas Pasauli");
      i += 1;
    }
    console.log("For:");
    for (let j = 1; j <= 5; j += 1) {
      console.log("Sveikas Pasauli");
    }
  }
  console.groupEnd();

  console.groupCollapsed("2. Sukurkite ciklą kuris atspausdintų nuo 1 iki 5. Naudojant <");
  {
    let i = 1;
    console.log("While:");
    while (i < 6) {
      console.log(i);
      i += 1;
    }
    console.log("For:");
    for (let j = 1; j < 6; j += 1) {
      console.log(j);
    }
  }
  console.groupEnd();

  console.groupCollapsed("3. Sukurkite ciklą kuris atspausdintų nuo 3 iki 7. Naudojant <");
  {
    let i = 3;
    console.log("While:");
    while (i < 8) {
      console.log(i);
      i += 1;
    }
    console.log("For:");
    for (let j = 3; j < 8; j += 1) {
      console.log(j);
    }
  }
  console.groupEnd();

  console.groupCollapsed("4. Sukurkite ciklą kuris atspausdintų nuo -3 iki 2. Naudojant <");
  {
    let i = -3;
    console.log("While:");
    while (i < 3) {
      console.log(i);
      i += 1;
    }
    console.log("For:");
    for (let j = -3; j < 3; j += 1) {
      console.log(j);
    }
  }
  console.groupEnd();

  console.groupCollapsed("5. Sukurkite ciklą kuris atspausdintų nuo 1 iki 5. Naudojant <=");
  {
    let i = 1;
    console.log("While:");
    while (i <= 5) {
      console.log(i);
      i += 1;
    }
    console.log("For:");
    for (let j = 1; j <= 5; j += 1) {
      console.log(j);
    }
  }
  console.groupEnd();

  console.groupCollapsed("6. Sukurkite ciklą kuris atspausdintų nuo 3 iki 7. Naudojant <=");
  {
    let i = 3;
    console.log("While:");
    while (i <= 7) {
      console.log(i);
      i += 1;
    }
    console.log("For:");
    for (let j = 3; j <= 7; j += 1) {
      console.log(j);
    }
  }
  console.groupEnd();

  console.groupCollapsed("7. Sukurkite ciklą kuris atspausdintų nuo -3 iki 2. Naudojant <=");
  {
    let i = -3;
    console.log("While:");
    while (i <= 2) {
      console.log(i);
      i += 1;
    }
    console.log("For:");
    for (let j = -3; j <= 2; j += 1) {
      console.log(j);
    }
  }
  console.groupEnd();

  console.groupCollapsed("8. Sukurkite ciklą kuris atspausdintų nuo 2 iki -3. Naudojant >");
  {
    let i = 2;
    console.log("While:");
    while (i > -4) {
      console.log(i);
      i -= 1;
    }
    console.log("For:");
    for (let j = 2; j > -4; j -= 1) {
      console.log(j);
    }
  }
  console.groupEnd();

  console.groupCollapsed("9. Sukurkite ciklą kuris atspausdintų nuo -5 iki -10. Naudojant >");
  {
    let i = -5;
    console.log("While:");
    while (i > -11) {
      console.log(i);
      i -= 1;
    }
    console.log("For:");
    for (let j = -5; j > -11; j -= 1) {
      console.log(j);
    }
  }
  console.groupEnd();

  console.groupCollapsed("10. Sukurkite ciklą kuris atspausdintų nuo 2 iki 1. Naudojant >");
  {
    let i = 2;
    console.log("While:");
    while (i > 0) {
      console.log(i);
      i -= 1;
    }
    console.log("For:");
    for (let j = 2; j > 0; j -= 1) {
      console.log(j);
    }
  }
  console.groupEnd();

  console.groupCollapsed("11. Sukurkite ciklą kuris atspausdintų nuo 2 iki -3. Naudojant >=");
  {
    let i = 2;
    console.log("While:");
    while (i >= -3) {
      console.log(i);
      i -= 1;
    }
    console.log("For:");
    for (let j = 2; j >= -3; j -= 1) {
      console.log(j);
    }
  }
  console.groupEnd();

  console.groupCollapsed("12. Sukurkite ciklą kuris atspausdintų nuo -5 iki -10. Naudojant >=");
  {
    let i = -5;
    console.log("While:");
    while (i >= -10) {
      console.log(i);
      i -= 1;
    }
    console.log("For:");
    for (let j = -5; j >= -10; j -= 1) {
      console.log(j);
    }
  }
  console.groupEnd();

  console.groupCollapsed("13. Sukurkite ciklą kuris atspausdintų nuo 2 iki 1. Naudojant >=");
  {
    let i = 2;
    console.log("While:");
    while (i >= 1) {
      console.log(i);
      i -= 1;
    }
    console.log("For:");
    for (let j = 2; j >= 1; j -= 1) {
      console.log(j);
    }
  }
  console.groupEnd();

  console.groupCollapsed("14. Sukurkite ciklą kuris atspausdintų 2, 4, 6, 8, 10. Naudojant žingsnį +2");
  {
    let i = 2;
    console.log("While:");
    while (i <= 10) {
      console.log(i);
      i += 2;
    }
    console.log("For:");
    for (let j = 2; j <= 10; j += 2) {
      console.log(j);
    }
  }
  console.groupEnd();

  console.groupCollapsed(
    "15. Sukurkite ciklą kuris atspausdintų 2, 4, 6, 8, 10. Tikrinant ar kintamasis yra lyginis. Naudokite liekanos operatorių"
  );
  {
    let i = 1;
    console.log("While:");
    while (i <= 10) {
      i % 2 === 0 ? console.log(i) : null;
      i += 1;
    }
    console.log("For:");
    for (let j = 1; j <= 10; j += 1) {
      j % 2 === 0 ? console.log(j) : null;
    }
  }
  console.groupEnd();

  console.groupCollapsed("16. Sukurkite ciklą kuris atspausdintų 4, 1, -2, -5, -8. Naudojant žingsnį -3");
  {
    let i = 4;
    console.log("While:");
    while (i >= -8) {
      console.log(i);
      i -= 3;
    }
    console.log("For:");
    for (let j = 4; j >= -8; j -= 3) {
      console.log(j);
    }
  }
  console.groupEnd();

  console.groupCollapsed(
    "17. Sukurkite ciklą kuris atspausdintų 3, 0, -3, -6, -9. Tikrinant ar kintamojo liekana dalinant iš 3 yra lygi 0?"
  );
  {
    let i = 3;
    console.log("While:");
    while (i >= -9) {
      i % 3 === 0 ? console.log(i) : null;
      i -= 1;
    }

    console.log("For:");
    for (let j = 3; j >= -9; j -= 1) {
      j % 3 === 0 ? console.log(j) : null;
    }
  }
  console.groupEnd();

  console.groupCollapsed("18. Sukurkite ciklą kuris atspausdintų 2, 0, -2, -4, -6. Naudojant kintamojo liekaną");
  {
    let i = 2;
    console.log("While:");
    while (i >= -6) {
      i % 2 === 0 ? console.log(i) : null;
      i -= 1;
    }
    console.log("For:");
    for (let j = 2; j >= -6; j -= 1) {
      j % 2 === 0 ? console.log(j) : null;
    }
  }
  console.groupEnd();

  console.groupCollapsed("19. Sukurkite ciklą kuris atspausdintų 2, -1, -4, -7, -10. Naudojant kintamojo liekaną");
  {
    let i = 2;
    console.log("While:");
    while (i >= -10) {
      i % 3 === 2 || i % 3 === -1 ? console.log(i) : null;
      i -= 1;
    }
    console.log("For:");
    for (let j = 2; j >= -10; j -= 1) {
      j % 3 === 2 || j % 3 === -1 ? console.log(j) : null;
    }
  }
  console.groupEnd();

  console.groupCollapsed("20. Atspausdinkite <numbers> masyvo elementus nuo pirmo iki paskutinio");
  {
    let i = 0;
    console.log("While:");
    while (i < numbers.length) {
      console.log(numbers[i]);
      i += 1;
    }
    console.log("For:");
    for (let j = 0; j < numbers.length; j += 1) {
      console.log(numbers[j]);
    }
  }
  console.groupEnd();

  console.groupCollapsed("21. Atspausdinkite <numbers> masyvo elementus nuo 3 iki paskutinio");
  {
    {
      let i = 2;
      console.log("While:");
      while (i < numbers.length) {
        console.log(numbers[i]);
        i += 1;
      }
      console.log("For:");
      for (let j = 2; j < numbers.length; j += 1) {
        console.log(numbers[j]);
      }
    }
  }
  console.groupEnd();

  console.groupCollapsed("22. Atspausdinkite <numbers> masyvo elementus nuo 2 iki prieš paskutinio");
  {
    {
      let i = 1;
      console.log("While:");
      while (i < numbers.length - 1) {
        console.log(numbers[i]);
        i += 1;
      }
      console.log("For:");
      for (let j = 1; j < numbers.length - 1; j += 1) {
        console.log(numbers[j]);
      }
    }
  }
  console.groupEnd();

  console.groupCollapsed("23. Atspausdinkite <numbers> masyvo elementus nuo paskutinio iki pirmo");
  {
    let i = numbers.length - 1;
    console.log("While:");
    while (i >= 0) {
      console.log(numbers[i]);
      i -= 1;
    }
    console.log("For:");
    for (let j = numbers.length - 1; j >= 0; j -= 1) {
      console.log(numbers[j]);
    }
  }
  console.groupEnd();

  console.groupCollapsed("24. Atspausdinkite <numbers> masyvo elementus nuo paskutinio iki antro");
  {
    let i = numbers.length - 1;
    console.log("While:");
    while (i >= 1) {
      console.log(numbers[i]);
      i -= 1;
    }
    console.log("For:");
    for (let j = numbers.length - 1; j >= 1; j -= 1) {
      console.log(numbers[j]);
    }
  }
  console.groupEnd();

  console.groupCollapsed("25. Atspausdinkite <numbers> masyvo elementus nuo prieš paskutinio iki trečio");
  {
    let i = numbers.length - 2;
    console.log("While:");
    while (i >= 2) {
      console.log(numbers[i]);
      i -= 1;
    }
    console.log("For:");
    for (let j = numbers.length - 2; j >= 2; j -= 1) {
      console.log(numbers[j]);
    }
  }
  console.groupEnd();

  console.groupCollapsed("26. Atspausdinkite <numbers> masyvo kas antrą elementą iš kairės į dešinę");
  {
    let i = 0;
    console.log("While:");
    while (i < numbers.length) {
      console.log(numbers[i]);
      i += 2;
    }
    console.log("For:");
    for (let j = 0; j < numbers.length; j += 2) {
      console.log(numbers[j]);
    }
  }
  console.groupEnd();

  console.groupCollapsed("27. Atspausdinkite <numbers> masyvo kas trečią elementą iš kairės į dešinę");
  {
    let i = 0;
    console.log("While:");
    while (i < numbers.length) {
      console.log(numbers[i]);
      i += 3;
    }
    console.log("For:");
    for (let j = 0; j < numbers.length; j += 3) {
      console.log(numbers[j]);
    }
  }
  console.groupEnd();

  console.groupCollapsed("28. Atspausdinkite <numbers> masyvo kas antrą elementą iš kairės į dešinę, pradedant trečiu");
  {
    let i = 2;
    console.log("While:");
    while (i < numbers.length) {
      console.log(numbers[i]);
      i += 2;
    }
    console.log("For:");
    for (let j = 2; j < numbers.length; j += 2) {
      console.log(numbers[j]);
    }
  }
  console.groupEnd();

  console.groupCollapsed("29. Atspausdinkite <numbers> masyvo kas antrą elementą iš dešinės");
  {
    let i = numbers.length - 1;
    console.log("While:");
    while (i >= 0) {
      console.log(numbers[i]);
      i -= 2;
    }
    console.log("For:");
    for (let j = numbers.length - 1; j >= 0; j -= 2) {
      console.log(numbers[j]);
    }
  }
  console.groupEnd();

  console.groupCollapsed("30. Atspausdinkite <numbers> masyvo kas trečią elementą iš dešinės");
  {
    let i = numbers.length - 1;
    console.log("While:");
    while (i >= 0) {
      console.log(numbers[i]);
      i -= 3;
    }
    console.log("For:");
    for (let j = numbers.length - 1; j >= 0; j -= 3) {
      console.log(numbers[j]);
    }
  }
  console.groupEnd();

  console.groupCollapsed("31. Atspausdinkite <numbers> masyvo kas antrą elementą iš dešinės, pradedant prieš paskutiniu");
  {
    let i = numbers.length - 2;
    console.log("While:");
    while (i >= 0) {
      console.log(numbers[i]);
      i -= 2;
    }
    console.log("For:");
    for (let j = numbers.length - 2; j >= 0; j -= 2) {
      console.log(numbers[j]);
    }
  }
  console.groupEnd();
}
console.groupEnd();
