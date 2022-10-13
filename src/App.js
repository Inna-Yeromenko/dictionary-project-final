import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="missile" />
      </main>
      <footer className="App-footer">
        Coded by Inna Yeromenko and is{" "}
        <a href="https://github.com/Inna-Yeromenko/dictionary-project-final">
          open-sourced on Github
        </a>{" "}
        and{" "}
        <a href="https://lambent-longma-284093.netlify.app/">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
