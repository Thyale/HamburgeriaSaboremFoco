var contadorCarrinho = 0
var somandocarrinho = window.document.querySelector("p.carrinhosomatorio")
var contadorsmash = 0
var contadorbacon = 0
var contadorsalad = 0
var contadorfrango = 0
var contadorcoca = 0
var contadorguarana = 0
var transparencia = window.document.querySelector("div.tranparencia")
var carrinho = window.document.querySelector("section.carrinho")

var pagamento = window.document.querySelector("section.pagamento")
var fecharpag = window.document.querySelector("p.fecharpagamento")

var totalapagar = window.document.querySelector("strong.totalvalorpago")
var valortotal = 0

var valortotalsmash = 0.0
var valorsmash = 18.9

var valortotalbacon = 0.0
var valorbacon = 32.9

var valortotalsalad = 0.0
var valorsalad = 25.9

var valortotalfrango = 0.0
var valorfrango = 34.9

var valortotalcoca = 0.0
var valorcoca = 6.9

var valortotalguarana = 0.0
var valorguarana = 6.9

function  atualizarValorTotal(){
  valortotal =
    valortotalbacon +
    valortotalcoca +
    valortotalfrango +
    valortotalguarana +
    valortotalsalad +
    valortotalsmash

  totalapagar.innerHTML = `R$${valortotal.toFixed(2)}`
}

function HorarioDeFuncionamento() {
  let btnhorario = window.document.querySelector("p.HorarioDeFuncionamento")
  let data = new Date()
  let hora = data.getHours()

  if (hora >= 18 && hora <= 22) {
    btnhorario.style.backgroundColor = "green"
  } else {
    btnhorario.style.backgroundColor = "red"
  }
} // Horário de funcionamento. Muda de acordo com o horário atual.

function Abrir() {
  transparencia.style.display = "flex"
  carrinho.style.display = "flex"
  totalapagar.innerHTML =  `R$${valortotal.toFixed(2)}`
}

function fechar() {
  transparencia.style.display = "none"
  carrinho.style.display = "none"
}

