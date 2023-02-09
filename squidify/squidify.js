var everything = document.body.querySelectorAll("a,div,b,marquee,span,text,font,p,section,header,title,h2,h1,p,code,h3,button,i")
var everyinput = document.body.getElementsByTagName("input")
var everyimage = document.body.getElementsByTagName("img")
var count = 0
var countinp = 0
var countimg = 0
var oldparent = 0
var newparent = 0
var max = everything.length
var maxinp = everyinput.length
var maximg = everyimage.length
var timer = 0
var timerinp = 0
var timerimg = 0
var timer2 = -1
var accel = 1
var rng = 0
var fails = 0
var test = 0
var squidwalk = 0
var timerthing = setInterval(function(){
if (count==max && countinp==maxinp && countimg==maximg){
everything = document.body.getElementsByTagName("a","div","b","marquee","span","text","font","p","section","header","title","h2","h1","p","code","h3","button")
count = 0
max = everything.length
everyinput = document.body.getElementsByTagName("input")
countinp = 0
maxinp = everyinput.length
everyimage = document.body.getElementsByTagName("img")
countimg = 0
maximg = everyimage.length
squidwalk+=1
}
if (timer!==-1){
timer+=(1*accel)
if (timer>=(3000)){
squidwardpayload1()
}
}
if (timerinp!==-1){
timerinp+=(1*accel)
if (timerinp>=(3000)){
squidwardpayload1inp()
}
}
if (timerimg!==-1){
timerimg+=(1*accel)
if (timerimg>=(3000)){
squidwardpayload1img()
}
}
if (squidwalk==10){
squidwalk+=1
squidwardpayload2()
}
}, 10)
function squidwardpayload1(){
//ew, do i not smell squidward? let me fix this for you.
if (count<max){
timer-=3000
if (everything[count].childNodes.length==0 && everything[count].innerText!==""){
everything[count].innerText="Squidward"
} else /*if (everything[count].innerText!=="")*/ {
var div = document.createElement("div")
div.id="nodeMoverXD"
document.body.append(div)
oldparent = everything[count].children
while (oldparent.length!==0){
div.append(oldparent[0])
oldparent = everything[count].children
}
if (everything[count].innerText!==""){
everything[count].innerText="Squidward"
}
newparent = div.children
while (newparent.length!==0){
everything[count].append(newparent[0])
newparent = div.children
}
div.remove()
}
count+=1
if (accel<1000){
accel+=1
}
} else {
//timerinput=0
//timer=-1
}
if (fails==100){
console.error("Failsafe! 100 fails for squidward finding.")
count=max
}
}
function squidwardpayload1inp(){
//inputs resulting in less squidward? worry no longer!
if (countinp<maxinp){
timerinp-=3000
if (everyinput[countinp].type=="button" || everyinput[countinp].type=="text"){
everyinput[countinp].value="Squidward"
} else {
everyinput[countinp].placeholder="Squidward"
}
countinp+=1
if (accel<1000){
accel+=1
}
} else {
//timerimg=0
//timerinp=-1
}
if (fails==100){
console.error("Failsafe! 100 fails for squidward finding.")
countinp=maxinp
}
}
function squidwardpayload1img(){
//image not squidward? DISGUSTING! Get it out now.
if (countimg<maximg){
rng = (((Math.random()*2)+1).toFixed(0))
if (everyimage[countimg].src!=="https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Squidward_Tentacles.svg/800px-Squidward_Tentacles.svg.png" && everyimage[countimg].src!=="https://mediaproxy.salon.com/width/1200/height/675/https://media.salon.com/2018/08/squidward.jpg" && everyimage[countimg].src!=="https://static.wikia.nocookie.net/p__/images/0/00/R_%2817%29.png/revision/latest?cb=20221220003948&path-prefix=protagonist"){
if (rng==1){
everyimage[countimg].src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Squidward_Tentacles.svg/800px-Squidward_Tentacles.svg.png"
everyimage[countimg].srcset="https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Squidward_Tentacles.svg/800px-Squidward_Tentacles.svg.png"
} else if (rng==2){
everyimage[countimg].src="https://mediaproxy.salon.com/width/1200/height/675/https://media.salon.com/2018/08/squidward.jpg"
everyimage[countimg].srcset="https://mediaproxy.salon.com/width/1200/height/675/https://media.salon.com/2018/08/squidward.jpg"
} else if (rng==3){
everyimage[countimg].src="https://static.wikia.nocookie.net/p__/images/0/00/R_%2817%29.png/revision/latest?cb=20221220003948&path-prefix=protagonist"
everyimage[countimg].srcset="https://static.wikia.nocookie.net/p__/images/0/00/R_%2817%29.png/revision/latest?cb=20221220003948&path-prefix=protagonist"
}
}
countimg+=1
timerimg-=3000
if (accel<1000){
accel+=1
}
} else {
//timer2=0
//timerimg=-1
}
if (fails==100){
console.error("Failsafe! 100 fails for squidward finding.")
countimg=maximg
}
}
function squidwardpayload2(){
//"squidwalk intensifies" (thank a typo)
var sound = document.createElement("audio")
sound.innerHTML="<source src=\"https://cdn.blerp.com/normalized/9f969290-7701-11eb-bde4-6da195428d14\" type=\"audio/mpeg\" style=\"display: none;\">"
sound.id="squidwardsound"
sound.loop=true
sound.play()
document.body.appendChild(sound)
document.getElementById("squidwardsound").play=true
}
