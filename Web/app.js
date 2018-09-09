const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const bodyParser= require('body-parser')
const path = require('path');

app.use(bodyParser.urlencoded({extended: true}))

//Gracias por instalar wol // https://www.youtube.com/c/Fakuch?sub_confirmation=1

//Si tocas estos códigos el juego podría dejar de funcionar!

var fullname = "Wild Ones Latin" //Nombre completo del servidor
var shortname = "WOL" //Nombre corto del servidor

  //registro
  app.post('/registered', (req, res) => {
  var dname = req.body.dname;
  var snum = req.body.snum;
  var email = req.body.email;
  

		//email
    db.collection('users', function(err, collection) {
    if (err) return res.send(500, err);
    collection.findOne({email:email}, function(err, user) {
        // si encuentra un email dar que ese email ya existe
        if (user) return res.sendFile(__dirname + '/alreadyexists.html')	
		//user
    db.collection('users', function(err, collection) {
    if (err) return res.send(500, err);
    collection.findOne({dname:dname}, function(err, user) {
        // si encuentra un usuario dar que ese usuario ya existe
        if (user) return res.sendFile(__dirname + '/alreadyexists.html')

    // si no lo hace, inserta uno nuevo
        res.send('<html><title>Welcome to ' + fullname +'!</title><link rel="stylesheet" type="text/css" href="/css/stylev2.css?cacheVer=v1"><script type="text/javascript" src="/js/events.js?x"></script><div id="nav"><ul><li><a href="/help">Help</a></li><li class="logo"><img src="/img/logo.png"></li><li style="float:right"></ul></div><center><div class="textasd" style="color:#FFF;margin-top:90px;"><h3>Congrats!<br> Welcome, ' + dname + '.<br> You are now registered.<br></h3><br><div class="play-now"><a href="/" title="Play now!"><img src="/img/es/1.png" alt="PLAY NOW!" width="107" height="53"></a></div></body></html>');
		
        collection.insert({    "id" : Math.floor((Math.random() * 1000000) + 1), "usr" : dname, "pw" : snum, "email" : email, "nw" : -1.0, "level" : 0.0, "currentPet" : "3", "login_streak" : 1.0, "playerStatus" : "playing", "status" : "playing", "net" : "M", "snum" : snum, "lkey" : snum, "gamecount" : 100.0, "gold" : 1000.0, "treats" : 200.0, "hp" : 500000.0, "wins" : 0, "sesscount" : 0, "losses" : 0, "speed" : 5.0, "attack" : 100.0, "defence" : 5.0, "jump" : 5.0, "xp" : 0.0, "userAccessories" : [ "top_playdom_black" ], "durability" : { "head_ninjaA_white" : 30.0 }, "ownedPets" : { "1" : { "gender" : "M", "id" : 1.0, "pers" : "brave", "name" :  dname, "accessories" : ["top_playdom_black"], "color2" : "0xE1E2E3", "type" : "dog", "deaths" : 0.0, "kills" : 0.0, "color1" : "0x6C6C6C" } }, "userWeaponsOwned" : {}, "userWeaponsEquipped" : [ "walk", "bone", "superjump", "climb", "punch", "dig", "mortar" ], "allowedMaps" : [ "Crash Landing" ], "command" : "player", "online" : 1.0, "dname" : dname }), {safe:true}, function(err, result) {
        };
    });
  });    
});
});
});

