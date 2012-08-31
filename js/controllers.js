function KalenderCtrl($scope, $rootScope) {
	
	$rootScope.gekozenDagen = [];
	$scope.maandenWaaropVerlofKanGevraagdWorden = geefMaandenWaaropVerlofKanGevraagdWorden();
    
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

function geefMaandenWaaropVerlofKanGevraagdWorden() {
	var maanden = [{ maand: moment(), weken: geefWekenVanHuidigeMaand() }];
	return maanden;
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
}
