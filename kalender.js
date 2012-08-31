function KalenderCtrl($scope) {
	
	$scope.gekozenDagen = [];
    
	$scope.addDay = function(dayNumber) {
   		$scope.gekozenDagen.push({dag:dayNumber});
  	};
}