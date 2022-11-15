import { markets } from 'aldrin-registry/src/markets.json'
import { tokens } from 'aldrin-registry/src/tokens.json'

console.log('markets', markets)
console.log('tokens', tokens)

test('1 + 1 = 2', () => {
  expect(1 + 1).toBe(2);
});

test('1 + 2 = 3', () => {
  expect(1 + 3).toBe(3);
});