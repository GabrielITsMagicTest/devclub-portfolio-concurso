const cards = document.getElementById("cards");

let posicao = 0;


function avancar(){

    const largura = 285;

    const limite = cards.scrollWidth - cards.parentElement.clientWidth;


    if(posicao < limite){
        posicao += largura;
    }


    cards.style.transform = `translateX(-${posicao}px)`;

}



function voltar(){

    const largura = 285;


    if(posicao > 0){
        posicao -= largura;
    }


    cards.style.transform = `translateX(-${posicao}px)`;

}