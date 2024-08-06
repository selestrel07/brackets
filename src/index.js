module.exports = function check(str, bracketsConfig) {
  // your solution
  let openBrackets = bracketsConfig.map(a => a[0]).join('');
  let closeBrackets = bracketsConfig.map(a => a[1]).join('');
  let stack = [];
  for(let i = 0; i < str.length; i++) {
    let stackLength = stack.length;
    if (closeBrackets.includes(str[i])) {
      if (stackLength > 0 && openBrackets.indexOf(stack[stackLength - 1]) === closeBrackets.indexOf(str[i])) {
        stack.pop();
      } else if (openBrackets.indexOf(str[i]) === closeBrackets.indexOf(str[i])) {
        stack.push(str[i]);
      } else {
        return false;
      }
    } else {
      stack.push(str[i]);
    }
  }

  return stack.length === 0;
}
