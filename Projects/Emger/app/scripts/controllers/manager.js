'use strict';

/**
 * @ngdoc function
 * @name emgerApp.controller:ManagerCtrl
 * @description
 * # ManagerCtrl
 * Controller of the emgerApp
 */
angular.module('emgerApp')
  .controller('ManagerCtrl', function ($scope, $sce) {

    var html = '<ul class="nav navbar-nav" >';
    html += '<li class="active"><a href="#/">Home</a>';
    html += '</li><li><a ng-href="#/employees">Employees</a>'
    html += '</li><li><a ng-href="#/about">About</a>';
    html += '</li><li><a ng-href="#/">Contact</a></li></ul>';

    document.getElementById("menu").innerHTML = html;
  });
