const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    // tipos
    const tipoLoja = document.querySelector("#tipoLoja").checked;
    const tipoRestaurante = document.querySelector("#tipoRestaurante").checked;
    const tipoQuiosque = document.querySelector("#tipoQuiosque").checked;
    const tipoBox = document.querySelector("#tipoBox").checked;

    // estado
    const localizacaoRJ = document.querySelector("#localizacaoRJ").checked;
    const localizacaoSP = document.querySelector("#localizacaoSP").checked;

    // preco
    const ate8000 = document.querySelector("#ate8000").checked;
    const de8a15 = document.querySelector("#de8a15").checked;
    const acima15000 = document.querySelector("#acima15000").checked;

    // tamanho
    const ate50 = document.querySelector("#tamAte50").checked;
    const de50a100 = document.querySelector("#tam50a100").checked;
    const de100a200 = document.querySelector("#tam100a200").checked;

    const cards = document.querySelectorAll(".card-group");

    cards.forEach((card) => {
      const tipo = card.dataset.tipo;
      const localizacao = card.dataset.localizacao;
      const preco = parseInt(card.dataset.preco);
      const tamanho = card.dataset.tamanho;

      const showCard =
        (!tipoBox || tipo === "Box") &&
        (!tipoLoja || tipo === "Loja") &&
        (!tipoQuiosque || tipo === "Quiosque") &&
        (!tipoRestaurante || tipo === "Restaurante") &&
        (!localizacaoRJ || localizacao === "Rio de Janeiro") &&
        (!localizacaoSP || localizacao === "Sao Paulo") &&
        (!ate8000 || preco <= 8000) &&
        (!de8a15 || (preco > 8000 && preco <= 15000)) &&
        (!acima15000 || preco > 15000) &&
        (!ate50 || tamanho === "ate50") &&
        (!de50a100 || tamanho === "50a100") &&
        (!de100a200 || tamanho === "100a200");

      if (showCard) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

///
