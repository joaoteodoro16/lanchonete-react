import React, { useContext, useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import style from './style.module.css'
import basketImg from '../../core/assets/cesta.png'
import NavContext from '../../context/NavContext';

function NavBar() {
    const {basket} = useContext(NavContext)

    return (
        <>
            <nav className={style.nav_bar}>
                <div className={style.navContent}>
                    <div className={style.logoContainer}>
                        <Link className={style.nav_link} to="/"><img className={style.logo} src='https://i.pinimg.com/originals/63/1e/f6/631ef682e36234fde02144c1985fed9b.png'></img></Link>
                        
                        <ul>
                            <li><Link className={style.nav_link} to="/">Home</Link></li>
                            <li><Link className={style.nav_link} to="/products">Produtos</Link></li>
                        </ul>
                    </div>

                    <div className={style.basketContainer}>
                        <img className={style.basket} src={basketImg}></img>
                        <span className={style.countItens}>{basket}</span>
                    </div>

                </div>
            </nav>

            <Outlet />
        </>
    );
}

export default NavBar;