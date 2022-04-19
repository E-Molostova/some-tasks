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
  let clone = {};
  for (let i in obj) {
    if (Array.isArray(obj[i])) {
      clone[i] = obj[i].map((val) => cloneObject(val));
    } else if (obj[i] !== null && typeof obj[i] == "object") {
      clone[i] = cloneObject(obj[i]);
    } else {
      clone[i] = obj[i];
    }
  }
  return clone;
}

const obj = {
  a: 1,
  b: [1, 2],
  c: [{ a: 2 }, { b: [1, 5] }, [{ c: [1] }]],
};
const newObj = cloneObject(obj);
obj.c[1].b = 2;
// console.log(obj);
// console.log(newObj);

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
let shitObject = { value: 3, array: [1, 2, 3] };
let shitObject2 = { value: 3, array: [1, 1, 3] };
console.log(cachedAdd(2, [2], shitObject));
console.log(cachedAdd(3, 3));
console.log(cachedAdd(2, 2));
console.log(cachedAdd(2, [2], shitObject2));
console.log(cachedAdd(3, 4));
