import './App.css';
import NavBar from './components/NavBar'
import ShowcaseHeader from './components/ShowcaseHeader'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function App() {
  return (
    <div className="app">
      <NavBar />
      <ShowcaseHeader />
    </div>
  );
}

export default App;
