function isValid(s: string): boolean {
  if (s.length % 2 !== 0) {
    console.log("le:");
    return false;
  }

  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const kumar: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const e = s[i];

    if (bracketMap.has(e)) {
      if (kumar.length > 0 && kumar[kumar.length - 1] === bracketMap[e]) {
        kumar.pop();
      } else {
        return false;
      }
    } else {
      kumar.push(e);
    }
  }

  return kumar.length === 0;
}
