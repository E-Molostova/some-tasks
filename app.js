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
      clone[i] = obj[i].slice(0);
    } else if (obj[i] !== null && typeof obj[i] == "object") {
      clone[i] = cloneObject(obj[i]);
    } else {
      console.log(i);
      clone[i] = obj[i];
    }
  }
  return clone;
}

const obj = {
  a: 1,
  b: [1, 2],
};
const newObj = cloneObject(obj);

console.log(obj);
console.log(newObj);

/////////////////////////////////////////////////////////////////////////////
// task3

const add = (a, b) => a + b;

function wrapper(func) {
  let memo = {};
  let slice = Array.prototype.slice;

  return function () {
    var args = slice.call(arguments);

    if (args in memo) {
      console.log("cached");
      return memo[args];
    } else return (memo[args] = func.apply(this, args));
  };
}

const cachedAdd = wrapper(add);
// console.log(cachedAdd(2, 2));
// console.log(cachedAdd(3, 3));
// console.log(cachedAdd(2, 2));
