var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
  event.target.parentNode.classList.add("fadeOut");
  
  setTimeout(function(){
    event.target.parentNode.remove();
  },500); //função para esperar meio segundo no codigo
  //var alvoEvento = event.target;
  //var paiDoAlvo = alvoEvento.parentNode;
    //paiDoAlvo.remove();
   //remove linha inteira
});
