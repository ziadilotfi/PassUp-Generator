var char = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','!', '#', '$', '%', '&', '(', ')', '*', '+'];
let password = [""];

var easy = document.getElementById("easy")
var medium = document.getElementById("medium")
var hard = document.getElementById("hard")

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

function func1(){
    var pass = document.getElementById("passbox").value;
    const passarr = Array.from(pass);
    if (easy.checked == true){
      for (let i = 0; i < 2; i++){
        var chars = char[Math.floor(Math.random()*char.length)];
        password.push(chars)
    }
    }else if (medium.checked == true){
      for (let i = 0; i < 4; i++){
        var chars = char[Math.floor(Math.random()*char.length)];
        password.push(chars)
    }}
    else if (hard.checked == true){
      for (let i = 0; i < 8; i++){
        var chars = char[Math.floor(Math.random()*char.length)];
        password.push(chars)
    }}
    else {
      for (let i = 0; i < 5; i++){
        var chars = char[Math.floor(Math.random()*char.length)];
        password.push(chars)
    }}

    shuffle(password);
    shuffle(passarr);
    var passup = password.concat(passarr)
    password = []
    shuffle(passup)
    var passstr = passup.join('')
    document.getElementById("passbox").type = "text";
    document.getElementById("passbox").value = passstr;


}

function showpass(){
    var x = document.getElementById("passbox");
    if (x.type === "password") {
    x.type = "text";
    } else {
    x.type = "password";
  }
}

function reset(){
  document.getElementById('passbox').value =''
}