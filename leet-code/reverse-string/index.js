// solution 1: in-place and space complexity of O(1)

var reverseString = function (s) {
  let r = s.length - 1;
  let l = 0;
  while (l < r) {
    const temp = s[r];
    s[r] = s[l];
    s[l] = temp;
    l++;
    r--;
  }
};

// solution 2: with stack and space complexity of O(n)

var reverseString = function (s) {
  const stack = [];
  for (char of s) {
    stack.push(char);
  }

  i = 0;
  while (stack.length > 0) {
    const char = stack.pop();
    s[i] = char;
    i++;
  }
};

// solution 3: with recursion and space complexity of O(n)
//similar to solution 1 but wothout a while loop

var reverseString = function (s) {
  function reverse(l, r) {
    if (l < r) {
      const temp = s[l];
      s[l] = s[r];
      s[r] = temp;
      reverse(l + 1, r - 1);
    }
  }
  reverse(0, s.length - 1);
};
