if (document.getElementById("dvd1") == null){
var amount = prompt("how many? (0-5)");
if (amount==null){
amount==1
}
if (amount==0 || amount==1 || amount==2 || amount==3 || amount==4 || amount==5){
while (amount>0){
var iframe = document.body.appendChild(document.createElement('iframe'));
iframe.id="dvd"+amount;
iframe.src="https://rdgfb.github.io/dvd/transparent.html";
iframe.style="opacity: 1; z-index: 2147483647; width: 100%; height: 100%; position: fixed; top: -2px; left: -2px; pointer-events: none;"
amount-=1;
}
} else {
alert("Invalid amount!")
}
} else {
if (document.getElementById("dvd5") !== null){
document.getElementById("dvd5").remove()
}
if (document.getElementById("dvd4") !== null){
document.getElementById("dvd4").remove()
}
if (document.getElementById("dvd3") !== null){
document.getElementById("dvd3").remove()
}
if (document.getElementById("dvd2") !== null){
document.getElementById("dvd2").remove()
}
if (document.getElementById("dvd1") !== null){
document.getElementById("dvd1").remove()
}
}
