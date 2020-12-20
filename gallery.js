var pidge = document.getElementById('circle-pidge')
var pidge1 = document.getElementById('circle-pidge1')
var menu = document.getElementById('menu')
var skills = document.getElementById('skills')
var lore = document.getElementById('lore')
var more = document.getElementById('more')
var pidgik = document.getElementById('pidgik')
var seconds = 400 
var item = document.getElementById('item')
var timeitem = 0
var rune = document.getElementById('rune')
var shopseconds = 2000
var runeloc = 1200
var runeloce = 1200
var runeleft = 859
var runeright = 1066
var score = document.getElementById('score')
var scorecheck = 0
var die = new Audio("die.mpeg")
var dvskills = document.getElementById('divskills')
var dvlore = document.getElementById('divlore')
var dvmore = document.getElementById('divmore')
var gifhook = document.getElementById('gifhook')
var gifrot = document.getElementById('gifrot')
var gifflesh = document.getElementById('gifflesh')
var gifdismember = document.getElementById('gifdismember')
var imghook = document.getElementById('img-hook')
var imgrot = document.getElementById('img-rot')
var imgflesh = document.getElementById('img-flesh')
var imgdismember = document.getElementById('img-dismember')
var texthook = document.getElementById('texthook')
var textrot = document.getElementById('textrot')
var textflesh = document.getElementById('textflesh')
var textdismember = document.getElementById('textdismember')
var link = document.getElementById('link')
var link1 = document.getElementById('link1')
var link2 = document.getElementById('link2')
var style1 = window.getComputedStyle(menu, null);
var timepick = 0
var dvlore = document.getElementById('divlore')
var vid = document.getElementById("video");
var dopinf = document.getElementById("dopinf")
var next = document.getElementById("nextstrelka")
var before = document.getElementById("beforestrelka")
var whichtext = 1
var textone = document.getElementById("aboutvoice")
var textsecond = document.getElementById("aboutdendi")
var textthird = document.getElementById("aboutdh")
var textforth = document.getElementById("aboutpudges")
var textfifth = document.getElementById("aboutpopular")

pidge1.onclick = function() {
    skills.style.display = 'block';
    lore.style.display = 'block';
    more.style.display = 'block';
/*  link.style.zIndex = '3'
    link1.style.zIndex = '3'
    link2.style.zIndex = '3'*/
    let start = Date.now();
    menu.style.display = 'block';
    let timer = setInterval(function() {
      let timePassed = Date.now() - start;
        menu.style.opacity = timePassed / seconds;
		pidge.style.display = 'block';
        pidge1.style.display = 'none';
      if (timePassed > seconds) clearInterval(timer);
    }, 20);
}
pidge.onclick = function() {
/*  lore.style.display = 'none'
    more.style.display = 'none'
    skills.style.display = 'none'*/
/*  link.style.zIndex = '1'
    link1.style.zIndex = '1'
    link2.style.zIndex = '1'*/
    let start = Date.now();
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        console.log(1 - timePassed / seconds)
        menu.style.opacity = 1 - timePassed / seconds;
        pidge.style.display = 'none';
        pidge1.style.display = 'block';
        timepick = 1 - timePassed / seconds;
        if (timepick == -0.0024999999999999467){
            menu.style.display = 'none';
            lore.style.display = 'none';
            more.style.display = 'none';
            skills.style.display = 'none';
        }
        else if (timepick == -0.004999999999999893){
            menu.style.display = 'none';
            lore.style.display = 'none';
            more.style.display = 'none';
            skills.style.display = 'none';
            lore.style.zIndex = '-1';
            more.style.zIndex = '-1';
            skills.style.zIndex = '-1';
        }
      if (timePassed > seconds) clearInterval(timer);
    }, 20);
}
function random(phrases) {
	return phrases[getRandomInt(0, phrases.length - 1)];
}

var style = window.getComputedStyle(pidgik, null);
if (style.getPropertyValue('display') == 'none'){
    item.style.display = 'none'
    rune.style.display = 'none'
    score.style.display = 'none'
}

var phrase = ["ph1.mpeg", "ph2.mpeg", "ph3.mpeg", "ph4.mpeg"]
var shopping = ["s1.mpeg", "s2.mpeg", "s3.mpeg", "s4.mpeg"]
var items = ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg", "p5.jpg", "p6.jpg", "p7.jpg"]
document.addEventListener("keydown", function(event)
{

    if((event.code=='Space') && (style.getPropertyValue('display') == 'block'))
{
    var theph = (Math.floor(Math.random() * phrase.length));
    ph = new Audio(phrase[theph]);
    pidgik.src = "pidgik.png"
    pidgik.style.width = '700'
    pidgik.style.height = '550'
    pidgik.style.top = '210'
    item.style.display = 'none'
    ph.play();
}
}
)
var fs = new Audio("fs3.mpeg")
var fs1 = new Audio("fs1.mpeg")
var x = 400

