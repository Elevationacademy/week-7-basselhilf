/* Write your code below */
class Matrix{

    constructor(numRows, numColumns) {
        this.matrix = this.generateMatrix(numRows, numColumns)
    }

    generateMatrix(numRows, numColumns) {
        let matrix = []
        let num = 1
        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(num++)
            }
        }
        return matrix
    }

    print(){
        console.log(this.matrix)
    }
     
    alter = function (r, c, v) {
        this.matrix[r][c] = v
    }

    get(rowNum, colNum) {
        return matrix[rowNum][colNum]
    }

    printColumn(matrix, colNum){
        for (let i = 0; i < matrix[colNum].length; i++) {
            console.log(matrix[i][colNum])
        }
    }

    printRow(matrix, rowNum){
            for (let i = 0; i < matrix[rowNum].length; i++) {
                console.log(matrix[rowNum][i])
            }
        }

    findCoordinate(value){
        for (let r = 0; r < numRows; r++) {
            for (let c = 0; c < numColumns; c++) {
                if(matrix[r][c]==value)
                return r , c
            }
        }
        }
}



//You can paste the code from the lesson below to test your solution
let m = new Matrix(3, 4)
m.print()
//prints
// /*
// 1       2       3       4
// 5       6       7       8
// 9       10      11      12
// */
// m.alter(0, 0, m.get(1, 1))
m.printColumn(0) //prints 6, 5, 9 (separate lines)
m.printRow(0) //prints 6, 2, 3, 4 (separate lines)



/* Do not remove the exports below */
module.exports = Matrix