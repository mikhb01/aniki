let i = 0;


async function loadWords() {
    const response = await fetch("../JSON/test.json", {headers:{'Accept': 'application/json'}});

    let text = await response.json();
    let jsonString = JSON.stringify(text);

    let obj = JSON.parse(jsonString);
    console.log(obj);

    document.getElementById("wordKanji").innerHTML = obj.words[i].vocabJP;
    document.getElementById("writingAnswer").style.display = "initial";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("submitButton").style.display = "initial";

    

}

async function nextWord() {
    const response = await fetch("../JSON/test.json", {headers:{'Accept': 'application/json'}});

    let text = await response.json();
    let jsonString = JSON.stringify(text);

    let obj = JSON.parse(jsonString);
    console.log(obj);

    let x = document.getElementById("writingAnswer").value;
    document.getElementById("word").style.backgroundColor = "palevioletred";
      if(x.toLowerCase() === obj.words[i].vocabENG.toLowerCase()){
          i++;
          document.getElementById("wordKanji").innerHTML = obj.words[i].vocabJP;
      }else{
          document.getElementById("word").style.backgroundColor = "#840a0a";
          document.getElementById("word").innerHTML = obj.words[i].vocabENG;
    }
}