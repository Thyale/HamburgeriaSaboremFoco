var contadorCarrinho = 0;
var somandocarrinho = window.document.querySelector("p.carrinhosomatorio");
var contadorsmash = 0
var contadorbacon = 0
var contadorsalad = 0
var contadorfrango = 0
var contadorcoca = 0
var contadorguarana = 0
var transparencia = window.document.querySelector("div.tranparencia")
var carrinho = window.document.querySelector("section.carrinho")


function HorarioDeFuncionamento(){
  let btnhorario = window.document.querySelector("p.HorarioDeFuncionamento")
  let data = new Date()
  let hora = data.getHours()

  if(hora >= 18 && hora <=22){
    btnhorario.style.backgroundColor = "green"
  }else{
    btnhorario.style.backgroundColor = "red"
  }
} // Horário de funcionamento. Muda de acordo com o horário atual.

function Abrir(){
  transparencia.style.display = "flex"
  carrinho.style.display = "flex"
}

function fechar(){
  transparencia.style.display = "none"
  carrinho.style.display = "none"
}

function finalizar(){
  transparencia.style.display = "none"
  carrinho.style.display = "none"

  var somandocarrinho = window.document.querySelector("p.carrinhosomatorio")
  contadorCarrinho = 0
  somandocarrinho.innerHTML = `(${contadorCarrinho})`

  var quantidadesmash = window.document.querySelector("p.quantidadeadicionadasmash")
  contadorsmash = 0
  quantidadesmash.innerHTML = `Quantidade(${contadorsmash})`
  var nocarrinhosmash = window.document.querySelector("div#Smash")
  nocarrinhosmash.style.display = "none"

  var quantidadeBacon = window.document.querySelector("p.quantidadeadicionadaBacon")
  contadorbacon = 0
  quantidadeBacon.innerHTML = `Quantidade(${contadorbacon})`
  var nocarrinhosmash = window.document.querySelector("div#Bacon")
  nocarrinhosmash.style.display = "none"

  var quantidadeSalad = window.document.querySelector("p.quantidadeadicionadaSalad")
  contadorsalad = 0
  quantidadeSalad.innerHTML = `Quantidade(${contadorsalad})`
  var nocarrinhosmash = window.document.querySelector("div#Salad")
  nocarrinhosmash.style.display = "none"

  var quantidadeFrango = window.document.querySelector("p.quantidadeadicionadafrango")
  contadorfrango = 0
  quantidadeFrango.innerHTML = `Quantidade(${contadorfrango})`
  var nocarrinhofrango = window.document.querySelector("div#Frango")
  nocarrinhofrango.style.display = "none"

  var quantidadeCoca = window.document.querySelector("p.quantidadeadicionadacoca")
  contadorcoca = 0
  quantidadeCoca.innerHTML = `Quantidade(${contadorcoca})`
  var nocarrinhococa = window.document.querySelector("div#coca")
  nocarrinhococa.style.display = "none"

  var quantidadeGuarana = window.document.querySelector("p.quantidadeadicionadaguarana")
  contadorguarana = 0
  quantidadeGuarana.innerHTML = `Quantidade(${contadorguarana})`
  var nocarrinhoguarana = window.document.querySelector("div#guarana")
  nocarrinhoguarana.style.display = "none"

  Swal.fire({
    icon: "success",
    title: "Compra Finalizada!",
    showConfirmButton: false,
    timer: 1300, // Tempo em milissegundos (1.5 segundos) antes do alerta fechar automaticamente
  })
}



function adicionaraocarrinhoSmash() {
  contadorCarrinho++;
  somandocarrinho.innerHTML = `(${contadorCarrinho})`;

  var quantidadesmash = window.document.querySelector(
    "p.quantidadeadicionadasmash"
  )
  contadorsmash++
  quantidadesmash.innerHTML = `Quantidade(${contadorsmash})`

  var nocarrinhosmash = window.document.querySelector("div#Smash")
  nocarrinhosmash.style.display = "flex"

  Swal.fire({
    icon: "success",
    title: "Item adicionado ao carrinho!",
    showConfirmButton: false,
    timer: 1300, // Tempo em milissegundos (1.5 segundos) antes do alerta fechar automaticamente
  })
} //Quando adcionamos o hamburguer smash, o contador do carrinho é acrescentado.
function removersmash(){
  var nocarrinhosmash = window.document.querySelector("div#Smash")
  nocarrinhosmash.style.display = "none"
} //Tiramos o hamburguer smash do carrinho.

