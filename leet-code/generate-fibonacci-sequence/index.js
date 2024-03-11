var fibGenerator = function* () {
  let i = 0;
  while (true) {
    yield fib(i);
    i++;
  }
};

const hash = new Map();
function fib(n) {
  if (n === 0) hash.set(0, 0);
  if (n === 1) hash.set(1, 1);
  if (hash.get(n) === undefined) {
    hash.set(n, fib(n - 1) + fib(n - 2));
  }
  return hash.get(n);
}
