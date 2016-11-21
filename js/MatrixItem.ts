/// <reference path='_all.ts' />

module todos {
    'use strict';

    export class MatrixItem {
        name: string;
        array: Array<Array<number>>;
        n: number;
        m: number;
        constructor(
            _name: string,
            _n: number,
            _m: number
        ) {
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
        getArray() {
            return this.array;
        }
    }
}
