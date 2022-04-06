
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import ArticleList from './pages/ArticleList';
import NotFound from "./pages/NotFound";

import NavBar from './component/NavBar'
 
function App() {
  return (
    <Router>
      <NavBar/>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/article/:name" element={<Article/>} />
          <Route exact path="/article-list" element={<ArticleList/>} />
          <Route element={<NotFound/>} />
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;