document.addEventListener("keydown", function(event)
{

    if((event.code=='ArrowDown') && (style.getPropertyValue('display') == 'block'))
{
    pidgik.src = "pidgik.png"
    pidgik.style.width = '700'
    pidgik.style.height = '550'
    pidgik.style.top = '210'
    item.style.display = 'none'
    fs.play();
}
}
)

document.addEventListener("keydown", function(event)
{

    if((event.code=='ArrowLeft') && (style.getPropertyValue('display') == 'block'))
{
    pidgik.src = "pidgikleft.png"
    pidgik.style.width = '600'
    pidgik.style.height = '450'
    pidgik.style.top = '300'
    item.style.display = 'none'
    pidgik.style.left = x - 1;
    x = x - 1;
    if (x == runeloce - 341){
        runeloc = (Math.floor(Math.random() * 1250));
        rune.style.left = runeloc;
        runeloce = runeloc; 
        scorecheck = scorecheck + 1;
        die.play();
        score.innerHTML="SCORE:"+" "+scorecheck;
    }
    pidgik.style.left = x - 1;
    x = x - 1;
    if (x == runeloce -341){
        runeloc = (Math.floor(Math.random() * 1250));
        rune.style.left = runeloc;
        runeloce = runeloc; 
        scorecheck = scorecheck + 1;
        die.play();
        score.innerHTML="SCORE:"+" "+scorecheck;
    }
    pidgik.style.left = x - 1;
    x = x - 1;
    if (x == runeloce -341 ){
        runeloc = (Math.floor(Math.random() * 1250));
        rune.style.left = runeloc;
        runeloce = runeloc; 
        scorecheck = scorecheck + 1;
        die.play();
        score.innerHTML="SCORE:"+" "+scorecheck;
    }
    pidgik.style.left = x - 1;
    x = x - 1;
    if (x == runeloce -341){
        runeloc = (Math.floor(Math.random() * 1250));
        rune.style.left = runeloc;
        runeloce = runeloc; 
        scorecheck = scorecheck + 1;
        die.play();
        score.innerHTML="SCORE:"+" "+scorecheck;
    }
    pidgik.style.left = x - 1;
    x = x - 1;
    if (x == runeloce - 341){
        runeloc = (Math.floor(Math.random() * 1250));
        rune.style.left = runeloc;
        runeloce = runeloc;
        scorecheck = scorecheck + 1;
        die.play();
        score.innerHTML="SCORE:"+" "+scorecheck;
    }
    pidgik.style.left = x - 1;
    x = x - 1;
    if (x == runeloce - 341){
        runeloc = (Math.floor(Math.random() * 1250));
        rune.style.left = runeloc;
        runeloce = runeloc; 
        scorecheck = scorecheck + 1;
        die.play();
        score.innerHTML="SCORE:"+" "+scorecheck;
    }
    fs.play();
}
}
)