function adicionaraocarrinhoBacon() {
  contadorCarrinho++
  somandocarrinho.innerHTML = `(${contadorCarrinho})`

  var quantidadeBacon = window.document.querySelector(
    "p.quantidadeadicionadaBacon"
  )
  contadorbacon++
  quantidadeBacon.innerHTML = `Quantidade(${contadorbacon})`

  var nocarrinhoBacon = window.document.querySelector("div#Bacon")
  nocarrinhoBacon.style.display = "flex"

  Swal.fire({
    icon: "success",
    title: "Item adicionado ao carrinho!",
    showConfirmButton: false,
    timer: 1300, // Tempo em milissegundos (1.5 segundos) antes do alerta fechar automaticamente
  })
} //Quando adcionamos o hamburguer bacon, o contador do carrinho é acrescentado.
function removerbacon() {
  var nocarrinhosmash = window.document.querySelector("div#Bacon")
  nocarrinhosmash.style.display = "none"
} //Tiramos o hamburguer Salad do carrinho.

function adicionaraocarrinhoSalad() {
  contadorCarrinho++
  somandocarrinho.innerHTML = `(${contadorCarrinho})`

  var quantidadeSalad = window.document.querySelector(
    "p.quantidadeadicionadaSalad"
  )
  contadorsalad++
  quantidadeSalad.innerHTML = `Quantidade(${contadorsalad})`

  var nocarrinhoSalad = window.document.querySelector("div#Salad")
  nocarrinhoSalad.style.display = "flex"

  Swal.fire({
    icon: "success",
    title: "Item adicionado ao carrinho!",
    showConfirmButton: false,
    timer: 1300, // Tempo em milissegundos (1.5 segundos) antes do alerta fechar automaticamente
  })
} //Quando adcionamos o hamburguer Salad, o contador do carrinho é acrescentado.
function removersalad() {
  var nocarrinhosmash = window.document.querySelector("div#Salad")
  nocarrinhosmash.style.display = "none"
} //Tiramos o hamburguer Salad do carrinho.

function adicionaraocarrinhoFrango() {
  contadorCarrinho++
  somandocarrinho.innerHTML = `(${contadorCarrinho})`

  var quantidadeFrango = window.document.querySelector(
    "p.quantidadeadicionadafrango"
  )
  contadorfrango++
  quantidadeFrango.innerHTML = `Quantidade(${contadorfrango})`

  var nocarrinhofrango = window.document.querySelector("div#Frango")
  nocarrinhofrango.style.display = "flex"

  Swal.fire({
    icon: "success",
    title: "Item adicionado ao carrinho!",
    showConfirmButton: false,
    timer: 1300, // Tempo em milissegundos (1.5 segundos) antes do alerta fechar automaticamente
  })
} //Quando adcionamos o hamburguer De frango, o contador do carrinho é acrescentado.
function removerfrango() {
  var nocarrinhofrango = window.document.querySelector("div#Frango")
  nocarrinhofrango.style.display = "none"
} //Tiramos o hamburguer de Frango do carrinho.

function adicionaraocarrinhoCoca() {
  contadorCarrinho++
  somandocarrinho.innerHTML = `(${contadorCarrinho})`

  var quantidadeCoca = window.document.querySelector(
    "p.quantidadeadicionadacoca"
  )
  contadorcoca++
  quantidadeCoca.innerHTML = `Quantidade(${contadorcoca})`

  var nocarrinhococa = window.document.querySelector("div#coca")
  nocarrinhococa.style.display = "flex"

  Swal.fire({
    icon: "success",
    title: "Item adicionado ao carrinho!",
    showConfirmButton: false,
    timer: 1300, // Tempo em milissegundos (1.5 segundos) antes do alerta fechar automaticamente
  })
}  //Quando adcionamos a coca, o contador do carrinho é acrescentado.
function removercoca() {
  var nocarrinhococa = window.document.querySelector("div#coca")
  nocarrinhococa.style.display = "none"
} //Tiramos a coca do carrinho.

function adicionaraocarrinhoGuarana() {  //Quando adcionamos a coca, o contador do carrinho é acrescentado.
  contadorCarrinho++
  somandocarrinho.innerHTML = `(${contadorCarrinho})`

  var quantidadeGuarana = window.document.querySelector(
    "p.quantidadeadicionadaguarana"
  )
  contadorguarana++
  quantidadeGuarana.innerHTML = `Quantidade(${contadorguarana})`

  var nocarrinhoguarana = window.document.querySelector("div#guarana")
  nocarrinhoguarana.style.display = "flex"

  Swal.fire({
    icon: "success",
    title: "Item adicionado ao carrinho!",
    showConfirmButton: false,
    timer: 1300, // Tempo em milissegundos (1.5 segundos) antes do alerta fechar automaticamente
  })
}  //Quando adcionamoso guaraná, o contador do carrinho é acrescentado.
function removerguarana() {
  var nocarrinhoguarana = window.document.querySelector("div#guarana")
  nocarrinhoguarana.style.display = "none"
} //Tiramos o guaraná do carrinho.
