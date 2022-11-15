const aldrinMarkets = require("../src/markets.json");
const aldrinTokens = require("../src/tokens.json");

const toMap = (list, keyFn) => {
  return new Map(list.map((elem) => [keyFn(elem), elem]));
};

const uniq = (list) => Array.from(new Set(list).values());

const uniqBy = (list, keyFn) => {
  const m = toMap(list, keyFn);
  return [...m.values()];
};

test("No duplicates in tokens by symbol", () => {
  const uniqTokensByName = uniqBy(aldrinTokens, (token) => token.symbol);
  expect(uniqTokensByName.length).toBe(aldrinTokens.length);
});

test("No duplicates in tokens by address", () => {
  const uniqTokensByAddress = uniqBy(aldrinTokens, (token) => token.address);
  expect(uniqTokensByAddress.length).toBe(aldrinTokens.length);
});

test("No duplicates in markets by name and PID", () => {
  const marketsByNameAndPID = aldrinMarkets.reduce((acc, market) => {
    const { programId } = market;

    if (acc.has(programId)) {
      const marketsForPID = acc.get(programId) || [];
      acc.set(programId, [...marketsForPID, market]);
    } else {
      acc.set(programId, [market]);
    }

    return acc;
  }, new Map());

  const numberOfUniqMarkets = Array.from(marketsByNameAndPID.values()).reduce(
    (acc, markets) => {
      const uniqMarkets = uniqBy(markets, (market) => market.name);
      return acc + uniqMarkets.length;
    },
    0
  );

  expect(numberOfUniqMarkets).toBe(aldrinMarkets.length);
});

test("No duplicates in markets by address", () => {
  const uniqMarketsByAddress = uniqBy(
    aldrinMarkets,
    (market) => market.address
  );

  expect(uniqMarketsByAddress.length).toBe(aldrinMarkets.length);
});

test("Each market token exists in tokens json", () => {
  const tokensMap = toMap(aldrinTokens, (token) => token.symbol);
  const uniqMarketTokens = uniq(
    aldrinMarkets.map((market) => market.name.split("/")).flat()
  );

  const isEveryMarketTokenInTokensMap = uniqMarketTokens.every((token) =>
    tokensMap.has(token)
  );

  expect(isEveryMarketTokenInTokensMap).toBe(true);
});
