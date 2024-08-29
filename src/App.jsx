import { default as Button } from "./components/Button";
import { default as Navbar } from "./components/Navbar";
import { default as Card } from "./components/Card";
function App() {
  return (
    <>
      <Navbar />
      {/* <Button title="click" />
      <Button title="login" />
      <Button title="Todo" /> */}
      <h1 className="text-center text-6xl mt-6 font-serif font-bold">Online Store</h1>
      <div className="flex justify-evenly flex-wrap mt-[5rem] gap-4">
      <Card name="Jhooty" para="saddar se laya hun bhai"/>
      <Card name="Jhooty" para="saddar se laya hun bhai"/>
      <Card name="Jhooty" para="saddar se laya hun bhai"/>
      </div>
    </>
  );
}

export default App;
