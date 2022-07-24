import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu/index';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
// import SmoothScrollbar from './components/SmoothScrollbar';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />

        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
