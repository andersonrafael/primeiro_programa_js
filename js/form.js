var botaoAdicionar = document.querySelector("#Adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");
  var paciente = obtemPacienteDoFormulario(form);



  var erros = validaPaciente(paciente);
  console.log(erros);
  if (erros.length > 0){
    exibeMesagensDeErro(erros);
    return;
  }

  adicionaPacienteNaTabela(paciente);
  
  form.reset();
  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente){
  var pacienteTr = montarTr(paciente);
  // adicionando paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function exibeMesagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });

}


function obtemPacienteDoFormulario(form){

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;

}

function montarTr(paciente){

  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  var pesoTd = montaTd(paciente.peso, "info-peso");
  var alturaTd = montaTd(paciente.altura, "info-altura");
  var gorduraTd = montaTd(paciente.gordura, "info-gordura");
  var imcTd = montaTd(paciente.imc, "info-imc");


  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));


  return pacienteTr;

}

function montaTd(dado,classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;

}
function validaPaciente(paciente){

  var erros = [];

  if (paciente.nome.length == 0) {
    erros.push("nome invalido");
  }

  if (!validaPeso(paciente.peso)) {
    erros.push("peso invalido");
  }
  if (!validaAltura(paciente.altura)) {
    erros.push("altura invalida");
  }
  if (paciente.gordura.length == 0) {
    erros.push("gordura invalida");
  }
  if (paciente.peso.length == 0) {
    erros.push("peso invalido");
  }
  if (paciente.altura.length == 0) {
    erros.push("altura invalida");
  }


  return erros;
}
