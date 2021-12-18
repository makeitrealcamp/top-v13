import { useState } from 'react';
import './App.scss';
import FilterAndSort from './components/FilterAndSort';
import Product from './components/Product.jsx';
import productsMock from './products.json';

const filterAndSort = (products, color) => {
  return {
    menorAMayor() {
      return [...products].sort((a, b) => a.price - b.price);
    },
    mayorAMenor() {
      return [...products].sort((a, b) => b.price - a.price);
    },
    limpiar() {
      return productsMock;
    },
    porColor() {
      if (color === 'all') {
        return this.limpiar();
      } else {
        return productsMock.filter(product => product.color === color);
      }
    },
  };
};

const App = () => {
  // hook utilizado useState
  const [products, setProducts] = useState(productsMock);

  const filterOrSort = (type, color = '') => {
    const filteredProducts = filterAndSort(products, color)[type]();
    setProducts(filteredProducts);
  };

  return (
    <div id="app">
      <FilterAndSort onFilterChange={filterOrSort} />
      <div className="productsContainer">
        {products.map(product => (
          <Product product={product} key={product.name.replace(' ', '')} />
        ))}
      </div>
    </div>
  );
};

export default App;
