import React from 'react'
import { useSelector } from 'react-redux'

const SubHome = () => {
    const productList = useSelector(state => state.cardItems)

    return (
        <div style={{ border: '1px solid silver', padding: '20px 20px', width: '350px' }}>
            <h2>Cart Items</h2>
            <div>
                Total Items: {productList.totalCount}
            </div>
            <div>
                Total Price: {productList.totalPrice}
            </div>
            <div>
                Selected Item:
                {
                    productList.cardData.map((item) => (
                        <div key={item.id}>
                            {
                                `Name: ${item.name} | Price: ${item.price}`
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SubHome