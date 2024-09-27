import React from "react";
import Header from "../components/Header";
import ArticleInfo from "../components/ArticleInfo";
import TextBlock from "../components/TextBlock";
import imageWomanHeader from "../assets/image_woman_header.jpg";
import Quote from "../components/Quote";
import List from "../components/List";
import ImageWithCaption from "../components/ImageWithCaption";
import imagePrint from "../assets/image_print.png";
import TitleWithSubtitle from "../components/TitleWithSubtitle";
import BookList from "../components/BookList";
import ArticleCardList from '../components/ArticleCardList';
import TagsAndShare from '../components/TagsAndShare';

function HomePage() {
  const articleContent = `
    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
    e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de
    tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos,
    como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.
    Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum,
    e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
  `;

  const articleContentTwo = `
    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o 
    século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de 
    modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, 
    permanecendo essencialmente inalterado.
  `;

  const articleContentThree = `
    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o 
    século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de 
    modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, 
    permanecendo essencialmente inalterado.
  `;

  const quoteText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore dolore magna aliqua dollor sit amet aint.
  `;

  const listItems = [
    "Dollor sit amet abin coin said upper;",
    "Aint no sunfiun weri gasty non;",
    "Dollor sit amet abin coin said upper;",
    "Aint no sunfiun weri gasty non;",
    "Dollor sit amet abin coin said upper;",
    "Aint no sunfiun weri gasty non;",
    "Aint no sunfiun weri gasty non;",
    "Dollor sit amet abin coin said upper;",
    "Aint no sunfiun weri gasty non;",
    "Dollor sit amet abin coin said upper;",
  ];

  const articleLeft = [
    {
      title: "DESIGN BETTER. FASTER. TOGETHER.",
      description: "Lorem Ipsum é simplesmente uma pequena simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizada desde o século XVII amet dollor aint.",
      date: "02/SET/2024",
      readingTime: 7,
      likes: 37,
    },
    {
      title: "DESIGN BETTER. FASTER. TOGETHER.",
      description: "Lorem Ipsum é simplesmente uma pequena simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizada desde o século XVII amet dollor aint.",
      date: "02/SET/2024",
      readingTime: 7,
      likes: 37,
    },
  ];

  const articles = [
    {
      title: "DESIGN BETTER. FASTER. TOGETHER.",
      description: "Lorem Ipsum é simplesmente uma pequena simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizada desde o século XVII.",
      date: "01/SET/2024",
      readingTime: 7,
      likes: 37,
      imageUrl: imageWomanHeader, 
    },
    {
      title: "DESIGN BETTER. FASTER. TOGETHER.",
      description: "Lorem Ipsum é simplesmente uma pequena simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizada desde o século XVII.",
      date: "01/SET/2024",
      readingTime: 7,
      likes: 37,
      imageUrl: imageWomanHeader, 
    },
    {
      title: "DESIGN BETTER. FASTER. TOGETHER.",
      description: "Lorem Ipsum é simplesmente uma pequena simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizada desde o século XVII.",
      date: "01/SET/2024",
      readingTime: 7,
      likes: 37,
      imageUrl: imageWomanHeader, 
    },
    
  ];

  const tags = ["VENDAS", "APLICATIVO", "LEGISLAÇÃO"];
  const likes = 37;

  return (
    <div
      className="home-page"
      style={{
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header
        imageSrc={imageWomanHeader}
        imageAlt="Woman header image"
        mainText="DESIGN BETTER. FASTER. TOGETHER."
        mainTextColor="#2C2C2C"
        subText="The digital product design platform powering the world’s best user experiences"
        imageSize={60}
        imageStyle={{ border: "2px solid #ddd" }}
      />

      <ArticleInfo
        category="POR ONDE COMEÇAR"
        readingTime="7"
        date="01/SETEMBRO/2024"
        categoryLink="/iniciar"
        categoryColor="#1D72B8"
        categoryHoverColor="#104E7B"
      />

      <TextBlock content={articleContent} />
      <TextBlock content={articleContentTwo} />
      <Quote text={quoteText} />
      <TextBlock content={articleContentThree} />
      <List items={listItems} />
      <ImageWithCaption
        imageSrc={imagePrint}
        altText="Mini quadros feitos à mão"
        caption="MINI-QUADROS FEITOS À MÃO"
        source="NEW YORK TIMES"
        maxWidth="1000px"
      />
      <TitleWithSubtitle
        title="Aint oupt sain crays"
        subtitle="Lorem Ipsum é simplesmente uma  da indústria tipográfica e de impressos, e vem sendo utilizado desde o 
                  século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de 
                  modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos. Lorem Ipsum é simplesmente uma simulação de texto da 
                  indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI."
      />
      <BookList maxBooks={4} />
      <TitleWithSubtitle
        title="Ipsum dollor amet"
        subtitle="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos."
      />
      <ArticleCardList articles={articleLeft} defaultLayout="vertical" align="left" cardSize="large" />
      <TagsAndShare tags={tags} likes={likes} />
      <TitleWithSubtitle
        title=" Leia também..."
        align="center"
      />
      <ArticleCardList articles={articles} defaultLayout="horizontal" align="center" cardSize="small" />
      
    </div>
  );
}

export default HomePage;
