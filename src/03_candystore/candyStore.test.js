import CandyStore from "./candyStore";
import { v4 as uuidv4 } from "uuid";
describe("getCandy", () => {
  test("Should return a candy with valid id", () => {
    const candyStore = new CandyStore();
    const candy = {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    };
    const queriedCandy = candyStore.getCandy(candy.id);
    expect(candy).toStrictEqual(queriedCandy);
  });

  test("Should return undefined if the candy ID doesn't exist", () => {
    const candyStore = new CandyStore();
    const queriedCandy = candyStore.getCandy(uuidv4());

    expect(queriedCandy).toBeUndefined();
  });
});

describe("buy", () => {
  test("Should buy a candy, cashRegister increase, amount decrease", () => {
    const candyStore = new CandyStore();
    const newCandy = {
      name: "Mars",
      id: uuidv4(),
      price: 4,
      amount: 10,
    };
    const oldRegister = candyStore.cashRegister;
    const oldAmount = newCandy.amount;
    candyStore.candies.push({ ...newCandy });
    candyStore.buy(newCandy.id);

    expect(candyStore.cashRegister).toBe(oldRegister + newCandy.price);
    const candyFromCandies = candyStore.candies.find((x) => x.id === newCandy.id);

    expect(candyFromCandies.amount).toBe(oldAmount - 1);
  });
});
