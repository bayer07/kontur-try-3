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
            this.A = new MatrixItem(nameA,'A', m, n);
            this.B = new MatrixItem(nameB,'B', n, k);
            this.C = new MatrixItem(nameC,'C', m, k);
            this.A.isSelected = true;
        }
        getMatrix() {
            var result = [];
            result.push(this.A);
            result.push(this.B);
            return result;
        }
        clear(){
          this.A.array.forEach(function(item){
            item.forEach(function(cell){
              cell=null;
            });
          });
        }
    }
}
