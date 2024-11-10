import React from 'react'

const Contact = () => {
  return (
   <section  id="contact" className='bg-lime-300 text-center p-16'>
<div className="container mx-auto ">  
<h2 className='font-bold mb-4 text-3xl text-white font-serif hover:text-lime-600'> CONTACT ME</h2>
<p className='mb-6 text-white'>
Feel free to reach out if you'd like to connect or have any questions .
</p>
<form className=' flex flex-col items-center'>


<input type= "email"  placeholder=' ENTER YOUR EMAIL'  className='p-2 mb-4 border-black rounded-full w-1/5'/>
<textarea placeholder=' HERE YOUR TEXT' className='p-2 mb-4 border-black rounded-full w-1/3'></textarea>
<button className='bg-lime-300 text-white py-3 px-6 rounded-full hover:bg-lime-600 transition
          duration-300 '>Submit</button>
          </form>
          </div>
   </section>
  )
};

export default Contact;