// React and React Router
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Styling
import "./App.css";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Article Photos
import ent1 from "./image_resources/articles/ent1.jpg";
import ent2 from "./image_resources/articles/ent2.jpg";
import sports1 from "./image_resources/articles/sports1.jpg";
import tech1 from "./image_resources/articles/tech1.jpg";
import tech2 from "./image_resources/articles/tech2.jpg";

// Components
import NavBar from "./components/NavBar";
import HomeContainer from "./containers/HomeContainer";
import AboutPageContainer from "./containers/AboutPageContainer";
import FooterContainer from "./containers/FooterContainer";

library.add(fab);

function App() {
  const articlePics = [
    {
      img: ent1,
      category: "entertainment",
    },
    {
      img: "",
      category: "sports",
    },
    {
      img: ent2,
      category: "entertainment",
    },
    {
      img: sports1,
      category: "sports",
    },
    {
      img: tech1,
      category: "technology",
    },
    {
      img: "",
      category: "sports",
    },
    {
      img: tech2,
      category: "technology",
    },
  ];
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => (
              <HomeContainer articlePics={articlePics} />
            )}
          />
          <Route path="/about" component={AboutPageContainer} />
        </Switch>
        <FooterContainer />
      </div>
    </Router>
  );
}

export default App;
