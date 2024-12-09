
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

describe('Math operations', () => {
  describe('Addition', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(add(1, 2)).toBe(3);
    });
  });

  describe('Subtraction', () => {
    test('subtracts 5 - 2 to equal 3', () => {
      expect(subtract(5, 2)).toBe(3);
    });
  });
});