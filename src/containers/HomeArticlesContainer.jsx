import React from "react";
import Article from "../components/Article";

export default function HomeArticlesContainer({articlePics}) {
  return (
    <section id="home-articles" className="py-2">
      <div className="container">
        <h2>Editor's Pick</h2>
        <div className="articles-container">
          {articlePics.map( imgObj => <Article img={imgObj.img} category={imgObj.category}/>)}
        </div>
      </div>
    </section>
  );
}
