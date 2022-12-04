console.groupCollapsed("1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY");
{
  //  p1 = new Player("David Jones", 25, 175, 75)
  //  p1.getAge() ➞ "David Jones is age 25"
  //  p1.getHeight() ➞ "David Jones is 175cm"
  //  p1.getWeight() ➞ "David Jones weighs 75kg"

  class Player {
    //name,age,height,weight
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }

    //returns "name is age age"
    getAge() {
      return `${this.name} is age ${this.age}`;
    }

    //returns "name is height cm"
    getHeight() {
      return `${this.name} is ${this.height}cm`;
    }

    //returns "name weighs weight kg"
    getWeight() {
      return `${this.name} weighs ${this.weight}kg`;
    }
  }
  p1 = new Player("David Jones", 25, 175, 75);
  console.log(p1.getAge(), '➞ "David Jones is age 25"');
  console.log(p1.getHeight(), '➞ "David Jones is 175cm"');
  console.log(p1.getWeight(), '➞ "David Jones weighs 75kg"');
}
console.groupEnd();

console.groupCollapsed("2. - https://edabit.com/challenge/yxKoCKemzacK6PECM");
{
  // Add two numbers.
  // Subtract two numbers.
  // Multiply two numbers.
  // Divide two numbers.

  class Calculator {
    // Write functions to add(), subtract(), multiply() and divide()
    add(num1, num2) {
      return num1 + num2;
    }
    subtract(num1, num2) {
      return num1 - num2;
    }
    multiply(num1, num2) {
      return num1 * num2;
    }
    divide(num1, num2) {
      return num1 / num2;
    }
  }

  let calculator = new Calculator();

  console.log(calculator.add(10, 5), "➞ 15");
  console.log(calculator.subtract(10, 5), "➞ 5");
  console.log(calculator.multiply(10, 5), "➞ 50");
  console.log(calculator.divide(10, 5), "➞ 2");
}
console.groupEnd();

console.groupCollapsed("3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS");
{
  class Employee {
    static domain = "@company.com";
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.fullname = `${firstname} ${lastname}`;
      this.email = `${firstname}.${lastname}${Employee.domain}`.toLowerCase();
    }
  }
  emp1 = new Employee("John", "Smith");
  emp2 = new Employee("Mary", "Sue");
  emp3 = new Employee("Antony", "Walker");
  console.log(emp1.fullname, "➞ John Smith");
  console.log(emp2.email, "➞ mary.sue@company.com");
  console.log(emp3.firstname, "➞ Antony");
}
console.groupEnd();

console.groupCollapsed("4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu");
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    compareAge(other) {
      const olderText = "is older than";
      const youngerText = "is younger than";
      const sameAgeText = "is the same age as";
      if (this.age === other.age) return `${other.name} ${sameAgeText} me.`;
      if (this.age > other.age) return `${other.name} ${youngerText} me.`;
      if (this.age < other.age) return `${other.name} ${olderText} me.`;
    }
  }
  p1 = new Person("Samuel", 24);
  p2 = new Person("Joel", 36);
  p3 = new Person("Lily", 24);

  console.log(p1.compareAge(p2), "➞ Joel is older than me.");
  console.log(p2.compareAge(p1), "➞ Samuel is younger than me.");
  console.log(p1.compareAge(p3), "➞ Lily is the same age as me.");
}
console.groupEnd();

console.groupCollapsed("5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ");
{
  class Rectangle {
    constructor(sideA, sideB) {
      this.sideA = sideA;
      this.sideB = sideB;
    }
    getArea() {
      return this.sideA * this.sideB;
    }
    getPerimeter() {
      return (this.sideA + this.sideB) * 2;
    }
  }

  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
    //(PI*r^2)
    getArea() {
      return Math.PI * this.radius ** 2;
    }

    //(2*PI*r)
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }

  // Galima suapvalint

  let circy = new Circle(11);
  console.log(circy.getArea(), "Should return 380.132711084365");

  let q = new Circle(4.44);
  console.log(q.getArea());
  console.log(q.getPerimeter(), "Should return 27.897342763877365");
}
console.groupEnd();

