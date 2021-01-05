import React from "react";

export default function Article(props) {
  const cardBG = () => {
    if (props.index === 1) {
      return "card bg-dark"
    } else if (props.index === 5) {
      return "card bg-primary"
    } else {
      return "card"
    }
  }

  const readCategory = () => {
    switch (props.category) {
      case "entertainment":
        return "category category-ent";
      case "sports":
        return "category category-sports";
      case "technology":
        return "category category-tech";
      default:
        return "category";
    }
  };
  return (
    <article className={cardBG()}>
      {props.img === "" ? null : <img src={props.img} alt="" />}
      <div className="article-content">
        <div className={readCategory()}>{props.category}</div>
        <h3>
          <a href="#">Lorem ipsum dolor sit amet.</a>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, iusto.
          Voluptatem accusamus eum corrupti harum illo vero, rerum quidem omnis
          doloribus aperiam ipsam sit quae.
        </p>
      </div>
    </article>
  );
}
