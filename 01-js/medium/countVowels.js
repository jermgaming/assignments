/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function isVowel(str){
  if(str=='a'||str=='A'||str=='E'||str=='e'||str=='I'||str=='i'||str=='o'||str=='O'||str=='u'||str=='U'){
    return true;
  }else {
    return false;
  }

  }
function countVowels(str) {
    // Your code here
    let ans=0;
    for(let i=0;i<str.length;i++){
      if(isVowel(str[i])==true){
        ans++;
      }
    }

    return ans;
}

module.exports = countVowels;