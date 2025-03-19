import { fizzBuzz } from "./fizzbuzz";

describe("success case", () => {
  it("เมื่อส่งค่า 2 แล้วผลลัพธ์ที่ได้เป็น 2", () => {
    const input = 2;
    const expected = 2;

    const result = fizzBuzz(input);

    expect(result).toEqual(expected);
  });

  it("เมื่อส่งค่า 3 แล้วผลลัพธ์ที่ได้เป็น Fizz", () => {
    const input = 3;
    const expected = "Fizz";

    const result = fizzBuzz(input);

    expect(result).toEqual(expected);
  });

  it("เมื่อส่งค่า 5 แล้วผลลัพธ์ที่ได้เป็น Buzz", () => {
    const input = 5;
    const expected = "Buzz";

    const result = fizzBuzz(input);

    expect(result).toEqual(expected);
  });

  it("เมื่อส่งค่า 8 แล้วผลลัพธ์ที่ได้เป็น 8", () => {
    const input = 8;
    const expected = 8;

    const result = fizzBuzz(input);

    expect(result).toEqual(expected);
  });

  it("เมื่อส่งค่า 9 แล้วผลลัพธ์ที่ได้เป็น Fizz", () => {
    const input = 9;
    const expected = "Fizz";

    const result = fizzBuzz(input);

    expect(result).toEqual(expected);
  });

  it("เมื่อส่งค่า 13 แล้วผลลัพธ์ได้เป็น 13", () => {
    const input = 13;
    const expected = 13;

    const result = fizzBuzz(input);

    expect(result).toEqual(expected);
  });

  it("เมื่อส่งค่า 15 แล้วผลลัพธ์ได้เป็น FizzBuzz", () => {
    const input = 15;
    const expected = "FizzBuzz";

    const result = fizzBuzz(input);

    expect(result).toEqual(expected);
  });

  it("เมื่อส่งค่า 25 แล้วผลลัพธ์ได้เป็น Buzz", () => {
    const input = 25;
    const expected = "Buzz";

    const result = fizzBuzz(input);

    expect(result).toEqual(expected);
  });

  it("เมื่อส่งค่า 30 แล้วผลลัพธ์ได้เป็น Buzz", () => {
    const input = 30;
    const expected = "FizzBuzz";

    const result = fizzBuzz(input);

    expect(result).toEqual(expected);
  });
});

describe("Alternative Case", () => {
  it("เมื่อส่งค่า 101 แล้วผลลัพธ์ได้เป็น Input must have range 1-100", () => {
    const input = 101;
    const expected = "Input must have range 1-100";

    const result = fizzBuzz(input);

    expect(result).toEqual(expected);
  });

  it("เมื่อส่งค่า -1 แล้วผลลัพธ์ได้เป็น Input must have range 1-100", () => {
    const input = -1;
    const expected = "Input must have range 1-100";

    const result = fizzBuzz(input);

    expect(result).toEqual(expected);
  });
});
