import { default as Navbar } from "./components/Navbar";
import { default as Card } from "./components/Card";
function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-center text-6xl mt-6 font-serif font-bold">Online Store</h1>
      <div className="flex justify-evenly flex-wrap mt-[5rem] gap-4">
      <Card name="Phone" para="Best Shoes in World" title="Adidas Shoes" desc="Best Shoes in World "/>
      <Card name="Phone" para="Best Shoes in World" title="Adidas Shoes" desc="Best Shoes in World "/>
      <Card name="Phone" para="Best Shoes in World" title="Adidas Shoes" desc="Best Shoes in World "/>
      </div>
    </>
  );
}

export default App;
