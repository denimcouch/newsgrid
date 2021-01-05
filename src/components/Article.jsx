import React from 'react'

export default function Article (props) {
  const readCategory = () => {
    switch (props.category) {
      case 'entertainment':
        return "category category-ent";
      case 'sports':
        return "category category-sports";
      case 'technology':
        return "category category-tech";
      default:
        return "category"
    }
  }
  return (
    <article className="card">
      <img src={props.img} alt=""/>
      <div className={readCategory()}>{props.category}</div>
      <h3>
        <a href="#">Lorem ipsum dolor sit amet.</a>
      </h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, iusto. Voluptatem accusamus eum corrupti harum illo vero, rerum quidem omnis doloribus aperiam ipsam sit quae.</p>
    </article>
  )
}