// login
  app.post('/juego', (req, res) => {
  var dname = req.body.dname;
  var snum = req.body.snum;
  var email = req.body.email;
  db.collection('users', function(err, collection) {
    if (err) return res.send(500, err);

    collection.findOne({dname:dname, snum:snum}, function(err, user) {
        // si encuentra un usuario entra al juego
        if (user) return res.send('<html><head><title>' + fullname +' &raquo; Play</title><link rel="shortcut icon" type="image/x-icon" href="/img/favicon.ico"/><link rel="stylesheet" href="http://localhost/css/stylev2.css?cacheVer=v1"><meta name="google" value="notranslate"><meta charset="UTF-8"><meta name="description" content="The next-generation version of the high-flying Wild Ones game, a remake thats going to encompass all the features you"ve seen in the original game and much more! Free to play!"><meta name="keywords" content="' + fullname +', ' + shortname +', ones, wild, ones, wildoneslatin.com, remake, game, free, laser, cannons, treats"><meta name="author" content="sev"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script><script type="text/javascript" src="/js/events.js?x"></script><script type="text/javascript" src="/inc/swfobject.js"></script><script type="text/javascript" src="/inc/core_public.js?cacheVer=v1.2"></script><script type="text/javascript" src="/inc/glow_picker.js"></script><script type="text/javascript" src="/inc/glow.js?cacheVer=v1"></script><script async src="https://www.googletagmanager.com/gtag/js?id=UA-113893422-1"></script><script type="text/javascript" src="/js/alerts.js?x"></script><script type="text/javascript" src="/js/dragresize.js"></script><script type="text/javascript" src="/js/test.js"></script><style type="text/css">body { background-image: url(/auth-des/img/bgs/6.png); -webkit-background-size: 100% 100%; /* Safari 3.0 */ -moz-background-size: 100% 100%; /* Gecko 1.9.2 (Firefox 3.6) */ -o-background-size: 100% 100%; /* Opera 9.5 */ background-size: 100% 100%; /* Gecko 2.0 (Firefox 4.0) and other CSS3-compliant browsers */ -moz-border-image: url(/auth-des/img/bgs/6.png) 0; /* Gecko 1.9.1 (Firefox 3.5) */}.drsElement { position: absolute; border: 1px solid #1B4788;}.drsMoveHandle { height: 20px; background-color: #1B4788; border-bottom: 1px solid #1B4788; cursor: move; color:#FFF;}.dragresize { position: absolute; width: 5px; height: 5px; font-size: 1px; background: #EEE; border: 1px solid #1B4788;}.dragresize-tl { top: -8px; left: -8px; cursor: nw-resize;}.dragresize-tm { top: -8px; left: 50%; margin-left: -4px; cursor: n-resize;}.dragresize-tr { top: -8px; right: -8px; cursor: ne-resize;}.dragresize-ml { top: 50%; margin-top: -4px; left: -8px; cursor: w-resize;}.dragresize-mr { top: 50%; margin-top: -4px; right: -8px; cursor: e-resize;}.dragresize-bl { bottom: -8px; left: -8px; cursor: sw-resize;}.dragresize-bm { bottom: -8px; left: 50%; margin-left: -4px; cursor: s-resize;}.dragresize-br { bottom: -8px; right: -8px; cursor: se-resize;}</style><script type="text/javascript">var dragresize = new DragResize(dragresize, { minWidth: 50, minHeight: 50, minLeft: 0, minTop: 50, maxLeft: "100%", maxTop: "100%" });dragresize.isElement = function(elm){ if (elm.className && elm.className.indexOf(drsElement) > -1) return true;};dragresize.isHandle = function(elm){ if (elm.className && elm.className.indexOf(drsMoveHandle) > -1) return true;};dragresize.ondragfocus = function() { };dragresize.ondragstart = function(isResize) { };dragresize.ondragmove = function(isResize) { };dragresize.ondragend = function(isResize) { };dragresize.ondragblur = function() { };dragresize.apply(document);</script></head><body style="font: 13px/20px sans-serif;"><div id="nav"><ul><!-- <li><a href="#submit_bug">Submit a bug</a></li> --><!-- <li><a onclick="openAlert();">Refer a friend</a></li> --><!--<li><a href="https://discord.gg/DkMDvU5" target="_blank">Discord (chat)</a></li>--><li><a href="/help">Help: ' + dname + '</a></li><li class="logo"><img src="/img/logo.png"></li><li style="float:right;"><a id="button-fullscreen">View fullscreen</a></li><li style="float:right;"><a class="active" href="/logout">Logout</a></li><li style="float:right;"><a href="https://www.facebook.com/wildoneslatin" target="_blank">Facebook</a></li></ul></div><div id="content"><div class="notice" id="notice"><p class="notice" id="notice">Loading Messages...</p></div> <div class="showOffline" id="showOffline"><div class="alertHeader">Hang in there!</div><div class="alertMsg">Something exciting is happening<br>Please check back soon.</div></div><div class="alertBox" id="alertBox"><div class="alertHeader" id="alertHeader">Refer a friend</div><div class="alertMsg" id="alertMsg">You can invite your friends to create an alpha account using your referral ID. Tell them to quote your id:<br><span class="referID">""</span><br>when signing up to ' + fullname +'.</div><!-- <button name="copyRefBtn" class="signUpBtn" onclick="copyRef();">Copy Link</button> --><button name="alertBtn" class="loginBtn" onclick="closeAlert();">Ok</button></div><div class="login"></div><div class="signup"><div class="signupBox" id="signupBox"><div class="signupHeader">Signup to ' + fullname +' <span style="color:#FFCC00;">public</span></div><div class="signupMsg">Register your ' + fullname +' account to prepare for your battles and worship the rabbits.</div><input type="text" id="signupUsername" name="signupUsername" placeholder="username" maxlength="11"><br><input type="email" id="signupEmail" name="signupEmail" placeholder="email"><br><input type="password" id="signupPassword" name="signupPassword" placeholder="password"><br><input type="password" id="signupPassword2" name="signupPassword2" placeholder="repeat password"><br><div class="signupRtnMsg" id="signupRtnMsg">&nbsp;</div><div id="lower"> <button name="backBtn" id="backBtn" type="submit" class="signUpBtn" onclick="launchLogin()">Back</button> <button name="createAccountBtn" id="createAccountBtn" type="submit" class="loginBtn">Create account</button></div></div></div><!-- PETGLOW --><div class="petGlowBox" id="petGlowBox"> <div class="petGlowHeader">Jazz up your pet with PetGlow</div> <div class="petGlowMsg" id="petGlowMsg"><br>Support our servers &amp; donate a minimum of $5 to unlock glow for your pet<br>You can change the color of your glow whenever you like.<br><br></div> <div class="petGlowContainer"> <div class="left"><img class="petGlow" id="petGlow" src="/img/pet.svg" width="230px"> <p class="petGlowName" id="petGlowName"></p> </div> <div class="right"> <div id="color-picker-container"></div> </div> </div> <div class="buttons"> <button name="signUpBtn" id="signUpBtn" type="submit" class="signUpBtn" onclick="closeGlow()">No thx</button><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" id="paypalForm" style="float:right;"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="SUTWPRLU7SMW6"><input type="hidden" name="lc" value="US"><input type="hidden" name="custom" value="Pons"> <input type="hidden" name="item_name" id="glowColor" value="#ffffff"><input type="hidden" name="item_number" value="' + fullname +' glow for Pons"><p class="donation">Donation: $</p><input type="text" id="donationAmount" class="currencyBox" name="amount" placeholder="5.00" value="5.00"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="no_note" value="1"><input type="hidden" name="no_shipping" value="1"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHosted"><button name="paypalButton" class="loginBtn" style="position:absolute;display:block;right:2px;bottom:9px;" id="paypalButton">Take me to PayPal</button><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form> <button name="glowSaveButton" id="glowSaveButton" class="loginBtn" onclick="saveGlow()">Save</button><!-- <input type="hidden" name="item_name" value="' + fullname +' extra donation"><input type="hidden" name="item_number" value="thank you"><button name="paypalButton" class="loginBtn" id="donateMoreButton" onclick="closeGlow()">Donate some more</button>--> </div></div><!-- END PETGLOW --><div class="drsElement" style="left: 100px; top: 100px; width: 750px; height: 750px; background-image: url(/auth-des/img/bgs/1.png); text-align: center"> <div class="drsMoveHandle">=====</div><!--AQUI---><div id="screensize"><div id="play"><object style="background-color: #B2D2F6;"type="application/x-shockwave-flash" data="http://localhost:80/publicV1.swf?dname=' + dname +'&snum=' + snum + '&net=M" width="100%" height="100%"><param name="movie" value="http://localhost:80/publicV1.swf?dname=' + dname +'&snum=' + snum + '&net=M" wmode="transparent"/><param name="quality" value="high"/><param name="wmode" value="transparent"></object><!--END--></div></div></div><div class="drsElement" style="left: 890px; top: 100px; width: 350px; height: 500px; background-image: url(/auth-des/img/bgs/1.png); text-align: center"> <div class="drsMoveHandle">=====</div><!--AQUI---><br><iframe src="https://discordapp.com/widget?id=430405197500645377&theme=dark" width="100%" height="88%" allowtransparency="true" frameborder="0"></iframe><!--END--></div></div><a href="https://www.youtube.com/c/Fakuch?sub_confirmation=1" target="_blank"><div id="footer"><p class="foot" style="color:#FFF;">Design &copy; 2018 Wild Ones: Latin.</p></a></div><script src="/js/size.js?x"></script></body></html><script> //showOffline();</script>');
    // si no lo hace, envia a errorLogin.html, donde se dice que esa cuenta no existe
          if (err) return res.send(500, err);
          res.sendFile(__dirname + '/errorLogin.html')
        });
  });
});


