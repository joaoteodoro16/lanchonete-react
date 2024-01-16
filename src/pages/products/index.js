import React, { useEffect, useState } from 'react';
import style from '../products/styles/styles.module.css'
import ProductItem from './components/product-component';
import ProdutoService from '../../services/produto-service'
import FilterProducts from './components/filter-product'

function Products() {
    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        const produtosService = new ProdutoService();
        produtosService.getProducts().then((produtos) => setProdutos(produtos))
    }, []);

    return (
        <div className={style.product_container_wrapper}>
            <div className={style.product_container}>
                <h1 className={style.title}>Produtos</h1>
                <FilterProducts/>
                <ol className={style.products}>
                    {produtos.map((produto) => (
                        <ProductItem key={produto.id} produto={produto} />
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default Products;