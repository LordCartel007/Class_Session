import HeroSection from "./component/HeroSection";
import NarBar from "./component/NavBar";
import Product from "./component/Product1";
function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>This is a paragraph</p>
      <NarBar class={"nav-items"} />
      <HeroSection
        name={"Lawerence"}
        department={"software development"}
        age={23}
      />
      <Product />
    </div>
  );
}

export default App;