//index.html en el puerto 80

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(80, function () {
  console.log(' _     _ ')
  console.log('| |   | |')
  console.log('| |__ | |')
  console.log('|  __)| |')
  console.log('| |   | |')
  console.log('|_|   |_|')
  console.log('')
  console.log('ExpressJS. (port 80)')
  console.log('')
  console.log('Diseñado por Fakuch para WOL')
  console.log('https://goo.gl/1zD2ev')
})

app.post('/quotes', (req, res) => {
  console.log('.')
})

// mongo
var db

MongoClient.connect('mongodb://localhost:27017/emu', (err, database) => {
  if (err) return console.log(err)
 db = database
})

app.use('/', express.static(__dirname + '/'));
app.use('assets/json', express.static(__dirname + '/json'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/privatewolswf/publicV1.swf', express.static(__dirname + '/privatewolswf/publicV1.swf'));
app.use('/auth-des', express.static(__dirname + '/auth-des'));
app.use('/submit-bug', express.static(__dirname + '/submit-bug'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/holiday_promo_treat_2016', express.static(__dirname + '/holiday_promo_treat_2016.html'));
app.use('/logout', express.static(__dirname + '/logout.html'));
app.use('/help', express.static(__dirname + '/help.html'));
app.use(express.static(__dirname + '/privatewolswf'));
