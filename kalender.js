function KalenderCtrl($scope) {
	
	$scope.gekozenDagen = [];
    
	$scope.addDay = function(dayNumber) {
   		$scope.gekozenDagen.push({dag:dayNumber});
  	};
  	
  	$scope.wekenVanHuidigeMaand = function() {
  		var firstDayOfMonth = moment().startOf('month');
  		var lastDayOfMonth =  moment().endOf('month');
  		var currentDay = firstDayOfMonth; 
  		var days = [];
  		while(currentDay != lastDayOfMonth) {
  			days.push(currentDay);
  		}
  		return days;
  	} 
}