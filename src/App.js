import NavBar from "./components/NavBar/navbar";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="home">
        <Intro />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}
export default App;