import Attack from './attacks';

class Character {
  constructor() {
    this.generalInfo = {
      name: '',
      player: '',
      story: '',
      sex: 0, // 0: male, 1: female, 2: other
      sexOrientation: 0, // 0: straight, 1: gay, 2: bi, 3: other
      bank: 0, //bank-account
      cash: 0, //money on self
      age: 0,
      nature: {},
      demeanor: {},
      proffesion: 0, //get from proffesion list
      concept: '',
      experience: 0,
      freebies: 0,
      supernatural: 0 // 0:normal, 1:ghoul, 2:kinfolk, 3:enchanted
    }

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
      }
    }

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
      }
    }

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
    }

    this.soul = {
      humanity: 7,
      willpower: {permanent: 0, temporal: 0},
    }

    this.health= {
      totalhealth: 7,
      bashing: 0,
      lethal: 0,
      aggravated: 0
    }

    this.allies = {} //id, {character, type = 0 (ally, contact, mentor, subordinate, enemy)}

    this.items = {} //id, item

    this.attacks = {
      disarm: new Attack(
        'Disarm',
        `To strike an opponent’s weapon, the attacker must make an attack roll at +1 difficulty. If successful, the attacker rolls damage normally. If successes rolled exceed the opponent’s Strength rating, the opponent takes no damage but is disarmed. A botch usually means the attacker drops her own weapon or is struck by her target’s weapon.`,
        this.attributes.physical.dexterity + this.abilities.skills.melee,
        1,
        0,
        this.strength,
        0,
        'V20, 276',
      ),
      hold: new Attack(
        'Hold',
        `This attack inflicts no damage, as the intent is to immobilize rather than injure the subject. On a successful roll, the attacker holds the target until the subject’s next action. At that time, both combatants roll resisted Strength + Brawl actions; the subject remains immobilized (able to take no other action) until she rolls more successes than the attacker does.`,
        this.attributes.physical.strength + this.abilities.talents.brawl,
        0,
        0,
        0,
        0,
        'V20, 276',
        'inmovilized'
      ),
      kick: new Attack(
        'Kick',
        `Kicks range from simple front kicks to aerial spins. The base attack is at +1 difficulty and inflicts the attacker’s Strength +1 in damage. These ratings may be modified further at the Storyteller’s discretion, increasing in damage and/or difficulty as the maneuver increases in complexity.`,
        this.attributes.physical.dexterity + this.abilities.talents.brawl,
        1,
        0,
        this.attributes.physical.strength + 1,
        0,
        'V20, 276'
      ),
      strike: new Attack(
        'Strike',
        `The attacker lashes out with a fist. The base attack is a standard action and inflicts the character’s Strength in damage. The Storyteller may adjust the difficulty and/or damage depending on the type of punch: hook, jab, haymaker, karate strike.`,
        this.attributes.physical.dexterity + this.abilities.talents.brawl,
        0,
        0,
        this.attributes.physical.strength,
        0,
        'V20, 276'
      ),
      sweep: new Attack(
        'Sweep',
        `The attacker uses her own legs to knock the legs out from under her opponent. The target takes Strength damage and must roll Dexterity + Athletics (difficulty 8) or suffer a knockdown (see “Maneuver Complications,” p. 279). The attacker can also use a staff, chain, or similar implement to perform a sweep. The effect is the same, although the target takes damage per the weapon type.`,
        this.attributes.physical.dexterity + this.abilities.talents.brawl,
        1,
        0,
        this.attributes.physical.strength,
        0,
        'V20, 276',
        'knockdown'
      ),
      tackle: new Attack(
        'Tackle',
        `The attacker rushes her opponent, tackling him to the ground. The attack roll is at +1 difficulty, and the maneuver inflicts Strength +1 damage. Additionally, both combatants must roll Dexterity + Athletics (difficulty 7) or suffer a knockdown (see “Maneuver Complications,” p. 279). Even if the target’s Athletics roll succeeds, he is unbalanced, suffering +1 difficulty to his actions for the next turn.`,
        this.attributes.physical.strength + this.abilities.talents.brawl,
        1,
        0,
        this.attributes.physical.strength +1,
        0,
        'V20, 276',
        'knockdown',
      ),
    }

    this.merits = {} //id, merit
  }
}

export default Character;