function finalizar() {
  carrinho.style.display = "none"
  pagamento.style.display = "flex"

  // Subtrair os valores individuais dos itens do valor total
  valortotal -= valortotalsmash
  valortotal -= valortotalbacon
  valortotal -= valortotalsalad
  valortotal -= valortotalfrango
  valortotal -= valortotalcoca
  valortotal -= valortotalguarana

  // Resetar os valores individuais dos itens para zero
  valortotalsmash = 0
  valortotalbacon = 0
  valortotalsalad = 0
  valortotalfrango = 0
  valortotalcoca = 0
  valortotalguarana = 0

  // Atualizar o valor total exibido na interface do usuário
  totalapagar.innerHTML = `R$ ${valortotal.toFixed(2)}`

  // Resetar os contadores de quantidade e elementos HTML relacionados
  var somandocarrinho = window.document.querySelector("p.carrinhosomatorio")
  contadorCarrinho = 0
  somandocarrinho.innerHTML = `(${contadorCarrinho})`

  var quantidadesmash = window.document.querySelector(
    "p.quantidadeadicionadasmash"
  )
  contadorsmash = 0
  quantidadesmash.innerHTML = `Quantidade(${contadorsmash})`
  var nocarrinhosmash = window.document.querySelector("div#Smash")
  nocarrinhosmash.style.display = "none"

  var quantidadeBacon = window.document.querySelector(
    "p.quantidadeadicionadaBacon"
  )
  contadorbacon = 0
  quantidadeBacon.innerHTML = `Quantidade(${contadorbacon})`
  var nocarrinhosmash = window.document.querySelector("div#Bacon")
  nocarrinhosmash.style.display = "none"

  var quantidadeSalad = window.document.querySelector(
    "p.quantidadeadicionadaSalad"
  )
  contadorsalad = 0
  quantidadeSalad.innerHTML = `Quantidade(${contadorsalad})`
  var nocarrinhosmash = window.document.querySelector("div#Salad")
  nocarrinhosmash.style.display = "none"

  var quantidadeFrango = window.document.querySelector(
    "p.quantidadeadicionadafrango"
  )
  contadorfrango = 0
  quantidadeFrango.innerHTML = `Quantidade(${contadorfrango})`
  var nocarrinhofrango = window.document.querySelector("div#Frango")
  nocarrinhofrango.style.display = "none"

  var quantidadeCoca = window.document.querySelector(
    "p.quantidadeadicionadacoca"
  )
  contadorcoca = 0
  quantidadeCoca.innerHTML = `Quantidade(${contadorcoca})`
  var nocarrinhococa = window.document.querySelector("div#coca")
  nocarrinhococa.style.display = "none"

  var quantidadeGuarana = window.document.querySelector(
    "p.quantidadeadicionadaguarana"
  )
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

function fecharpagamento(){
  transparencia.style.display = "none"
  carrinho.style.display = "none"
  pagamento.style.display = "none"
}

function adicionaraocarrinhoSmash() {
  contadorCarrinho++
  somandocarrinho.innerHTML = `(${contadorCarrinho})`

  var quantidadesmash = window.document.querySelector(
    "p.quantidadeadicionadasmash"
  )
  contadorsmash++
  quantidadesmash.innerHTML = `Quantidade(${contadorsmash})`

  var nocarrinhosmash = window.document.querySelector("div#Smash")
  nocarrinhosmash.style.display = "flex"

  valortotalsmash = valorsmash * contadorsmash
  atualizarValorTotal()

  Swal.fire({
    icon: "success",
    title: "Item adicionado ao carrinho!",
    showConfirmButton: false,
    timer: 1300, // Tempo em milissegundos (1.5 segundos) antes do alerta fechar automaticamente
  })
} //Quando adcionamos o hamburguer smash, o contador do carrinho é acrescentado.
function removersmash() {
  var nocarrinhosmash = window.document.querySelector("div#Smash")
  nocarrinhosmash.style.display = "none"
  valortotalsmash = 0
  atualizarValorTotal()
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

  valortotalbacon = valorbacon * contadorbacon
  atualizarValorTotal()

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
  valortotalbacon = 0
  atualizarValorTotal()
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

  valortotalsalad = valorsalad* contadorsalad
  atualizarValorTotal()

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

  valortotalsalad = 0
  atualizarValorTotal()
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

  valortotalfrango = valorfrango * contadorfrango
  atualizarValorTotal()

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

  valortotalfrango = 0
  atualizarValorTotal()
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

  valortotalcoca = valorcoca * contadorcoca
  atualizarValorTotal()

  Swal.fire({
    icon: "success",
    title: "Item adicionado ao carrinho!",
    showConfirmButton: false,
    timer: 1300, // Tempo em milissegundos (1.5 segundos) antes do alerta fechar automaticamente
  })
} //Quando adcionamos a coca, o contador do carrinho é acrescentado.
function removercoca() {
  var nocarrinhococa = window.document.querySelector("div#coca")
  nocarrinhococa.style.display = "none"

  valortotalcoca = 0
  atualizarValorTotal()
} //Tiramos a coca do carrinho.

function adicionaraocarrinhoGuarana() {
  //Quando adcionamos a coca, o contador do carrinho é acrescentado.
  contadorCarrinho++
  somandocarrinho.innerHTML = `(${contadorCarrinho})`

  var quantidadeGuarana = window.document.querySelector(
    "p.quantidadeadicionadaguarana"
  )
  contadorguarana++
  quantidadeGuarana.innerHTML = `Quantidade(${contadorguarana})`

  var nocarrinhoguarana = window.document.querySelector("div#guarana")
  nocarrinhoguarana.style.display = "flex"

  valortotalguarana = valorguarana* contadorguarana
  atualizarValorTotal()

  Swal.fire({
    icon: "success",
    title: "Item adicionado ao carrinho!",
    showConfirmButton: false,
    timer: 1300, // Tempo em milissegundos (1.5 segundos) antes do alerta fechar automaticamente
  })
} //Quando adcionamoso guaraná, o contador do carrinho é acrescentado.
function removerguarana() {
  var nocarrinhoguarana = window.document.querySelector("div#guarana")
  nocarrinhoguarana.style.display = "none"
  valortotalguarana = 0
  atualizarValorTotal()
} //Tiramos o guaraná do carrinho.
