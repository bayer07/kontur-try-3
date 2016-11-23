/// <reference path='_all.ts' />
var todos;
(function (todos) {
    'use strict';
    var MatrixItem = (function () {
        function MatrixItem(_name, _shortName, n, m) {
            this.name = _name;
            this.shortName = _shortName;
            this.array = [];
            for (var i = 0; i < n; i++) {
                var ar = [];
                for (var j = 0; j < m; j++) {
                    ar.push(null);
                }
                this.array.push(ar);
            }
            this.isSelected = false;
            this._n = n;
            this._m = m;
        }
        MatrixItem.prototype.addRow = function () {
            if (this._n < 10) {
                this.array.push(new Array(this._m));
                this._n++;
            }
        };
        MatrixItem.prototype.removeRow = function () {
            if (this._n > 2) {
                this.array.splice(-1, 1);
                this._n--;
            }
        };
        MatrixItem.prototype.addCol = function () {
            if (this._m < 10) {
                for (var i = 0; i < this._n; i++) {
                    this.array[i].push(null);
                }
                this._m++;
            }
        };
        MatrixItem.prototype.removeCol = function () {
            if (this._m > 2) {
                for (var i = 0; i < this._n; i++) {
                    this.array[i].splice(-1, 1);
                }
                this._m--;
            }
        };
        MatrixItem.prototype.getStyle = function () {
            if (this.shortName == 'B') {
                return 'display: inline-block';
            }
            else {
                return 'display: block';
            }
        };
        MatrixItem.prototype.change = function () {
            console.log("change");
        };
        return MatrixItem;
    })();
    todos.MatrixItem = MatrixItem;
})(todos || (todos = {}));
/// <reference path='_all.ts' />
var todos;
(function (todos) {
    'use strict';
    var Matrix = (function () {
        function Matrix(nameC, nameA, nameB, n, m, k) {
            this.A = new todos.MatrixItem(nameA, 'A', m, n);
            this.B = new todos.MatrixItem(nameB, 'B', n, k);
            this.C = new todos.MatrixItem(nameC, 'C', m, k);
            this.A.isSelected = true;
        }
        Matrix.prototype.getMatrix = function () {
            var result = [];
            result.push(this.A);
            result.push(this.B);
            return result;
        };
        Matrix.prototype.clear = function () {
            this.A.array.forEach(function (item) {
                item.forEach(function (cell) {
                    cell = null;
                });
            });
        };
        return Matrix;
    })();
    todos.Matrix = Matrix;
})(todos || (todos = {}));
/// <reference path='_all.ts' />
/// <reference path='_all.ts' />
var todos;
(function (todos) {
    'use strict';
    var MatrixCtrl = (function () {
        function MatrixCtrl($scope) {
            this.$scope = $scope;
            this.initMatrix();
            $scope.vm = this;
        }
        MatrixCtrl.prototype.getSelected = function () {
            var result;
            this.$scope.matrixEdit.forEach(function (item) {
                if (item.isSelected) {
                    result = item;
                }
            });
            return result;
        };
        MatrixCtrl.prototype.initMatrix = function () {
            this.$scope.matrix = this.matrix = new todos.Matrix('Матрица C', 'Матрица А', 'Матрица B', 2, 4, 3);
            this.$scope.matrixEdit = this.matrix.getMatrix();
        };
        MatrixCtrl.prototype.pickMatrix = function (m) {
            m.isSelected = true;
            this.$scope.matrixEdit.forEach(function (matrixedit) {
                matrixedit.isSelected = matrixedit.name == m.name;
            });
        };
        MatrixCtrl.prototype.addRow = function () {
            console.log("!");
            this.getSelected().addRow();
        };
        MatrixCtrl.prototype.removeRow = function () {
            this.getSelected().removeRow();
        };
        MatrixCtrl.prototype.addCol = function () {
            this.getSelected().addCol();
        };
        MatrixCtrl.prototype.removeCol = function () {
            this.getSelected().removeCol();
        };
        MatrixCtrl.prototype.clear = function () {
            this.matrix.clear();
        };
        MatrixCtrl.$inject = [
            '$scope'
        ];
        return MatrixCtrl;
    })();
    todos.MatrixCtrl = MatrixCtrl;
})(todos || (todos = {}));
/// <reference path='_all.ts' />
/**
 * @type {angular.Module}
 */
var todos;
(function (todos) {
    'use strict';
    var todomvc = angular.module('matrixexample', [])
        .directive('myDirective', function () {
        return {
            template: '<div ng-repeat="row in customerInfo.array track by $index"><span ng-repeat="i in row track by $index"><input class="cell" ng-change="i.change()" placeholder="{{customerInfo.shortName}}{{$index}},{{$parent.$index}}" type="text" ng-model="i">{{i}}</span></div>',
            scope: {
                customerInfo: '=info'
            },
            link: function (scope, element, attrs) {
                scope.$watchCollection('customerInfo.array', function (newNames, oldNames) {
                    console.log("I see a data change!");
                }, true);
            }
        };
    })
        .controller('matrixCtrl', todos.MatrixCtrl);
})(todos || (todos = {}));
/// <reference path='libs/jquery/jquery.d.ts' />
/// <reference path='libs/angular/angular.d.ts' />
/// <reference path='MatrixItem.ts' />
/// <reference path='Matrix.ts' />
/// <reference path='ITodoScope.ts' />
/// <reference path='MatrixCtrl.ts' />
/// <reference path='Application.ts' />
//# sourceMappingURL=Application.js.map