//selecting the input and textarea elements and saving them to variables
let input = document.querySelector('input');
let textarea = document.querySelector('textarea');

input.addEventListener('change', () => {
    //returns an array of File objects
    let files = input.files;
    if(files.length == 0) return;

    //getting the first File object
    const file = files[0];

    //creating a FileReader
    let reader = new FileReader();
    reader.onload = (e) => {
        var index = 0;
        var lastLine ='';
        var currentLine = '';
        var increased = 0;
        var decreased = 0;

        const file = e.target.result;
        console.log('inside onload');
        /**We are using split() function and passing regex pattern /\r\n|\n/ as a parameter. This will generate an array of lines and we are storing that in the lines variable. */
        const lines = file.split(/\r\n|\n/);
        console.log('split the lines');
        /**-------------- Our Workspace -------------- */
        lines.forEach((line)=>{
           
           if(index === 0){
            lastLine = line;
            console.log( line + '-->' + index);
            index++;
           }
           else {
            currentLine = line;
            
            if(currentLine > lastLine){
                console.log( line + ' --> ' + index + '  :increased');
                increased++;
            }
            else if(currentLine < lastLine)
            {
                console.log( line + ' --> ' + index + '  :decreased');
                decreased++;
            }
            else {
                console.log( line + ' --> ' + index );
            }
            index++;
            lastLine = currentLine;
           }
            

        });
        
        console.log('Number of inputs: ' + index);
        console.log('How many times the inputs increased: ' + increased); //1582 is too low
        console.log('How many times the inputs decreased: ' + decreased);

        document.getElementById("Index").innerHTML = "Number of inputs: " + index;
        document.getElementById("increase").innerHTML = "How many times the inputs increased: " + increased;
        document.getElementById("decrease").innerHTML = "How many times the inputs decreased: " + decreased;


        /**We are using the join() method to join all lines by a newline character (\n). This will return a string and we are setting that string as the value of the textarea element. */
        textarea.value = lines.join('\n');
        console.log('joined the lines');
        
        
    };
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file); 
   
    
});