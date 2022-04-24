document.body.innerHTML+='<canvas contentEditable="false" id="can" style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; z-index:65534;background-color: transparent; position:absolute; top:0px;left:0px;width:100%;height:100%;"></canvas>  <a contentEditable="false" id="expandedit" style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; pointer-events: none; z-index:65535; background-color: #FFFFFF;position:fixed;top:0px;left:0px;width: 80px;height:20px;">&nbspEdit+</a>  <button contentEditable="false" id="drawtoggl" onclick="drawtoggle()" style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; background-color:#C80000;z-index:65535;position:fixed;top: 0px; width: 20px;height: 20px;padding: 0px 0px 0px 0px;left: 40px; border-color:#CCCCCC"></button>  <button contentEditable="false" id="texttoggl" onclick="texttoggle()" style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; background-color:#C80000;z-index:65535;position:fixed;top: 0px; width: 20px;height: 20px;padding: 0px 0px 0px 0px;left: 60px; border-color:#CCCCCC"></button>  <a contentEditable="false" id="drawicon" style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; pointer-events: none; z-index:65536; position:fixed;top: -2px;left: 42px;">✎</a>  <a contentEditable="false" id="texticon" style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; pointer-events: none; z-index:65536; position:fixed;top: -2px;left: 65px; font-size: 19px;">T</a>  <sub id="others" style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; display:none;">    <button contentEditable="false" id="colortoggl" onclick="colortoggle()" style="background-color:#00C800;z-index:65535;position:fixed;top: 0px; width: 63px;height: 20px;padding: 0px 0px 0px 0px;left: 105px; border-color:#CCCCCC"><a id="modetype" style="pointer-events: none; z-index:65536; position:fixed;top: 2px;left: 113px;"></a></button>      </sub>    <sub contentEditable="false" id="recolor" style="display: none;">    <button onclick="switchleft()" id="switchleft" style="z-index: 65535; position:fixed;top: 20px;left: 0px; background-color: #C8C8C8; border-style: inlet; width: 10px; height: 20px; padding: 0px 0px 0px 0px"><</button>    <button onclick="sub10()" id="firstonesub" style="z-index: 65535; position:fixed;top: 20px;left: 10px; background-color: #C8C8C8; border-style: inlet; width: 20px; height: 10px; padding: 0px 0px 0px 0px; text-align: center"><a style="position: fixed; left: 14px; top: 16px;">- -</a></button>    <button onclick="sub1()" id="firsttensub" style="z-index: 65535; position:fixed;top: 30px;left: 10px; background-color: #C8C8C8; border-style: inlet; width: 20px; height: 10px; padding: 0px 0px 0px 0px; text-align: center"><a style="position: fixed; left: 18px; top: 26px;">-</a></button>    <a style="z-index: 65535; position:fixed;top: 20px;left: 30px; background-color: #FFFFFF; border-style: outlet; width: 22px; height: 20px; font-size: 20px; text-align: center;"><a id="hexfirst" style="z-index: 65535; position:fixed;top: 20px; left: 30px; width: 11px; height: 20px; font-size: 20px; text-align: center;">0</a><a id="hexsecond" style="z-index: 65535; position:fixed;top: 20px; left: 40px; width: 11px; height: 20px; font-size: 20px; text-align: center;">0</a></a>    <button onclick="add10()" id="firstoneadd" style="z-index: 65535; position:fixed;top: 20px;left: 52px; background-color: #C8C8C8; border-style: inlet; width: 20px; height: 10px;"><a style="position: fixed; left: 54px; top: 16px;">++</a></button>    <button onclick="add1()" id="firsttenadd" style="z-index: 65535; position:fixed;top: 30px;left: 52px; background-color: #C8C8C8; border-style: inlet; width: 20px; height: 10px;"><a style="position: fixed; left: 58px; top: 26px;">+</a></button>    <button onclick="switchright()" id="switchright" style="z-index: 65535; position:fixed;top: 20px;left: 72px; background-color: #C8C8C8; border-style: inlet; width: 10px; height: 20px; padding: 0px 0px 0px 0px">></button><a style="z-index: 65535; position:fixed;top: 20px;left: 82px; background-color: #FFFFFF; border-style: outlet; width: 12px; height: 20px; font-size: 20px; text-align: center;">#</a><div id="erase" style="z-index: 65535; position:fixed;top: 20px;left: 94px; background-color: #FFFFFF; border-style: none; max-width: 90px; height: 20px; font-size: 20px; text-align: left;"><a style="position: relative; left: 0px; color: #AAAA00;" id="hextwo">00</a><a style="position: relative; left: 0px;" id="hexfour">00</a><a style="position: relative; left: -0px;" id="hexsix">00</a></div></sub>  <img contentEditable="false" id="canvasimg" style="position:absolute;top:0px;left:0px;width:100%;length:100%;display:none;">';
 var canvas, ctx, flag = false, prevX = 0, currX = 0, prevY = 0, currY = 0, dot_flag = false
 var x = "black", y = 2
 	document.getElementById("switchleft").disabled=true
  var isdrawing=0
  var iscoloring=1
  var istyping=0
	var switchno=0
  var firsttwo=0
  var secondtwo=0
  var lasttwo=0
  var firstenter=0
  var secondenter=0
  var firsta=0
  var seconda=0
  var firstb=0
  var secondb=0
  var firstc=0
  var secondc=0
  var hex1a=0
  var hex1b=0
  var hex2a=0
  var hex2b=0
  var hex3a=0
  var hex3b=0
  function init() {
    canvas = document.getElementById('can');
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
    w = canvas.width;
    h = canvas.height;
    canvas.addEventListener("mousemove", function(e) {
      findxy('move', e);
    }, false);
    canvas.addEventListener("mousedown", function(e) {
      findxy('down', e);
    }, false);
    canvas.addEventListener("mouseup", function(e) {
      findxy('up', e);
    }, false);
    canvas.addEventListener("mouseout", function(e) {
      findxy('out', e);
    }, false);
  }
  function color() {
  	x = "#"+hex1b+""+hex1a+""+hex2b+""+hex2a+""+hex3b+""+hex3a;
    if (x == "#FFFFFF") y = 14;
    else y = 2;
  }
  function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
  }
  function findxy(res, e) {
    if (isdrawing == 1) {
      if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;
        flag = true;
        dot_flag = true;
        if (dot_flag) {;
          ctx.beginPath();
          ctx.fillStyle = x;
          ctx.fillRect(currX, currY, 2, 2);
          ctx.closePath();
          dot_flag = false;
        }
      }
      if (res == 'up' || res == "out") {
        flag = false;
      }
      if (res == 'move') {
        if (flag) {
          prevX = currX;
          prevY = currY;
          currX = e.clientX - canvas.offsetLeft;
          currY = e.clientY - canvas.offsetTop;
          draw();
        }
      }
    }
  }
  hexcolor = setInterval(function(){
  x = "#"+hex1b+""+hex1a+""+hex2b+""+hex2a+""+hex3b+""+hex3a;
  if (switchno==0){
  if (firsta<=9){
  document.getElementById("hexsecond").innerText=firsta;
  } else if (firsta==10){
  document.getElementById("hexsecond").innerText="A";
  } else if (firsta==11){
  document.getElementById("hexsecond").innerText="B";
  } else if (firsta==12){
  document.getElementById("hexsecond").innerText="C";
  } else if (firsta==13){
  document.getElementById("hexsecond").innerText="D";
  } else if (firsta==14){
  document.getElementById("hexsecond").innerText="E";
  } else if (firsta==15){
  document.getElementById("hexsecond").innerText="F";
  }
  if (seconda<=9){
  document.getElementById("hexfirst").innerText=seconda;
  } else if (seconda==10){
  document.getElementById("hexfirst").innerText="A";
  } else if (seconda==11){
  document.getElementById("hexfirst").innerText="B";
  } else if (seconda==12){
  document.getElementById("hexfirst").innerText="C";
  } else if (seconda==13){
  document.getElementById("hexfirst").innerText="D";
  } else if (seconda==14){
  document.getElementById("hexfirst").innerText="E";
  } else if (seconda==15){
  document.getElementById("hexfirst").innerText="F";
  }
  } else if (switchno==1){
  if (firstb<=9){
  document.getElementById("hexsecond").innerText=firstb;
  } else if (firstb==10){
  document.getElementById("hexsecond").innerText="A";
  } else if (firstb==11){
  document.getElementById("hexsecond").innerText="B";
  } else if (firstb==12){
  document.getElementById("hexsecond").innerText="C";
  } else if (firstb==13){
  document.getElementById("hexsecond").innerText="D";
  } else if (firstb==14){
  document.getElementById("hexsecond").innerText="E";
  } else if (firstb==15){
  document.getElementById("hexsecond").innerText="F";
  }
  if (secondb<=9){
  document.getElementById("hexfirst").innerText=secondb;
  } else if (secondb==10){
  document.getElementById("hexfirst").innerText="A";
  } else if (secondb==11){
  document.getElementById("hexfirst").innerText="B";
  } else if (secondb==12){
  document.getElementById("hexfirst").innerText="C";
  } else if (secondb==13){
  document.getElementById("hexfirst").innerText="D";
  } else if (secondb==14){
  document.getElementById("hexfirst").innerText="E";
  } else if (secondb==15){
  document.getElementById("hexfirst").innerText="F";
  }
  } else if (switchno==2){
  if (firstc<=9){
  document.getElementById("hexsecond").innerText=firstc;
  } else if (firstc==10){
  document.getElementById("hexsecond").innerText="A";
  } else if (firstc==11){
  document.getElementById("hexsecond").innerText="B";
  } else if (firstc==12){
  document.getElementById("hexsecond").innerText="C";
  } else if (firstc==13){
  document.getElementById("hexsecond").innerText="D";
  } else if (firstc==14){
  document.getElementById("hexsecond").innerText="E";
  } else if (firstc==15){
  document.getElementById("hexsecond").innerText="F";
  }
  if (secondc<=9){
  document.getElementById("hexfirst").innerText=secondc;
  } else if (secondc==10){
  document.getElementById("hexfirst").innerText="A";
  } else if (secondc==11){
  document.getElementById("hexfirst").innerText="B";
  } else if (secondc==12){
  document.getElementById("hexfirst").innerText="C";
  } else if (secondc==13){
  document.getElementById("hexfirst").innerText="D";
  } else if (secondc==14){
  document.getElementById("hexfirst").innerText="E";
  } else if (secondc==15){
  document.getElementById("hexfirst").innerText="F";
  }
  }
  if (switchno==0){
  if (seconda == 0){
  hex1b="0";
  } else if (seconda == 1){
  hex1b="1";
  } else if (seconda == 2){
  hex1b="2";
  } else if (seconda == 3){
  hex1b="3";
  } else if (seconda == 4){
  hex1b="4";
  } else if (seconda == 5){
  hex1b="5";
  } else if (seconda == 6){
  hex1b="6";
  } else if (seconda == 7){
  hex1b="7";
  } else if (seconda == 8){
  hex1b="8";
  } else if (seconda == 9){
  hex1b="9";
  } else if (seconda == 10){
  hex1b="A";
  } else if (seconda == 11){
  hex1b="B";
  } else if (seconda == 12){
  hex1b="C";
  } else if (seconda == 13){
  hex1b="D";
  } else if (seconda == 14){
  hex1b="E";
  } else if (seconda == 15){
  hex1b="F";
  }
  if (firsta == 0){
  hex1a="0";
  } else if (firsta == 1){
  hex1a="1";
  } else if (firsta == 2){
  hex1a="2";
  } else if (firsta == 3){
  hex1a="3";
  } else if (firsta == 4){
  hex1a="4";
  } else if (firsta == 5){
  hex1a="5";
  } else if (firsta == 6){
  hex1a="6";
  } else if (firsta == 7){
  hex1a="7";
  } else if (firsta == 8){
  hex1a="8";
  } else if (firsta == 9){
  hex1a="9";
  } else if (firsta == 10){
  hex1a="A";
  } else if (firsta == 11){
  hex1a="B";
  } else if (firsta == 12){
  hex1a="C";
  } else if (firsta == 13){
  hex1a="D";
  } else if (firsta == 14){
  hex1a="E";
  } else if (firsta == 15){
  hex1a="F";
  }
  document.getElementById("hextwo").innerText=hex1b+""+hex1a;
  } else if (switchno==1){
  if (secondb == 0){
  hex2b="0";
  } else if (secondb == 1){
  hex2b="1";
  } else if (secondb == 2){
  hex2b="2";
  } else if (secondb == 3){
  hex2b="3";
  } else if (secondb == 4){
  hex2b="4";
  } else if (secondb == 5){
  hex2b="5";
  } else if (secondb == 6){
  hex2b="6";
  } else if (secondb == 7){
  hex2b="7";
  } else if (secondb == 8){
  hex2b="8";
  } else if (secondb == 9){
  hex2b="9";
  } else if (secondb == 10){
  hex2b="A";
  } else if (secondb == 11){
  hex2b="B";
  } else if (secondb == 12){
  hex2b="C";
  } else if (secondb == 13){
  hex2b="D";
  } else if (secondb == 14){
  hex2b="E";
  } else if (secondb == 15){
  hex2b="F";
  }
  if (firstb == 0){
  hex2a="0";
  } else if (firstb == 1){
  hex2a="1";
  } else if (firstb == 2){
  hex2a="2";
  } else if (firstb == 3){
  hex2a="3";
  } else if (firstb == 4){
  hex2a="4";
  } else if (firstb == 5){
  hex2a="5";
  } else if (firstb == 6){
  hex2a="6";
  } else if (firstb == 7){
  hex2a="7";
  } else if (firstb == 8){
  hex2a="8";
  } else if (firstb == 9){
  hex2a="9";
  } else if (firstb == 10){
  hex2a="A";
  } else if (firstb == 11){
  hex2a="B";
  } else if (firstb == 12){
  hex2a="C";
  } else if (firstb == 13){
  hex2a="D";
  } else if (firstb == 14){
  hex2a="E";
  } else if (firstb == 15){
  hex2a="F";
  }
  document.getElementById("hexfour").innerText=hex2b+""+hex2a;
  } else if (switchno==2){
  if (secondc == 0){
  hex3b="0";
  } else if (secondc == 1){
  hex3b="1";
  } else if (secondc == 2){
  hex3b="2";
  } else if (secondc == 3){
  hex3b="3";
  } else if (secondc == 4){
  hex3b="4";
  } else if (secondc == 5){
  hex3b="5";
  } else if (secondc == 6){
  hex3b="6";
  } else if (secondc == 7){
  hex3b="7";
  } else if (secondc == 8){
  hex3b="8";
  } else if (secondc == 9){
  hex3b="9";
  } else if (secondc == 10){
  hex3b="A";
  } else if (secondc == 11){
  hex3b="B";
  } else if (secondc == 12){
  hex3b="C";
  } else if (secondc == 13){
  hex3b="D";
  } else if (secondc == 14){
  hex3b="E";
  } else if (secondc == 15){
  hex3b="F";
  }
  if (firstc == 0){
  hex3a="0";
  } else if (firstc == 1){
  hex3a="1";
  } else if (firstc == 2){
  hex3a="2";
  } else if (firstc == 3){
  hex3a="3";
  } else if (firstc == 4){
  hex3a="4";
  } else if (firstc == 5){
  hex3a="5";
  } else if (firstc == 6){
  hex3a="6";
  } else if (firstc == 7){
  hex3a="7";
  } else if (firstc == 8){
  hex3a="8";
  } else if (firstc == 9){
  hex3a="9";
  } else if (firstc == 10){
  hex3a="A";
  } else if (firstc == 11){
  hex3a="B";
  } else if (firstc == 12){
  hex3a="C";
  } else if (firstc == 13){
  hex3a="D";
  } else if (firstc == 14){
  hex3a="E";
  } else if (firstc == 15){
  hex3a="F";
  }
  document.getElementById("hexsix").innerText=hex3b+""+hex3a;
  }
  }, 10);
  function drawtoggle() {
    if (isdrawing == 0) {
      isdrawing = 1;
      document.getElementById("texttoggl").style="display:none;";
      document.getElementById("texticon").style="display:none;";
      document.getElementById("expandedit").innerHTML = "&nbspEdit+ --- Mode:";
      document.getElementById("expandedit").style = "border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; pointer-events: none; z-index:65535; background-color: #FFFFFF;position:fixed;top:0px;left:0px;width: 107px;height:20px;";
      if (iscoloring == 0) {
        document.getElementById("modetype").innerText = "ERASE";
        document.getElementById("recolor").style = "display: none;";
      } else if (iscoloring == 1) {
        document.getElementById("modetype").innerText = "COLOR";
        document.getElementById("recolor").style = "border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; ";
      }
      document.getElementById("others").style = "border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset;";
      document.getElementById("drawtoggl").style = "border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; background-color:#00C800; z-index:65535;position:fixed;top: 0px; width: 20px;height: 20px;padding: 0px 0px 0px 0px;left: 40px; border-color:#CCCCCC";
    } else if (isdrawing == 1) {
      isdrawing = 0;
      document.getElementById("texttoggl").style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; background-color:#C80000;z-index:65535;position:fixed;top: 0px; width: 20px;height: 20px;padding: 0px 0px 0px 0px;left: 60px; border-color:#CCCCCC";
      document.getElementById("texticon").style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; pointer-events: none; z-index:65536; position:fixed;top: -2px;left: 65px; font-size: 19px;";
      document.getElementById("recolor").style = "display: none;";
      document.getElementById("expandedit").style = "border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; pointer-events: none; z-index:65535; background-color: #FFFFFF;position:fixed;top:0px;left:0px;width: 80px;height:20px;";
      document.getElementById("expandedit").innerHTML = "&nbspEdit+";
      document.getElementById("others").style = "display:none;";
      document.getElementById("modetype").innerText = "";
      document.getElementById("drawtoggl").style = "border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; background-color:#C80000; z-index:65535;position:fixed;top: 0px; width: 20px;height: 20px;padding: 0px 0px 0px 0px;left: 40px; border-color:#CCCCCC";
    }
  }
  function colortoggle() {
    if (iscoloring == 1) {
      iscoloring = 0;
      document.getElementById("colortoggl").style = "border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; background-color:#C80000;z-index:65535;position:fixed;top: 0px; width: 63px;height: 20px;padding: 0px 0px 0px 0px;left: 105px; border-color:#CCCCCC";
      document.getElementById("modetype").innerText = "ERASE";
      document.getElementById("modetype").style = "border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; pointer-events: none; z-index:65536; position:fixed;top: 2px;left: 114px;";
      document.getElementById("recolor").style = "display: none;";
    } else if (iscoloring == 0) {
      iscoloring = 1;
      document.getElementById("colortoggl").style = "border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; background-color:#00C800;z-index:65535;position:fixed;top: 0px; width: 63px;height: 20px;padding: 0px 0px 0px 0px;left: 105px; border-color:#CCCCCC";
      document.getElementById("modetype").innerText = "COLOR";
      document.getElementById("modetype").style = "border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; pointer-events: none; z-index:65536; position:fixed;top: 2px;left: 113px;";
      document.getElementById("recolor").style = "border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset;";
    }
  }
