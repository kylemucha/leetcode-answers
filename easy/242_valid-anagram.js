// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length !== t.length){
        return false;
    }

    let map1 = new Map();
    let map2 = new Map();
    let buffer = 0;

    for(let i = 0; i < s.length; i++){
        if(map1.has(s[i])){
            buffer = map1.get(s[i]);
            buffer += 1;
            map1.set(s[i],buffer);
        } else {
            map1.set(s[i],0);
        }
    }

    for(let i = 0; i < t.length; i++){
        if(map1.has(t[i])){
            buffer = map1.get(s[i]);
            buffer -= 1;
            map1.set(s[i],buffer)
        } else {
            return false;
        }
    }

    for (const value of map1.values()) {
    if (value !== -1) {
      return false;
    } else {
        return true;
    }
  }
  
};