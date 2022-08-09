var array = [
  { id: 1, name: "test1" },
  { id: 2, name: "test1" },
  { id: 3, name: "test3" },
  { id: 4, name: "test4" },
];

const tests = ["test1", "test2"];

const result = array.filter((e) => e.name == "test1");

console.log(result);

function getKeyByValue(object) {
  return Object.keys(object).find((key) => object[key] = object[]);
}

const map = { first: "1", second: "2" };
console.log(getKeyByValue(map, "first"));
