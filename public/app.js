
function output(num){
    var output = document.getElementById('output');
    output.value +=num;
}
function sqrt() {
    var val = document.getElementById("output").value;
    val1 = Math.sqrt(val);
    document.getElementById("output").value = val1;
}
function clearonce(){
    var val = document.getElementById('output').value;
    val = val.slice(0,-1);
    document.getElementById("output").value = val;
}
function clearOutput() {
    var output = document.getElementById('output');
    output.value="";
}
function backspace(){
    var output = document.getElementById('output');
    res = output.substring(0,output.lenght-1);
    output.value = res;
}
function calc(){
    var result= document.getElementById('output');
    if(result.value==""){
        result.value = 0;
    }
    result.value = eval(result.value);
}

