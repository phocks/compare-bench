import equal from "fast-deep-equal";

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

// Time a benchmark for the two objects
console.time("Stringify benchmark");
for (let i = 0; i < ITERATIONS; i++) {
  JSON.stringify(DATA[0]) === JSON.stringify(DATA[1]);
}
console.timeEnd("Stringify benchmark");

// Time a benchmark for the two objects
console.time("fast-deep-equal benchmark");
for (let i = 0; i < ITERATIONS; i++) {
  equal(DATA[0], DATA[1]);
}
console.timeEnd("fast-deep-equal benchmark");
