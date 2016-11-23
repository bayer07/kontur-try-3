/// <reference path='_all.ts' />

/**
 * @type {angular.Module}
 */
module todos {
    'use strict';

    var todomvc = angular.module('matrixexample', [])
        .directive('myDirective', function() {
            return {
                template:
                '<div ng-repeat="row in matrix.array track by $index"><span ng-repeat="i in row track by $index"><input class="cell" ng-change="function({name:matrix.name,i:$parent.$index,j:$index,value:i})" placeholder="{{matrix.shortName}}{{$index + 1}},{{$parent.$index + 1}}" type="text" ng-model="i" ng-disabled="matrix.isDisabled" ng-focus="focus()" ng-blur="blur()"></span></div>',
                scope: {
                    matrix: '=info',
                    function: "&",
                    focus: "&",
                    blur: "&",
                }
            };
        })
        .controller('matrixCtrl', MatrixCtrl);
}
