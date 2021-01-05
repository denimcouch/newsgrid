import React from 'react'

export default function Article (props) {
  return (
    <article className="card">
      <img src={props.img} alt=""/>
      <div className="category category-ent">Entertainment</div>
      <h3>
        <a href="#">Lorem ipsum dolor sit amet.</a>
      </h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, iusto. Voluptatem accusamus eum corrupti harum illo vero, rerum quidem omnis doloribus aperiam ipsam sit quae.</p>
    </article>
  )
}