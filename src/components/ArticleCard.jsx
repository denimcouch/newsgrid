import React from "react";
import { Link } from 'react-router-dom'

// conditionally renders background class
export const cardBG = (props) => {
  if (props.index === 1) {
    return "card bg-dark";
  } else if (props.index === 5) {
    return "card bg-primary";
  } else {
    return "card";
  }
};

// conditionally renders article's category
export const readCategory = (props) => {
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

export default function Article(props) {
  const {img, category} = props
  return (
    <article id={`article-${props.id + 1}`} className={cardBG(props)}>
      {props.img === "" ? null : <img src={props.img} alt="" />}
      <div className="article-content">
        <div className={readCategory(props)}>{props.category}</div>
        <Link to='/article'><h3 onClick={() => props.getArticleInfo(img, category)}>
          Lorem ipsum dolor sit amet.
        </h3></Link>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, iusto.
          Voluptatem accusamus eum corrupti harum illo vero, rerum quidem omnis
          doloribus aperiam ipsam sit quae.
        </p>
      </div>
    </article>
  );
}
