angular.module('YessMobile', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/index', {templateUrl: 'aanvraag/stap1.html', controller: KalenderCtrl}).
      when('/aanvraag/stap2', {templateUrl: 'aanvraag/stap2.html', controller: AanvraagKiesUrenPerDagCtrl}).
      when('/aanvraag/stap4', {templateUrl: 'aanvraag/stap4.html', controller: AanvraagOverzichtDagenCtrl}).
      otherwise({redirectTo: '/index'});
}]);