/// <reference path='_all.ts' />

module todos {
    'use strict';

    export class MatrixItem {
        public name: string;
        public shortName: string;
        public array: Array<Array<number>>;
        public isSelected: boolean;
        private _n: number;
        private _m: number;
        constructor(
            _name: string,
            _shortName: string,
            n: number,
            m: number
        ) {
            this.name = _name;
            this.shortName = _shortName;
            this.array = [];
            for (var i = 0; i < n; i++) {
                var ar = [];
                for(var j=0;j<m;j++){
                  ar.push(null);
                }
                this.array.push(ar);
            }
            this.isSelected = false;
            this._n = n;
            this._m = m;
        }
        addRow() {
            if (this._n < 10) {
                this.array.push(new Array(this._m));
                this._n++;
            }

        }
        removeRow() {
            if (this._n > 2) {
                this.array.splice(-1, 1);
                this._n--;
            }
        }
        addCol() {
            if (this._m < 10) {
                for (var i = 0; i < this._n; i++) {
                    this.array[i].push(null);
                }
                this._m++;
            }
        }
        removeCol() {
            if (this._m > 2) {
                for (var i = 0; i < this._n; i++) {
                    this.array[i].splice(-1, 1);
                }
                this._m--;
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
        change(){
console.log("change");
        }
    }
}
