class Character {
  constructor() {
    this.generalInfo = {
      name: '',
      player: '',
      story: '',
      sex: 0, // 0: male, 1: female, 2: other
      sexOrientation: 0, // 0: straight, 1: gay, 2: bi, 3: other
      wealth: 0, //general wealth
      cash: 0, //money on self
      age: 0,
      nature: {}, // {name, description, system, setChances()}
      demeanor: {}, // {name, description, system, setChances()}
      proffesion: [], // {name, setChances()}
      concept: '',
      experience: 0,
      freebies: 0,
      supernatural: 0 // 0:normal, 1:ghoul, 2:kinfolk, 3:enchanted
    }

    this.attributes = {
      physical: {
        strength: 0,
        dexterity: 0,
        stamina: 0,
      },
      social: {
        charisma: 0,
        manipulation: 0,
        appearence: 0,
      },
      wits: {
        perception: 0,
        intelligence: 0,
        wits: 0,
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
      humanity: 0,
      willpower: {permanent: 0, temporal: 0},
    }

    this.health= {
      totalhealth: 7,
      bashing: 0,
      lethal: 0,
      aggravated: 0
    }

    this.allies = [] //{ally = character, type = 0 (ally, contact, mentor, subordinate, enemy)}

    this.items = [] //{name: string, description: string, value: number, hidediff: number, weight: number, attacks: attack, ranged: boolean}

    this.attacks = [
      {
        name: 'Disarm', 
        description: `To strike an opponent’s weapon, the attacker must make an attack roll at +1 difficulty. If successful, the attacker rolls damage normally. If successes rolled exceed the opponent’s Strength rating, the opponent takes no damage but is disarmed. A botch usually means the attacker drops her own weapon or is struck by her target’s weapon.`,
        roll: this.attributes.physical.dexterity + this.abilities.skills.melee,
        diffModifier: 1,
        accuracy: 0,
        damage: this.strength,
        source: 'V20, 276'
      },
      {
        name: 'Hold', 
        description: `This attack inflicts no damage, as the intent is to immobilize rather than injure the subject. On a successful roll, the attacker holds the target until the subject’s next action. At that time, both combatants roll resisted Strength + Brawl actions; the subject remains immobilized (able to take no other action) until she rolls more successes than the attacker does.`,
        roll: this.attributes.physical.strength + this.abilities.talents.brawl,
        diffModifier: 0,
        accuracy: 0,
        damage: 0,
        effect: `inmovilized`,
        source: 'V20, 276'
      },
      {
        name: 'Kick', 
        description: `Kicks range from simple front kicks to aerial spins. The base attack is at +1 difficulty and inflicts the attacker’s Strength +1 in damage. These ratings may be modified further at the Storyteller’s discretion, increasing in damage and/or difficulty as the maneuver increases in complexity.`,
        roll: this.attributes.physical.dexterity + this.abilities.talents.brawl,
        diffModifier: 1,
        accuracy: 0,
        damage: this.attributes.physical.strength + 1,
        source: 'V20, 276'
      },
      {
        name: 'Strike', 
        description: `The attacker lashes out with a fist. The base attack is a standard action and inflicts the character’s Strength in damage. The Storyteller may adjust the difficulty and/or damage depending on the type of punch: hook, jab, haymaker, karate strike.`,
        roll: this.attributes.physical.dexterity + this.abilities.talents.brawl,
        diffModifier: 0,
        accuracy: 0,
        damage: this.attributes.physical.strength,
        source: 'V20, 276'
      },
      {
        name: 'Sweep', 
        description: `he attacker uses her own legs to knock the legs out from under her opponent. The target takes Strength damage and must roll Dexterity + Athletics (difficulty 8) or suffer a knockdown (see “Maneuver Complications,” p. 279). The attacker can also use a staff, chain, or similar implement to perform a sweep. The effect is the same, although the target takes damage per the weapon type.`,
        roll: this.attributes.physical.dexterity + this.abilities.talents.brawl,
        diffModifier: 1,
        accuracy: 0,
        damage: this.attributes.physical.strength,
        effect: 'knockdown',
        source: 'V20, 276',
      },
      {
        name: 'Tackle', 
        description: `The attacker rushes her opponent, tackling him to the ground. The attack roll is at +1 difficulty, and the maneuver inflicts Strength +1 damage. Additionally, both combatants must roll Dexterity + Athletics (difficulty 7) or suffer a knockdown (see “Maneuver Complications,” p. 279). Even if the target’s Athletics roll succeeds, he is unbalanced, suffering +1 difficulty to his actions for the next turn.`,
        roll: this.attributes.physical.strength + this.abilities.talents.brawl,
        diffModifier: 1,
        accuracy: 0,
        damage: this.attributes.physical.strength +1,
        effect: 'knockdown',
        source: 'V20, 276',
      },
    ]
    this.merits = [] //{cost: number, description: string, system: string}
  }
}

export default Character;