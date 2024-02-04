function isPalindrome(word) {
  
return word === word.split('').reverse().join('')
}

/* 
  Take in a string or word

  Logic to compare forward word to reversed word.
  Need a way to reverse the word.
  return either true or false.

*/

/*
  Split the word into it's individual components in an array.
  Reverse the order of components.
  Join them back into one word.
  Compare results.
  Return true or false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
