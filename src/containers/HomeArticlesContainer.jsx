import React from "react";
import Article from "../components/Article";
import ent1 from "../image_resources/articles/ent1.jpg";

export default function HomeArticlesContainer({articlePics}) {
  return (
    <section id="home-articles" className="py-2">
      <div className="container">
        <h2>Editor's Pick</h2>
        <div className="articles-container">
          {articlePics.map( img => <Article img={img}/>)}
        </div>
      </div>
    </section>
  );
}
