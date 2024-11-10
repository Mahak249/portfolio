import React from 'react'

const Header = () => {
  return (
    
<header className=" bg-lime-300 text-white  p-4 ">
<div className="container mx-auto flex justify-between ">
<h1 className="font-extrabold font-serif text-2xl text-white hover:text-lime-600">
    MY PORTFOLIO
</h1>
<ul className='flex space-x-4'>
<li>
    <a href='Home' className='hover underline font-bold font-serif text-white hover:text-lime-600'>
HOME
    </a>
</li>

<li>
    <a href='Skill' className='hover underline font-bold font-serif text-white hover:text-lime-600'>
        SKILL
    </a>
</li>
<li>
    <a href='Contact' className='hover underline font-bold font-serif text-white hover:text-lime-600'>
CONTACT
    </a>
</li>
</ul>

</div>



</header>


  )
}

export default Header