document.addEventListener("keydown", function(event)
{

    if((event.code=='ArrowRight') && (style.getPropertyValue('display') == 'block'))
{
    pidgik.src = "pidgikright.png"
    pidgik.style.width = '600'
    pidgik.style.height = '450'
    pidgik.style.top = '300'
    item.style.display = 'none'
    pidgik.style.left = x + 1;
    x = x + 1;
    if (x == runeloce - 143){
        runeloc = (Math.floor(Math.random() * 1250));
        rune.style.left = runeloc;
        runeloce = runeloc; 
        scorecheck = scorecheck + 1;
        die.play();
        score.innerHTML="SCORE:"+" "+scorecheck;
    }
    pidgik.style.left = x + 1;
    x = x + 1;
    if (x == runeloce - 143){
        runeloc = (Math.floor(Math.random() * 1250));
        rune.style.left = runeloc;
        runeloce = runeloc; 
        scorecheck = scorecheck + 1;
        die.play();
        score.innerHTML="SCORE:"+" "+scorecheck;
    }
    pidgik.style.left = x + 1;
    x = x + 1;
    if (x == runeloce - 143){
        runeloc = (Math.floor(Math.random() * 1250));
        rune.style.left = runeloc;
        runeloce = runeloc;
        scorecheck = scorecheck + 1;
        die.play();
        score.innerHTML="SCORE:"+" "+scorecheck;
    }
    pidgik.style.left = x + 1;
    x = x + 1;
    if (x == runeloce - 143){
        runeloc = (Math.floor(Math.random() * 1250));
        rune.style.left = runeloc;
        runeloce = runeloc;
        scorecheck = scorecheck + 1;
        die.play();
        score.innerHTML="SCORE:"+" "+scorecheck;
    }
    pidgik.style.left = x + 1;
    x = x + 1;
    if (x == runeloce - 143){
        runeloc = (Math.floor(Math.random() * 1250));
        rune.style.left = runeloc;
        runeloce = runeloc; 
        scorecheck = scorecheck + 1;
        die.play();
        score.innerHTML="SCORE:"+" "+scorecheck;
    }
    pidgik.style.left = x + 1;
    x = x + 1;
    if (x == runeloce - 143){
        runeloc = (Math.floor(Math.random() * 1250));
        rune.style.left = runeloc;
        runeloce = runeloc;
        scorecheck = scorecheck + 1;
        die.play();
        score.innerHTML="SCORE:"+" "+scorecheck;
    }
    fs1.play();
}
}
)
document.addEventListener("keydown", function(event)
{

    if((event.code=='ArrowUp') && (style.getPropertyValue('display') == 'block'))
{
    var headitem = (Math.floor(Math.random() * items.length));
    var spharase = (Math.floor(Math.random() * shopping.length));
    shop = new Audio(shopping[spharase]);
    pidgik.src = "pidgikleft.png"
    pidgik.src = "pidgik.png"
    pidgik.style.width = '700'
    pidgik.style.height = '550'
    pidgik.style.top = '210'
    item.style.display = 'block'
    item.style.left = x + 280
    item.src = items[headitem]
    shop.play()
}
}
)
document.addEventListener("keydown", function(event)
{

    if((event.code=='ArrowRight') && (x>1600))
{
    pidgik.style.left = -600;
    x = -600;
}
}
)
document.addEventListener("keydown", function(event)
{

    if((event.code=='ArrowLeft') && (x<-600))
{
    pidgik.style.left = 1600;
    x = 1600;
}
}
)
skills.onclick = function() {
    dvskills.style.display = 'block';
    pidgik.style.display = 'none';
    item.style.display = 'none';
    rune.style.display = 'none';
    score.style.display = 'none';
    dvlore.style.display = 'none';
    dopinf.style.display = 'none';
    vid.autoplay = false;
    vid.load();
}
more.onclick = function() {
    dopinf.style.display = 'block';
    dvlore.style.display = 'none';
    pidgik.style.display = 'none';
    item.style.display = 'none';
    rune.style.display = 'none';
    score.style.display = 'none';
    dvskills.style.display = 'none';
    vid.autoplay = false;
    vid.load();
}
lore.onclick = function() {
    dvlore.style.display = 'block';
    pidgik.style.display = 'none';
    item.style.display = 'none';
    rune.style.display = 'none';
    score.style.display = 'none';
    dvskills.style.display = 'none';
    dopinf.style.display = 'none';
    vid.autoplay = true;
    vid.load();
}
imghook.onclick = function() {
    gifhook.style.display = 'block';
    texthook.style.display = 'block';
    imghook.style.borderColor = '#ed3931'
    imghook.style.boxShadow = '0px 0px 10px #ed3931';
    imgflesh.style.boxShadow = '0px 0px 10px white';
    imgrot.style.boxShadow = '0px 0px 10px white';
    imgdismember.style.boxShadow = '0px 0px 10px white';
    imgflesh.style.borderColor = 'white'
    imgrot.style.borderColor = 'white'
    imgdismember.style.borderColor = 'white'
    textdismember.style.display = 'none';
    textflesh.style.display = 'none';
    textrot.style.display = 'none';
    gifrot.style.display = 'none';
    gifflesh.style.display = 'none';
    gifdismember.style.display = 'none';
}
imgrot.onclick = function() {
    gifrot.style.display = 'block';
    textrot.style.display = 'block';
    imgrot.style.borderColor = '#ed3931'
    imgrot.style.boxShadow = '0px 0px 10px #ed3931';
    imgflesh.style.boxShadow = '0px 0px 10px white';
    imgdismember.style.boxShadow = '0px 0px 10px white';
    imghook.style.boxShadow = '0px 0px 10px white';
    imgflesh.style.borderColor = 'white'
    imghook.style.borderColor = 'white'
    imgdismember.style.borderColor = 'white'
    textdismember.style.display = 'none';
    textflesh.style.display = 'none';
    texthook.style.display = 'none';
    gifhook.style.display = 'none';
    gifflesh.style.display = 'none';
    gifdismember.style.display = 'none';
    texthook.style.display = 'none';
}
imgflesh.onclick = function() {
    gifflesh.style.display = 'block';
    textflesh.style.display = 'block';
    imgflesh.style.borderColor = '#ed3931'
    imgflesh.style.boxShadow = '0px 0px 10px #ed3931';
    imgdismember.style.boxShadow = '0px 0px 10px white';
    imgrot.style.boxShadow = '0px 0px 10px white';
    imghook.style.boxShadow = '0px 0px 10px white';
    imghook.style.borderColor = 'white'
    imgrot.style.borderColor = 'white'
    imgdismember.style.borderColor = 'white'
    textdismember.style.display = 'none';
    texthook.style.display = 'none';
    textrot.style.display = 'none';
    gifhook.style.display = 'none';
    gifrot.style.display = 'none';
    gifdismember.style.display = 'none';
    texthook.style.display = 'none';
}
imgdismember.onclick = function() {
    gifdismember.style.display = 'block';
    textdismember.style.display = 'block';
    imgdismember.style.borderColor = '#ed3931'
    imgdismember.style.boxShadow = '0px 0px 10px #ed3931';
    imgflesh.style.boxShadow = '0px 0px 10px white';
    imgrot.style.boxShadow = '0px 0px 10px white';
    imghook.style.boxShadow = '0px 0px 10px white';
    imgflesh.style.borderColor = 'white';
    imgrot.style.borderColor = 'white';
    imghook.style.borderColor = 'white';
    texthook.style.display = 'none';
    textflesh.style.display = 'none';
    textrot.style.display = 'none';
    gifhook.style.display = 'none';
    gifrot.style.display = 'none';
    gifflesh.style.display = 'none';
    texthook.style.display = 'none';
}


