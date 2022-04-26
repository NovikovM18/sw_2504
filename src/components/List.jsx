import React from 'react';

function List({ products, addToMassDel }) {
  return (
    <div className='products'>
        <ul className='products__list'>
          {products.map(product => (
            <li className='products__item'
                key={product.id}
            >
              <label className='products__check'>
                <input
                  className='products__check__in'
                  type='checkbox'
                  name=''
                  onChange={() => addToMassDel(product.id)}
                />
                Select product</label>
              <div className='products__details'>
                <p className='products__details__item'>TYPE: {product.type}</p>
                <p className='products__details__item'>NAME: {product.name}</p>
                <p className='products__details__item'>PRICE: {product.price}$</p>
                {product.type === 'DVD' && <p className='products__details__item'>SIZE: {product.size}Mb</p>}
                {product.type === 'Book' && <p className='products__details__item'>WEIGHT: {product.weight}kg</p>}
                {product.type === 'Furniture' && <p className='products__details__item'>H:{product.h}mm W:{product.w}mm L:{product.l}mm</p>}
              </div>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default List;