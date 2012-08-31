angular.module('YessMobile', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/index', {templateUrl: 'aanvraag/stap1.html', controller: KalenderCtrl}).
      when('/aanvraag/stap2', {templateUrl: 'aanvraag/stap2.html', controller: AanvraagKiesUrenPerDagCtrl}).
      when('/goedkeuring', {templateUrl: 'goedkeuring/stap1.html', controller: AlleAanvragenCtrl}).
      otherwise({redirectTo: '/index'});
}]);