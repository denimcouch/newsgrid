import React from "react";
import Article from "../components/Article";

export default function HomeArticlesContainer({ articlePics }) {

  const createArticles = () => {
    return articlePics.map((imgObj) => (
      <Article
        className="home-article"
        img={imgObj.img}
        category={imgObj.category}
      />
    ));
  };
  
  return (
    <section id="home-articles" className="py-2">
      <div className="container">
        <h2>Editor's Pick</h2>
        <div className="articles-container">{createArticles()}</div>
      </div>
    </section>
  );
}
