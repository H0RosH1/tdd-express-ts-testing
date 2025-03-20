export function yahtzee(target: number, dice: number[]) {
  let sum = 0;

  if (dice.length !== 5) return "Dice array length must be 5 long";

  if (target < 0 || target > 6) return "Target must between 1-6";

  for (let i = 0; i < dice.length; i++) {
    if (dice[i] > 6) return "Number in dice must between 1-6";

    if (dice[i] === target) {
      sum += dice[i];
    }
  }

  return sum;
}
