const value = document.querySelector(".total")
const filmes = document.querySelectorAll(".filme")

let total = 0

filmes.forEach(filme => {
  const btnMais = filme.querySelector(".bx-plus")
  const btnMenos = filme.querySelector(".bx-minus")
  const qtdEl = filme.querySelector(".q")
  const precoTexto = filme.querySelector(".valor").textContent

  const preco = parseFloat(precoTexto.replace("R$", "").replace(",", "."))

  let quantidade = 0

  btnMais.addEventListener("click", () => {
    quantidade++
    total += preco

    qtdEl.textContent = quantidade
    atualizarTotal()
  })

  btnMenos.addEventListener("click", () => {
    if (quantidade > 0) {
      quantidade--
      total -= preco

      qtdEl.textContent = quantidade
      atualizarTotal()
    }
  })
})

function atualizarTotal() {
  value.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`
}