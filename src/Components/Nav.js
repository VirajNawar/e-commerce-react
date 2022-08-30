import React from 'react'
import { HeartIcon, ShoppingCartIcon, StarIcon } from '@heroicons/react/solid';
import styles from './Card/styles.module.css';
import {useCart} from "react-use-cart"

function Nav(){

  const {
    isEmpty,
    totalItems,
  }= useCart()


  return (
    <div className="nav-container">
        <nav >
            <img src="logo512.png"   alt='logo'/>
        </nav>
        <div className="right-align">
        <button className={styles.favButton}>
                    <HeartIcon />
                </button>
                {/* <button className={styles.addToCartButton}> */}
                            <ShoppingCartIcon className={styles.shoppingCartIcon}></ShoppingCartIcon>
                            {!isEmpty && <span stylr={{position: 'relative', left: '-21px', top: '-18px'}}>{totalItems}</span>}
                            <span className={styles.buttonText} style={{ marginLeft: !isEmpty ? '-13px' : 0}}>Cart</span>
                        {/* </button>         */}
        </div>
    </div>
  )
}

export default Nav