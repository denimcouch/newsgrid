import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArticleSideBar = () => {
  return (
    <>
      <aside id="categories" className="card">
        <h2>Categories</h2>
        <ul className="list">
          <li>
            <a href="#categories">
              <FontAwesomeIcon icon={faChevronRight} /> Sports
            </a>
          </li>
          <li>
            <a href="#categories">
              <FontAwesomeIcon icon={faChevronRight} /> Entertainment
            </a>
          </li>
          <li>
            <a href="#categories">
              <FontAwesomeIcon icon={faChevronRight} /> Technology
            </a>
          </li>
          <li>
            <a href="#categories">
              <FontAwesomeIcon icon={faChevronRight} /> Fashion
            </a>
          </li>
        </ul>
      </aside>
      <aside className="card bg-secondary">
        <h2>Join Our Club</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, odit.
        </p>
        <a href="#categories" className="btn btn-dark btn-block">
          Join Now
        </a>
      </aside>
    </>
  );
};

export default ArticleSideBar;
