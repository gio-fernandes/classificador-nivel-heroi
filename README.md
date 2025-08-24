🦸 Classificador de Heróis por Experiência (XP) ⚔️

# Descrição:
- Este projeto foi desenvolvido como parte de um desafio proposto pelo Felipe Aguiar na plataforma DIO, que classifica heróis com base em seu nome e quantidade de experiência (XP). 

- O programa solicita ao usuário o nome do herói e sua experiência, e retorna o nível correspondente, variando de "Ferro" a "Radiante", conforme a quantidade de XP.

## 🚀 Funcionalidades:
- Solicita o nome e a experiência (XP) do herói via terminal.

- Classifica o herói em um dos seguintes níveis com base na experiência:
 -- Ferro: Menos de 1000 XP
 -- Bronze: 1001 a 2000 XP
 -- Prata: 2001 a 5000 XP
 -- Ouro: 5001 a 7000 XP
 -- Platina: 7001 a 8000 XP
 -- Ascendente: 8001 a 9000 XP
 -- Imortal: 9001 a 10000 XP
 -- Radiante: Acima de 10000 XP

- Exibe uma mensagem com o nome do herói e seu nível.

### 💻 Requisitos:

- Node.js instalado no sistema para executar o script.
- O script utiliza o módulo nativo readline do Node.js, que não requer instalação adicional.

#### ⚡ Como Executar:

- Certifique-se de que o Node.js está instalado em sua máquina. Você pode baixá-lo em nodejs.org.
- Salve o código fornecido em um arquivo com extensão .js (por exemplo: classificador.js).
- Abra o terminal na pasta onde o arquivo está salvo.
- Execute o comando: "node classificador.js"

- Siga as instruções no terminal:
 -- Digite o nome do herói quando solicitado.
 -- Digite a quantidade de experiência (XP) do herói.

- O programa exibirá o nível do herói com base nos dados fornecidos.

##### 📝 Exemplo de Uso:

Digite o nome do herói: Gandalf
Digite a experiência (XP): 9500
O Herói Gandalf está no nível Imortal

##### 🔧 Estrutura do Código:

- Módulo readline: Utilizado para capturar entradas do usuário no terminal.
- Função classificarHeroi: Recebe o nome e a experiência do herói, determina o nível com base em uma estrutura switch e retorna uma mensagem formatada.
- Interface de entrada/saída: Configurada para ler o nome e a experiência do usuário, processar os dados e exibir o resultado.

---

Feito com 💜 por Giovanna Fernandes.
