# Design Better. Faster. Together.

Este é um projeto de uma página web criada utilizando **React**, que apresenta artigos, listas e componentes altamente **dinâmicos** e **reutilizáveis**. O foco principal do projeto é oferecer uma interface visualmente atraente e **responsiva** para exibir informações sobre design de produtos digitais. A arquitetura do projeto foi planejada para ser **modular** e **completamente componentizada**, facilitando a manutenção e escalabilidade do código.

## Funcionalidades

- **Componentes Dinâmicos**: Cada seção da página é construída com componentes reutilizáveis que se adaptam facilmente a diferentes dados e contextos.
- **Interface Responsiva**: A interface é completamente responsiva, ajustando o layout e os tamanhos dos componentes com base no tamanho da tela.
- **Customização Simples**: A estrutura modular do projeto permite que novos componentes sejam facilmente adicionados e existentes sejam modificados ou estendidos.
- **Componentes de Layout Flexível**: Os componentes são estilizados de maneira flexível, podendo exibir conteúdos de maneira horizontal, vertical ou centralizada, dependendo do contexto.
- **Facilidade de Uso**: A arquitetura foi projetada para que desenvolvedores possam modificar o conteúdo de maneira simples e rápida, sem precisar alterar a estrutura principal do código.

## Estrutura do Projeto

Aqui está uma visão geral da estrutura do projeto, mostrando como os componentes e estilos estão organizados:

src/ │ ├── app/ │ ├── components/ # Contém todos os componentes reutilizáveis │ │ ├── ArticleCard.js # Componente de cartão de artigo dinâmico │ │ ├── ArticleCardList.js # Lista de cartões de artigos │ │ ├── ArticleInfo.js # Exibe informações sobre o artigo (categoria, tempo de leitura, etc.) │ │ ├── BookCard.js # Cartão de livros │ │ ├── BookList.js # Lista de livros │ │ ├── Header.js # Cabeçalho principal da página │ │ ├── ImageWithCaption.js # Componente de imagem com legenda e fonte │ │ ├── List.js # Lista reutilizável para exibição de itens │ │ ├── Quote.js # Exibe citações estilizadas │ │ ├── TagsAndShare.js # Exibe tags e opções de compartilhamento │ │ ├── TextBlock.js # Bloco de texto reutilizável │ │ ├── TitleWithSubtitle.js # Título com subtítulo dinâmico │ ├── pages/ # Páginas principais do projeto │ │ └── HomePage.js # Página principal que agrupa todos os componentes │ ├── styles/ # Arquivos de estilo CSS │ ├── articleCard.css # Estilos específicos para o componente de cartão de artigos │ ├── articleCardList.css # Estilos da lista de cartões de artigos │ ├── articleInfo.css # Estilos para informações do artigo │ ├── bookList.css # Estilos para a lista de livros │ ├── header.css # Estilos para o cabeçalho │ ├── homePage.css # Estilos gerais para a página inicial │ ├── imageWithCaption.css # Estilos para o componente de imagem com legenda │ ├── list.css # Estilos da lista genérica │ ├── quote.css # Estilos para citações │ ├── tagsAndShare.css # Estilos para o componente de tags e compartilhamento │ └── textBlock.css # Estilos para blocos de texto │ └── assets/ # Arquivos de mídia (imagens, etc.) └── image_woman_header.jpg # Imagem para o cabeçalho └── image_print.png # Imagem usada no componente ImageWithCaption


## Componentização

O projeto segue o princípio de **componentização** do React, onde cada parte da interface é dividida em componentes independentes e reutilizáveis. Isso permite que os componentes sejam usados em diferentes partes da aplicação com facilidade. Por exemplo:

- O **componente `ArticleCard`** exibe informações de artigos de forma dinâmica, aceitando propriedades (props) para mudar o título, descrição, data, e outras informações.
- O **componente `List`** é genérico e pode ser utilizado para exibir listas de itens, independentemente do conteúdo.
- O **componente `Header`** é completamente personalizável, permitindo a troca de imagens, textos e estilos de maneira simples.

## Customização

O projeto foi pensado para ser **customizado facilmente**. Desenvolvedores podem adicionar novos componentes ou modificar os existentes sem alterar a base do projeto, o que facilita a extensão de funcionalidades.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para a construção de interfaces de usuário.
- **CSS**/SCSS: Usado para estilização responsiva dos componentes.
- **PropTypes**: Para validação de props nos componentes React.
- **React Icons**: Para inclusão de ícones estilizados nos componentes.
