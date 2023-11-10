import equal from "fast-deep-equal";
import { equals } from "ramda";
import { isEqual } from "lodash";

function returnObjects() {
  const object = JSON.stringify({
    a: 1,
    b: 2,
    c: {
      a: "hello",
    },
  });
  return [JSON.parse(object), JSON.parse(object)];
}

const DATA = returnObjects();
const ITERATIONS = 10_000_000;

// Time a benchmark for the two objects for JSON.stringify
console.time("Stringify benchmark");
for (let i = 0; i < ITERATIONS; i++) {
  JSON.stringify(DATA[0]) === JSON.stringify(DATA[1]);
}
console.timeEnd("Stringify benchmark");

// Time a benchmark for the two objects for fast-deep-equal
console.time("fast-deep-equal benchmark");
for (let i = 0; i < ITERATIONS; i++) {
  equal(DATA[0], DATA[1]);
}
console.timeEnd("fast-deep-equal benchmark");

// Time a benchmark for the two objects for Ramda
console.time("Ramda benchmark");
for (let i = 0; i < ITERATIONS; i++) {
  equals(DATA[0], DATA[1]);
}
console.timeEnd("Ramda benchmark");

// Time a benchmark for the two objects for Lodash
console.time("Lodash benchmark");
for (let i = 0; i < ITERATIONS; i++) {
  isEqual(DATA[0], DATA[1]);
}
console.timeEnd("Lodash benchmark");
