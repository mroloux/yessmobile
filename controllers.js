function KalenderCtrl($scope, $rootScope) {
	
	$rootScope.gekozenDagen = [];
    
	$scope.addDay = function(dayNumber) {
   		$rootScope.gekozenDagen.push({dag:dayNumber});
  	};
}

function AanvraagKiesUrenPerDagCtrl($scope, $rootScope, $routeParams){
}
