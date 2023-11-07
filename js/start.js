var c = 0;

const rec = function () {
  c = c + 1;
  if (c === 102) {
    console.log("done");
    console.log("fucker");
    return "done";
  }
  console.log("hi broo", c);
  rec("hello");
};

console.log("hi b", c);

const foo = () => {
  try {
    console.log("In foo try");
    return false;
  } finally {
    console.log("In foo finally");
  }
};

foo();
