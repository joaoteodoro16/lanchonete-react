import React, { useState } from 'react';
import style from '../styles/filter.module.css'

function FilterProducts({filterProducts}) {
    const setores = [
        {id: 1, setor: "Lanches"},
        {id: 2, setor: "Bebidas"},
        {id: 3, setor: "Sobremesas"},
        {id: 4, setor: "Pastéis"},
    ]
    const [setorSelecionado, setSetor] = useState(1)
    const [nameFilter, setNameFilter] = useState('')

    const filter = (setor) => {
        setSetor(setor.id)
        filterProducts(setor.id)
    }

    const handleNameChange = (event) => {
        const name = event.target.value;
        setNameFilter(name);
        filterProducts(setorSelecionado, name);
    };

    return (
        <>
            <div className={style.filterContainer}>
                <ol className={style.setores}>
                    {
                        setores.map((setor) => <li onClick={() => filter(setor)} className={setor.id === setorSelecionado ? style.setorSelecionado : style.setor} key={setor.id}>{setor.setor}</li>)
                    }
                </ol>
                <label className={style.pesquisar}>Pesquisar
                    <input value={nameFilter} placeholder='Pesquisar por nome' onChange={handleNameChange} className={style.pesquisarInput} type="text" />
                </label>
            </div>
        </>
    );
}

export default FilterProducts;