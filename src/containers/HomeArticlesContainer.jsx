import React from 'react'
import Article from '../components/Article'
import ent1 from '../image_resources/articles/ent1.jpg'


export default function HomeArticlesContainer () {
  return(
    <section id="home-articles" className="py-2">
      <div className="container">
        <h2>Editor's Pick</h2>
      <div className="articles-container">
        <Article img={ent1}/>
      </div>
      </div>
    </section>
  )
}