// # Longest Common Prefix
// 
// Given a list of strings, return a string containing the longest prefix in
// common amongst all the provided strings. 

function longestCommonPrefix(strings) {
    //Type your solution here
    if (!strings.length || !Array.isArray(strings)) return "";

    let pointer = 0, counter = 1, length = strings.length, result = "";
    let firstString = strings[pointer];

    // [flow, flower, flo]
    while ( true ) {
      let currentLetter = firstString[pointer];
      let otherLetter = strings[counter++][pointer];
      if (currentLetter === otherLetter) {
        if (counter === length) {
          result += currentLetter;
          pointer++;
        }
      } else {
        return result;
      }
    }
  }
  
  module.exports = { longestCommonPrefix };