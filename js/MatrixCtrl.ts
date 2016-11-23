/// <reference path='_all.ts' />
module todos {
    'use strict';
    export class MatrixCtrl {
        private matrix: Matrix;
        private state: PanelState;
        public static $inject = [
            '$scope'
        ];
        constructor(
            private $scope: ITodoScope
        ) {
            this.initMatrix();
            this.state = PanelState.Normal;
            $scope.vm = this;
        }
        getSelected() {
            let result;
            this.$scope.matrixEdit.forEach(function(item) {
                if (item.isSelected) {
                    result = item;
                }
            });
            return result;
        }
        getStyle() {
            if (this.state == PanelState.Normal) {
                return { 'background-color': '#e0dfde' };
            }
            if (this.state == PanelState.Focus) {
                return { 'background-color': '#aacbee' };
            }
            if (this.state == PanelState.Error) {
                return { 'background-color': '#f6e1e0' };
            }
        }
        isError() {
            return this.state == PanelState.Error;
        }
        initMatrix() {
            this.$scope.matrix = this.matrix = new Matrix('Матрица C', 'Матрица А', 'Матрица B', 2, 4, 3);
            this.$scope.matrixEdit = this.matrix.getMatrix();
        }
        pickMatrix(m) {
            m.isSelected = true;
            this.$scope.matrixEdit.forEach(function(matrixedit) {
                matrixedit.isSelected = matrixedit.name == m.name;
            });
        }
        addRow() {
            this.getSelected().addRow();
        }
        removeRow() {
            this.getSelected().removeRow();
        }
        addCol() {
            this.getSelected().addCol();
        }
        removeCol() {
            this.getSelected().removeCol();
        }
        clear() {
            this.matrix.A.clear();
            this.matrix.B.clear();
        }
        changeCell(name, i, j, value) {
            console.log('change cell');
            this.$scope.matrix.changeCell(name, i, j, value);
        }
        swap() {
            this.matrix.swap();
        }
        onFocus() {
            console.log('focus');
            this.state = PanelState.Focus;
        }
        onBlur() {
            console.log('blur');
            this.state = PanelState.Normal;
        }
        onSubmit() {
            console.log('submit');
            this.state = this.matrix.multiplication();
        }
    }
}
