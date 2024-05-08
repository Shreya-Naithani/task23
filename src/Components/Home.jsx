import data from '../data';
import Cart from '../Components/Cart';

function App() {


  return (

    <div className='bg-black mt-0'>
      <p className='text-center text-blue-400 text-3xl py-12'>All Cards are here</p>
<div className='flex justify-center items-center '>
    <Cart data ={data}/>
    </div>
    </div>
    
  )
}

export default App
