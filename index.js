function receivesAFunction(callback) {
  callback();
}


function returnsANamedFunction() {
  return function blah() {"blahhh"}
}

function returnsAnAnonymousFunction() {
  return () => "blahhh"
};
