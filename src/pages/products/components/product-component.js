import React, {useContext, useState} from 'react';
import style from '../styles/product.module.css'
import NavContext from '../../../context/NavContext';
import ValueUtil from '../../../core/util/value-util'

function ProductItem({produto}) {
    const [count, setCount] = useState(0)
    const {setBasket} = useContext(NavContext)

    /*
        Produtos na venda
            Produto amount = 1
            Produto amount = 2
            Produto amount = 3

            




    */


    const incrementUnidade = (produto) => {
        setCount((count) => count + 1)
        setBasket((basket) => basket + 1)
    }

    const decreasedUnidade = (produto) => {
        if(count != 0) {
            setCount((count) => count - 1)
            setBasket((basket) => basket - 1)
        }
    }

    return (
        <li className={style.product}>
            <div>
                
                <img src={produto.img_path}></img>
                
                <h3>{produto.name}</h3>
                <text className={style.price}>{ValueUtil.formatPrice(produto.price)}</text>
                <p>
                    {produto.description}
                </p>
                
                <div className={style.divButtons}>
                    <button className={style.buttonIncreasedDecreased}  type='button' onClick={decreasedUnidade}>-</button>
                    <span>{produto.amount}</span>
                    <button className={style.buttonIncreasedDecreased} type='button' onClick={incrementUnidade}>+</button>
                </div>
            </div>
        </li>
    );
}

export default ProductItem;