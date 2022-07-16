
var count = 0;
var btn = document.getElementById("emo");
var disp = document.getElementById("display");
var star = document.getElementById("button1");


btn.onclick = function () {
    var x = Math.floor(Math.random()*500);
    var y = Math.floor(Math.random()*900);
    btn.style.top = x + 'px';
    btn.style.left = y + 'px';
    count++;
    disp.innerHTML = count;
    
}

star.onclick = function (){
    count = 0;
    disp.innerHTML = count;
    
}

