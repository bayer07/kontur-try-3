/// <reference path='_all.ts' />

module todos {
    export interface ITodoScope extends ng.IScope {
        matrix: Array<MatrixItem>;
        newTodo: string;
        // editedTodo: TodoItem;
        // originalTodo: TodoItem;
        // remainingCount: number;
        // doneCount: number;
        // allChecked: boolean;
        // reverted: boolean;
        // statusFilter: { completed?: boolean };
        // location: ng.ILocationService;
        test: string;
        vm: MatrixCtrl;
    }
}
