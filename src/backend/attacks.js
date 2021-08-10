class Attack {
  constructor(
    name, description, roll, diffmodifier, accuracy, damage, damageType, source, effect = '',
  ) {
    this.name = name;
    this.description = description;
    this.roll = roll;
    this.diffmodifier = diffmodifier;
    this.accuracy = accuracy;
    this.damage = damage;
    this.damageType = damageType; // 0: Blunt, 1: Lethal, 2:Aggravated
    this.source = source;
    this.effect = effect;
  }
}

const defaultattacks = {
  mortals: {
    disarm: new Attack(
      'Disarm',
      'To strike an opponent’s weapon, the attacker must make an attack roll at +1 difficulty. If successful, the attacker rolls damage normally. If successes rolled exceed the opponent’s Strength rating, the opponent takes no damage but is disarmed. A botch usually means the attacker drops her own weapon or is struck by her target’s weapon.',
      this.attributes.physical.dexterity + this.abilities.skills.melee,
      1,
      0,
      this.strength,
      0,
      'V20, 276',
    ),
    hold: new Attack(
      'Hold',
      'This attack inflicts no damage, as the intent is to immobilize rather than injure the subject. On a successful roll, the attacker holds the target until the subject’s next action. At that time, both combatants roll resisted Strength + Brawl actions; the subject remains immobilized (able to take no other action) until she rolls more successes than the attacker does.',
      this.attributes.physical.strength + this.abilities.talents.brawl,
      0,
      0,
      0,
      0,
      'V20, 276',
      'inmovilized',
    ),
    kick: new Attack(
      'Kick',
      'Kicks range from simple front kicks to aerial spins. The base attack is at +1 difficulty and inflicts the attacker’s Strength +1 in damage. These ratings may be modified further at the Storyteller’s discretion, increasing in damage and/or difficulty as the maneuver increases in complexity.',
      this.attributes.physical.dexterity + this.abilities.talents.brawl,
      1,
      0,
      this.attributes.physical.strength + 1,
      0,
      'V20, 276',
    ),
    strike: new Attack(
      'Strike',
      'The attacker lashes out with a fist. The base attack is a standard action and inflicts the character’s Strength in damage. The Storyteller may adjust the difficulty and/or damage depending on the type of punch: hook, jab, haymaker, karate strike.',
      this.attributes.physical.dexterity + this.abilities.talents.brawl,
      0,
      0,
      this.attributes.physical.strength,
      0,
      'V20, 276',
    ),
    sweep: new Attack(
      'Sweep',
      'The attacker uses her own legs to knock the legs out from under her opponent. The target takes Strength damage and must roll Dexterity + Athletics (difficulty 8) or suffer a knockdown (see “Maneuver Complications,” p. 279). The attacker can also use a staff, chain, or similar implement to perform a sweep. The effect is the same, although the target takes damage per the weapon type.',
      this.attributes.physical.dexterity + this.abilities.talents.brawl,
      1,
      0,
      this.attributes.physical.strength,
      0,
      'V20, 276',
      'knockdown',
    ),
    tackle: new Attack(
      'Tackle',
      'The attacker rushes her opponent, tackling him to the ground. The attack roll is at +1 difficulty, and the maneuver inflicts Strength +1 damage. Additionally, both combatants must roll Dexterity + Athletics (difficulty 7) or suffer a knockdown (see “Maneuver Complications,” p. 279). Even if the target’s Athletics roll succeeds, he is unbalanced, suffering +1 difficulty to his actions for the next turn.',
      this.attributes.physical.strength + this.abilities.talents.brawl,
      1,
      0,
      this.attributes.physical.strength + 1,
      0,
      'V20, 276',
      'knockdown',
    ),
  },
};

export default defaultattacks;
