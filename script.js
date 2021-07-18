function MudarCor(){
   let corCaixaA = BuscarCorCaixa("caixaA");
   let corCaixaB = BuscarCorCaixa("caixaB");

   console.log(`cor caixa a: ${corCaixaA}`);
   console.log(`cor caixa b: ${corCaixaB}`);

   let transferir =  corCaixaA;
   corCaixaA = corCaixaB;
   corCaixaB = transferir;
   
   document.getElementById("corRGB-a").textContent =  corCaixaA;
   document.getElementById("corRGB-b").textContent =  corCaixaB;
   
   document.getElementById("caixaA").style.backgroundColor = corCaixaA;
   document.getElementById("caixaB").style.backgroundColor = corCaixaB;
}
