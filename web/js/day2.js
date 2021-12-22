//selecting the input and textarea elements and saving them to variables
let input = document.querySelector("input");
let textarea = document.querySelector("textarea");

input.addEventListener("change", () => {
  //returns an array of File objects
  let files = input.files;
  if (files.length == 0) return;

  //getting the first File object
  const file = files[0];

  //creating a FileReader
  let reader = new FileReader();
  reader.onload = (e) => {
    var index = 0;
    var lastLine = "";
    var currentLine = "";
    var increased = 0;
    var decreased = 0;
    var results = [];

    const file = e.target.result;
    console.log("inside onload");
    /**We are using split() function and passing regex pattern /\r\n|\n/ as a parameter. This will generate an array of lines and we are storing that in the lines variable. */
    const lines = file.split(/\r\n|\n/);
    console.log("split the lines");
    /**-------------- Our Workspace -------------- */
    lines.forEach((line) => {
      console.log(line);
    });

    console.log("Number of inputs: " + index);
    console.log("How many times the inputs increased: " + increased); //1582 is too low
    console.log("How many times the inputs decreased: " + decreased);

    document.getElementById("increase").innerHTML =
      "How many times the inputs increased: " + increased;
    document.getElementById("decrease").innerHTML =
      "How many times the inputs decreased: " + decreased;

    results = slidingWindow(lines, 3);

    document.getElementById("increase_").innerHTML =
      "How many times the inputs increased: " + results[0];
    document.getElementById("decrease_").innerHTML =
      "How many times the inputs decreased: " + results[1];

    document.getElementById("Index").innerHTML = "Number of inputs: " + index;

    /**We are using the join() method to join all lines by a newline character (\n). This will return a string and we are setting that string as the value of the textarea element. */
    textarea.value = lines.join("\n");
    console.log("joined the lines");
  };
  reader.onerror = (e) => alert(e.target.error.name);
  reader.readAsText(file);
});

function slidingWindow(linesArray, windowSize) {
  if (windowSize < 0 || windowSize > linesArray.length) return null;
  let currentSum = 0;
  let lastSum = 0;
  let increased = 0;
  let decreased = 0;
  let results = [];
  for (let i = 0; i < linesArray.length; i++) {
    currentSum += parseInt(linesArray[i]);
    if (i >= windowSize - 1) {
      if ((lastSum === 0) && (currentSum > lastSum)) {
        console.log(currentSum + " --> " + i + "  :no change");
      } else if (currentSum > lastSum) {
        console.log(currentSum + " --> " + i + "  :increased");
        increased++;
      } else if (currentSum < lastSum) {
        console.log(currentSum + " --> " + i + "  :decreased");
        decreased++;
      } else if ((currentSum = lastSum)) {
        console.log(currentSum + " --> " + i + "  :no change");
      }
      lastSum = currentSum;
      currentSum -= linesArray[i - (windowSize - 1)];
    }
  }
  return (results = [increased, decreased]);
}

function nagivation(linesArray){
    //needs to read line by line, and maybe save the two values to an array?
    let depth = 0;
    let horizontal = 0;

    
}