before.onclick = function() {
    whichtext = whichtext - 1;
    if (whichtext == 0) {
        whichtext = 5
    };
    if (whichtext == 1) {
        textone.style.display = 'block';
        textsecond.style.display = 'none';
        textthird.style.display = 'none';
        textforth.style.display = 'none';
        textfifth.style.display = 'none';
    };
    if (whichtext == 2) {
        textsecond.style.display = 'block';
        textone.style.display = 'none';
        textthird.style.display = 'none';
        textfifth.style.display = 'none';
        textforth.style.display = 'none';
    };
    if (whichtext == 3) {
        textthird.style.display = 'block';
        textsecond.style.display = 'none';
        textone.style.display = 'none';
        textforth.style.display = 'none';
        textfifth.style.display = 'none';
    };
    if (whichtext == 4) {
        textforth.style.display = 'block';
        textthird.style.display = 'none';
        textsecond.style.display = 'none';
        textone.style.display = 'none';
        textfifth.style.display = 'none';
    };
    if (whichtext == 5) {
        textfifth.style.display = 'block';
        textforth.style.display = 'none';
        textthird.style.display = 'none';
        textsecond.style.display = 'none';
        textone.style.display = 'none';
    };
}

next.onclick = function() {
    whichtext = whichtext + 1;
    if (whichtext == 6) {
        whichtext = 1
    };
    if (whichtext == 1) {
        textone.style.display = 'block';
        textsecond.style.display = 'none';
        textthird.style.display = 'none';
        textforth.style.display = 'none';
        textfifth.style.display = 'none';
    };
    if (whichtext == 2) {
        textsecond.style.display = 'block';
        textone.style.display = 'none';
        textthird.style.display = 'none';
        textforth.style.display = 'none';
        textfifth.style.display = 'none';
    };
    if (whichtext == 3) {
        textthird.style.display = 'block';
        textsecond.style.display = 'none';
        textone.style.display = 'none';
        textforth.style.display = 'none';
        textfifth.style.display = 'none';
    };
    if (whichtext == 4) {
        textforth.style.display = 'block';
        textthird.style.display = 'none';
        textsecond.style.display = 'none';
        textone.style.display = 'none';
        textfifth.style.display = 'none';
    };
    if (whichtext == 5) {
        textfifth.style.display = 'block';
        textforth.style.display = 'none';
        textthird.style.display = 'none';
        textsecond.style.display = 'none';
        textone.style.display = 'none';
    };
}

