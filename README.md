# Avaliação de restaurantes

## Índice

-   [Visão geral do projeto](#visão-geral-do-projeto)
-   [Especificações](#especificações)
-   [Requisitos](#requisitos)
-   [Instalar e executar](#instalar-e-executar)
-   [Recursos usado](#recursos-usado)

## Visão geral do projeto

Para os projetos do Avaliação de restaurantes, você vai converter gradualmente uma página da web estática em uma aplicação web pronta para dispositivos móveis. Na Fase 1, você vai converter um design estático que não oferece acessibilidade em um design que seja responsivo em telas de tamanhos diferentes e acessível para uso no leitor de tela. Além disso, você vai começar a convertê-lo em um aplicativo web progressivo (PWA) armazenando alguns ativos em cache para uso offline.

## Especificações

Você vai receber o código de um site de avaliação de restaurantes. O código tem vários problemas. Quase não dá para usar em um navegador de computador, que dirá em um dispositivo móvel. Além disso, ele não tem nenhum recurso de acessibilidade padrão e não funciona offline. Sua tarefa é modificar o código e resolver esses problemas mantendo sua funcionalidade original.

## Requisitos

Torne o site fornecido totalmente responsivo. Todos os elementos da página devem ser utilizáveis e estar visíveis em qualquer tamanho de tela, incluindo computador, tablet e outros dispositivos móveis. As imagens não devem se sobrepor, e os elementos da página devem se adaptar quando a tela é muito pequena para exibi-los lado a lado.

## Instalar e executar

Para executar o projeto basta fazer download ou clonar o projeto usando o git. Acesse o diretorio do projeto e executa o comando `npm i` para instalar as dependencias. Para rodar o projeto execute o comando `npm build`, feito isso abre o browser e acesse http://localhost:3001.

```sh
$ git clone https://github.com/jeanfsantos/mws-restaurant-stage-1.git
$ cd mws-restaurant-stage-1
$ npm i
$ npm run build
```

## Recursos usado

-   [leafletjs](https://leafletjs.com/) com [Mapbox](https://www.mapbox.com/) para renderizar o mapa.
-   [Eslint](https://eslint.org/) para controle da qualidade do código.
-   [Sass](https://sass-lang.com/) para estilizar a página e criar responsividade.
-   [Gulp](https://gulpjs.com/) para executar as tarefas de compilar o css, criar imagens responsivos.
