import React from 'react'

const CartItems = ({data}) => {
const{image ,category ,title}= data;
let titles = title.slice(0,25)+"...";
  return (
    <div className='flex flex-col justify-center items-center  border-2 relative rounded-2xl '
   >
            <div class="absolute -inset-px bg-gradient-to-r from-yellow-400 to-pink-400 rounded-2xl" aria-hidden="true"></div>
        <div class="absolute inset-0 bg-zinc-900 rounded-2xl" aria-hidden="true"></div>
        <div className='z-10 flex flex-col justify-center items-center p-8' >
        <div>
        <img className='h-[100px] mb-2' src={image}/>
      </div>
      <div>
      <p className="text-blue-400 mb-2 text-xl font-bold">{category}</p>
      </div>
      <div>
      <p className="text-blue-400">{titles}</p>
      </div>
        </div>
          
     
   
    </div>
  )
}

export default CartItems