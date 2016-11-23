/// <reference path='_all.ts' />
module todos {
    'use strict';
    export class MatrixCtrl {
        private matrix: Matrix;
        public static $inject = [
            '$scope'
        ];
        constructor(
            private $scope: ITodoScope
        ) {
            this.initMatrix();
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
        initMatrix() {
            this.$scope.matrix = this.matrix = new Matrix('Матрица C','Матрица А', 'Матрица B', 2, 4, 3);
            this.$scope.matrixEdit = this.matrix.getMatrix();
        }
        pickMatrix(m) {
            m.isSelected = true;
            this.$scope.matrixEdit.forEach(function(matrixedit) {
                matrixedit.isSelected = matrixedit.name == m.name;
            });
        }
        addRow() {
          console.log("!");
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
        clear(){
          this.matrix.clear();
        }
    }
}
