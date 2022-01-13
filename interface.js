document.addEventListener('DOMContentLoaded',()=>{


    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>
    {
        square.addEventListener("click",clickT);
    })

})





function clickT(s)
{


    let jogador10 = document.getElementById("jogador1");
    let jogador20 = document.getElementById("jogador2");

    
    if(PP == 0){jogador10.setAttribute("style","animation-name: mudarTexto"); jogador20.setAttribute("style","animation-name: kkk")} else{jogador20.setAttribute("style","animation-name: mudarTexto"); jogador10.setAttribute("style","animation-name: kkk")}  

    if(GameOver){
        
        

        return console.log("final do jogo") };

    let square = s.target;
    let postion = square.id;
   defineHouse(postion);

   updateSquare(postion);

   GameOver = fimDoJogo();
   let onew = PP;

   if(GameOver){

       if(onew == 1){ onew = 0} else { onew = 1}

    let jogadoress = document.getElementsByClassName("jogadores")[0];
   jogadoress.innerHTML = `${jogadores[onew]} é o Vencedor!`;
   return console.log("fim do jogo!")};


  

}


function updateSquare(square)
{

let squares = document.querySelectorAll(".square");


    if(board[square] != "")
    {
            if(board[square] == "X")
            {
                // console.log("waldemar")
                squares[square].innerHTML = `<img width="100px" height="100px" src="./x.gif" alt="">`;
                squares[square].setAttribute("style","animation-name: btnAnimacao;")
            }

            if(board[square] == "O")
            {
                // console.log("waldema")
                // squares[square].setAttribute("style","animation-name: btnAnimacao;animation-direction: reverse;")
                squares[square].innerHTML = `<img " src="./Ot.png" alt="">`
            }



    } 
}
//Mudarh2




let nome1 = document.getElementById("h2");
let nome2 = document.getElementById("h3");

function mudarh2()
{
nome1.innerHTML = document.getElementById("nome1").value; 
}

function mudarh3()
{
nome2.innerHTML = document.getElementById("nome2").value; 
}

let enviar = document.getElementById("enviar");


var jogadores = [];





function enviado()
{

if(nome1.innerText != "" && nome2.innerText != ""){
jogadores[0] = nome1.innerText;
jogadores[1] = nome2.innerText;
mudarHtml();

jogador1.innerHTML = jogadores[0];
jogador2.innerHTML = jogadores[1];



}
}




function mudarHtml()
{

let total = document.getElementById("TOTAL");
total.setAttribute("style","display: block");

let final = document.getElementById("final");
final.setAttribute("style","display: none");
    
}
























