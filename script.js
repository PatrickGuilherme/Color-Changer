
//Mudar as corres
function MudarCor(){
   let corCaixaA = BuscarCorCaixa("caixaA");
   let corCaixaB = BuscarCorCaixa("caixaB");

   console.log(`cor caixa a: ${corCaixaA}`);
   console.log(`cor caixa b: ${corCaixaB}`);

   //Trocar as cores
   let transferir =  corCaixaA;
   corCaixaA = corCaixaB;
   corCaixaB = transferir;
   
   //Exibir RGB utilizado
   document.getElementById("corRGB-a").textContent =  corCaixaA;
   document.getElementById("corRGB-b").textContent =  corCaixaB;
   
    //Trocar a cor das caixas
   document.getElementById("caixaA").style.backgroundColor = corCaixaA;
   document.getElementById("caixaB").style.backgroundColor = corCaixaB;
}

//Buscar cores das caixas
function BuscarCorCaixa(idCaixa){
     //Busca o elemento
     let tagCaixa = document.getElementById(idCaixa);
     
     //Busca e guarda o backgroundColor (RGB)
     let styleCaixa = window.getComputedStyle(tagCaixa);

     return styleCaixa.backgroundColor;    
}
