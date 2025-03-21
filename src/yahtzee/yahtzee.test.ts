import { Dices } from "../types/dice";
import { yahtzee } from "./yahtzee";

describe("Upper section combinations => Success Case", () => {
  describe("dice target 1", () => {
    it("The dice [2, 3, 3, 3, 1] should sum to 1", () => {
      const dice: Dices = [2, 3, 3, 3, 1];
      const target = 1;
      const expected = 1;

      const result = yahtzee(target, dice);

      expect(result).toEqual(expected);
    });

    it("The dice [2, 1, 3, 2, 1] should sum to 2", () => {
      const dice: Dices = [2, 1, 3, 2, 1];
      const target = 1;
      const expected = 2;

      const result = yahtzee(target, dice);

      expect(result).toEqual(expected);
    });

    it("The dice [6, 5, 2, 3, 3] should sum to 0", () => {
      const dice: Dices = [6, 5, 2, 3, 3];
      const target = 1;
      const expected = 0;

      const result = yahtzee(target, dice);

      expect(result).toEqual(expected);
    });
  });

  describe("dice target 2", () => {
    it("The dice [2, 3, 3, 3, 1] should sum to 2", () => {
      const dice: Dices = [2, 3, 3, 3, 1];
      const target = 2;
      const expected = 2;

      const result = yahtzee(target, dice);

      expect(result).toEqual(expected);
    });

    it("The dice [2, 1, 3, 2, 1] should sum to 4", () => {
      const dice: Dices = [2, 1, 3, 2, 1];
      const target = 2;
      const expected = 4;

      const result = yahtzee(target, dice);

      expect(result).toEqual(expected);
    });

    it("The dice [6, 5, 1, 3, 3] should sum to 0", () => {
      const dice: Dices = [6, 5, 1, 3, 3];
      const target = 2;
      const expected = 0;

      const result = yahtzee(target, dice);

      expect(result).toEqual(expected);
    });
  });

  describe("dice target 3", () => {
    it("The dice [2, 3, 2, 2, 1] should sum to 3", () => {
      const dice: Dices = [2, 3, 2, 2, 1];
      const target = 3;
      const expected = 3;

      const result = yahtzee(target, dice);

      expect(result).toEqual(expected);
    });

    it("The dice [2, 1, 3, 3, 1] should sum to 6", () => {
      const dice: Dices = [2, 1, 3, 3, 1];
      const target = 3;
      const expected = 6;

      const result = yahtzee(target, dice);

      expect(result).toEqual(expected);
    });

    it("The dice [6, 5, 1, 2, 2] should sum to 0", () => {
      const dice: Dices = [6, 5, 1, 2, 2];
      const target = 3;
      const expected = 0;

      const result = yahtzee(target, dice);

      expect(result).toEqual(expected);
    });
  });

  describe("dice target 4", () => {
    it("The dice [2, 4, 2, 2, 1] should sum to 4", () => {
      const dice: Dices = [2, 4, 2, 2, 1];
      const target = 4;
      const expected = 4;

      const result = yahtzee(target, dice);

      expect(result).toEqual(expected);
    });

    it("The dice [2, 1, 4, 4, 1] should sum to 8", () => {
      const dice: Dices = [2, 1, 4, 4, 1];
      const target = 4;
      const expected = 8;

      const result = yahtzee(target, dice);

      expect(result).toEqual(expected);
    });

    it("The dice [6, 5, 1, 2, 2]should sum to 0", () => {
      const dice: Dices = [6, 5, 1, 2, 2];
      const target = 4;
      const expected = 0;

      const result = yahtzee(target, dice);

      expect(result).toEqual(expected);
    });
  });

  describe("dice target 5", () => {
    it("The dice [5, 6, 5, 3, 5] should sum to 25", () => {
      const dice: Dices = [5, 6, 5, 3, 5];
      const target = 5;
      const expected = 15;

      const result = yahtzee(target, dice);

      expect(result).toEqual(expected);
    });

    it("The dice [2, 5, 5, 2, 1] should sum to 10", () => {
      const dice: Dices = [2, 5, 5, 2, 1];
      const target = 5;
      const expected = 10;

      const result = yahtzee(target, dice);

      expect(result).toEqual(expected);
    });

    it("The dice [6, 6, 2, 3, 3] should sum to 0", () => {
      const dice: Dices = [6, 6, 2, 3, 3];
      const target = 5;
      const expected = 0;

      const result = yahtzee(target, dice);

      expect(result).toEqual(expected);
    });
  });

  describe("dice target 6", () => {
    it("The dice [5, 6, 5, 6, 5] should sum to 12", () => {
      const dice: Dices = [5, 6, 5, 6, 5];
      const target = 6;
      const expected = 12;

      const result = yahtzee(target, dice);

      expect(result).toEqual(expected);
    });

    it("The dice [6, 6, 6, 6, 1] should sum to 24", () => {
      const dice: Dices = [6, 6, 6, 6, 1];
      const target = 6;
      const expected = 24;

      const result = yahtzee(target, dice);

      expect(result).toEqual(expected);
    });

    it("The dice [1, 5, 2, 3, 3] should sum to 0", () => {
      const dice: Dices = [1, 5, 2, 3, 3];
      const target = 6;
      const expected = 0;

      const result = yahtzee(target, dice);

      expect(result).toEqual(expected);
    });
  });
});

describe("Upper section combinations => Alternative Case", () => {
  it.skip("[Handle by Typescript] The dice [1] should error and return message 'Dice array length must be 5 long'", () => {
    // const dice: Dices = [1];
    // const target = 6;
    // const expected = "Dice array length must be 5 long";
    // const result = yahtzee(target, dice);
    // expect(result).toEqual(expected);
  });

  it.skip("[Handle by Typescript] The dice [1,2,3,4,5,6] should error and return message 'Dice array length must be 5 long'", () => {
    // const dice: Dices = [1, 2, 3, 4, 5, 6];
    // const target = 6;
    // const expected = "Dice array length must be 5 long";
    // const result = yahtzee(target, dice);
    // expect(result).toEqual(expected);
  });

  it.skip("[Handle by Typescript] The dice [1,2,3,4,5,6] should error and return message 'Target must between 1-6'", () => {
    // const dice: Dices = [1, 2, 3, 4, 5];
    // const target = 7;
    // const expected = "Target must between 1-6";
    // const result = yahtzee(target, dice);
    // expect(result).toEqual(expected);
  });

  it.skip("[Handle by Typescript] The dice [7,7,1,1,1] should error and return message 'Number in dice must between 1-6'", () => {
    // const dice: Dices = [7, 7, 1, 1, 1];
    // const target = 1;
    // const expected = "Number in dice must between 1-6";
    // const result = yahtzee(target, dice);
    // expect(result).toEqual(expected);
  });
});
