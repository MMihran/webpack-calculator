import divide from "./divide.js";

test("6 / 3 to equal 2", () => {
  expect(divide(6, 3)).toBe(2);
});

test("dividing by zero returns string", () => {
  expect(typeof divide(1, 0)).toBe("string");
});
