import { useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import ShowcaseHeader from "../components/ShowcaseHeader";

export default function HomeContainer({ articlePics, getArticleInfo }) {

  const createArticleCards = () => {
    return articlePics.map((imgObj, index) => (
      <ArticleCard
        key={index + 1}
        id={index}
        img={imgObj.img}
        category={imgObj.category}
        getArticleInfo={getArticleInfo}
      />
    ));
  };

  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  return (
    <main>
      <ShowcaseHeader />
      <section id="home-articles" className="py-2">
        <div className="container">
          <h2>Editor's Pick</h2>
          <div className="articles-container">{createArticleCards()}</div>
        </div>
      </section>
    </main>
  );
}
