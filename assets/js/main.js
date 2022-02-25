function randomSelect() {
    let userInput = document.getElementById('textarea').value; // store textarea content in userInput
    console.log(userInput);
    let userInputSplit = userInput.split(/\r?\n/); // Split input text into an array of lines
    console.log(userInputSplit);
    userInputSplit = userInputSplit.filter(line => line.trim() !== ""); // filter out lines that are empty or contain only whitespace
    console.log(userInputSplit);
    userInput = userInputSplit.join("\n"); // join array into a string
    document.getElementById('textarea').value = userInput; // replace textarea text with filtered text
    const randomLine = userInputSplit[Math.floor(Math.random() * userInputSplit.length)]; // pick random line from filtered textarea array
    document.getElementById('winner').innerHTML = randomLine;
    if (randomLine.length > 0){
        let createLi = document.createElement("li"); // create constructor createLi 
        let userInputText = document.createTextNode(randomLine);
        createLi.appendChild(userInputText);
        document.getElementById("list").appendChild(createLi);
    }
    document.getElementById('textarea').value = userInput.replace(randomLine, "");
}






function randomSelect2() {
    // const input = document.getElementById('textarea').value;
    let input = document.getElementById('textarea').value;
    input = input + '\n'; 
    document.getElementById('textarea').value = input;
    // let trimmedText = textarea.value.replace(/\n+/g,'\n'); 
    // let trimmedText = input.replace(/\n+/g,'\n'); 
    // let trimmedText = input.replace(/^\s*$[\r\n]*|^[^\S\r\n]+|[^\S\r\n]+$|([^\S\r\n]){2,}/gm, '$1'); 
    let trimmedText = input.replace(/\n(\n+)/g, '$1'); 
    // let trimmedText = input.split('\n').filter(x=> x !== '').join('\n');
    document.getElementById('textarea').value = trimmedText;
    input = trimmedText.trim();
    // console.log(input);
    const lines = input.split('\n');
    // console.log(lines);
    const randomLine = lines[Math.floor(Math.random() * lines.length)];
    // const trimmedText = textarea.value.trim();
    // let trimmedText = textarea.value.replace(/\n+/g,'\n'); 
    // textarea.value = trimmedText;
    // console.log(trimmedText);
    //Display your line
    document.getElementById('winner').innerHTML = randomLine;
    // document.getElementById('textarea').style.display='none';
    // document.getElementById('resultado').style.display='block';
    // console.log(randomLine);
    if (randomLine.length > 0){
        // creo una variable createLi y 
        let createLi = document.createElement("li");
        let userInputText = document.createTextNode(randomLine);
        createLi.appendChild(userInputText);
        document.getElementById("list").appendChild(createLi);
    }
    let textAreaOld = document.getElementById('textarea').value;
    // console.log(textAreaOld);
    // console.log(randomLine);
    // textAreaOld.value = textAreaOld.value.replace(randomLine.value, "");
    // document.getElementById('textarea').value = textAreaOld.replace(randomLine + "\n", "");
    document.getElementById('textarea').value = textAreaOld.replace(randomLine, "");
    // document.getElementById('textarea').value = textAreaOld.replace('\n'+'\n', "");
    // console.log(textAreaOld);
}
function reset() {
    document.getElementById("textarea").value= "";
    console.log (list.innerHTML);
    list.innerHTML = "";
    winner.innerHTML = "";   
    }
    