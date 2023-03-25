function clc(val) {
    document.getElementById("result").value += val;
}
function clean() {
    document.getElementById("result").value = "";
}
function finaloperat() {
    let x = document.getElementById("result").value;
    let y = document.getElementById("result").value;
    x = eval(y);
    document.getElementById("result").value = x;
}

function square() {
    var a=document.getElementById("result").value;
    var b=a*a;
    document.getElementById("result").value=b;

}

function del() {
    var a=document.getElementById("result").value;
    document.getElementById("result").value=a.slice(0, - 1);
}