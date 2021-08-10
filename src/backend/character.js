class Character {
  constructor() {
    this.generalInfo = {
      name: '',
      player: '',
      story: '',
      sex: 0, // 0: male, 1: female, 2: other
      sexOrientation: 0, // 0: straight, 1: gay, 2: bi, 3: other
      bank: 0, // bank-account
      cash: 0, // money on self
      age: 0,
      nature: {},
      demeanor: {},
      proffesion: 0, // get from proffesion list
      concept: '',
      experience: 0,
      freebies: 0,
      supernatural: 0, // 0:normal, 1:ghoul, 2:kinfolk, 3:enchanted
    };

    this.attributes = {
      physical: {
        strength: 1,
        dexterity: 1,
        stamina: 1,
      },
      social: {
        charisma: 1,
        manipulation: 1,
        appearence: 1,
      },
      wits: {
        perception: 1,
        intelligence: 1,
        wits: 1,
      },
    };

    this.abilities = {
      talents: {
        alertness: 0,
        athletics: 0,
        awareness: 0,
        brawl: 0,
        empathy: 0,
        expression: 0,
        intimidation: 0,
        leadership: 0,
        streetwise: 0,
        subterfuge: 0,
      },
      skills: {
        animalken: 0,
        crafts: 0,
        drive: 0,
        etiquette: 0,
        firearms: 0,
        larceny: 0,
        melee: 0,
        performance: 0,
        stealth: 0,
        survival: 0,
      },
      knowledges: {
        academics: 0,
        computer: 0,
        finance: 0,
        investigation: 0,
        law: 0,
        medicine: 0,
        occult: 0,
        politics: 0,
        science: 0,
        technology: 0,
      },
    };

    this.backgrounds = {
      allies: 0,
      mentor: 0,
      contacts: 0,
      alternateidentity: 0,
      haven: 0,
      fame: 0,
      resources: 0,
      retainers: 0,
      rituals: 0,
    };

    this.soul = {
      humanity: 7,
      willpower: { permanent: 0, temporal: 0 },
    };

    this.health = {
      totalhealth: 7,
      bashing: 0,
      lethal: 0,
      aggravated: 0,
    };

    this.allies = {}; // id, {character, type = 0 (ally, contact, mentor, subordinate, enemy)}

    this.items = {}; // id, item

    this.attacks = {};

    this.merits = {}; // id, merit
  }
}

export default Character;
