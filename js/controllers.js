function KalenderCtrl($scope, $rootScope) {
	$rootScope.gekozenDagen = [];
	$scope.wekenVanHuidigeMaand = geefWekenVanHuidigeMaand();
    
	$scope.addDay = function(day) {
		if($rootScope.gekozenDagen.some(getJuistGekozenDag, day)){
			$rootScope.gekozenDagen = $rootScope.gekozenDagen.filter(getAlleAndereDagen, day);
		} else {
	   		$rootScope.gekozenDagen.push(day);
		}
  	};
  	
  	$scope.classVoorWeek = function($isFirst) {
  		if($isFirst) {
  			return 'weekdag-row-first';
  		}
  	}
  	
  	function getAlleAndereDagen(value){
  		return value != this;
  	}
  	
  	function getJuistGekozenDag(value){
  		return value == this;
  	}
}

function geefWekenVanHuidigeMaand() {
	return geefWekenVanMaand(moment().add('months', 10));
}

function geefWekenVanMaand(dagInMaand) {
	var weeks = [];
	var week = [];
	weeks.push(week);
	var lastDayOfMonth =  moment(dagInMaand).endOf('month');
	
	var currentDay = moment(dagInMaand).startOf('month');
	var currentWeek = currentDay.format('w');
	
	while(currentDay <= lastDayOfMonth) {
		var newWeek = currentDay.format('w');
		if(newWeek != currentWeek) {
			week = [];
			weeks.push(week);
			currentWeek = newWeek;
		}
		week.push(currentDay);
		currentDay = moment(currentDay);
		currentDay.add('days', 1);
	}
	
	return weeks;
}

function AanvraagKiesUrenPerDagCtrl($scope, $rootScope, $routeParams){
	$rootScope.lengteVerlofdag = [
		{tekst:"Volledige dag", value:"VD"},
		{tekst:"Voormiddag", value:"VM"},
		{tekst:"Namiddag", value:"NM"},
		{tekst:"Aantal uren voormiddag", value:"UVM"},
		{tekst:"Aantal uren namiddag", value:"UNM"}];
}

function AlleAanvragenCtrl($scope, $rootScope, $routeParams){
	$rootScope.alleAanvragen = [
		new Aanvraag("Van Soom Cynthia", moment(), new Periode(moment("2012-10-15", "YYYY-MM-DD"), moment("2012/10/20","YYYY-MM-DD"))),
		new Aanvraag("Doe John", moment(), new Periode(moment("2012-11-24", "YYYY-MM-DD"), moment("2012/11/28","YYYY-MM-DD"))),
		new Aanvraag("Doe John", moment(), new Periode(moment("2012-12-24", "YYYY-MM-DD"), moment("2012/12/31","YYYY-MM-DD")))
	];
}
