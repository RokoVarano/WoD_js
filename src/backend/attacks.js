class Attack {
  constructor(
    weapon, name, description, roll, diffmodifier, accuracy, damage, damageType, source, effect = '',
  ) {
    this.weapon = weapon;
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

export default Attack;
