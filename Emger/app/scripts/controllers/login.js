'use strict';

/**
 * @ngdoc function
 * @name emgerApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the emgerApp
 */
angular.module('emgerApp')
  .controller('LoginCtrl', function ($scope, $location, $sce) {

   	    $scope.menu = $sce.trustAsHtml('<ul><li>render me please</li></ul>');

$scope.submitForm = function() {
	alert("fooo");
	$location.path('/manager');
	};
  });
