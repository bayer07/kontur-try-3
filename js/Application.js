/// <reference path='_all.ts' />
var todos;
(function (todos) {
    'use strict';
    var MatrixItem = (function () {
        function MatrixItem(_name, _n, _m) {
            this.name = _name;
            this.n = _n;
            this.m = _m;
            var ar = [];
            ar.push(1);
            ar.push(2);
            ar.push(3);
            var ar2 = [];
            ar2.push(ar);
            ar2.push(ar);
            ar2.push(ar);
            this.array = ar2;
        }
        MatrixItem.prototype.getArray = function () {
            return this.array;
        };
        return MatrixItem;
    }());
    todos.MatrixItem = MatrixItem;
})(todos || (todos = {}));
/// <reference path='_all.ts' />
/// <reference path='_all.ts' />
var todos;
(function (todos) {
    'use strict';
    var MatrixCtrl = (function () {
        function MatrixCtrl($scope) {
            this.$scope = $scope;
            var m = new Array();
            m.push(new todos.MatrixItem('Матрица А', 4, 2));
            m.push(new todos.MatrixItem('Матрица В', 2, 3));
            m.push(new todos.MatrixItem('Матрица С', 4, 3));
            $scope.matrix = m;
            $scope.test = 'test';
            // this.todos = $scope.todos = todoStorage.get();
            //
            $scope.newTodo = '';
            // $scope.editedTodo = null;
            //
            // // 'vm' stands for 'view model'. We're adding a reference to the controller to the scope
            // // for its methods to be accessible from view / HTML
            $scope.vm = this;
            //
            // // watching for events/changes in scope, which are caused by view/user input
            // // if you subscribe to scope or event with lifetime longer than this controller, make sure you unsubscribe.
            // $scope.$watch('todos', () => this.onTodos(), true);
            // $scope.$watch('location.path()', path => this.onPath(path))
            //
            // if ($location.path() === '') $location.path('/');
            // $scope.location = $location;
        }
        MatrixCtrl.$inject = [
            '$scope'
        ];
        return MatrixCtrl;
    }());
    todos.MatrixCtrl = MatrixCtrl;
})(todos || (todos = {}));
/// <reference path='_all.ts' />
/**
 * The main TodoMVC app module.
 *
 * @type {angular.Module}
 */
var todos;
(function (todos) {
    'use strict';
    var todomvc = angular.module('matrixexample', [])
        .controller('MatrixCtrl', todos.MatrixCtrl);
})(todos || (todos = {}));
/// <reference path='libs/jquery/jquery.d.ts' />
/// <reference path='libs/angular/angular.d.ts' />
/// <reference path='MatrixItem.ts' />
/// <reference path='ITodoScope.ts' />
/// <reference path='MatrixCtrl.ts' />
/// <reference path='Application.ts' />
//# sourceMappingURL=Application.js.map