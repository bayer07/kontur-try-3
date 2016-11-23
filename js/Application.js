/// <reference path='_all.ts' />
var todos;
(function (todos) {
    'use strict';
    (function (PanelState) {
        PanelState[PanelState["Normal"] = 0] = "Normal";
        PanelState[PanelState["Focus"] = 1] = "Focus";
        PanelState[PanelState["Error"] = 2] = "Error";
    })(todos.PanelState || (todos.PanelState = {}));
    var PanelState = todos.PanelState;
})(todos || (todos = {}));
/// <reference path='_all.ts' />
var todos;
(function (todos) {
    'use strict';
    var MatrixItem = (function () {
        function MatrixItem(_name, _shortName, _n, _m, _isDisabled) {
            this.name = _name;
            this.shortName = _shortName;
            this.array = [];
            for (var i = 0; i < _n; i++) {
                var ar = [];
                for (var j = 0; j < _m; j++) {
                    ar.push(null);
                }
                this.array.push(ar);
            }
            this.isSelected = false;
            this.n = _n;
            this.m = _m;
            this.isDisabled = _isDisabled;
        }
        MatrixItem.prototype.clear = function () {
            this.array = [];
            for (var i = 0; i < this.n; i++) {
                var ar = [];
                for (var j = 0; j < this.m; j++) {
                    ar.push(null);
                }
                this.array.push(ar);
            }
        };
        MatrixItem.prototype.addRow = function () {
            if (this.n < 10) {
                this.array.push(new Array(this.m));
                this.n++;
            }
        };
        MatrixItem.prototype.removeRow = function () {
            if (this.n > 2) {
                this.array.splice(-1, 1);
                this.n--;
            }
        };
        MatrixItem.prototype.addCol = function () {
            if (this.m < 10) {
                for (var i = 0; i < this.n; i++) {
                    this.array[i].push(null);
                }
                this.m++;
            }
        };
        MatrixItem.prototype.removeCol = function () {
            if (this.m > 2) {
                for (var i = 0; i < this.n; i++) {
                    this.array[i].splice(-1, 1);
                }
                this.m--;
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
            this.A = new todos.MatrixItem(nameA, 'A', m, n, false);
            this.B = new todos.MatrixItem(nameB, 'B', n, k, false);
            this.C = new todos.MatrixItem(nameC, 'C', m, k, true);
            this.A.isSelected = true;
        }
        Matrix.prototype.getMatrix = function () {
            var result = [];
            result.push(this.A);
            result.push(this.B);
            return result;
        };
        Matrix.prototype.changeCell = function (name, i, j, value) {
            if (name == this.A.name) {
                this.A.array[i][j] = value;
            }
            else if (name == this.B.name) {
                this.B.array[i][j] = value;
            }
        };
        Matrix.prototype.swap = function () {
            var temp = this.A;
            this.A = this.B;
            this.B = temp;
        };
        Matrix.prototype.multiplication = function () {
            if (this.A.m != this.B.n) {
                return todos.PanelState.Error;
            }
            this.C = new todos.MatrixItem(this.C.name, 'C', this.A.n, this.B.m, true);
            for (var k = 0; k < this.B.m; k++) {
                for (var i = 0; i < this.A.n; i++) {
                    var t = 0;
                    for (var j = 0; j < this.B.n; j++) {
                        var x = (this.A.array[i][j] == undefined ? 0 : this.A.array[i][j]);
                        var y = (this.B.array[j][k] == undefined ? 0 : this.B.array[j][k]);
                        t += x * y;
                    }
                    this.C.array[i][k] = t;
                }
            }
            return todos.PanelState.Normal;
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
            this.state = todos.PanelState.Normal;
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
        MatrixCtrl.prototype.getStyle = function () {
            if (this.state == todos.PanelState.Normal) {
                return { 'background-color': '#e0dfde' };
            }
            if (this.state == todos.PanelState.Focus) {
                return { 'background-color': '#aacbee' };
            }
            if (this.state == todos.PanelState.Error) {
                return { 'background-color': '#f6e1e0' };
            }
        };
        MatrixCtrl.prototype.isError = function () {
            return this.state == todos.PanelState.Error;
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
            this.matrix.A.clear();
            this.matrix.B.clear();
        };
        MatrixCtrl.prototype.changeCell = function (name, i, j, value) {
            console.log('change cell');
            this.$scope.matrix.changeCell(name, i, j, value);
        };
        MatrixCtrl.prototype.swap = function () {
            this.matrix.swap();
        };
        MatrixCtrl.prototype.onFocus = function () {
            console.log('focus');
            this.state = todos.PanelState.Focus;
        };
        MatrixCtrl.prototype.onBlur = function () {
            console.log('blur');
            this.state = todos.PanelState.Normal;
        };
        MatrixCtrl.prototype.onSubmit = function () {
            console.log('submit');
            this.state = this.matrix.multiplication();
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
            template: '<div ng-repeat="row in matrix.array track by $index"><span ng-repeat="i in row track by $index"><input class="cell" ng-change="function({name:matrix.name,i:$parent.$index,j:$index,value:i})" placeholder="{{matrix.shortName}}{{$index + 1}},{{$parent.$index + 1}}" type="text" ng-model="i" ng-disabled="matrix.isDisabled" ng-focus="focus()" ng-blur="blur()"></span></div>',
            scope: {
                matrix: '=info',
                function: "&",
                focus: "&",
                blur: "&"
            }
        };
    })
        .controller('matrixCtrl', todos.MatrixCtrl);
})(todos || (todos = {}));
/// <reference path='libs/jquery/jquery.d.ts' />
/// <reference path='libs/angular/angular.d.ts' />
/// <reference path='State.ts' />
/// <reference path='MatrixItem.ts' />
/// <reference path='Matrix.ts' />
/// <reference path='ITodoScope.ts' />
/// <reference path='MatrixCtrl.ts' />
/// <reference path='Application.ts' />
//# sourceMappingURL=Application.js.map