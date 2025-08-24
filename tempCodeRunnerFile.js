// Importa o módulo 'readline', que permite ler entradas do usuário pelo terminal
const readline = require("readline");

// Cria uma interface para entrada/saída no terminal
const rl = readline.createInterface({
  input: process.stdin, // Define a entrada como o teclado
  output: process.stdout // Define a saída como o terminal
});

// Função que classifica o herói com base no nome e experiência
function classificarHeroi(nome, experiencia) {
  let nivel; // Variável que armazena o nível do herói

  // Estrutura switch usando 'true' para comparar múltiplas condições
  switch (true) {
    case experiencia < 1000: // Menos de 1000 XP = nível Ferro
    nivel = "Ferro"; 
    break;
    case experiencia <= 2000: // Até 2000 XP = nível Bronze 
    nivel = "Bronze"; 
    break;
    case experiencia <= 5000: // Até 5000 XP = nível Prata
    nivel = "Prata"; 
    break;
    case experiencia <= 7000: // Até 7000 XP = nível Ouro
    nivel = "Ouro"; 
    break;
    case experiencia <= 8000: // Até 8000 XP = nível Platina
    nivel = "Platina"; 
    break;
    case experiencia <= 9000: // Até 9000 XP = nível Ascendente
    nivel = "Ascendente"; 
    break;
    case experiencia <= 10000: // Até 10000 XP = nível Imortal
    nivel = "Imortal"; 
    break;
    default: // Mais de 10000 XP = nível Radiante 
    nivel = "Radiante";
  }

  // Retorna uma mensagem com o nome do herói e seu nível
  return `O Herói ${nome} está no nível ${nivel}`;
}

// Pergunta ao usuário o nome do herói
rl.question("Digite o nome do herói: ", (nome) => {
  // Pergunta ao usuário a quantidade de experiência (XP)
  rl.question("Digite a experiência (XP): ", (xp) => {
    const experiencia = parseInt(xp); // Converte a entrada de string para número
    console.log(classificarHeroi(nome, experiencia)); // Chama a função e exibe o resultado
    rl.close(); // Fecha a interface de leitura do terminal
  });
});
