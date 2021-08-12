class Item {
  constructor(
    owner,
    name,
    description,
    value,
    hidediff,
    weight,
    ranged,
    armor,
    dexpenalty,
  ) {
    this.owner = owner;
    this.name = name;
    this.description = description;
    this.value = value;
    this.hidediff = hidediff;
    this.weight = weight;
    this.ranged = ranged;
    this.armor = armor;
    this.dexpenalty = dexpenalty;
  }
}

export default Item;
