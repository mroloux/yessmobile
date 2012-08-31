function KalenderCtrl($scope, $rootScope) {
	
	$rootScope.gekozenDagen = [];
    
	$scope.addDay = function(dayNumber) {
   		$rootScope.gekozenDagen.push({dag:dayNumber});
  	};
  	
  	$scope.wekenVanHuidigeMaand = function() {
  		var weeks = [];
  		var week = [];
  		weeks.push(week);
  		var lastDayOfMonth =  moment().endOf('month');
  		
  		var currentDay = moment().startOf('month');
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
  	
  	$scope.classVoorWeek = function($isFirst) {
  		if($isFirst) {
  			return 'weekdag-row-first';
  		}
  	}
}

function AanvraagKiesUrenPerDagCtrl($scope, $rootScope, $routeParams){
}
