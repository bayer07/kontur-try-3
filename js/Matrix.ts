/// <reference path='_all.ts' />

module todos {
    'use strict';

    export class Matrix {
        public A: MatrixItem;
        public B: MatrixItem;
        public C: MatrixItem;
        constructor(
            nameC: string,
            nameA: string,
            nameB: string,
            n: number,
            m: number,
            k: number
        ) {
            this.A = new MatrixItem(nameA, 'A', m, n, false);
            this.B = new MatrixItem(nameB, 'B', n, k, false);
            this.C = new MatrixItem(nameC, 'C', m, k, true);
            this.A.isSelected = true;
        }
        getMatrix() {

            var result = [];
            result.push(this.A);
            result.push(this.B);
            return result;
        }
        changeCell(name, i, j, value) {

            if (name == this.A.name) {
                this.A.array[i][j] = value;
            } else if (name == this.B.name) {
                this.B.array[i][j] = value;
            }
        }
        swap() {

            var temp = this.A;
            this.A = this.B;
            this.B = temp;
        }
        multiplication() {

            if (this.A.m != this.B.n) {
                return PanelState.Error;
            }

            this.C = new MatrixItem(this.C.name, 'C', this.A.n, this.B.m, true);

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

            return PanelState.Normal;
        }
    }
}
