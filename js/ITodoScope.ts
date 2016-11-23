/// <reference path='_all.ts' />

module todos {
    export interface ITodoScope extends ng.IScope {
        matrix: Matrix;
        matrixEdit: Array<MatrixItem>;
        matrixSelect: MatrixItem;
        vm: MatrixCtrl;
    }
}
