import * as f from '../functions'

const cases: [string, number, string][] = [
  ['11000000' + '10101000' + '00000000' + '00000001', 1, '10000000' + '00000000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 2, '11000000' + '00000000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 3, '11000000' + '00000000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 4, '11000000' + '00000000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 5, '11000000' + '00000000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 6, '11000000' + '00000000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 7, '11000000' + '00000000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 8, '11000000' + '00000000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 9, '11000000' + '10000000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 10, '11000000' + '10000000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 11, '11000000' + '10100000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 12, '11000000' + '10100000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 13, '11000000' + '10101000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 14, '11000000' + '10101000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 15, '11000000' + '10101000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 16, '11000000' + '10101000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 17, '11000000' + '10101000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 18, '11000000' + '10101000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 19, '11000000' + '10101000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 20, '11000000' + '10101000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 21, '11000000' + '10101000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 22, '11000000' + '10101000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 23, '11000000' + '10101000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 24, '11000000' + '10101000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 25, '11000000' + '10101000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 26, '11000000' + '10101000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 27, '11000000' + '10101000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 28, '11000000' + '10101000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 29, '11000000' + '10101000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 30, '11000000' + '10101000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 31, '11000000' + '10101000' + '00000000' + '00000000'],
  ['11000000' + '10101000' + '00000000' + '00000001', 32, '11000000' + '10101000' + '00000000' + '00000001'],
]

test.each(cases)('calcBinNetwork( %s ) should return %s', (binHost, cidr, binNetwork) => {
  expect(f.calcBinNetwork(binHost, cidr)).toBe(binNetwork)
})