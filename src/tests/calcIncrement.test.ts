import * as f from "../functions";

const cases: [number, number][] = [
  [0, 256],
  [1, 128],
  [2, 64],
  [3, 32],
  [4, 16],
  [5, 8],
  [6, 4],
  [7, 2],
  [8, 256],
  [9, 128],
  [10, 64],
  [11, 32],
  [12, 16],
  [13, 8],
  [14, 4],
  [15, 2],
  [16, 256],
  [17, 128],
  [18, 64],
  [19, 32],
  [20, 16],
  [21, 8],
  [22, 4],
  [23, 2],
  [24, 256],
  [25, 128],
  [26, 64],
  [27, 32],
  [28, 16],
  [29, 8],
  [30, 4],
  [31, 2],
  [32, 256],
];

test.each(cases)("calcIncrement( %s ) should return %s", (cidr, inc) => {
  expect(f.calcIncrement(cidr)).toBe(inc);
});