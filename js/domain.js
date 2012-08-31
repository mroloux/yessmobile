function Aanvraag(naam, aanvraagDatum, periode) {
	this.naam = naam;
	this.aanvraagDatum = aanvraagDatum;
	this.periode = periode;
};

function Periode(van, tot){
	this.van = van;
	this.tot = tot;
};
Periode.prototype.format = function(){
	return this.van.format('DD-MM') + " -> " +this.tot.format('DD-MM');
};