console.groupCollapsed("6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b");
{
  class Name {
    constructor(fname, lname) {
      this.fname = fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase();
      this.lname = lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase();
      this.fullname = `${this.fname} ${this.lname}`;
      this.initials = this.getNameInitials();
    }
    getNameInitials() {
      return `${this.fname[0]}.${this.lname[0]}`;
    }
  }
  a1 = new Name("john", "SMITH");
  console.log(a1.fname, "➞ John");
  console.log(a1.lname, "➞ Smith");
  console.log(a1.fullname, "➞ John Smith");
  console.log(a1.initials, "➞ J.S");
}
console.groupEnd();

console.groupCollapsed("7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke");
{
  const flavorValue = {
    Plain: 0,
    Vanilla: 5,
    ChocolateChip: 5,
    Strawberry: 10,
    Chocolate: 10,
  };
  class IceCream {
    constructor(flavor, numSprinkles) {
      this.flavor = flavor;
      this.numSprinkles = numSprinkles;
      this.sweetestValue = flavorValue[flavor] + numSprinkles;
    }
  }
  function sweetestIcecream(arr) {
    return Math.max(...arr.map((x) => flavorValue[x.flavor] + x.numSprinkles));
  }
  ice1 = new IceCream("Chocolate", 13); // value of 23
  ice2 = new IceCream("Vanilla", 0); // value of 5
  ice3 = new IceCream("Strawberry", 7); // value of 17
  ice4 = new IceCream("Plain", 18); // value of 18
  ice5 = new IceCream("ChocolateChip", 3); // value of 8
  console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]), "➞ 23");
  console.log(sweetestIcecream([ice3, ice1]), "➞ 23");
  console.log(sweetestIcecream([ice3, ice5]), "➞ 17");
}
console.groupEnd();

console.groupCollapsed("8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi");
{
  class OnesThreesNines {
    #int;
    constructor(int) {
      this.int = int;
    }

    get int() {
      return this.#int;
    }

    set int(value) {
      if (typeof value === "string") {
        console.log("Prašome pateikti tik skaičių");
        return;
      }
      this.#int = value;
    }
    get ones() {
      return this.#int / 1;
    }
    get threes() {
      return Math.floor(this.#int / 3);
    }
    get nines() {
      return Math.floor(this.#int / 9);
    }
  }

  let n1 = new OnesThreesNines(5);
  console.log(n1.int);
  console.log(n1.nines, "➞ 0");
  console.log(n1.ones, "➞ 5");
  console.log(n1.threes, "➞ 1");
}
console.groupEnd();

console.groupCollapsed("9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp");
{
  class User {
    static userCount = 0;
    constructor(username) {
      User.userCount += 1;
      this.username = username;
    }
  }
  u1 = new User("johnsmith10");
  console.log(User.userCount, "➞ 1");
  u2 = new User("marysue1989");
  console.log(User.userCount, "➞ 2");
  u3 = new User("milan_rodrick");
  console.log(User.userCount, "➞ 3");
}
console.groupEnd();

console.groupCollapsed("10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn");
{
  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }

    getTitle() {
      return `Title: ${this.title}`;
    }

    getAuthor() {
      return `Author: ${this.author}`;
    }
  }

  const HP = new Book("Harry Potter", "J.K. Rowling");
  const PP = new Book("Pride and Prejudice", "Jane Austen");
  const H = new Book("Hamlet", "William Shakespeare");
  const WP = new Book("War and Peace", "Leo Tolstoy");
  console.log(HP.title, " ➞ Harry Potter");
  console.log(HP.author, "➞ J.K. Rowling");
  console.log(HP.getTitle(), "➞ Title: Harry Potter");
  console.log(HP.getAuthor(), "➞ Author: J.K. Rowling");
  console.log("-----------------------");
  console.log(PP.title);
  console.log(PP.author);
  console.log(PP.getTitle());
  console.log(PP.getAuthor());
  console.log("-----------------------");
  console.log(H.title);
  console.log(H.author);
  console.log(H.getTitle());
  console.log(H.getAuthor());
  console.log("-----------------------");
  console.log(WP.title);
  console.log(WP.author);
  console.log(WP.getTitle());
  console.log(WP.getAuthor());
}
console.groupEnd();
