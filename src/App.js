import NavBar from "./components/NavBar/navbar";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
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
    </div>
  );
}
export default App;