// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const check = new Map();
    check.set(')' , '(');
    check.set('}' , '{');
    check.set(']' , '[');

    for(let char of s){
        if(check.has(char)) {
            let top = stack.pop();
            if(top !== check.get(char)) {
                return false;
            } 
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};