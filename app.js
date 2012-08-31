angular.module('YessMobile', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/index', {templateUrl: 'aanvraag/stap1.html', controller: KalenderCtrl}).
      when('/aanvraag/stap2', {templateUrl: 'aanvraag/stap2.html', controller: KalenderCtrl}).
      otherwise({redirectTo: '/index'});
}]);