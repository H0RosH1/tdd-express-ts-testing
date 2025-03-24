export type Dice = 1 | 2 | 3 | 4 | 5 | 6;
export type DiceTarget =
  | Dice
  | "ThreeOfAKing"
  | "FourOfAKing"
  | "FullHouse"
  | "SmallStraight"
  | "LargeStraight"
  | "Chance"
  | "YAHTZEE";
export type Dices = [Dice, Dice, Dice, Dice, Dice];
