import "./App.css";
import HamburgerMenu from "./components/HamburgerMenu";

function App() {
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <HamburgerMenu />
      </header>
    </>
  );
}

export default App;
