function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const str1Sorted = str1.split("").sort();
  const str2Sorted = str2.split("").sort();

  for (let i = 0; i < str1.length; i += 1) {
    if (str1Sorted[i] !== str2Sorted[i]) return false;
  }

  return true;
}

// console.log(isAnagram("abc", "bac"));
// console.log(isAnagram("abc", "abcd"));
// console.log(isAnagram("abc", "abd"));

/////////////////////////////////////////////////////////////////////////////
// task2
function cloneObject(obj) {
  let clone = Object.assign({}, obj);

  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === "object" ? cloneObject(obj[key]) : obj[key])
  );

  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
    ? Array.from(obj)
    : clone;
}

const obj = {
  a: 1,
  b: [1, 2],
  c: [{ a: 2 }, { b: [1, 5] }, [{ c: [1] }]],
};
const newObj = cloneObject(obj);
obj.c[1].b = 2;
console.log(obj);
console.log(newObj);

/////////////////////////////////////////////////////////////////////////////
// task3

const add = (a, b) => a + b;

function wrapper(func) {
  let memo = {};
  let slice = Array.prototype.slice;

  return function () {
    let args = slice.call(arguments);
    console.log(args);

    if (args in memo) {
      console.log("cached");
      return memo[args];
    } else return (memo[args] = func.apply(this, args));
  };
}

const cachedAdd = wrapper(add);
// console.log(cachedAdd(2, [2], { a: 5 }));
// console.log(cachedAdd(3, 3));
// console.log(cachedAdd(2, 2));
// console.log(cachedAdd(2, [2], { a: 5 }));
// console.log(cachedAdd(3, 4));
