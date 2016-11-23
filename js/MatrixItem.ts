/// <reference path='_all.ts' />

module todos {
    'use strict';

    export class MatrixItem {
        public name: string;
        public shortName: string;
        public array: Array<Array<number>>;
        public isSelected: boolean;
        public isDisabled: boolean;
        public n: number;
        public m: number;
        constructor(
            _name: string,
            _shortName: string,
            _n: number,
            _m: number,
            _isDisabled: boolean
        ) {
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
        clear() {
            this.array = [];
            for (var i = 0; i < this.n; i++) {
                var ar = [];
                for (var j = 0; j < this.m; j++) {
                    ar.push(null);
                }
                this.array.push(ar);
            }
        }
        addRow() {
            if (this.n < 10) {
                this.array.push(new Array(this.m));
                this.n++;
            }

        }
        removeRow() {
            if (this.n > 2) {
                this.array.splice(-1, 1);
                this.n--;
            }
        }
        addCol() {
            if (this.m < 10) {
                for (var i = 0; i < this.n; i++) {
                    this.array[i].push(null);
                }
                this.m++;
            }
        }
        removeCol() {
            if (this.m > 2) {
                for (var i = 0; i < this.n; i++) {
                    this.array[i].splice(-1, 1);
                }
                this.m--;
            }
        }
        getStyle() {
            if (this.shortName == 'B') {
                return 'display: inline-block';
            }
            else {
                return 'display: block';
            }
        }
    }
}
