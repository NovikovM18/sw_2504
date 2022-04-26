import React, { useState } from 'react';


function Form({ addProduct }) {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [weight, setWeight] = useState('');
  // const [dimensions, setDimensions] = useState({});
  const [h, setH] = useState('');
  const [w, setW] = useState('');
  const [l, setL] = useState('');

  const clearInputs = () => {
    setType('');
    setName('');
    setPrice('');
    setSize('');
    setWeight('');
    // setDimensions({});
    setH('');
    setW('');
    setL('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addProduct(type, name, price, size, weight, h, w, l);
    clearInputs();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__field">
        <select
          name="type"
          required
          placeholder="type"
          className="form__input"
          value={type}
          onChange={event => setType(event.target.value)}
        >
          <option value="">Choose type</option>
          <option value="DVD">DVD</option>
          <option value="Book">Book</option>
          <option value="Furniture">Furniture</option>
        </select>
      </div>

      <div className="form__field">
        <input
          type="text"
          name="name"
          placeholder="name"
          className="form__input"
          required
          value={name}
          onChange={event => setName(event.target.value)}
        />  
      </div>

      <div className="form__field">
        <input
          type="number"
          name="price"
          placeholder="price"
          className="form__input"
          required
          value={price}
          onChange={event => setPrice(+event.target.value)}
        />  
      </div>

      {type === 'DVD' &&
        <input
          type="number"
          name="size"
          placeholder="size"
          className="form__input"
          required
          value={size}
          onChange={event => setSize(+event.target.value)}
        />
      }

      {type === 'Book' &&
        <input
          type="number"
          name="weight"
          placeholder="weight"
          className="form__input"
          required
          value={weight}
          onChange={event => setWeight(+event.target.value)}
        />
      }

      {type === 'Furniture' &&
        <>
          <input
            type="number"
            name="h"
            placeholder="h"
            className="form__input"
            required
            value={h}
            onChange={event => setH(+event.target.value)}
            />

          <input
            type="number"
            name="w"
            placeholder="w"
            className="form__input"
            required
            value={w}
            onChange={event => setW(+event.target.value)}
            />

          <input
            type="number"
            name="l"
            placeholder="l"
            className="form__input"
            required
            value={l}
            onChange={event => setL(+event.target.value)}
          />
        </>
      }
      <div className='form__bbox'>
        <button
          type="submit"
          className="form__button__save"
        >
          SAVE
        </button>

        <button
          type="button"
          className="form__button__cancel"
          onClick={clearInputs}
        >
          CANCEL
        </button>  
      </div>
    </form>
  );
};

export default Form;