function switchleft(){
if (switchno==2){
switchno=1;
document.getElementById("hextwo").style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; position: relative; left: -0px; ";
document.getElementById("hexfour").style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; position: relative; left: -0px; color: #AAAA00;";
document.getElementById("hexsix").style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; position: relative; left: -0px; ";
document.getElementById("switchright").disabled=false;
document.getElementById("switchleft").disabled=false;
} else if (switchno==1){
switchno=0;
document.getElementById("hextwo").style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; position: relative; left: -0px; color: #AAAA00;";
document.getElementById("hexfour").style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; position: relative; left: -0px; ";
document.getElementById("hexsix").style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; position: relative; left: -0px; ";
document.getElementById("switchright").disabled=false;
document.getElementById("switchleft").disabled=true;
}
}
function switchright(){
if (switchno==0){
switchno=1;
document.getElementById("hextwo").style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; position: relative; left: -0px; ";
document.getElementById("hexfour").style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; position: relative; left: -0px; color: #AAAA00;";
document.getElementById("hexsix").style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; position: relative; left: -0px; ";
document.getElementById("switchright").disabled=false;
document.getElementById("switchleft").disabled=false;
} else if (switchno==1){
switchno=2;
document.getElementById("hextwo").style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; position: relative; left: -0px; ";
document.getElementById("hexfour").style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; position: relative; left: -0px; ";
document.getElementById("hexsix").style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; position: relative; left: -0px; color: #AAAA00;";
document.getElementById("switchright").disabled=true;
document.getElementById("switchleft").disabled=false;
}
}
function add1(){
if (switchno==0){
if (firsta==15){
if (seconda!=15){
firsta=0;
seconda=seconda+1;
}
} else {
firsta=firsta+1;
}
} else if (switchno==1){
if (firstb==15){
if (secondb!=15){
firstb=0;
secondb=secondb+1;
}
} else {
firstb=firstb+1;
}
} else if (switchno==2){
if (firstc==15){
if (secondc!=15){
firstc=0;
secondc=secondc+1;
}
} else {
firstc=firstc+1;
}
}
}
function sub1(){
if (switchno==0){
if (firsta==0){
if (seconda!=0){
firsta=15;
seconda=seconda-1;
}
} else {
firsta=firsta-1;
}
} else if (switchno==1){
if (firstb==0){
if (secondb!=0){
firstb=15;
secondb=secondb-1;
}
} else {
firstb=firstb-1;
}
} else if (switchno==2){
if (firstc==0){
if (secondc!=0){
firstc=15;
secondc=secondc-1;
}
} else {
firstc=firstc-1;
}
}
}
function add10(){
if (switchno==0){
if (seconda!=15){
seconda=seconda+1;
} else {
firsta=15;
}
} else if (switchno==1){
if (secondb!=15){
secondb=secondb+1;
} else {
firstb=15;
}
} else if (switchno==2){
if (secondc!=15){
secondc=secondc+1;
} else {
firstc=15;
}
}
}
function sub10(){
if (switchno==0){
if (seconda!=0){
seconda=seconda-1;
} else {
firsta=0;
}
} else if (switchno==1){
if (secondb!=0){
secondb=secondb-1;
} else {
firstb=0;
}
} else if (switchno==2){
if (secondc!=0){
secondc=secondc-1;
} else {
firstc=0;
}
}
}
function texttoggle(){
if (istyping==0){
istyping=1;
document.body.contentEditable="true";
document.getElementById("drawtoggl").style = "display:none;";
document.getElementById("drawicon").style="display: none;";
document.getElementById("texttoggl").style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; background-color:#00C800;z-index:65535;position:fixed;top: 0px; width: 20px;height: 20px;padding: 0px 0px 0px 0px;left: 60px; border-color:#CCCCCC";
document.getElementById("texticon").style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; pointer-events: none; z-index:65536; position:fixed;top: -2px;left: 65px; font-size: 19px;";
} else {
istyping=0;
document.body.contentEditable="false";
document.getElementById("drawtoggl").style = "border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; background-color:#C80000; z-index:65535;position:fixed;top: 0px; width: 20px;height: 20px;padding: 0px 0px 0px 0px;left: 40px; border-color:#CCCCCC";
document.getElementById("drawicon").style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; pointer-events: none; z-index:65536; position:fixed;top: -2px;left: 42px;";
document.getElementById("texttoggl").style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; background-color:#C80000;z-index:65535;position:fixed;top: 0px; width: 20px;height: 20px;padding: 0px 0px 0px 0px;left: 60px; border-color:#CCCCCC";
document.getElementById("texticon").style="border-radius: 0em; font-family: initial; margin: unset; margin-inline: unset; margin-block: unset; pointer-events: none; z-index:65536; position:fixed;top: -2px;left: 65px; font-size: 19px;";
}
}
init();
