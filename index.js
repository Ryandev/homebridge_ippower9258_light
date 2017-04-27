var http = require('http');
var IPPower9258 = require('ippower9258')
var Service, Characteristic;

module.exports = function(homebridge) {
    Service = homebridge.hap.Service;
    Characteristic = homebridge.hap.Characteristic;
    
    console.log('RUnning!!!\n\n')

    homebridge.registerAccessory("homebridge-ippower9258", "ippower9258", IPPowerLight);
}

function IPPowerLight(log, config) {
    this.log = log;
    this.config = config;
    this.name = config["name"];

	this.ipPower = new IPPower9258();
	this.ipPower.config.ipAddress = config.ipaddress;
	this.ipPower.config.userName = config.username;
	this.ipPower.config.password = config.password;

    this.service = new Service.Lightbulb(this.name);
    this.service
        .getCharacteristic(Characteristic.On)
        .on('get', this.getOn.bind(this))
        .on('set', this.setOn.bind(this));
}


IPPowerLight.prototype.getOn = function(callback) {
    var self = this;
	self.ipPower.fetchState(function(){
		callback(null,self.ipPower.state[1]);
	});
}

IPPowerLight.prototype.setOn = function(on, callback) {
    var self = this;
	self.ipPower.fetchState(function(){
		self.ipPower.state[self.config.outlet] = on;
		callback(null, on);
	});
}

IPPowerLight.prototype.getServices = function() {
    return [this.service];
}
