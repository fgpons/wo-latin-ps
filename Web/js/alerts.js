function go(){var result=['Wild ones Latin beta!','Updating Files...','Loading New Pets...','Advertise WOL!','Updating coordinates...','Calculating FPS...','Wild animals wait for you inside!','Bugs? contact us'][Math.floor(Math.random()*8)]
$("#notice").html("<p class='notice' id='notice'>"+ result+"</p>");}
setInterval(go,4500);