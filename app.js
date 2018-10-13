// Example code for for, for...in, and for...of loops

let arr = ['a', 'b', 'c'];

// Standard for loop. Like Dane said, if you know this, you can get
// just about anything done.
console.log('Output of the standard for loop:');
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Simple for...in example. The loop iterates over the index values of arr
// My mnemonic for this is that 'in' and 'index' both start with 'i'.
console.log('Output of the for...in loop:');
for (var val in arr) {
  console.log(val);
}

// Simple for...of example. The loop iterates over values of arr[i]
// I am trying to remember this by noting that 'in' and 'of' both have
// two letters, but the first letter of 'of' is not 'i'. Just to make
// things more confusing, there are other types of high-level for loops
// like for...each that haven't been mentioned.
console.log('Output of the for...of loop:');
for (val of arr) {
  console.log(val) ;
}

// Here's an object. It has 3 keys, each with a value. For example,
// name is a key, and 'Dave' is the value associated with that key.
// Keys and their associated values are separated by a colon, and
// key:value pairs are separated by commas. Javascript objects are
// pretty neat because you can store just about anything in them--
// even arrays or other objects-- name those things in meaningful
// ways, but still refer to them by a single variable name (obj
// in this case).
let obj = {name: 'Dave', address: 'Minneapolis', favColor: 'blue'};

// Since the keys of a given object aren't obvious, and even if known,
// probably aren't suitable for iterating with a standard for loop,
// a for...in loop comes in handy:
console.log('\nUsing a for...in loop to list an '
             + 'object\'s keys and values:');
for (key in obj) {
  console.log('Key: '
              + key             // the key, e.g., name
              + ', Value: '
              + obj[key]      // similar to array notation
            );                // e.g., obj[name] = 'Dave'
}

// A for...of loop is fine, but you wouldn't know the value of the key
// since for...of just iterates through the values

// Prior to ECMA2015, there wasn't a way to enumerate an object's keys,
// so it was hard to loop through an object by its keys.
// Now, there are built-in methods:
let arrayOfKeys = Object.keys(obj);  // returns are array of all the key values
console.log('This is what arrayOfKeys contains:');
console.log(arrayOfKeys);
// While you now have an array of keys, if you wanted to iterate over them
// with a standard for loop, the code looks messier:
console.log('\nLet\'s do it again with a standard for loop:');
for (var i = 0; i < arrayOfKeys.length; i++) {
  console.log('Key: '
              + arrayOfKeys[i]  // messier notation for the key
              + ', Value: '
              + obj[arrayOfKeys[i]]  // again, messier
              );
}
// One could argue that the standard for loop is inferior in this
// case because
// - it's harder to read and thus maintain,
// - it has an extra line for the Object.keys() method call, and
// - it allocates a useless new index value, i, and array, arrayOfKeys.

// So, a for...in loop has its charms, if you can remember its
// syntax. However, you can always get your work done just fine with a
// standard for loop.

// Play around with for loops
console.log('Playing with for loops!');
let loopVar = 0;
for (; loopVar < arr.length; ) {
  console.log(arr[loopVar++]);
}

// Bug?
for (let i = 0; i < 4; i++); {
  console.log('Why is this only output once?');
}

for (let i = 0, j = 0; i + j < 6; i++, j++) {
  console.log('i =', i, 'j =', j);
}
