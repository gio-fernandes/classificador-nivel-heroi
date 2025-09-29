# Classificador de Heróis por Experiência (XP) ⚔️

---

## Descrição:

Este projeto foi desenvolvido como parte de um desafio proposto pelo Felipe Aguiar na plataforma DIO, que classifica heróis com base em seu nome e quantidade de experiência (XP). 

O programa solicita ao usuário o nome do herói e sua experiência, e retorna o nível correspondente, variando de "Ferro" a "Radiante", conforme a quantidade de XP.

Além da versão para terminal, o projeto foi incrementado com HTML e CSS, proporcionando uma interface moderna, interativa e responsiva, com fundo de super-heróis transparente, efeitos de foco e hover nos inputs e botões, e adaptação para smartphones, tablets e desktops.

---

## Funcionalidades:

- Solicita o nome e a experiência (XP) do herói via terminal.

- Classifica o herói em um dos seguintes níveis com base na experiência:
   - Ferro: Menos de 1000 XP
   - Bronze: 1001 a 2000 XP
   - Prata: 2001 a 5000 XP
   - Ouro: 5001 a 7000 XP
   - Platina: 7001 a 8000 XP
   - Ascendente: 8001 a 9000 XP
   - Imortal: 9001 a 10000 XP
   - Radiante: Acima de 10000 XP

- Exibe uma mensagem com o nome do herói e seu nível.
- Versão Web: interface moderna e responsiva com HTML e CSS.
- Botão para classificar e botão para limpar os campos.
- Tecla Enter permite navegar entre os campos e executar a classificação rapidamente.

---

## Requisitos:

- Node.js instalado no sistema para executar a versão em terminal.

- Navegador moderno para utilizar a versão web com HTML e CSS.

---

## Como Executar:

### Versão no Terminal:

- Certifique-se de que o Node.js está instalado em sua máquina. Você pode baixá-lo em nodejs.org.
- Salve o código fornecido em um arquivo com extensão .js (por exemplo: classificador.js).
- Abra o terminal na pasta onde o arquivo está salvo.
- Execute o comando: "node classificador.js"

- Siga as instruções no terminal:
  - Digite o nome do herói quando solicitado.
  - Digite a quantidade de experiência (XP) do herói.

- O programa exibirá o nível do herói com base nos dados fornecidos.

### Versão Web:

- Abra o arquivo index.html em qualquer navegador moderno.
- Digite o nome do herói e a experiência (XP) nos campos correspondentes.
- Pressione a tecla "Enter" para avançar ou clique em "Classificar".
- Clique em "Limpar" para reiniciar os campos.

---

## Exemplo de Uso:

Digite o nome do herói: Batman

Digite a experiência (XP): 9500

`O Herói Batman está no nível Imortal`

---

## Visualização Online:

O projeto está hospedado no GitHub Pages e pode ser acessado neste link:

[Nível do Herói] (https://gio-fernandes.github.io/classificador-nivel-heroi/)

---

## Estrutura do Código:

- readline (Node.js): captura entradas do usuário no terminal.

- classificarHeroi: função que determina o nível do herói com base na XP.

- HTML/CSS: fornece interface web moderna, responsiva e interativa.

- script.js: lógica de classificação adaptada para o navegador, incluindo atalhos de teclado e manipulação de DOM.

---

## Melhorias futuras:

- Salvar histórico de classificações usando localStorage.

- Implementar tema claro/escuro.

- Adicionar animações e transições nos resultados.

- Permitir classificação de múltiplos heróis em tabela dinâmica.

- Melhorar UX com mensagens motivacionais por nível.

---

Se precisar de ajuda ou quiser contribuir, fique à vontade para abrir uma issue ou pull request. 😉

---

Feito com 💜 por Giovanna Fernandes.

[GitHub](https://github.com/gio-fernandes)
