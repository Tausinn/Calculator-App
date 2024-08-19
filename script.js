const inputEl = document.getElementById("input-el");

let allNum = ""
function press(num){
    allNum += num;
    inputEl.value =  allNum;
}

function equalTo(){
    let result = eval(allNum);
    inputEl.value = result;
    allNum = result;
    allNum += ""
}

function eraser(){
    allNum = ""
    inputEl.value = allNum;
}