import React, { useState } from 'react';
import style from '../styles/product.module.css'

function ProductItem({produto}) {

    const [count, setCount] = useState(0)

    const incrementUnidade = () => {
        setCount((count) => count + 1)
    }

    const decreasedUnidade = () => {
        if(count != 0) {
            setCount((count) => count - 1)
        }
    }

    const formatPrice = (price) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(price);
    };

    return (
        <li className={style.product}>
            <div>
                
                <img src={produto.img_path}></img>
                
                <h3>{produto.name}</h3>
                <text className={style.price}>{formatPrice(produto.price)}</text>
                <p>
                    {produto.description}
                </p>
                
                <div className={style.divButtons}>
                    <button className={style.buttonIncreasedDecreased}  type='button' onClick={decreasedUnidade}>-</button>
                    <span>{count}</span>
                    <button className={style.buttonIncreasedDecreased} type='button' onClick={incrementUnidade}>+</button>
                </div>
            </div>
        </li>
    );
}

export default ProductItem;