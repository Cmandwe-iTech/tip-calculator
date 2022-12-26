
function reset(){
    document.getElementById('tipdisplay').innerHTML = "";
    document.getElementById('totaldisplay').innerHTML = "";
}
reset();

function tip(value){
    var amount = document.querySelector("#bill").value * value;
    document.getElementById('tipdisplay').innerHTML = amount;
}

function tipcalculation(){
    var bill = document.querySelector("#bill").value
    var people = document.getElementById('person').value;
    var tip = document.querySelector("#bill").value * value
    var total = people * (tip + bill)
    document.getElementById('totaldisplay').innerHTML = total;
}