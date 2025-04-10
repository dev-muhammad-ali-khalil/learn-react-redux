import React from 'react'
import ProductImage from '../assets/Product_Image.png'
import CartIcon from '../assets/Cart_Icon.png'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../services/actions/actions'
import SubHome from './SubHome'

const Home = (props) => {
    const products = [
        {
            id: 1,
            name: 'One Plus 10 Pro',
            price: '$899.00'
        },
        {
            id: 2,
            name: 'Samsung Galaxy S22',
            price: '$799.00'
        },
        {
            id: 3,
            name: 'iPhone 14 Pro',
            price: '$999.00'
        },
        {
            id: 4,
            name: 'Google Pixel 7',
            price: '$699.00'
        },
        {
            id: 5,
            name: 'Xiaomi Mi 12',
            price: '$649.00'
        }
    ];

    const dispatch = useDispatch()

    // const cardItemReducerValuesInHomeComponent = useSelector((state) => {
    //     return ({
    //         products: state.cardItems.cardData,
    //         totalProducts: state.cardItems.totalCount,
    //         totalPrice: state.cardItems.totalPrice
    //     })
    // })

    const addToCartButtonHandler = (item) => {
        // props.addToCartHandler(proData)
        dispatch(addToCart(item))
    }

    const removeFromCartButtonHandler = (itemID) => {
        // props.addToCartHandler(proData)
        dispatch(removeFromCart(itemID))
    }

    return (
        <div style={{ padding: '0px 30px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1><a href="/" style={{ color: '#D00000', textDecoration: 'none' }}>Amazon</a></h1>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}><img style={{ height: '35px' }} src={CartIcon} alt="Cart Icon" /></button>
            </div>
            <h2>Products</h2>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {
                        products.map((item) => (
                            <div key={item.id} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', border: '1px solid silver', width: '400px', boxSizing: 'border-box', padding: '5px 20px' }}>
                                <div>
                                    <img style={{ width: '80px' }} src={ProductImage} alt="One Plus" />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span>{item.name}</span>
                                    <span>Price: {item.price}</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                    <button style={{ backgroundColor: '#D00000', border: 'none', padding: '9px', borderRadius: '2px', boxShadow: '0px 0px 1px #D00000', color: '#ffffff', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => addToCartButtonHandler(item)}>Add To Cart</button>
                                    <button style={{ backgroundColor: '#673AB7', border: 'none', padding: '9px', borderRadius: '2px', boxShadow: '0px 0px 1px #673AB7', color: '#ffffff', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => removeFromCartButtonHandler(item.id)}>Remove From Cart</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <SubHome />
                </div>
            </div>

        </div>
    )
}

export default Home