import { sum, substract, multiplication, divide } from "../operations.js";

describe("Operations module tests", () => {
  let n1, n2;

  beforeAll(() => {
    n1 = 12;
    n2 = 34;
  });

  it("should sum correctly", () => {
    const result = sum(n1, n2);
    expect(result).toBe(n1 + n2);
  });

  it("should substract correctly", () => {
    const result = substract(n1, n2);
    expect(result).toBe(n1 - n2);
  });

  it("should multiply correctly", () => {
    const result = multiplication(n1, n2);
    expect(result).toBe(n1 * n2);
  });

  it("should divide correctly", () => {
    const result = divide(n1, n2);
    expect(result).toBe(n1 / n2);
  });
});
