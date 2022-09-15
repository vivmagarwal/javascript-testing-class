import { functions } from "./functions";

test("adds 2 + 2 to 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});
