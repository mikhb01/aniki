function session() {
    let text = '{"words":[' +
    '{"vocabJP":"学校", "vocabENG":"School"},' +
    '{"vocabJP":"自動販売機", "vocabENG":"Vending machine"},' + 
    '{"vocabJP":"会社", "vocabENG":"Company"}]}';

    const obj = JSON.parse(text);

    document.getElementById("wordKanji").innerHTML = obj.words[0].vocabJP;
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
    if(x.toLowerCase() === obj.words[0].vocabENG.toLowerCase()){
        document.getElementById("word").innerHTML = obj.words[0].vocabJP;
       // document.getElementById("word").innerHTML = obj.words[0].vocabENG;
        document.getElementById("word").style.backgroundColor = "green";
    }else{
        document.getElementById("word").style.backgroundColor = "red";
        document.getElementById("word").innerHTML = obj.words[0].vocabENG;
    }
}