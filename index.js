let set1 = [2, 4, 6, 8];
let set2 = [3, 6, 9, 12];

function addTwoArrays(a, b) {
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) >= 0) {
      continue;
    }
    sum += a[i];
  }

  for (let i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) >= 0) {
      continue;
    }
    sum += b[i];
  }
  return sum;
}

console.log(addTwoArrays(set1, set2));

// using the hash table
function addUniqueElement(a, b) {
  let hash = new Map();

  for (let i = 0; i < a.length; i++) {
    if (hash.has(set1[i])) hash.set(set1[i], 1 + hash.get(set1[i]));
    else hash.set(set1[i], 1);
  }

  for (let i = 0; i < b.length; i++) {
    if (hash.has(set2[i])) hash.set(set2[i], 1 + hash.get(set2[i]));
    else hash.set(set2[i], 1);
  }

  let sum = 0;

  for (let entry of hash) {
    if (parseInt(entry[1].toString()) == 1)
      sum += parseInt((entry[0]).toString());
  }
  return sum;
}
console.log(addUniqueElement(set1, set2));
