import "./styles.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <h2 id="headline">
        The One-Stop Solution to solve your frontend crisis.
      </h2>
      <div id="button_layer">
        <button className="et-button">Check GitHub</button>
        <button className="et-button-secondary">Join Our Community</button>
      </div>

      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}
