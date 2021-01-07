import { useEffect } from "react";
import ArticleContent from "../components/ArticleContent";
import ArticleSideBar from "../components/ArticleSideBar";

export default function ArticleContainer(props) {
  
  // Removes current class from Home button
  useEffect(() => {
    const homeBtn = document.getElementById("home-nav-btn");
    homeBtn.className = ''
  }, []);

  return (
    <section id="article">
      <div className="container">
        <div className="page-container">
          <ArticleContent img={props.img} category={props.category} />
          <ArticleSideBar />
        </div>
      </div>
    </section>
  );
}
