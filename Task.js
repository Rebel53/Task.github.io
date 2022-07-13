
var val = document.getElementById("number").value * 1;
var prime = 1;
for (var i = 2; i < val; i++) {
    if (val % i == 0) {
        prime = 0;
        break;
    }
}

if (prime == 0 && val != 2) {
    var result = val + "Is Not A Prime Number.";
}
else {
    var result = val + "Is A Prime Number.";
}

function check() {
    document.getElementById("number").value = "";
    document.getElementById("resultval").innerHTML = result;
}
