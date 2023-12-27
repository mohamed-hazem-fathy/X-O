let gridItems = document.getElementsByClassName("square")
let currentTurn = "X"
let gameIsFinshed = false
let boardArray = ["0","1","2","3","4","5","6","7","8"]

for (const item of gridItems ) {
    item.addEventListener("click", function() {
        if(gameIsFinshed){
            return
        }

        
        let value = item.getAttribute("value")
        let index = value - 1
        if(boardArray[index] == "X" || boardArray[index] == "O"){
            return
        }

        let squareContent = document.querySelector(`.square[value="${value}"]`)
        squareContent.innerHTML = currentTurn

        
        //filling the value logically
         
        boardArray[index] = currentTurn

        
        evaluateBoard()
        if(currentTurn == "X") {
            currentTurn = "O"
        }else{
            currentTurn = "X"
        }


        document.getElementById("instruction").textContent = `${currentTurn} turn`

    })




    function evaluateBoard(){ 
        //rows
        if( (boardArray[0] == boardArray[1] && boardArray[1] == boardArray[2]) ||
            (boardArray[3] == boardArray[4] && boardArray[4] == boardArray[5]) ||
            (boardArray[6] == boardArray[7] && boardArray[7] == boardArray[8]) ||
    
            //columns
            (boardArray[0] == boardArray[3] && boardArray[3] == boardArray[6]) ||
            (boardArray[1] == boardArray[4] && boardArray[4] == boardArray[7]) ||
            (boardArray[2] == boardArray[5] && boardArray[5] == boardArray[8]) ||
            //Diagonal
            (boardArray[0] == boardArray[4] && boardArray[4] == boardArray[8]) ||
            (boardArray[2] == boardArray[4] && boardArray[4] == boardArray[6]) 
            
        
        
        ){
    
        var Winner = currentTurn == "O" ? "O" :"X"
        gameIsFinshed = true
    
        alert(`${Winner} Won!`)
        
    }
    var isDraw =true 
    for(square of boardArray) {
        if(square !="X" && square != "O"){
            isDraw = false
        }
    }

    if(isDraw){
        gameIsFinshed = true
        alert("draw")
    }
    }


}

document.getElementById("reset-btn").addEventListener("click", function(){
    reset()
})

function reset() {
    for(item of gridItems){
        let value = item.getAttribute("value")
        let squareContent = document.querySelector(`.square[value="${value}"]`)
        squareContent.innerHTML = ""



        boardArray = ["0","1","2","3","4","5","6","7","8"]



    }
    gameIsFinshed = false
    currentTurn = "X"
    document.getElementById("instruction").innerText = `${currentTurn} turn`

}