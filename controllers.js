function KalenderCtrl($scope, $rootScope) {
	
	$rootScope.gekozenDagen = [];
    
	$scope.addDay = function(dayNumber) {
		if($rootScope.gekozenDagen.some(getJuistGekozenDag, dayNumber)){
			$rootScope.gekozenDagen = $rootScope.gekozenDagen.filter(getAlleAndereDagen, dayNumber);
		} else {
	   		$rootScope.gekozenDagen.push({dag:dayNumber});
		}
  	};
  	
  	function getAlleAndereDagen(value){
  		return value.dag != this;
  	}
  	
  	function getJuistGekozenDag(value){
  		return value.dag == this;
  	}
}

function AanvraagKiesUrenPerDagCtrl($scope, $rootScope, $routeParams){
}
