function joinElements(array, joinString) {

  function recurse(index, resultSoFar) {
    resultSoFar += array[index];

    console.log(resultSoFar);
    if(index === array.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinString);
    }

  }

  return recurse(0, '');
}

joinElements(['s','cr','t cod', ' :) :)'], 'e');
