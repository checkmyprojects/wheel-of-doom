function randomSelect() {
    let userInput = document.getElementById('textarea').value; // store textarea content in userInput
    let userInputSplit = userInput.split(/\r?\n/); // Split input text into an array of lines
    userInputSplit = userInputSplit.filter(line => line.trim() !== ""); // filter out lines that are empty or contain only whitespace
    userInput = userInputSplit.join("\n"); // join array into a string
    document.getElementById('textarea').value = userInput; // replace textarea text with filtered text
    const randomLine = userInputSplit[Math.floor(Math.random() * userInputSplit.length)]; // pick random line from filtered textarea array
    if (randomLine != undefined){ // if != than undeffined means that winner exists
        document.getElementById('winner').innerHTML = randomLine; // print winner on DOM
    }
    if (randomLine.length > 0){ // check if winner has a value
        let createLi = document.createElement("li"); // create constructor createLi 
        let userInputText = document.createTextNode(randomLine);
        createLi.appendChild(userInputText); // create li with winner text
        document.getElementById("list").appendChild(createLi); // add li to DOM
    }
    document.getElementById('textarea').value = userInput.replace(randomLine, ""); // replace on textarea the winner name with nothing (removes the line)
    // Browser text to speach
    const synth = window.speechSynthesis;
    let sayThis = new SpeechSynthesisUtterance(winner.innerHTML);
    synth.speak(sayThis);
    // play();
    setTimeout('play()', 500); // add 500ms delay to execution of delay function
}
function play() {
    let audio = document.getElementById("audio");
    audio.play();
}

function reset() { //function to reset textarea and list
    document.getElementById("textarea").value= ""; // remove text on textarea
    console.log (list.innerHTML); 
    list.innerHTML = ""; // remove list li items
    winner.innerHTML = ""; // remove winner span text
    document.getElementById("bag").className = "container-bag" // remove animation classes from the image
    }

function cambiarFondo(x) { //function to change backgroud
    console.log(x.value);

    let body = document.getElementById("body");
    body.style.backgroundImage = x.value;
}

function countChars(obj){
    let typeLength = obj.value.length;
    if (typeLength < 10){ // remove all animation classes
        document.getElementById("bag").classList.remove("container-bag_anim1");
        document.getElementById("bag").classList.remove("container-bag_anim2");
        document.getElementById("bag").classList.remove("container-bag_anim3");
    }
    if (typeLength > 10 && typeLength < 20){ // add 1 animation and remove the others
        document.getElementById("bag").className += " container-bag_anim1";
        document.getElementById("bag").classList.remove("container-bag_anim2");
        document.getElementById("bag").classList.remove("container-bag_anim3");
    }
    if (typeLength > 20 && typeLength < 30){ // add 1 animation and remove the other one without touching the anim1
        document.getElementById("bag").className += " container-bag_anim2";
        document.getElementById("bag").classList.remove("container-bag_anim3");
    }
    if (typeLength > 30 ){
        document.getElementById("bag").className += " container-bag_anim3"; // add anim3
    }
}

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark'); // add dark class to background
    document.querySelector('#fondo').classList.toggle('dark'); // fondo list
    document.querySelector('#sorteo').classList.toggle('dark'); // sorteo button
    document.querySelector('#resetButton').classList.toggle('dark'); // reset button
    btnSwitch.classList.toggle('active');
});





function randomSelect2() {
    // const input = document.getElementById('textarea').value;
    // crea variable llamada input, dentro de esa variable guarda el contenido de textarea
    let input = document.getElementById('textarea').value;
    // salto de linea
    input = input + '\n'; 
    document.getElementById('textarea').value = input;
    // let trimmedText = textarea.value.replace(/\n+/g,'\n'); 
    // let trimmedText = input.replace(/\n+/g,'\n'); 
    // let trimmedText = input.replace(/^\s*$[\r\n]*|^[^\S\r\n]+|[^\S\r\n]+$|([^\S\r\n]){2,}/gm, '$1'); 
    //es un filtro, guarda el resultado del filtro y lo mete en $1
    let trimmedText = input.replace(/\n(\n+)/g, '$1'); 
    // let trimmedText = input.split('\n').filter(x=> x !== '').join('\n');

    //usamos método trim, quita espacio en blanco
    textarea.value = trimmedText;

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