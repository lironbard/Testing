import CandyStore from "./candyStore";

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
    const queriedCandy = candyStore.getCandy("assdsd");
    expect(queriedCandy).toBeUndefined();
  });
});
