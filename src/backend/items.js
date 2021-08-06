class Item {
  constructor(
    name,
    description,
    value,
    hidediff,
    weight,
    attacks, //array
    ranged,
  ) {
    this.name = name;
    this.description = description;
    this.value = value;
    this.hidediff = hidediff;
    this.weight = weight;
    this.attacks = attacks;
    this.ranged = ranged;
  }
}

export default Item;