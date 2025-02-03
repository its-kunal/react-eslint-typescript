import EslintSVG from "@/assets/eslint.svg";
import ReactSVG from "@/assets/react-svg.svg";

function App() {
  return (
    <div className="main">
      <div className="support-main">
        <div className="container">
          <img src={EslintSVG} alt="" className="rotating" />
          <h2>Eslint</h2>
        </div>
        <div className="container">
          <img src={ReactSVG} alt="" className="rotating" />
          <h2>React</h2>
        </div>
      </div>
      <div className="support-main">
        <p>This is a react, typescript, vite, and eslint starter template.</p>
      </div>
    </div>
  );
}

export default App;
