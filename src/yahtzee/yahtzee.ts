import { Dices, DiceTarget } from "../types/dice";

export function yahtzee(target: DiceTarget, dices: Dices) {
  //handle by Typescript
  // if (dices.length !== 5) return "Dice array length must be 5 long";

  //handle by Typescript
  // if (target < 1 || target > 6) return "Target must between 1-6";

  if (target === "Chance") {
    return yahtzeeChance(dices);
  }

  const counts: Record<number, number> = {};
  for (const die of dices) {
    //handle by Typescript
    // if (die > 6) return "Number in dice must between 1-6";
    counts[die] = (counts[die] || 0) + 1;
  }

  //case Three Of A King and Four Of A King
  if (target === "ThreeOfAKing" || target === "FourOfAKing") {
    const kind = target === "ThreeOfAKing" ? 3 : 4;
    for (const key in counts) {
      if (counts[key] >= kind) {
        return yahtzeeChance(dices);
      }
    }

    return 0;
  }

  //case Full House
  if (target === "FullHouse") {
    let hasThree = false;
    let hasPair = false;
    for (const key in counts) {
      if (counts[key] === 3) hasThree = true;
      if (counts[key] === 2) hasPair = true;
    }
    return hasThree && hasPair ? 25 : 0;
  }

  //case Small Straight and lage Straigh
  if (target === "SmallStraight" || target === "LargeStraight") {
    const mapKey = Object.keys(counts).join("");
    if (mapKey.includes("12345") || mapKey.includes("23456")) {
      return 40;
    }

    if (
      mapKey.includes("1234") ||
      mapKey.includes("2345") ||
      mapKey.includes("3456")
    ) {
      return 30;
    }
    return 0;
  }

  if (target === "YAHTZEE") {
    for (const key in counts) {
      if (counts[key] === 5) return 50;
    }
    return 0;
  }

  return counts[target] ? counts[target] * target : 0;
}

export function yahtzeeChance(dices: Dices) {
  let total: number = 0;

  for (const dice of dices) {
    total += dice;
  }

  return total;
}
