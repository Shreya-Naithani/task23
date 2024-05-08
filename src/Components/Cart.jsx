import React from 'react'
import CartItems from './CartItems'

const Cart = ({data}) => {
  
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-[8rem] mt-10'>
      {
        data.length >0 ? (
            data.map((item)=>(
                <CartItems key={item.id} data={item}/>
            ))
        ) : (<div> No Data found </div>)
      }
    </div>
  )
}

export default Cart
