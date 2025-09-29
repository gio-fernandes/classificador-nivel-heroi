// Função que classifica o herói com base no nome e experiência
function classificarHeroi() {
  const nome = document.getElementById("nome").value.trim();
  const experiencia = parseInt(document.getElementById("xp").value);

  // Validação de campos
  if (!nome || isNaN(experiencia)) {
    document.getElementById("resultado").textContent = "⚠️ Preencha todos os campos!";
    return;
  }

  let nivel;
  switch (true) {
    case experiencia < 1000:
      nivel = "Ferro";
      break;
    case experiencia <= 2000:
      nivel = "Bronze";
      break;
    case experiencia <= 5000:
      nivel = "Prata";
      break;
    case experiencia <= 7000:
      nivel = "Ouro";
      break;
    case experiencia <= 8000:
      nivel = "Platina";
      break;
    case experiencia <= 9000:
      nivel = "Ascendente";
      break;
    case experiencia <= 10000:
      nivel = "Imortal";
      break;
    default:
      nivel = "Radiante";
  }

  // Mostra o resultado na tela
  document.getElementById("resultado").textContent =
    `O Herói ${nome} está no nível ${nivel}!`;
}

// Função para limpar os campos e o resultado
function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("xp").value = "";
  document.getElementById("resultado").textContent = "";
  document.getElementById("nome").focus();
}

// Atalhos de teclado para Enter
document.getElementById("nome").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // evita envio de formulário
    document.getElementById("xp").focus(); // vai pro próximo campo
  }
});

document.getElementById("xp").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    classificarHeroi(); // executa direto a função
  }
});

