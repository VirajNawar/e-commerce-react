import Card from '../../Components/Card';
import React, { useContext } from 'react'
import { useProduct } from '../../Context/ProductContext'
import styles from './styles.module.css';
import { useCart } from "react-use-cart";

const Products = (props) => {
    
    let {image , price, title} = props.data
    const {productList, loading} = useProduct();
    const { addItem } = useCart()

    const addToCart = () =>{
        addItem(props.data)
    }

    // console.log(productList);

  return (
    <div className={styles.cardGroup}>
        {
            !loading ? (
                productList?.map((item)=>{
                    return (
                        <Card item={item}/>
                    )
                })
            ) : (<h1>loading......</h1>)
        }
    </div>
  )
}

export default Products