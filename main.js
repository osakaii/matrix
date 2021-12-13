const arena = document.querySelector('.arena')
const button  = document.querySelector('.button')

let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
let matrix2 = []

const draw = (matrix) =>{
    arena.innerHTML = " "
    matrix.map((el,index)=>{
        let row = document.createElement('div')
        row.classList.add('row')
        arena.append(row)
        el.map((el,index)=>{
            let block = document.createElement('div')
            block.classList.add('block')
            row.append(block)
            block.innerHTML = el
        })
    })
}
draw(matrix)
let k = 0
const rotate = () =>{

    for(let m = 0; m < matrix.length; m++){
        matrix2.push([])
    }
    for(let i = matrix.length -1; i >= 0; i--){
        matrix[i].map((el,index)=>{
            k = index
            matrix2[k].push(el)
        })
    }
    matrix = matrix2
    draw(matrix)
    matrix2 = []
}

button.addEventListener('click',()=>rotate())