import "./App.css";
import Myimage from "./components/Myimage";
import ProductCard from "./components/ProductCard";
import Title from "./components/Title";
import product from "./product";

function App() {
  const productCards = product.map((product) => {
    return (
      <ProductCard
        name={product.name}
        price={product.price}
        img={product.image}
      />
    );
  });

  return (
    <div className="App">
      <Title />
      <Myimage />
      {productCards}
      {/* <ProductCard
        name={product[0].name}
        price={product[0].price}
        img={product[0].image}
      />
      <ProductCard
        name={product[1].name}
        price={product[1].price}
        img={product[1].image}
      /> */}
    </div>
  );
}

export default App;
