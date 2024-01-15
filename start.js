var c = 0;

const rec = function () {
  c = c + 1;
  if (c === 102) {
    return "done";
  }
  rec("hello");
};

const foo = () => {
  try {
    return false;
  } finally {
    return true;
  }
};

foo();

// the file is experimenting the wierd behaviour of javascript. 