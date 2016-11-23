/// <reference path='_all.ts' />

/**
 * @type {angular.Module}
 */
module todos {
    'use strict';

    var todomvc = angular.module('matrixexample', [])
        .directive('myDirective', function() {
            return {
                template: '<div ng-repeat="row in customerInfo.array track by $index"><span ng-repeat="i in row track by $index"><input class="cell" ng-change="i.change()" placeholder="{{customerInfo.shortName}}{{$index}},{{$parent.$index}}" type="text" ng-model="i">{{i}}</span></div>',
                scope: {
                    customerInfo: '=info'
                },
                link: function(scope, element, attrs) {
                    scope.$watchCollection('customerInfo.array', function(newNames, oldNames) {
                        console.log("I see a data change!");
                    },true);
                }
            };
        })
        .controller('matrixCtrl', MatrixCtrl);
}
