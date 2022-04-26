import React, { useState } from 'react';
import { Route, Routes, NavLink } from "react-router-dom";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [products, setProducts] = useState([
    { id: 1,
      type: "DVD",
      name: "DVD-one",
      price: 13,
      size: 4700
    },
    {
      id: 2,
      type: "Book",
      name: "Book-one",
      price: 3,
      weight: 1700
    },
    {
      id: 3,
      type: "Furniture",
      name: "Furniture-one",
      price: 32,
      h: 12,
      w: 23,
      l: 6
    },
    {
      id: 4,
      type: "Furniture",
      name: "Furniture-two",
      price: 37,
      h: 17,
      w: 25,
      l: 16
    },
    {
      id: 5,
      type: "DVD",
      name: "DVD-two",
      price: 15,
      size: 4700
    },
    {
      id: 6,
      type: "DVD",
      name: "DVD-three",
      price: 24,
      size: 9700
    },
    {
      id: 7,
      type: "Book",
      name: "Book-two",
      price: 33,
      weight: 3700
    }
  ]);
  const [idForDel, setIdForDel] = useState([]);
  
  const addToMassDel = (id) => {
    if (idForDel.includes(id)) {
      setIdForDel(idForDel.filter(e => (e !== id)))
    } else {
      setIdForDel([...idForDel, id]);
    }
  };

  const massDel = () => {
    setProducts(products.filter(product => idForDel.indexOf(product.id) === -1));
  };

  const addProduct = (type, name, price, size, weight, h, w, l) => {
      const newPruduct = {
        id: Date.now(),
        type: type,
        name: name,
        price: price,
        size: size,
        weight: weight,
        h: h,
        w: w,
        l: l
      };
      setProducts([...products, newPruduct]);
  };

  return (
    <div className="App">
      <header className="header">
        <NavLink className="header__link" to="/">Product List</NavLink>
        <NavLink className="header__link" to="form">ADD</NavLink>
        <button className="header__button" onClick={massDel}>MASS DELETE</button>
      </header>

      <Routes>
        <Route path="form" element={<Form addProduct={addProduct}/>}/>
        <Route path="/" element={<List products={products} addToMassDel={addToMassDel}/>}/>
      </Routes>
    </div>
  );
}

export default App;
