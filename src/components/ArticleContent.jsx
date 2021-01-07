import React from "react";
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {readCategory} from '../components/ArticleCard'

const AboutInfo = (props) => {
  return (
    <article className="card">
      <img src={props.img} alt=""/>
      <h1 className="l-heading">Lorem ipsum dolor sit amet.</h1>
      <div className="meta">
        <small>
          <FontAwesomeIcon icon={faUser}/> Written By John Doe January 6, 2021
        </small>
        <div className={readCategory(props)}>{props.category}</div>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        quae saepe eveniet tenetur repudiandae corrupti sapiente aliquid, ab
        velit iste modi voluptatum mollitia quod voluptate harum repellat
        recusandae officia architecto consequuntur similique sunt nisi? Vel
        asperiores tenetur rem, iste, adipisci commodi iusto amet autem
        blanditiis sapiente, tempora nulla perferendis ducimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
        porro, fugit ipsum odio minus voluptatibus? Optio minus quod impedit
        consectetur animi facere tempore! Accusantium similique tempora
        consectetur repellendus optio? Sed sunt harum dolor laudantium
        blanditiis tenetur facilis autem explicabo voluptatum provident dicta
        consequuntur omnis quas non consectetur sapiente, at, eligendi
        temporibus neque, veniam vero libero asperiores! Adipisci molestiae
        tenetur temporibus nulla inventore impedit labore odio. Natus ad itaque
        tenetur consectetur est tempore optio magni unde corrupti quisquam totam
        voluptates, odio, iusto inventore dolorem sed nesciunt repudiandae quod
        alias repellat quia laboriosam dignissimos doloribus. Laudantium
        repellat sapiente asperiores, iste deserunt eum cumque ea laborum quasi
        eveniet harum eligendi tempora a neque tenetur unde alias adipisci illo
        vitae repellendus? Ex, repellat! Inventore aperiam natus blanditiis
        suscipit ex qui iusto explicabo consequatur, voluptas fugit tempora
        laboriosam ipsum reprehenderit tempore! Nostrum molestiae rerum,
        corrupti inventore magnam fuga amet quia. Et atque voluptatum eos
        consequatur.
      </p>
    </article>
  );
};

export default AboutInfo;
