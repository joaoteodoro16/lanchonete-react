import React, { useState } from 'react';
import style from '../styles/filter.module.css'

function FilterProducts() {
    const setores = ['Lanches', 'Bebidas', 'Sobremesas', 'Pastéis', 'Sucos Naturais']
    const [setorSelecionado, setSetor] = useState('Lanches')

    const selecionaSetor = (setor) => {
        setSetor(setor)
    }

    return (
        <>
            <div className={style.filterContainer}>
                <ol className={style.setores}>
                    {
                        setores.map((setor) => <li onClick={() => selecionaSetor(setor)} className={setor === setorSelecionado ? style.setorSelecionado : style.setor} key={setor}>{setor}</li>)
                    }
                </ol>
                <label className={style.pesquisar}>Pesquisar
                    <input className={style.pesquisarInput} type="text" />
                </label>
            </div>
        </>
    );
}

export default FilterProducts;