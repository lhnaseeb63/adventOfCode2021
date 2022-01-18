app.controller('day1ALTController',['$scope', function($scope){
    $scope.test = 'day 1 ALT --> day 1 script is now in controller';
    
    $scope.day1 = function () {

        increaseOrDecrease();
    }

    increaseOrDecrease = function() {
        //selecting the input and textarea elements and saving them to variables
        let input = document.querySelector("input");
        let textarea = document.querySelector("textarea");
      
        if (input) {
          console.log("Input not null");
        } else {
            console.log("nope");
        }
      
        input.addEventListener("change", () => {
            console.log("made it to the event listener");
          //returns an array of File objects
          let files = input.files;
          if (files.length == 0) return;
      
          //getting the first File object
          const file = files[0];
      
          //creating a FileReader
          let reader = new FileReader();

            console.log("created reader");

          reader.onload = (e) => {
              console.log("entered reader");
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
                console.log(index);
                lastLine = currentLine;
              }
            });
      
            console.log("Number of inputs: " + index);
            console.log("How many times the inputs increased: " + increased); //1582 is too low
            console.log("How many times the inputs decreased: " + decreased);
      
            document.getElementById("increase").innerHTML =
              "How many times the inputs increased: " + increased;
            document.getElementById("decrease").innerHTML =
              "How many times the inputs decreased: " + decreased;
      
              //3 is hard-coded because that's what was asked for in the problem
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
    }
      
    slidingWindow = function (linesArray, windowSize) {
        if (windowSize < 0 || windowSize > linesArray.length) return null;
        let currentSum = 0;
        let lastSum = 0;
        let increased = 0;
        let decreased = 0;
        let results = [];
        for (let i = 0; i < linesArray.length; i++) {
          currentSum += parseInt(linesArray[i]);
          if (i >= windowSize - 1) {
            if (lastSum === 0 && currentSum > lastSum) {
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

    
}]);
