function KalenderCtrl($scope, $rootScope) {
	
	$rootScope.gekozenDagen = [];
    
	$scope.addDay = function(dayNumber) {
		if($rootScope.gekozenDagen.some(getJuistGekozenDag, dayNumber)){
			
		} else {
	   		$rootScope.gekozenDagen.push({dag:dayNumber});
		}
  	};
  	
  	function getJuistGekozenDag(value){
  		return value.dag == this;
  	}
}

function AanvraagKiesUrenPerDagCtrl($scope, $rootScope, $routeParams){
}
