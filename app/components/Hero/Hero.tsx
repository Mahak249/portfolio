import React from 'react'

const Hero = () => {
  return (
    <section id='home' className='bg-lime-300 text-center p-16'>
<div className='container mx-auto'>
<h2 className=' text-2xl  font-bold mb-4 text-white hover:text-lime-600 font-serif'>
        My Name Is Mehak Rehman
    </h2>
    <h2 className=' text-2xl  font-bold mb-4 text-white hover:text-lime-600 font-serif'>
        WELCOME TO MY PORTFOLIO
    </h2>
    
    <p className='text-white mb-6 font-semibold '>
"Hi, I live in karachi. recently i complete my graduation in B.COM.
I'm intereste in leaning about new computer skills .
  I'm a passionate web developer and i also work in other computer feild and
 i also know about  some E-Commerce market  like Amazon and DARAZ"




    </p>
    <button className=" bg-lime-300 text-white py-3 px-6 rounded-full hover:bg-lime-600 transition
          duration-300 ">
        learn more
    </button>


</div>

    </section>
  )
}

export default Hero