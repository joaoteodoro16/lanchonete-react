import React, { useEffect, useState } from 'react';
import style from '../products/styles/styles.module.css'
import ProductItem from './components/product-component';
import ProdutoService from '../../services/produto-service'
import FilterProducts from './components/filter-product'

function Products() {
    const [produtos, setProdutos] = useState([]);
    const [listaBase, setListaBase] = useState([])
    const [produtosNaVenda, setProdutosNaVenda] = useState([])

    const filterProducts = (setor, name = '') => {
        let filtrado = []
        if(name === ''){
            console.log(setor)
            console.log(listaBase)

            filtrado = listaBase.filter(produto => produto.sector === setor)
            setProdutos(filtrado)
        }else{
            filtrado = listaBase.filter(produto => produto.sector === setor && produto.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
            setProdutos(filtrado)
        }
    }
    
    useEffect(() => {
        const produtosService = new ProdutoService();
        produtosService.getProducts().then((produtos) => {
            setProdutos(produtos)
            setListaBase(produtos)
            filterProducts(1)
        })
    }, []);

    return (
        <div className={style.product_container_wrapper}>
            <div className={style.product_container}>
                <h1 className={style.title}>Produtos</h1>
                <FilterProducts filterProducts={filterProducts}/>
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