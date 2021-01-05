import './App.css';
import NavBar from './components/NavBar'
import ShowcaseHeader from './components/ShowcaseHeader'
import HomeArticlesContainer from './containers/HomeArticlesContainer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import ent1 from "./image_resources/articles/ent1.jpg";
import ent2 from "./image_resources/articles/ent2.jpg";
import sports1 from "./image_resources/articles/sports1.jpg";
import tech1 from "./image_resources/articles/tech1.jpg";
import tech2 from "./image_resources/articles/tech2.jpg";

library.add(fab)

function App() {
  const articlePics = [ent1, ent2, sports1, tech1, tech2]
  return (
    <div className="app">
      <NavBar />
      <ShowcaseHeader />
      <HomeArticlesContainer articlePics={articlePics} />
    </div>
  );
}

export default App;
