import Styles from '../../styles/header.module.css'
import '../../styles/CssTransition.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faHome ,faList,faShoppingCart,faIdBadge,faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import { useState,useContext,useRef } from 'react';
import {CSSTransition} from 'react-transition-group';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export default function ConteinerHeader() {
    const [categoryMenu,setCategoryMenu] = useState(false);

    const {countBuys,countFavorites} = useContext(CartContext)
    const nodeRef = useRef(null)
    return(            
        <header>
            <div className={Styles.conteiner__header__first}>
                <TitleHeader/>
                <Search/>
                <UserAcount/>
            </div>
            <div className={Styles.conteiner__header__second}>
                <div className={Styles.item__1}>
                    <p>todo lo que buscás, está acá!</p>
                </div>
                <NavbarMenu setCategoryMenu={setCategoryMenu}/>
                <NavBarUser 
                    countFavorites = {countFavorites} 
                    countBuys={countBuys}
                />
                
                <CSSTransition
                    in = {categoryMenu}
                    ref={nodeRef}
                    timeout={500}
                    classNames={'navbar'}
                    unmountOnExit>
                    <NavBarCategories setCategoryMenu={setCategoryMenu}/>
                </CSSTransition>
                
                

            </div>
        </header>
   
    );
}
const TitleHeader = ()=>{
    return (
        <div className={Styles.title__header}>
            <h2>La Tiendita E-Commerce</h2>
        </div>
    );
}

const Search = ()=>{
    return (
        <div className={Styles.search}>
            <input type="text" placeholder='Buscar'/>
            <button className={Styles.button__search}><FontAwesomeIcon icon={faSearch} className={Styles.icon__search}/></button>
        </div>

    );
}

const UserAcount = ()=>{
    return (
        <div className={Styles.user__account}>
            <ul>
                <li>Registrarse</li>
                <li>Login</li>
            </ul>
        </div>
    );
}

const NavbarMenu = ({setCategoryMenu})=>{
    const show_menu = ()=>setCategoryMenu(true);

    return (
        <nav className={Styles.nav__menu}>

            <ul>
                <li className={Styles.navbar__item}>
                    <NavLink to="/home">
                        <FontAwesomeIcon icon={faHome} className={Styles.icon}/>
                            Home
                    </NavLink>
                </li>
                <li className={Styles.navbar__item}>
                    <span onClick={show_menu}>
                        <FontAwesomeIcon icon={faList} className={Styles.icon}/>
                            Categorías
                    </span>
                </li>
{/*                 <li className={Styles.navbar__item}>
                    <NavLink to="/offers">
                        <FontAwesomeIcon icon={faTags} className={Styles.icon}/>
                        Offers
                    </NavLink> 
                </li> */}
                <li  className={Styles.navbar__item}>
                    <NavLink to="/contact">
                        <FontAwesomeIcon icon={faIdBadge} className={Styles.icon}/>
                        Contacto
                    </NavLink>
                </li>
{/*                 <li className={Styles.navbar__item}>
                    <NavLink to="/help">
                        <FontAwesomeIcon icon={faQuestionCircle} className={Styles.icon}/>
                        Help
                    </NavLink>
                </li> */}
            </ul>
           
        </nav>
    )
}

const NavBarUser = ({countFavorites,countBuys})=>{
    return (
        <div className={Styles.user__item}>
            <ul className={Styles.nav__user}>
                <li>
                    <NavLink to="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} className={Styles.icon_user}/>
                        <span className={Styles.user__shopping}>
                            {countBuys ? countBuys : ''}
                        </span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

const NavBarCategories = ({setCategoryMenu})=>{

    const hidden_menu = ()=>setCategoryMenu(false);
    
    return (
        <div className={Styles.navbar__categories_background}>
            <div className={Styles.navbar__categories}>
                <div className={Styles.button__categories}>
                    <button onClick={hidden_menu}><FontAwesomeIcon icon={faTimesCircle}/></button>
                </div>
                <div className={Styles.title__navbar__categories}>
                    <h2>CATEGORÍAS</h2>
                </div>
                <ul>
                    <li>
                        <NavLink onClick={hidden_menu} to="category/computers">Computadoras</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={hidden_menu} to="category/cell-phones">Celulares</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={hidden_menu} to="category/tablets">Tablets</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={hidden_menu} to="category/tvs">Tv´s</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
