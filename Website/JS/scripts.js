let i = 0;

function session() {
    let text = '{"words":[' +
    '{"vocabJP":"学校", "vocabENG":"School"},' +
    '{"vocabJP":"自動販売機", "vocabENG":"Vending machine"},' + 
    '{"vocabJP":"会社", "vocabENG":"Company"}]}';

    const obj = JSON.parse(text);

    document.getElementById("wordKanji").innerHTML = obj.words[i].vocabJP;
    document.getElementById("writingAnswer").style.visibility = "visible";
    document.getElementById("startButton").style.visibility = "hidden";
    document.getElementById("submitButton").style.visibility = "visible";
}

function next() {
    let text = '{"words":[' +
    '{"vocabJP":"学校", "vocabENG":"School"},' +
    '{"vocabJP":"自動販売機", "vocabENG":"Vending machine"},' + 
    '{"vocabJP":"会社", "vocabENG":"Company"}]}';
    
    const obj = JSON.parse(text);

    let x = document.getElementById("writingAnswer").value;
      document.getElementById("word").style.backgroundColor = "palevioletred";
        if(x.toLowerCase() === obj.words[i].vocabENG.toLowerCase()){
            i++;
            document.getElementById("word").innerHTML = obj.words[i].vocabJP;
        }else{
            document.getElementById("word").style.backgroundColor = "#840a0a";
            document.getElementById("word").innerHTML = obj.words[i].vocabENG;
      }
}