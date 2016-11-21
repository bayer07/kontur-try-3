/// <reference path='_all.ts' />
var todos;
(function (todos) {
    'use strict';
    var MatrixItem = (function () {
        function MatrixItem(title, completed) {
            this.title = title;
            this.completed = completed;
        }
        return MatrixItem;
    }());
    todos.MatrixItem = MatrixItem;
})(todos || (todos = {}));
/// <reference path='_all.ts' />
var todos;
(function (todos) {
    'use strict';
    /**
     * The main controller for the app. The controller:
     * - retrieves and persists the model via the todoStorage service
     * - exposes the model to the template and provides event handlers
     */
    var MatrixCtrl = (function () {
        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        function MatrixCtrl() {
            // this.todos = $scope.todos = todoStorage.get();
            //
            // $scope.newTodo = '';
            // $scope.editedTodo = null;
            //
            // // 'vm' stands for 'view model'. We're adding a reference to the controller to the scope
            // // for its methods to be accessible from view / HTML
            // $scope.vm = this;
            //
            // // watching for events/changes in scope, which are caused by view/user input
            // // if you subscribe to scope or event with lifetime longer than this controller, make sure you unsubscribe.
            // $scope.$watch('todos', () => this.onTodos(), true);
            // $scope.$watch('location.path()', path => this.onPath(path))
            //
            // if ($location.path() === '') $location.path('/');
            // $scope.location = $location;
        }
        // $inject annotation.
        // It provides $injector with information about dependencies to be injected into constructor
        // it is better to have it close to the constructor, because the parameters must match in count and type.
        // See http://docs.angularjs.org/guide/di
        MatrixCtrl.$inject = [];
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
/// <reference path='MatrixCtrl.ts' />
/// <reference path='Application.ts' />
//# sourceMappingURL=Application.js.map