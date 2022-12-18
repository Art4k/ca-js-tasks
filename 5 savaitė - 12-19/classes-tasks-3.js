console.groupCollapsed("https://edabit.com/challenge/2FF7RKw9RLwc3EBY9");
{
  class Challenge {
    static count = 1;
    id;
    level;

    constructor(level) {
      this.id = Challenge.count++;
      this.level = level;
      this.exp = [
        { code: "VE", fullName: "Very Easy", exp: 5 },
        { code: "EA", fullName: "Easy", exp: 10 },
        { code: "ME", fullName: "Medium", exp: 20 },
        { code: "HA", fullName: "Hard", exp: 40 },
        { code: "VH", fullName: "Very Hard", exp: 80 },
        { code: "EX", fullName: "Expert", exp: 120 },
      ];
    }

    get points() {
      const getExpPoints = this.exp.filter(({ code }) => code === this.level).map(({ exp }) => exp);
      return parseInt(getExpPoints);
    }
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

    set newSolvedChallenge(challengeName) {
      this.xp += challengeName.points;
      this.log.push(challengeName.id);
    }
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
  //Madam solves the following challenges, in the order:
  //challenge1 , challenge4 , challenge6
  user1.newSolvedChallenge = challenge1;
  user1.newSolvedChallenge = challenge4;
  user1.newSolvedChallenge = challenge6;
  //Steve solves the,following challenges, in the order:
  //challenge5 , challenge3, challenge2
  user2.newSolvedChallenge = challenge5;
  user2.newSolvedChallenge = challenge3;
  user2.newSolvedChallenge = challenge2;

  //Test

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
  class Player {
    #hp;
    #maxHp;
    #en;
    #maxEn;

    constructor(name, maxHp, maxEn, armor) {
      this.name = name;
      this.armor = armor;
      this.hp = maxHp;
      this.#maxHp = maxHp;
      this.en = maxEn;
      this.#maxEn = maxEn;
    }

    //cannot have less than 0 health or energy,
    //and your health and/or energy cannot be greater than their respective "max"
    set hp(val) {
      val >= 0 && val <= this.#maxHp ? (this.#hp = val) : null;
      val < 0 ? (this.#hp = 0) : null;
      val > this.#maxHp ? (this.#hp = this.#maxHp) : null;
    }
    get hp() {
      return this.#hp;
    }

    set en(val) {
      val >= 0 && val <= this.#maxEn ? (this.#en = val) : null;
      val < 0 ? (this.#en = 0) : null;
      val > this.#maxEn ? (this.#en = this.#maxEn) : null;
    }
    get en() {
      return this.#en;
    }

    // return health percent value rounded to two decimal places.
    get hpPerc() {
      return ((100 * this.#hp) / this.#maxHp).toFixed(2);
    }

    skills = {};
    learnSkill(skillName, stats) {
      var fixedSkillName = skillName;
      this.skills[fixedSkillName] = stats;
      this[fixedSkillName] = function (target) {
        var skillStats = this.skills[skillName];
        // Energy
        if (skillStats.cost > this.#en) return `${this.name} attempted to use ${skillName}, but didn't have enough energy!`;
        this.#en -= skillStats.cost;

        // Armour
        var effectiveArmor = target.armor - skillStats.penetration;
        if (effectiveArmor < 0) effectiveArmor = 0;
        else if (effectiveArmor > 100) effectiveArmor = 100;

        // Damage
        var damageAmount = ((100 - effectiveArmor) / 100) * skillStats.damage;
        target.hp -= damageAmount;

        // Health
        this.hp += skillStats.heal;

        // Description
        var description = `${this.name} used ${skillName}, ${skillStats.desc}, against ${target.name}, doing ${
          Math.round(damageAmount * 100) / 100
        } damage!`;
        if (skillStats.heal > 0) {
          description += ` ${this.name} healed for ${skillStats.heal} health!`;
        }
        if (target.hp <= 0) {
          description += ` ${target.name} died. `;
        } else {
          description += ` ${target.name} is at ${target.hpPerc}% health.`;
        }
        console.log(target);
        return description;
      };
    }
  }
  const alice = new Player("Alice", 110, 50, 10);
  const bob = new Player("Bob", 100, 60, 20);
  alice.learnSkill("fireball", {
    damage: 23,
    penetration: 1.2,
    heal: 0,
    cost: 15,
    desc: "a firey magical attack",
  });
  console.log(alice.fireball(bob));
}

//player class exists
console.groupEnd();
