function converter() {
  const de = document.getElementById("de").value;
  const para = document.getElementById("para").value;
  const valorInput = document.getElementById("valor").value;

  const resultado = document.getElementById("resultado");

  // 🔒 Validação
  if (!valorInput || valorInput <= 0) {
    alert("Digite um valor válido");
    return;
  }

  // ⏳ Loading
  resultado.innerText = "Convertendo...";

  const valor = parseFloat(valorInput);

  // 💰 Taxas fixas (exemplo)
  const taxas = {
    BRL: 1,
    USD: 5,
    EUR: 6,
  };

  // 🔄 Converter para base (BRL)
  const valorEmBRL = valor / taxas[de];

  // 🔁 Converter para moeda final
  const convertido = valorEmBRL * taxas[para];

  // 💎 Formatar resultado
  const formatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: para,
  }).format(convertido);

  // ✅ Exibir resultado
  resultado.innerText = formatado;
}

// 🔄 Trocar moedas
function trocar() {
  const de = document.getElementById("de");
  const para = document.getElementById("para");

  const temp = de.value;
  de.value = para.value;
  para.value = temp;

  converter();
}
