function Eucariote() {
	this.haveNuclear = true;
}


function Metazoa () {
	Eucariote.call(this);
	this.heterotrophic = true;
	this.limitedgrowth = true;

}
Metazoa.prototype = Object.create(Eucariote.prototype);
Metazoa.prototype.constructor = Metazoa;


Metazoa.prototype.fagotrophic = function () {
	alert('I can absorb food in the form of separate particles');
}
Metazoa.prototype.activelyMoving = function () {
	alert('Yahoooo, i`m running!');
}




function Chordata () {
	Metazoa.call(this);
	this.haveHorda = true;
	this.haveSceleton = true;
	this.haveMouth = true;
}

Chordata.prototype = Object.create(Metazoa.prototype);
Chordata.prototype.constructor = Chordata;


Chordata.prototype.TubeNervousSystem = function () {
	alert('I have a spinal cord!');
}

Chordata.prototype.haveAnus = function () {
	alert('I can defecate a lot');
}
Chordata.prototype.haveLungs = function () {
	alert('I can breathe freely!');
}

Chordata.prototype.haveHeart = function () {
	alert('My heart is knocking.. knock knock knock');
}

function Mammalia () {
	Chordata.call(this);
	this.warmBlooded = true;
	this.hairOnTheBody = true;
	this.viviparity = true;
}

Mammalia.prototype = Object.create(Chordata.prototype);
Mammalia.prototype.constructor = Mammalia;


Mammalia.prototype.produceMilk = function () {
	alert('I can produce milk to feed my babies');
}

Mammalia.prototype.wellDevelopedBrain = function () {
	alert('I think, i`m genious)))')
}
Mammalia.prototype.heterodontic = function () {
	alert('Thats mean, my teeth are different shapes');
}
Mammalia.prototype.diaphragm = function () {
	alert('I have that special muscle that separates the thoracic cavity from the abdominal cavity');
}

function Carnivora () {
	Mammalia.call(this);
}

Carnivora.prototype = Object.create(Mammalia.prototype);
Carnivora.prototype.constructor = Carnivora;

Carnivora.prototype.eatingType = function () {
	alert('I can eat other animals and I like meat!!');
}

function Canidae () {
	Carnivora.call(this);
}

Canidae.prototype = Object.create(Carnivora.prototype);
Canidae.prototype.constructor = Canidae;


Canidae.prototype.bodyForms = function () {
	alert('I have a long muzzles, upright ears, teeth adapted for cracking bones and slicing flesh, long legs, and bushy tails.');
}
Canidae.prototype.socialAnimals = function () {
	alert('I live with my family');
}
Canidae.prototype.comunication = function () {
	alert('I communicate by scent signals and by vocalizations. Like, auuuuuuuuuuuuuu!!!! Grrrrrrrrrr!');
}

function Canis () {
	Canidae.call(this);
	this.haveLongLegs = true;
	}

Canis.prototype = Object.create(Canidae.prototype);
Canis.prototype.constructor = Canis;

Canis.prototype.wantToEat = function () {
	alert('I chase my booty');
}
Canis.prototype.haveCanines = function () {
	alert('I use it for killing my prey');
}

function  CanisLupus () {
	Canis.call(this);
	this.greyFur = true;
}

CanisLupus.prototype =  Object.create(Canis.prototype);
CanisLupus.prototype.constructor = CanisLupus;


CanisLupus.prototype.dangerousLevel = function () {
	alert('I`am very dangerous! I can kill you in one minute. Be careful!');
}
CanisLupus.prototype.dimensions = function () {
	alert('height: 80—95cm, length: 135—160cm ');
}
CanisLupus.prototype.timeOfActivity = function () {
	alert('Night it`s my time')
}
CanisLupus.prototype.speed = function () {
	alert('My speed is 55—65 km/h');
} 

var test = new CanisLupus;
console.log(test.haveNuclear);
test.activelyMoving();
test.comunication();