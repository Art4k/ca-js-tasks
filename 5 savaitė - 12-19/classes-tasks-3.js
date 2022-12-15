console.groupCollapsed("https://edabit.com/challenge/2FF7RKw9RLwc3EBY9");
{
  class Challenge {
    static count = 0;
    id;
    level;

    constructor(level) {
      this.id = Challenge.count++;
      this.level = level;
      const exp = [
        { code: "VE", fullName: "Very Easy", exp: 5 },
        { code: "EA", fullName: "Easy", exp: 10 },
        { code: "ME", fullName: "Medium", exp: 20 },
        { code: "HA", fullName: "Hard", exp: 40 },
        { code: "VH", fullName: "Very Hard", exp: 80 },
        { code: "EX", fullName: "Expert", exp: 120 },
      ];
    }

    points() {}
  }

  class User {
    name;
    xp;
    log;

    constructor(name, xp, log) {
      this.name = name;
      this.xp = xp;
      this.log = log;
    }

    newSolvedChallenge() {}
  }

  // 1. Declare the class instances (two users and six challenges).

  const user1 = new User("Madam", 0, []);
  const user2 = new User("Steve", 0, []);

  const challenge1 = new Challenge("VE");
  const challenge2 = new Challenge("EA");
  const challenge3 = new Challenge("ME");
  const challenge4 = new Challenge("HA");
  const challenge5 = new Challenge("VH");
  const challenge6 = new Challenge("EX");

  // 2. Set the challenges solved by the users.
  console.log(user1.name, '➞ "Madam"');
  console.log(user2.xp, "➞ 110");
  console.log(user1.log, "➞ [1, 4, 6]");
  console.log(challenge4.level, ' ➞ "HA"');
  console.log(challenge3.id, "➞ 3");
  console.log(challenge1.points, "➞ 5");
}
console.groupEnd();

console.groupCollapsed("https://edabit.com/challenge/ifDM26p25bqS8EsFu");
{
  // ... code
}
console.groupEnd();
