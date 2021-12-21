function increaseOrDecrease(lines) {
  var index = 0;
  var increased = 0;
  var decreased = 0;
  var results = [];
  lines.forEach((line) => {
    var lastLine = "";
    var currentLine = "";

    if (index === 0) {
      lastLine = line;
      console.log(line + "-->" + index);
      index++;
    } else {
      currentLine = line;

      if (currentLine > lastLine) {
        console.log(line + " --> " + index + "  :increased");
        increased++;
      } else if (currentLine < lastLine) {
        console.log(line + " --> " + index + "  :decreased");
        decreased++;
      } else {
        console.log(line + " --> " + index);
      }
      index++;
      lastLine = currentLine;
    }
  });

  console.log("Number of inputs: " + index);
  console.log("How many times the inputs increased: " + increased); //1582 is too low
  console.log("How many times the inputs decreased: " + decreased);
  results = [index, increased, decreased];
  return results;
}

exports.increaseOrDecrease = increaseOrDecrease;
