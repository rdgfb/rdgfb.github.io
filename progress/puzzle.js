//user has to move objects into place to get to the winning place.
//collision: works in blocks
//b: optional: background: repeating-linear-gradient(0deg, #985f4900 6%, #985f4900 29%, #985f49FF 29%, #985f49FF 36%, #985f4900 36%, #985f4900 40%), linear-gradient(90deg, #985f4900 10%, #985f4900 10%, #985f49FF 10%, #985f49FF 19%, #985f4900 19%, #985f4900 81%, #985f4900 81%, #985f4900 81%, #985f49FF 81%, #985f49FF 90%, #985f4900 90%);
//b: optional: background: repeating-linear-gradient(0deg, #985f4900 6%, #985f4900 23%, #985f49FF 23%, #985f49FF 32%, #985f4900 32%, #985f4900 40%), linear-gradient(90deg, #985f4900 10%, #985f4900 10%, #985f49FF 10%, #985f49FF 19%, #985f4900 19%, #985f4900 81%, #985f4900 81%, #985f4900 81%, #985f49FF 81%, #985f49FF 90%, #985f4900 90%); rotateY(0deg)
//b: optional: background: repeating-linear-gradient(0deg, #985f4900 6%, #985f4900 23%, #985f49FF 23%, #985f49FF 32%, #985f4900 32%, #985f4900 40%), linear-gradient(90deg, #985f4900 0%, #985f4900 0%, #985f49FF 0%, #985f49FF 10%, #985f4900 10%, #985f4900 90%, #985f4900 90%, #985f4900 90%, #985f49FF 90%, #985f49FF 100%, #985f4900 100%) rotateY(45deg)
var basecollision = [["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]] //0: air, 1: block, 2: spikes, 3: teleporter, 4: spawn, 5: end, 6: modair (block), 7: modblock, 8: coin, 9: large coin, 10/'a': modair (ladder), 11/'b': modladder
//nyi: 9+
var level = 0
var cursorpos = [0,0]
var sel = [0,0]
var scale = 1//x
var placing = 0
var blocks = 0
var ladders = 0
var inbounds = [true,true] //isinbounds
var buildmode = true
var spawnends = [0,false]
var entities = []
var entityid = 0
var entityhoverdbg = true
var effectid = 0
var isgameover = false
document.getElementById("playarea").addEventListener("mousedown", (function(e){
clickevent()
}))
document.body.addEventListener("mousemove", (function(e){
cursorpos[0]=e.pageX
cursorpos[1]=e.pageY
//console.log(document.getElementById("playarea").getBoundingClientRect()['x']+"/"+(document.getElementById("playarea").getBoundingClientRect()['x']+(256*scale)))
if (cursorpos[0]>document.getElementById("playarea").getBoundingClientRect()['x'] && (cursorpos[0]<document.getElementById("playarea").getBoundingClientRect()['x']+(256*scale))){
inbounds[0]=true
} else {
inbounds[0]=false
}
if (cursorpos[1]>document.getElementById("playarea").getBoundingClientRect()['y'] && (cursorpos[1]<document.getElementById("playarea").getBoundingClientRect()['y']+(256*scale))){
inbounds[1]=true
} else {
inbounds[1]=false
}
if (buildmode){
document.getElementById("selbox").style.left=(Math.max(-6.25,(Math.min(106.25,((Math.trunc((cursorpos[0]-(document.getElementById("playarea").getBoundingClientRect()['x']-(16*scale)))/(16*scale))-1)*(6.25))))))+"%"
document.getElementById("selbox").style.top=(Math.max(-6.25,(Math.min(106.25,((Math.trunc((cursorpos[1]-(document.getElementById("playarea").getBoundingClientRect()['y']-(16*scale)))/(16*scale))-1)*(6.25))))))+"%"
}
sel[1]=(Math.max(0,(Math.min(15,((Math.trunc((cursorpos[0]-(document.getElementById("playarea").getBoundingClientRect()['x']-(16*scale)))/(16*scale))-1))))))
sel[0]=(Math.max(0,(Math.min(15,((Math.trunc((cursorpos[1]-(document.getElementById("playarea").getBoundingClientRect()['y']-(16*scale)))/(16*scale))-1))))))
document.getElementById("selbox2").style.left=(Math.max(-6.25,(Math.min(106.25,((Math.trunc((cursorpos[0]-(document.getElementById("playarea").getBoundingClientRect()['x']-(16*scale)))/(16*scale))-1)*(6.25))))))+"%"
document.getElementById("selbox2").style.top=(Math.max(-6.25,(Math.min(106.25,((Math.trunc((cursorpos[1]-(document.getElementById("playarea").getBoundingClientRect()['y']-(16*scale)))/(16*scale))-1)*(6.25))))))+"%"
if (inbounds[0]==true && inbounds[1]==true && document.getElementById("selbox").style.opacity==0 && buildmode==true){
document.getElementById("selbox").style.opacity=1
} else if ((inbounds[0]==false || inbounds[1]==false || buildmode==false) && document.getElementById("selbox").style.opacity==1){
document.getElementById("selbox").style.opacity=0
}
if ((buildmode==true || (basecollision[sel[0]][sel[1]]=="6" || basecollision[sel[0]][sel[1]]=="7" || basecollision[sel[0]][sel[1]]=="a" || basecollision[sel[0]][sel[1]]=="b") && inbounds[0]==true && inbounds[1]==true) && document.getElementById("selbox2").style.display=="none"){
document.getElementById("selbox2").style.display="block"
} else if (!(buildmode==true || (basecollision[sel[0]][sel[1]]=="6" || basecollision[sel[0]][sel[1]]=="7" || basecollision[sel[0]][sel[1]]=="a" || basecollision[sel[0]][sel[1]]=="b") && inbounds[0]==true && inbounds[1]==true) && document.getElementById("selbox2").style.display=="block") {
document.getElementById("selbox2").style.display="none"
}
}))
resize()
window.onresize = function(event) {
    resize()
}
function resize(){
    scale = (Math.max(1,(Math.min((Math.trunc(window.innerWidth/260)),(Math.trunc(window.innerHeight/260))))))
    document.getElementById("playarea").parentElement.style.left="calc(50% - "+(130*(Math.max(1,(Math.min((Math.trunc(window.innerWidth/260)),(Math.trunc(window.innerHeight/260)))))))+"px)"
    document.getElementById("playarea").parentElement.style.top="calc(50% - "+(130*(Math.max(1,(Math.min((Math.trunc(window.innerWidth/260)),(Math.trunc(window.innerHeight/260)))))))+"px)"
    document.getElementById("playarea").parentElement.style.width=(256*(Math.max(1,(Math.min((Math.trunc(window.innerWidth/260)),(Math.trunc(window.innerHeight/260)))))))+"px"
    document.getElementById("playarea").parentElement.style.height=(256*(Math.max(1,(Math.min((Math.trunc(window.innerWidth/260)),(Math.trunc(window.innerHeight/260)))))))+"px"
}
function buildlevel(levelcode){
if (levelcode!=undefined){
if (Array.isArray(levelcode) && (levelcode.length()==16 || levelcode.length()==17)){
if (levelcode[0].length==16 && levelcode[1].length==16 && levelcode[2].length==16 && levelcode[3].length==16 && levelcode[4].length==16 && levelcode[5].length==16 && levelcode[6].length==16 && levelcode[7].length==16 && levelcode[8].length==16 && levelcode[9].length==16 && levelcode[10].length==16 && levelcode[11].length==16 && levelcode[12].length==16 && levelcode[13].length==16 && levelcode[14].length==16 && levelcode[15].length==16){
for (var i = 0; i<16; i++){
    for (var e = 0; e<16; e++){
        buildblock([i,e],levelcode[i][e])
    }
}
if (levelcode.length()==17 && levelcode[16].length==2){
blocks=levelcode[16,0]
ladders=levelcode[16,1]
if (blocks==0){
document.getElementById("blockamt").innerHTML="<c style='color: #FF0000'>No blocks left!</c>"
} else {
document.getElementById("blockamt").innerHTML="Blocks: "+blocks
}
if (ladders==0){
document.getElementById("blockamt").innerHTML+=", <c style='color: #FF0000'>No ladders left!</c>"
} else {
document.getElementById("blockamt").innerHTML+=", Ladders: "+ladders
}
document.getElementById('buildstartblocks').innerHTML=blocks
document.getElementById('buildstartladders').innerHTML=ladders
}
} else {
console.error("Error reading levelcode (id: 1).")
}
} else if (typeof levelcode == "string" && levelcode.length==260) {
for (var i = 0; i<256; i++){
buildblock([(Math.trunc(i/16)),i%16],levelcode.substring(i,i+1))
}
for (var i = 0; i<256; i++){
checkblock([(Math.trunc(i/16)),i%16],levelcode.substring(i,i+1))
}
blocks=parseInt(levelcode.substring(256,258))
ladders=parseInt(levelcode.substring(258,260))
if (blocks==0){
document.getElementById("blockamt").innerHTML="<c style='color: #FF0000'>No blocks left!</c>"
} else {
document.getElementById("blockamt").innerHTML="Blocks: "+blocks
}
if (ladders==0){
document.getElementById("blockamt").innerHTML+=", <c style='color: #FF0000'>No ladders left!</c>"
} else {
document.getElementById("blockamt").innerHTML+=", Ladders: "+ladders
}
document.getElementById('buildstartblocks').innerHTML=blocks
document.getElementById('buildstartladders').innerHTML=ladders
} else {
console.error("Error reading levelcode (id: 0).")
}
} else {
console.error("Must provide a level code")
}
}
function buildblock(pos,type){
if (pos[0]>=0 && pos[0]<16 && pos[1]>=0 && pos[1]<16 && pos!=undefined && (type=="0" || type=="1" || type=="2" || type=="3" || type=="4" || type=="5" || type=="6" || type=="7" || type=="8" || type=="9" || type=="a" || type=="b" || type=="c" || type=="d" || type=="e" || type=="f" || type=="g" || type=="h" || type=="i" || type=="j" || type=="k" || type=="l" || type=="m" || type=="n" || type=="o" || type=="p" || type=="q" || type=="r" || type=="s" || type=="t" || type=="u" || type=="v" || type=="w" || type=="x" || type=="y" || type=="z")){
if (type!="0"){
console.debug("attempting to build block type "+type+" at "+pos)
if (basecollision[pos[0]][pos[1]]=="0" && !(type=="4" && spawnends[0]>=3) && !(type=="5" && spawnends[1]==true)){
var a = document.createElement("div")
a.id="blockr"+pos[0]+"c"+pos[1]
a.classList.add("block"+type)
a.classList.add("block")
if (type=="1" || type=="7"){
a.classList.add("collidables")
}
a.style="position: absolute; left: "+(pos[1]*6.25)+"%; top: "+(pos[0]*6.25)+"%; width: 6.25%; height: 6.25%;"
if (type=="a" || type=="b" || type=="c"){
a.innerHTML="<div class='ladderin'></div>"
}
if (type=="6"){
a.classList.add("animempty")
} else if (type=="7"){
a.classList.add("animfill")
} else if (type=="a"){
a.children[0].classList.add("animlessempty")
} else if (type=="b"){
a.children[0].classList.add("animfill")
} else if (type=="c"){
a.children[0].style="filter: grayscale(1) brightness(1.5);"
}
document.getElementById("playarea").append(a)
basecollision[pos[0]][pos[1]]=type
if (type=="4"){
spawnends[0]+=1
console.debug("startends: adding 1 to 0.")
} else if (type=="5"){
spawnends[1]=true
console.debug("startends: setting 1 to true.")
}
} else if (!(type=="4" && spawnends[0]>=3) && !(type=="5" && spawnends[1]==true)){
if (type==basecollision[pos[0]][pos[1]]){
console.debug("same block type ("+basecollision[pos[0]][pos[1]]+") at "+pos+" here")
} else {
console.debug("block type "+basecollision[pos[0]][pos[1]]+" at "+pos+" already exists here! replacing it with block type "+type)
document.getElementById("blockr"+pos[0]+"c"+pos[1]).classList.remove("block"+basecollision[pos[0]][pos[1]])
if (!(basecollision[pos[0]][pos[1]]=="1" || basecollision[pos[0]][pos[1]]=="7" || basecollision[pos[0]][pos[1]]=="b")){
document.getElementById("blockr"+pos[0]+"c"+pos[1]).classList.remove("collidables")
}
document.getElementById("blockr"+pos[0]+"c"+pos[1]).classList.add("block"+type)
if (type=="1" || type=="7" || type=="b"){
document.getElementById("blockr"+pos[0]+"c"+pos[1]).classList.add("collidables")
}
if (basecollision[pos[0]][pos[1]]=="a" || basecollision[pos[0]][pos[1]]=="b" || basecollision[pos[0]][pos[1]]=="c"){
document.getElementById("blockr"+pos[0]+"c"+pos[1]).innerHTML=""
}
if (basecollision[pos[0]][pos[1]]=="6"){
document.getElementById("blockr"+pos[0]+"c"+pos[1]).classList.remove("animempty")
} else if (basecollision[pos[0]][pos[1]]=="7"){
document.getElementById("blockr"+pos[0]+"c"+pos[1]).classList.remove("animfill")
}
if (type=="a" || type=="b" || type=="c"){
document.getElementById("blockr"+pos[0]+"c"+pos[1]).innerHTML="<div class='ladderin'></div>"
}
if (type=="6"){
document.getElementById("blockr"+pos[0]+"c"+pos[1]).classList.add("animempty")
} else if (type=="7"){
document.getElementById("blockr"+pos[0]+"c"+pos[1]).classList.add("animfill")
} else if (type=="a"){
document.getElementById("blockr"+pos[0]+"c"+pos[1]).children[0].classList.add("animlessempty")
} else if (type=="b"){
document.getElementById("blockr"+pos[0]+"c"+pos[1]).children[0].classList.add("animfill")
} else if (type=="c"){
document.getElementById("blockr"+pos[0]+"c"+pos[1]).children[0].style="filter: grayscale(1) brightness(1.5);"
}
if (basecollision[pos[0]][pos[1]]=="4"){
spawnends[0]-=1
console.debug("startends: subtracting 1 to 0.")
} else if (basecollision[pos[0]][pos[1]]=="5"){
spawnends[1]=false
console.debug("startends: setting 1 to false.")
}
basecollision[pos[0]][pos[1]]=type
if (type=="4"){
spawnends[0]+=1
console.debug("startends: adding 1 to 0.")
} else if (type=="5"){
spawnends[1]=true
console.debug("startends: setting 1 to true.")
}
}
} else {
if ((type=="4" && spawnends[0]>=3) || (type=="5" && spawnends[1]==true)){
console.error("Failed to build. It's limit has been reached, and may not be exceeded.")
} else {
console.error("something went really wrong here, please check buildblock function")
}
}
} else {
if (basecollision[pos[0]][pos[1]]!=0){
console.debug("removing block type "+basecollision[pos[0]][pos[1]]+" at "+pos)
document.getElementById("blockr"+pos[0]+"c"+pos[1]).remove()
if (basecollision[pos[0]][pos[1]]=="4"){
spawnends[0]-=1
console.debug("startends: substracting 1 to 0.")
} else if (basecollision[pos[0]][pos[1]]=="5"){
spawnends[1]=false
console.debug("startends: setting 1 to false.")
}
basecollision[pos[0]][pos[1]]="0"
}
}
} else if (!(pos[0]>=0 && pos[0]<16 && pos[1]>=0 && pos[1]<16)){
console.error("position out of bounds")
} else if (pos==undefined) {
console.error("position required")
} else if (!(type=="0" || type=="1" || type=="2" || type=="3" || type=="4" || type=="5" || type=="6" || type=="7" || type=="8" || type=="9" || type=="a" || type=="b" || type=="c" || type=="d" || type=="e" || type=="f" || type=="g" || type=="h" || type=="i" || type=="j" || type=="k" || type=="l" || type=="m" || type=="n" || type=="o" || type=="p" || type=="q" || type=="r" || type=="s" || type=="t" || type=="u" || type=="v" || type=="w" || type=="x" || type=="y" || type=="z")){
console.error("invalid block type")
} else {
console.error("unknown error")
}
}
function changeblock(pos){
if (basecollision[pos[0]][pos[1]]=="6" && blocks>0){
buildblock(pos,"0")
blocks-=1
if (blocks==0){
document.getElementById("blockamt").innerHTML="<c style='color: #FF0000'>No blocks left!</c>"
} else {
document.getElementById("blockamt").innerHTML="Blocks: "+blocks
}
if (ladders==0){
document.getElementById("blockamt").innerHTML+=", <c style='color: #FF0000'>No ladders left!</c>"
} else {
document.getElementById("blockamt").innerHTML+=", Ladders: "+ladders
}
buildblock(pos,"7")
} else if (basecollision[pos[0]][pos[1]]=="7"){
buildblock(pos,"0")
blocks+=1
document.getElementById("blockamt").innerHTML="Blocks: "+blocks
if (ladders==0){
document.getElementById("blockamt").innerHTML+=", <c style='color: #FF0000'>No ladders left!</c>"
} else {
document.getElementById("blockamt").innerHTML+=", Ladders: "+ladders
}
buildblock(pos,"6")
} else if (basecollision[pos[0]][pos[1]]=="a" && ladders>0){
buildblock(pos,"0")
ladders-=1
if (blocks==0){
document.getElementById("blockamt").innerHTML="<c style='color: #FF0000'>No blocks left!</c>"
} else {
document.getElementById("blockamt").innerHTML="Blocks: "+blocks
}
if (ladders==0){
document.getElementById("blockamt").innerHTML+=", <c style='color: #FF0000'>No ladders left!</c>"
} else {
document.getElementById("blockamt").innerHTML+=", Ladders: "+ladders
}
buildblock(pos,"b")
} else if (basecollision[pos[0]][pos[1]]=="b"){
buildblock(pos,"0")
ladders+=1
if (blocks==0){
document.getElementById("blockamt").innerHTML="<c style='color: #FF0000'>No blocks left!</c>"
} else {
document.getElementById("blockamt").innerHTML="Blocks: "+blocks
}
document.getElementById("blockamt").innerHTML+=", Ladders: "+ladders
buildblock(pos,"a")
} else if (!(basecollision[pos[0]][pos[1]]=="6" || basecollision[pos[0]][pos[1]]=="7" || basecollision[pos[0]][pos[1]]=="a" || basecollision[pos[0]][pos[1]]=="b")){
console.error("check type of "+pos[0]+"/"+pos[1])
}
}
function clickevent(){
checkblock([sel[0],sel[1]],basecollision[sel[0]][sel[1]])
if (lastchkpass){
if (buildmode){
buildblock([sel[0],sel[1]],placing)
} else if (basecollision[sel[0]][sel[1]]=="6" || basecollision[sel[0]][sel[1]]=="7" || basecollision[sel[0]][sel[1]]=="a" || basecollision[sel[0]][sel[1]]=="b"){
console.debug("placing at "+[sel[0],sel[1]])
changeblock([sel[0],sel[1]])
}
}
}
function buildmodething(){
buildmode=(buildmode!=true)
if (buildmode==true){
document.getElementById("settings").style.display="block"
document.getElementById("blocksel").style.display="block"
} else {
document.getElementById("settings").style.display="none"
document.getElementById("blocksel").style.display="none"
}
}
function buildrandom(){
var a=""
while (a.length<256){
var b=(Math.trunc(Math.random()*12)).toString()+""
if (b=="10"){
b="a"
} else if (b=="11"){
b="b"
}
if (!(b=="4" && spawnends[0]>=3) && !(b=="5" && spawnends[1]==true)){
a+=b
}
}
buildlevel(a)
}
var lastchkpass = true
function checkblock(pos,type){
if (pos==undefined || type==undefined){
console.error("Both arguments are required for this!")
} else if (pos.length!=2 || !(pos[0]>=0 && pos[0]<16) || !(pos[1]>=0 && pos[1]<16)){
console.error("Invalid position. check if it's an array of length 2 and in bounds (x&y: 0-15)")
} else if (!(type=="0" || type=="1" || type=="2" || type=="3" || type=="4" || type=="5" || type=="6" || type=="7" || type=="8" || type=="9" || type=="a" || type=="b" || type=="c" || type=="d" || type=="e" || type=="f" || type=="g" || type=="h" || type=="i" || type=="j" || type=="k" || type=="l" || type=="m" || type=="n" || type=="o" || type=="p" || type=="q" || type=="r" || type=="s" || type=="t" || type=="u" || type=="v" || type=="w" || type=="x" || type=="y" || type=="z")){
console.error("Invalid type. Valid types are 0-9, a-z.")
} else {
lastchkpass=true
if (document.getElementById("blockr"+pos[0]+"c"+pos[1])!=undefined){
if (!document.getElementById("blockr"+pos[0]+"c"+pos[1]).classList.contains("block"+basecollision[pos[0]][pos[1]])){
console.warn("block check mismatch type 1, resetting "+pos[0]+""+pos[1]);
lastchkpass=false
document.getElementById("blockr"+pos[0]+"c"+pos[1]).remove()
basecollision[pos[0]][pos[1]]=0
} else if (!document.getElementById("blockr"+pos[0]+"c"+pos[1]).classList.contains("block"+type)){
console.warn("block check mismatch type 2, resetting "+pos[0]+""+pos[1]);
lastchkpass=false
document.getElementById("blockr"+pos[0]+"c"+pos[1]).remove()
}
} else if (!(basecollision[pos[0]][pos[1]]=="0")){
console.warn("non-existent block marked as existing ("+basecollision[pos[0]][pos[1]]+"), correcting");
lastchkpass=false
basecollision[pos[0]][pos[1]]="0"
}
}
}
function testlevel(id){
if (id==0){
buildlevel('11111111000000011111110000005001111000000011111110000000111000011000001111130001101111111111111110001111000011111000010000000011100000000000000111111160006111111110010606011011110001006001100110000006060100011040006000600031111111777771111111111122222111110000') //the first level in existence! made when there were only ids 1-7
} else if (id==1){
buildlevel('111111110000000111111100008050011110000080111111100000801110000110008011111398911a111111111111111a001111001100011a000100000110011a0000000009130111111160006111a111100106060110a111000100600100a110000006060000a11044406080600111111111666661111111111122222111110504')
} else if (id==2){
buildlevel('0123456789abcdefghijklmnopqrstuvwxyz00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000')
}
}
function clearlevel(){
buildlevel('00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000')
}
function exportlevel(){
var a = basecollision.toString()
while (a.indexOf(",")!=-1){
a=a.substring(0,(a.indexOf(",")))+a.substring((a.indexOf(","))+1)
}
if (blocks<10){
a+="0"+blocks
} else if (blocks>=10){
a+=blocks
}
if (ladders<10){
a+="0"+ladders
} else if (ladders>=10){
a+=ladders
}
return a
}
function givememylevel(){
if (!document.getElementById("window"))
var a = document.createElement("div")
a.id="window"
a.style="position: absolute; left: calc(50% - 100px); top: calc(50% - 100px); width: 200px; height: 200px; text-align: center; font-family: monospace"
a.innerHTML="Your level is:<br><input value='"+exportlevel()+"'>"
document.body.append(a)
}
function buildmodeblock(id){
placing=id
if (id=="a"){
id=10
}
if (id=="b"){
id=11
}
if (id=="c"){
id=12
}
if (id=="d"){
id=13
}
if (id=="e"){
id=14
}
if (id=="f"){
id=15
}
if (id=="g"){
id=16
}
if (id=="h"){
id=17
}
if (id=="i"){
id=18
}
if (id=="j"){
id=19
}
if (id=="k"){
id=20
}
if (id=="l"){
id=21
}
if (id=="m"){
id=22
}
if (id=="n"){
id=23
}
if (id=="o"){
id=24
}
if (id=="p"){
id=25
}
if (id=="q"){
id=26
}
if (id=="r"){
id=27
}
if (id=="s"){
id=28
}
if (id=="t"){
id=29
}
if (id=="u"){
id=30
}
if (id=="v"){
id=31
}
if (id=="w"){
id=32
}
if (id=="x"){
id=33
}
if (id=="y"){
id=34
}
if (id=="z"){
id=35
}
document.getElementById("selbox3").style.top=((id*20)+4.5)+"%"
}
function moveentity(entityid){
//id, isfacingright, posleft, postop, lastgroundid, jumpmomentum, active, isclimbing
if (entities[entityid][6]==true){
console.log("entity "+entityid+" active!")
var elemid=entities[entityid][0]
var collision = collideblock(elemid,entities[entityid][1])
console.log(collision)
var poschg = [entities[entityid][2],entities[entityid][3]]
if (collision[0]==true){
console.error("entity "+entityid+" died")
gameover(entities[entityid])
}
if (entities[entityid][5]==0){
if (collision[1]==false && collision[2]==false){
console.log("Walking!")
if (entities[entityid][1]==false){
console.log("x pos + 2")
poschg[0]+=2
} else {
console.log("x pos - 2")
poschg[0]-=2
}
} else if (collision[1]==true && collision[2]==false){
console.log("Wall!")
if (entities[entityid][1]==true){
console.log("going right, snap to wall and turn!")
poschg[0]=Math.trunc(entities[entityid][2]/6.25)+1.4
entities[entityid][1]=false
} else {
console.log("going left, snap to wall and turn!")
poschg[0]=Math.trunc(entities[entityid][2]/6.25)
entities[entityid][1]=true
}
} else if (collision[2]==true){
console.log("initiate jump!")
entities[entityid][5]=1
}
} else {
console.log("step "+entities[entityid][5]+" of jumping!")
if (entities[entityid][5]==1){
poschg[0]+=2
poschg[1]+=0
} else if (entities[entityid][5]==2){
poschg[0]+=1.625
poschg[1]+=0.125
} else if (entities[entityid][5]==3){
poschg[0]+=1.3125
poschg[1]+=0.25
} else if (entities[entityid][5]==4){
poschg[0]+=1.0625
poschg[1]+=0.375
} else if (entities[entityid][5]==5){
poschg[0]+=0.75
poschg[1]+=0.5
} else if (entities[entityid][5]==6){
poschg[0]+=0.5
poschg[1]+=0.75
} else if (entities[entityid][5]==7){
poschg[0]+=0.25
poschg[1]+=1
} else if (entities[entityid][5]==8){
poschg[0]+=0
poschg[1]+=1
} else if (entities[entityid][5]==9){
poschg[0]-=0
poschg[1]+=1
} else if (entities[entityid][5]==10){
poschg[0]-=0.0625
poschg[1]+=1
} else if (entities[entityid][5]==11){
poschg[0]-=0.125
poschg[1]+=1
} else if (entities[entityid][5]==12){
poschg[0]-=0.1875
poschg[1]+=1
} else if (entities[entityid][5]==13){
poschg[0]-=0.25
poschg[1]+=1
} else if (entities[entityid][5]==14){
poschg[0]-=0.3
poschg[1]+=1
} else if (entities[entityid][5]==15){
poschg[0]-=0.375
poschg[1]+=1
entities[entityid][5]=-1
}
entities[entityid][5]+=1
}
console.log("position x: "+entities[entityid][2]+"% -> "+poschg[0]+"%!")
entities[entityid][2]=poschg[0]
document.getElementById(elemid).style.left=(entities[entityid][2])+"%"
document.getElementById(elemid).style.top=(entities[entityid][3])+"%"
console.log("End of movement frame!")
} else {
console.log("entity "+entityid+" is inactive ("+entities[entityid][6]+"). No movement!")
}
}
function collideblock(id,dir){
var death = colliding(id,"block2")
var wall = false
var wallj = false
var jump = false
var wallj = false
var collidableselems = document.getElementsByClassName('collidables')
var collcheckelems = [document.getElementById(id+"wallr"),document.getElementById(id+"walljumpr"),document.getElementById(id+"jumpr"),document.getElementById(id+"walll"),document.getElementById(id+"walljumpl"),document.getElementById(id+"jumpl")]
if (dir==true){
wall = colliding(collcheckelems[0],collidableselems)
wallj = colliding(collcheckelems[1],collidableselems)
jump = colliding(collcheckelems[2],collidableselems)
} else {
wall = colliding(collcheckelems[3],collidableselems)
wallj = colliding(collcheckelems[4],collidableselems)
jump = colliding(collcheckelems[5],collidableselems)
}
var groundl = blockchk(id+"groundl","block")
var groundl2 = groundl.indexof("r")
var groundl3 = groundl.substring(groundl2)
groundl2.indexof("c")
groundl = groundl3.substring(0,groundl2)+""+groundl3.substring(groundl2+1)
var groundr = blockchk(id+"groundr","block")
var groundr2 = groundr.indexof("r")
var groundr3 = groundr.substring(groundr2)
groundr2.indexof("c")
groundr = groundr3.substring(0,groundr2)+""+groundr3.substring(groundr2+1)
return [death,(wall || wallj),(jump && wallj),groundl,groundr]
}
var detectOverlap = (function () {
    function getPositions(elem) {
        var pos = elem.getBoundingClientRect();
        return [[pos.left, pos.right], [pos.top, pos.bottom]];
    }

    function comparePositions(p1, p2) {
        var r1, r2;
        if (p1[0] < p2[0]) {
          r1 = p1;
          r2 = p2;
        } else {
          r1 = p2;
          r2 = p1;
        }
        return r1[1] > r2[0] || r1[0] === r2[0];
    }

    return function (a, b) {
        var pos1 = getPositions(a),
            pos2 = getPositions(b);
        return comparePositions(pos1[0], pos2[0]) && comparePositions(pos1[1], pos2[1]);
    };
})();
function colliding(elemid,classid) {
    
    var elem     = elemid,
        elems    = classid,
        elemList = Array.prototype.slice.call(elems),
        within   = elemList.indexOf(elem),
        touching = [];
    if (within !== -1) {
        elemList.splice(within, 1);
    }
    for (var i = 0; i < elemList.length; i++) {
        if (detectOverlap(elem, elemList[i])) {
            touching.push(elemList[i].id);
        }
    }
    if (touching.length) {
        return true
    } else {
        return false
    }
    }
function blockchk(id) {
    
    var elem     = document.getElementById(id),
        elems    = document.querySelectorAll('.blocks'),
        elemList = Array.prototype.slice.call(elems),
        within   = elemList.indexOf(elem),
        touching = [];
    if (within !== -1) {
        elemList.splice(within, 1);
    }
    for (var i = 0; i < elemList.length; i++) {
        if (detectOverlap(elem, elemList[i])) {
            touching.push(elemList[i].id);
        }
    }
    if (touching.length) {
        return touching[0]
    }
    }
function newentity(type,pos){
if (type==0){
var newentity=[[("entity"+entityid),true,((pos[1]*6.25)+0.625),((pos[0]*6.25)+1.25),15,0,false]] //id, isfacingright, posleft, postop, lastgroundrow, jumpmomentum, active
entities.push.apply(entities,newentity)
var thisid = ((entities.length)-1)
entityid+=1
var a = document.createElement("div")
a.id="entity"+thisid
a.classList.add("entity0")
a.style="position: absolute; left: "+newentity[0][2]+"%; top: "+newentity[0][3]+"%; width: 5%; height: 5%; transition: left 0.05s linear;"
a.setAttribute("onmouseover","if(entityhoverdbg==true){this.children[0].style.opacity=1;this.children[1].style.opacity=1;this.children[2].style.opacity=1;this.children[3].style.opacity=1;this.children[4].style.opacity=1;this.children[5].style.opacity=1;this.children[6].style.opacity=1;this.children[7].style.opacity=1;}")
a.setAttribute("onmouseout","if(entityhoverdbg==true || this.children[0].style.opacity==1){this.children[0].style.opacity=0;this.children[1].style.opacity=0;this.children[2].style.opacity=0;this.children[3].style.opacity=0;this.children[4].style.opacity=0;this.children[5].style.opacity=0;this.children[6].style.opacity=0;this.children[7].style.opacity=0;}")
a.innerHTML='<div id="entity'+thisid+'jumpr" class="collision" style="position: absolute;left: 50%;top: -100%;width: 100%;height: 50%;background-color: #0000FF;z-index: 100000;opacity:0;"></div><div id="entity'+thisid+'jumpl" class="collision" style="position: absolute;left: -50%;top: -100%;width: 100%;height: 50%;background-color: #6666FF;z-index: 100000;opacity:0;"></div><div id="entity'+thisid+'wallr" class="collision" style="position: absolute;left: 100%;top: 0%;width: 15%;height: 100%;background-color: #00FF00;z-index: 100000;opacity:0;"></div><div id="entity'+thisid+'jumpwallr" class="collision" style="position: absolute; left: 150%; top: 0%; width: 15%; height: 100%; background-color: rgb(0, 255, 255); z-index: 100000; opacity: 0;"></div><div id="entity'+thisid+'walll" class="collision" style="position: absolute;left: -15%;top: 0%;width: 15%;height: 100%;background-color: #66FF66;z-index: 100000;opacity:0;"></div><div id="entity'+thisid+'jumpwalll" class="collision" style="position: absolute;left: -50%;top: 0%;width: 15%;height: 100%;background-color: rgb(0, 255, 255);z-index: 100000;opacity: 0;"></div><div id="entity'+thisid+'groundl" class="collision" style="position: absolute;left: 0%;bottom: 0%;width: 0%;height: 0%;background-color: #66FF66;z-index: 100000;opacity: 1;"></div><div id="entity'+thisid+'groundr" class="collision" style="position: absolute;right: 0%;bottom: 0%;width: 0%;height: 0%;background-color: #66FF66;z-index: 100000;opacity: 1;"></div>'
document.getElementById("playarea").append(a)
}
}
function runlevel(isstart){
if (isstart){
for (var i = 0; i<16; i++){
    for (var e = 0; e<16; e++){
        if (basecollision[i][e]==4){
            newentity(0,[i,e])
            document.getElementById("blockr"+i+"c"+e).style.opacity=0
        }
    }
}
} else {
if (isgameover==true){
document.getElementById("gameover").remove()
isgameover=false
}
for (var i=0; i<entities.length; i++){
    document.getElementById(entities[i][0]).remove()
    console.log(entities[i][0])
}
for (var i = 0; i<16; i++){
    for (var e = 0; e<16; e++){
        if (basecollision[i][e]==4){
            document.getElementById("blockr"+i+"c"+e).style.opacity=1
        }
    }
}
entities=[]
entityid=0
}
}
function stopplaybutton(){
if (entities.length>0){runlevel(false)}else{runlevel(true)}
}
function collectcoin(pos,type){
if (type=="8"){
buildblock(pos,0)
}
}
function buildmodestart(id){
if (id==0){
if (blocks>0){
blocks-=1
document.getElementById('buildstartblocks').innerHTML=blocks
}
}
if (id==1){
if (blocks<99){
blocks+=1
document.getElementById('buildstartblocks').innerHTML=blocks
}
}
if (id==2){
if (ladders>0){
ladders-=1
document.getElementById('buildstartladders').innerHTML=ladders
}
}
if (id==3){
if (ladders<99){
ladders+=1
document.getElementById('buildstartladders').innerHTML=ladders
}
}
}
function particle(id,pos,args){
/*args:
0: is big
1: text (6 chars supported)
*/
if (id>=0 && id<2){
var a = document.createElement("div")
var aid = "effect"+effectid
a.id=aid
effectid+=1

if (id==0){
a.style="position: absolute; left: "+((pos[1]*6.25)+2.125)+"%; top: "+((pos[0]*6.25)+2.125)+"%; width: 2%;height: 2%;opacity:1;display: inline-block;transform: rotateZ(0deg);transition: left 0.7s ease-out, top 0.7s ease-out, transform 0.7s ease-out, opacity 0.2s ease-out;z-index:1;"
a.classList.add("particle0")
a.innerHTML='<div style="width: 100%;height: 100%;display: inline-block;position: absolute;transform: rotateY(45deg);transform-style: flat;"><div style="width: 100%;height: 100%;display: inline-block;position: absolute;transform: rotateX(45deg);transform-style: flat;"><div style="transform: rotateZ(45deg);transform-style: preserve-3d;background-color: transparent;position: absolute;display: block;width: 100%;height: 100%;"></div></div></div>'
} else if (id==1){
a.style="position: absolute; left: "+((pos[1]*6.25)-1.875)+"%; top: "+((pos[0]*6.25)+0.625)+"%; width: 10%;height: 5%;opacity:1;display: inline-block;transition: left 0.7s linear, top 0.7s linear, transform 0.2s ease-out, opacity 0.2s ease-out;text-align: center;font-family:monospace;z-index:5;font-size:"+(7*scale)+"px;filter:drop-shadow(1px 1px 0px #FFFFFF)"
a.innerHTML=args
}
document.getElementById("playarea").append(a)
var ran = []
if (id==0){
if (args==false){
ran = [(((Math.random()*6.25)+0)),(((Math.random()*6.25)+0))]
ran[0]-=3.125
ran[1]-=3.125
} else {
ran = [(((Math.random()*9.375)+0)),(((Math.random()*9.375)+0))]
ran[0]-=4.6875
ran[1]-=4.6875
}
} else if (id==1){
ran = (((Math.random()*3.125)+9.375))
}
var b = setTimeout(function(){
if (id==0){
document.getElementById(aid).children[0].children[0].children[0].style.backgroundColor="#EEEE22"
document.getElementById(aid).style.left=((pos[1]*6.25)+2.125)+ran[0]+"%"
document.getElementById(aid).style.top=((pos[0]*6.25)+2.125)+ran[1]+"%"
document.getElementById(aid).style.transform="rotateZ("+(360+(Math.trunc(Math.random()*721)))+"deg)"
} else if (id==1){
document.getElementById(aid).style.left=((pos[1]*6.25)-1.875)+"%"
document.getElementById(aid).style.top=((pos[0]*6.25)+0.625)-ran+"%"
}
}, 50)
var c = setTimeout(function(){
document.getElementById(aid).style.opacity=0
}, 550)
var d = setTimeout(function(){
document.getElementById(aid).remove()
}, 750)
}
}
testlevel(1)
function blockeffect(pos,id){
if (id=="8"){
particle(1,pos,'100')
particle(0,pos,false)
particle(0,pos,false)
particle(0,pos,false)
particle(0,pos,false)
particle(0,pos,false)
} else if (id=="9"){
particle(1,pos,'1000')
particle(0,pos,true)
particle(0,pos,true)
particle(0,pos,true)
particle(0,pos,true)
particle(0,pos,true)
particle(0,pos,true)
particle(0,pos,true)
particle(0,pos,true)
particle(0,pos,true)
particle(0,pos,true)
}
}
function gameover(entity){
isgameover=true
var a = document.createElement("div")
a.id="gameover"
a.style="position: absolute;left: "+(entity[2]+2.5)+"%;top: "+(entity[3]+2.5)+"%;width: 200%;height: 200%;%;pointer-events: none;display: block;z-index: 99999;background: radial-gradient(#00000000 0%, #00000000 calc(2.5%), #000000FF calc(2.5% + "+(scale*10)+"px));opacity: 0.5;transform: scale(1) translate(-50%, -50%);animation: gameoverfade 0.5s ease-out;transform-origin: 0% 0%;"
document.getElementById("playarea").append(a)
}
function