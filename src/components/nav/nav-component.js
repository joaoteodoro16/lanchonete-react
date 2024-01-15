import React from 'react';
import { Outlet, Link } from "react-router-dom";
import style from './style/style.module.css'

function NavBar() {
    return (
        <>
            <nav className={style.nav_bar}>
                <div className={style.navContent}>
                    <Link className={style.nav_link} to="/"><img className={style.logo} src='https://i.pinimg.com/originals/63/1e/f6/631ef682e36234fde02144c1985fed9b.png'></img></Link>
                    
                    <ul>
                        <li><Link className={style.nav_link} to="/">Home</Link></li>
                        <li><Link className={style.nav_link} to="/products">Produtos</Link></li>
                    </ul>
                </div>
            </nav>

            <Outlet />
        </>
    );
}

export default NavBar;