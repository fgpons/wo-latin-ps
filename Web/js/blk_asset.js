var adBlockDetected=function(){document.getElementById('blk').style.display="block";}
var adBlockUndetected=function(){document.getElementById('blk').style.display="none";}
if(typeof blockAdBlock==='undefined'){$(document).ready(adBlockDetected);}else{blockAdBlock.on(true,adBlockDetected).on(false,adBlockUndetected);}