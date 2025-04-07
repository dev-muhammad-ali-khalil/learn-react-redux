import React from 'react'
import ProductImage from '../assets/Product_Image.png'
import CartIcon from '../assets/Cart_Icon.png'

const Home = () => {
    return (
        <div style={{ padding: '0px 30px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ color: '#D00000' }}>Amazon</h1>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}><img style={{ height: '35px' }} src={CartIcon} alt="Cart Icon" /></button>
            </div>
            <h2>Products</h2>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', border: '1px solid silver', width: '400px', boxSizing: 'border-box', padding: '5px 20px' }}>
                <div>
                    <img style={{ width: '80px' }} src={ProductImage} alt="One Plus" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span>One Plus</span>
                    <span>Price: $899.00</span>
                </div>
                <div>
                    <button style={{ backgroundColor: '#D00000', border: 'none', padding: '9px', borderRadius: '2px', boxShadow: '0px 0px 1px #D00000', color: '#ffffff', fontWeight: 'bold', cursor: 'pointer' }}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home