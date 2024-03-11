import React from 'react'

const Header = () => {
  return (
    <div id='app-container'>
    <header className='max-md:hidden flex flex-col border-solid border-[2px] border-light rounded-b-lg bg-primary p-5  text-left'>
        <div className='font-bold text-[24px] text-[white] leading-7'>
            GYIZER
        </div>
        <p className='text-extraLig ht  font-bold leading-5 text-base text-extraLight'>
            TODO APP
        </p>
    </header>
    </div>
  )
}

export default Header