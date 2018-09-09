var Utils	= require('../helpers/utils.js'),
	UUID        = require('node-uuid'),
	events = require('events');


function Client(s, db, wol) {
	/* Events */
	this.eventTrigger = new events.EventEmitter();
	/* References */
	this.sock = s;
    this.db = db;
    this.WOL = wol;

	/* Connection details */
	this.connectionType = "abstract";
	this.initialized = false;

	/* Buffers and settings */
	this.tempBuffer = "";
	this.tempBufferLen = 0;
	this.awaitingData = false;
	this.dataParts 	= 0;

	/* */
	this.loggedIn = "im_abstract";
	this.newObject = this;

	/* Characteristics */
	this.id = UUID();
}

Client.prototype = {
	fireChangeEvent : function(){
		this.eventTrigger.emit("newScope");
	},

	write : function(str){
		if(!this.sock.readyState) return;

		try{
			this.sock.write(str);
		}

		catch(e){
			console.log(e);
		}
	}
};

module.exports = Client;
